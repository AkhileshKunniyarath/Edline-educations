"use client";
import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', course: '', location: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

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
              <p className="text-xl font-bold text-accent">+91 98765 43210</p>
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text" id="name" value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                      placeholder="Enter your name" required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel" id="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                      placeholder="Enter your mobile number" required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email" id="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Course Interested *</label>
                    <select
                      id="course" value={formData.course} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-white"
                      required
                    >
                      <option value="">Select a course</option>
                      <option value="mbbs">MBBS / BDS</option>
                      <option value="nursing">BSc Nursing / Allied Health</option>
                      <option value="engineering">Engineering (BTech)</option>
                      <option value="management">Management (BBA/MBA)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                    <select
                      id="location" value={formData.location} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-white"
                    >
                      <option value="">Select a location</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="mangalore">Mangalore</option>
                      <option value="coimbatore">Coimbatore</option>
                      <option value="chennai">Chennai</option>
                      <option value="any">Anywhere in South India</option>
                    </select>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full btn-primary py-4 text-lg shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <FiLoader className="animate-spin text-xl" />
                        Sending...
                      </>
                    ) : 'Register Now'}
                  </button>
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
