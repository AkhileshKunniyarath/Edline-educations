import { FiHeart, FiBriefcase, FiMonitor, FiSettings } from 'react-icons/fi';
import { courseCategories } from '@/lib/site';

const Courses = () => {
  const categoryStyles = {
    "Medical Courses": {
      icon: <FiHeart className="text-4xl text-rose-500 mb-4 group-hover:scale-110 transition-transform" />,
      color: "border-rose-200 bg-rose-50",
    },
    "Allied Health Science": {
      icon: <FiSettings className="text-4xl text-blue-500 mb-4 group-hover:scale-110 transition-transform" />,
      color: "border-blue-200 bg-blue-50",
    },
    "Management Courses": {
      icon: <FiBriefcase className="text-4xl text-amber-500 mb-4 group-hover:scale-110 transition-transform" />,
      color: "border-amber-200 bg-amber-50",
    },
    "Engineering & IT": {
      icon: <FiMonitor className="text-4xl text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />,
      color: "border-emerald-200 bg-emerald-50",
    },
  };

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
              className={`group bg-white rounded-2xl p-6 shadow-sm border-t-4 ${categoryStyles[category.title]?.color || 'border-blue-200 bg-blue-50'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden`}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-gray-100 rounded-bl-full opacity-50 -z-0"></div>
              
              <div className="relative z-10">
                {categoryStyles[category.title]?.icon}
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
