"use client";
import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const normalizeIndianMobile = (value = '') => value.replace(/\D/g, '');

const isValidIndianMobile = (value) => {
  let digits = normalizeIndianMobile(value);

  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  return /^[6-9]\d{9}$/.test(digits);
};

const formatName = (value) =>
  value
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trimStart()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', course: '', location: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const validateField = (field, value) => {
    const trimmedValue = value.trim();

    if (field === 'name' && !trimmedValue) return 'Full name is required.';
    if (field === 'email') {
      if (!trimmedValue) return 'Email address is required.';
      if (!EMAIL_REGEX.test(trimmedValue)) return 'Enter a valid email address.';
    }
    if (field === 'course' && !trimmedValue) return 'Please select a course.';
    if (field === 'location' && !trimmedValue) return 'Please select a preferred location.';
    if (field === 'phone') {
      if (!trimmedValue) return 'Mobile number is required.';
      if (!isValidIndianMobile(trimmedValue)) return 'Enter a valid Indian mobile number.';
    }

    return '';
  };

  const validateForm = () => {
    const nextErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      course: validateField('course', formData.course),
      location: validateField('location', formData.location),
    };

    return Object.fromEntries(
      Object.entries(nextErrors).filter(([, value]) => value)
    );
  };

  const isFormReady = [
    'name',
    'phone',
    'email',
    'course',
    'location',
  ].every((field) => !validateField(field, formData[field]));
  const isSubmitting = status === 'loading';
  const isButtonDisabled = isSubmitting || !isFormReady;

  const handleChange = (e) => {
    const { id, value } = e.target;
    const nextValue = id === 'phone'
      ? value.replace(/\D/g, '').slice(0, 10)
      : id === 'name'
        ? formatName(value)
        : value;

    setFormData((prev) => ({ ...prev, [id]: nextValue }));
    setFieldErrors((prev) => {
      if (!prev[id]) return prev;

      const nextError = validateField(id, nextValue);
      if (!nextError) {
        const { [id]: _removed, ...rest } = prev;
        return rest;
      }

      return { ...prev, [id]: nextError };
    });
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    const normalizedValue = id === 'name' ? formatName(value).trim() : value;
    const nextError = validateField(id, normalizedValue);

    if (id === 'name' && normalizedValue !== value) {
      setFormData((prev) => ({ ...prev, name: normalizedValue }));
    }

    setFieldErrors((prev) => {
      if (!nextError) {
        const { [id]: _removed, ...rest } = prev;
        return rest;
      }

      return { ...prev, [id]: nextError };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setStatus('error');
      setErrorMsg('Please correct the highlighted fields and try again.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');
    setFieldErrors({});

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', course: '', location: '' });
        setFieldErrors({});
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="register" className="py-20 bg-blue-50 relative">
      <div className="container">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side - Info */}
          <div className="lg:w-2/5 bg-gradient-to-br from-blue-800 to-blue-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-20 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Take the First Step</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Register now to get free expert counseling. Our admission experts will guide you to choose the right college and secure your seat.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['100% Free Counseling', 'Direct College Admission', 'Scholarship Assistance'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-accent">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative z-10 mt-8 pt-8 border-t border-blue-700/50">
              <p className="text-sm text-blue-200 mb-2">Have urgent questions?</p>
              <p className="text-xl font-bold text-accent">+91 98470 82999</p>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="lg:w-3/5 p-10 lg:p-12">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#0A1F44' }}>Quick Registration</h3>

            {/* Success State */}
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                  <FiCheckCircle className="text-green-500 text-5xl" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">Registration Successful!</h4>
                <p className="text-gray-500 max-w-xs">
                  Thank you! Our team will contact you within 24 hours to guide you through the admission process.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded-lg font-semibold text-sm text-white"
                  style={{ background: '#1E5ADC' }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Error Banner */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-red-700 bg-red-50 border border-red-200">
                    <FiAlertCircle className="shrink-0 text-lg" />
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none ${fieldErrors.name ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                      placeholder="Enter your name" required
                      aria-invalid={fieldErrors.name ? 'true' : 'false'}
                    />
                    {fieldErrors.name && <p className="mt-2 text-sm text-red-600">{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel" id="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none ${fieldErrors.phone ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                      placeholder="Enter your mobile number" required
                      inputMode="numeric"
                      maxLength={10}
                      aria-invalid={fieldErrors.phone ? 'true' : 'false'}
                    />
                    {fieldErrors.phone && <p className="mt-2 text-sm text-red-600">{fieldErrors.phone}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none ${fieldErrors.email ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                    placeholder="Enter your email"
                    required
                    aria-invalid={fieldErrors.email ? 'true' : 'false'}
                  />
                  {fieldErrors.email && <p className="mt-2 text-sm text-red-600">{fieldErrors.email}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interested <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="course" value={formData.course} onChange={handleChange} onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none bg-white ${fieldErrors.course ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                      required
                      aria-invalid={fieldErrors.course ? 'true' : 'false'}
                    >
                      <option value="">Select a course</option>
                      <option value="mbbs">MBBS / BDS</option>
                      <option value="nursing">BSc Nursing / Allied Health</option>
                      <option value="engineering">Engineering (BTech)</option>
                      <option value="management">Management (BBA/MBA)</option>
                      <option value="other">Other</option>
                    </select>
                    {fieldErrors.course && <p className="mt-2 text-sm text-red-600">{fieldErrors.course}</p>}
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Location <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="location" value={formData.location} onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors outline-none bg-white ${fieldErrors.location ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                      required
                      aria-invalid={fieldErrors.location ? 'true' : 'false'}
                    >
                      <option value="">Select a location</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="mangalore">Mangalore</option>
                      <option value="coimbatore">Coimbatore</option>
                      <option value="chennai">Chennai</option>
                      <option value="any">Anywhere in South India</option>
                    </select>
                    {fieldErrors.location && <p className="mt-2 text-sm text-red-600">{fieldErrors.location}</p>}
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isButtonDisabled}
                    className={`relative w-full min-h-[60px] overflow-hidden rounded-xl px-6 py-4 text-lg font-semibold transition-all duration-300 ${
                      isFormReady
                        ? 'btn-primary shadow-lg shadow-blue-500/30'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    } ${isSubmitting ? 'cursor-wait bg-blue-700 text-white shadow-xl shadow-blue-700/20' : ''}`}
                  >
                    {isSubmitting && (
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 animate-pulse" />
                    )}
                    <span className="relative flex items-center justify-center">
                      <span className={`absolute left-0 flex items-center ${isSubmitting ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                        <FiLoader className="animate-spin text-xl" />
                      </span>
                      <span className="inline-flex items-center justify-center">
                        {isSubmitting ? 'Submitting Registration...' : 'Register Now'}
                      </span>
                    </span>
                  </button>
                  {isSubmitting && (
                    <p className="mt-3 text-center text-sm text-blue-700">
                      Please wait while we send your details.
                    </p>
                  )}
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By registering, you agree to our terms and privacy policy.
                  </p>
                </div>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
