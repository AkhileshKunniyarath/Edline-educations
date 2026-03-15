import { FiHeart, FiBriefcase, FiMonitor, FiSettings } from 'react-icons/fi';

const Courses = () => {
  const courseCategories = [
    {
      title: "Medical Courses",
      icon: <FiHeart className="text-4xl text-rose-500 mb-4 group-hover:scale-110 transition-transform" />,
      color: "border-rose-200 bg-rose-50",
      courses: [
        "MBBS", "BDS", "BAMS", "BHMS", "MDS", "BPT", "BSc Nursing", "Pharm D", "BPharm", "DPharm", "MSc Nursing"
      ]
    },
    {
      title: "Allied Health Science",
      icon: <FiSettings className="text-4xl text-blue-500 mb-4 group-hover:scale-110 transition-transform" />,
      color: "border-blue-200 bg-blue-50",
      courses: [
        "BSc Radiology (MIT)", "BSc MLT", "Dialysis Technology", "Respiratory Care", "Optometry", "Perfusion Technology", "Cardiac Care Technology", "Emergency Medicine"
      ]
    },
    {
      title: "Management Courses",
      icon: <FiBriefcase className="text-4xl text-amber-500 mb-4 group-hover:scale-110 transition-transform" />,
      color: "border-amber-200 bg-amber-50",
      courses: [
        "BBA Aviation", "BBA Logistics", "BCA", "BHM", "BSc Hospitality", "BSc Culinary Arts", "MBA", "MCA"
      ]
    },
    {
      title: "Engineering & IT",
      icon: <FiMonitor className="text-4xl text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />,
      color: "border-emerald-200 bg-emerald-50",
      courses: [
        "Computer Science", "Civil Engineering", "Mechanical", "Electronics", "AI / Data Science", "Information Technology"
      ]
    }
  ];

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Courses We Offer</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Choose from a wide range of professional courses sorted by industry demand and career prospects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCategories.map((category, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-2xl p-6 shadow-sm border-t-4 ${category.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden`}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-gray-100 rounded-bl-full opacity-50 -z-0"></div>
              
              <div className="relative z-10">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
