"use client";
import { FiCompass, FiEdit, FiFileText, FiAward, FiBookOpen } from 'react-icons/fi';
import { serviceItems } from '@/lib/site';

const Services = () => {
  const serviceStyles = {
    "Career Guidance": {
      icon: <FiCompass className="text-3xl text-blue-600" />,
      color: "bg-blue-50",
    },
    "NEET Registration": {
      icon: <FiEdit className="text-3xl text-orange-600" />,
      color: "bg-orange-50",
    },
    "KEAM Assistance": {
      icon: <FiFileText className="text-3xl text-green-600" />,
      color: "bg-green-50",
    },
    "Direct College Admission": {
      icon: <FiBookOpen className="text-3xl text-purple-600" />,
      color: "bg-purple-50",
    },
    "Scholarship Support": {
      icon: <FiAward className="text-3xl text-accent" />,
      color: "bg-yellow-50",
    },
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Education Consultancy Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive admission and guidance support to ensure a smooth transition into your professional education journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${serviceStyles[service.title]?.color || 'bg-blue-50'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {serviceStyles[service.title]?.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Special CTA Card */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 shadow-lg text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>Need Custom Guidance?</h3>
            <p className="text-blue-100 mb-6">Connect with our expert counselors for a personalized career roadmap.</p>
            <a 
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('register');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="btn-accent w-full text-lg block text-center"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
