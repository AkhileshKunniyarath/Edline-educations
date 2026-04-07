import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919847082999" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-gray-800 text-sm py-2 px-4 rounded-xl shadow-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap before:content-[''] before:absolute before:top-1/2 before:-right-2 before:-translate-y-1/2 before:border-8 before:border-transparent before:border-l-white">
        Chat with an Expert!
      </div>
      
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-75"></div>
    </a>
  );
};

export default FloatingWhatsApp;
