"use client";
import { FiCompass, FiEdit, FiFileText, FiAward, FiBookOpen } from 'react-icons/fi';

const Services = () => {
  const servicesList = [
    {
      title: "Career Guidance",
      description: "Expert counseling to help students choose the right course based on their aptitude, interests, and career goals.",
      icon: <FiCompass className="text-3xl text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "NEET Registration",
      description: "Complete end-to-end support for NEET application filling, document uploading, and regular updates.",
      icon: <FiEdit className="text-3xl text-orange-600" />,
      color: "bg-orange-50"
    },
    {
      title: "KEAM Assistance",
      description: "Dedicated Kerala Engineering & Medical entrance assistance including option registration and allotment strategies.",
      icon: <FiFileText className="text-3xl text-green-600" />,
      color: "bg-green-50"
    },
    {
      title: "Direct College Admission",
      description: "Hassle-free direct admission support in our vast network of 100+ partner colleges across South India.",
      icon: <FiBookOpen className="text-3xl text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "Scholarship Support",
      description: "Guidance for securing merit-based scholarships and negotiating fee structures with partner institutions.",
      icon: <FiAward className="text-3xl text-accent" />,
      color: "bg-yellow-50"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive admission and guidance support to ensure a smooth transition into your professional education journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
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
