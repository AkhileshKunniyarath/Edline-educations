"use client";
import { FiMapPin, FiCheckCircle, FiTrendingUp, FiHome } from 'react-icons/fi';

const Colleges = () => {
  const cities = [
    {
      name: "Bangalore",
      imageGrad: "from-purple-500 to-indigo-600",
      collegesInCity: ["Nursing Colleges", "Medical Colleges", "Allied Health Colleges"],
      count: "50+"
    },
    {
      name: "Mangalore",
      imageGrad: "from-teal-400 to-emerald-600",
      collegesInCity: ["Top Tier Medical", "Engineering Institutes"],
      count: "30+"
    },
    {
      name: "Coimbatore",
      imageGrad: "from-orange-400 to-rose-500",
      collegesInCity: ["Engineering", "Arts & Science", "Management"],
      count: "40+"
    },
    {
      name: "Chennai",
      imageGrad: "from-blue-400 to-blue-700",
      collegesInCity: ["Medical Colleges", "Premium Engineering", "Aviation"],
      count: "60+"
    }
  ];

  return (
    <section id="colleges" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Top Colleges in South India</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Secure admissions in reputed institutions across prime educational hubs in South India.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 relative border border-gray-100 flex flex-col h-full bg-white"
            >
              {/* City Image Placeholder */}
              <div className={`h-40 w-full bg-gradient-to-br ${city.imageGrad} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <h3 className="text-3xl font-extrabold z-10 flex items-center gap-2 drop-shadow-lg" style={{ color: '#ffffff' }}>
                  <FiMapPin className="text-2xl" /> {city.name}
                </h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Partner Institutions</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-full">{city.count} Colleges</span>
                </div>
                
                <ul className="mb-6 flex-grow space-y-3">
                  {city.collegesInCity.map((type, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <FiHome className="text-blue-500" />
                      {type}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); } }}
                  className="w-full btn-outline mt-auto block text-center group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700"
                >
                  Explore Options
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-[800px] mx-auto rounded-lg px-8 py-14 relative overflow-hidden" 
             style={{ background: '#F4F8FE', border: '1px solid #E5EAF3' }}>
          
          {/* Top right decorative arrows matching image */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-40 pointer-events-none" style={{ transform: 'translate(10%, -10%)' }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 45 L50 5 L90 45" stroke="#B1C8FD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 75 L50 35 L90 75" stroke="#B1C8FD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="relative z-10 space-y-4">
            <h3 className="text-[28px] font-bold tracking-tight" style={{ color: '#092147' }}>
              Looking for a specific college?
            </h3>
            <p className="text-[17px] font-medium max-w-2xl mx-auto leading-snug" style={{ color: '#2563EB' }}>
              Our experts can help you find the right institution based on your academic<br/>profile and budget.
            </p>
            <div className="pt-4">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-10 py-[14px] rounded-lg font-bold text-sm transition-all duration-300 hover:opacity-90"
                style={{ 
                  background: '#0D4F96', 
                  color: '#ffffff', // changed to white for visibility
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
                }}
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colleges;
