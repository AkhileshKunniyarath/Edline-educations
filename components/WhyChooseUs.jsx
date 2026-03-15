"use client";
import { FiCheckCircle, FiUsers, FiGlobe, FiAward, FiBookOpen } from 'react-icons/fi';

const WhyChooseUs = () => {
  const reasons = [
    { text: "10+ Years Experience", icon: <FiAward className="text-xl" /> },
    { text: "5000+ Students Placed", icon: <FiUsers className="text-xl" /> },
    { text: "100+ Partner Colleges", icon: <FiGlobe className="text-xl" /> },
    { text: "Expert Career Counsellors", icon: <FiCheckCircle className="text-xl" /> },
    { text: "Support for NEET / KEAM", icon: <FiBookOpen className="text-xl" /> },
    { text: "Admission Assistance Across South India", icon: <FiCheckCircle className="text-xl" /> }
  ];

  const stats = [
    { number: "10+", label: "Years Experience", color: "#1D4ED8" },
    { number: "5000+", label: "Students Placed", color: "#FFB400" },
    { number: "100+", label: "Partner Colleges", color: "#16A34A" },
    { number: "98%", label: "Success Rate", color: "#7C3AED" }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#93C5FD' }}>Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: '#ffffff' }}>
              Your Trusted Partner for <span style={{ background: 'linear-gradient(90deg, #FFB400, #FEF08A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Quality Education</span>
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-xl">
              We don't just secure admissions; we craft careers. Our dedicated team of experts ensures you get into the college that best fits your ambitions and budget.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                  <div className="text-accent bg-white/10 p-2 rounded-md">
                    {reason.icon}
                  </div>
                  <span className="font-medium text-blue-50 text-sm">{reason.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); } }}
              className="btn-accent text-lg shadow-lg inline-block text-center"
            >Talk to our Experts</a>
          </div>
          
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl transform rotate-3 scale-105 z-0"></div>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 text-center shadow-2xl relative z-10 transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-blue-100"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold uppercase tracking-wider text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
