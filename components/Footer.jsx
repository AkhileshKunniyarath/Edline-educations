"use client";
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Courses', id: 'courses' },
  { label: 'Colleges', id: 'colleges' },
  { label: 'Admission Process', id: 'process' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

const courses = ['Medical (MBBS/BDS)', 'Nursing Sciences', 'Allied Health', 'Engineering (BTech)', 'Management (BBA/MBA)', 'Pharmacy'];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xl">ED</div>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight m-0">ED LINE</h2>
                <p className="text-xs text-blue-400 font-medium m-0">Edu Consultancy</p>
              </div>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted partner in educational admissions. We guide students towards successful careers by helping them secure admissions in top colleges across South India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors" aria-label="LinkedIn"><FiLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:rounded-full">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                    className="text-sm hover:text-blue-400 flex items-center gap-2 transition-colors group cursor-pointer"
                  >
                    <FiArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Courses */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:rounded-full">
              Top Categories
            </h4>
            <ul className="space-y-3">
              {courses.map((course, i) => (
                <li key={i}>
                  <a
                    href="#courses"
                    onClick={(e) => { e.preventDefault(); scrollTo('courses'); }}
                    className="text-sm hover:text-blue-400 flex items-center gap-2 transition-colors group cursor-pointer"
                  >
                    <FiArrowRight className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:rounded-full">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <FiMapPin className="text-blue-500 text-lg shrink-0 mt-0.5" />
                <span>Pookkarathara, Edappal, Kerala 679576</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FiPhone className="text-blue-500 text-lg shrink-0" />
                <span>+91 98470 82999</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FiMail className="text-blue-500 text-lg shrink-0" />
                <a href="mailto:edlineconsultancy@gmail.com" className="hover:text-blue-400 transition-colors">edlineconsultancy@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} ED LINE Edu Consultancy. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <a
            href="https://touchpointe.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 hover:text-blue-400 transition-colors flex items-center gap-1 group"
          >
            Powered by{' '}
            <span className="font-semibold text-gray-500 group-hover:text-blue-400 transition-colors">
              touchpointe.digital
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
