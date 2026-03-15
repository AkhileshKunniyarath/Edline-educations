import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-600 text-lg">
            Have questions or ready to start your admission process? Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Contact Details */}
          <div className="p-8 md:p-12 bg-blue-900 text-white flex flex-col justify-between relative">
            {/* Background Map Graphic Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                    <FiPhone className="text-xl text-blue-200" />
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm mb-1">Call Us Anywhere</p>
                    <p className="text-lg font-semibold">+91 98765 43210</p>
                    <p className="text-lg font-semibold">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm mb-1">WhatsApp Us</p>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-green-300 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                    <FiMail className="text-xl text-blue-200" />
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm mb-1">Email Us</p>
                    <p className="text-lg font-semibold">info@edlineconsultancy.com</p>
                    <p className="text-sm text-blue-200 mt-1">We'll reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-xl text-accent" />
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm mb-1">Office Location</p>
                    <p className="text-lg font-semibold">Opp. Parche, Near Makma Hypermart</p>
                    <p className="text-blue-100">Athinhal, Kanhangad, Kerala</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-blue-800/50 flex items-center gap-3 relative z-10 text-blue-200 bg-blue-950/30 p-4 rounded-xl">
              <FiClock className="text-2xl text-accent" />
              <div>
                <p className="font-semibold text-white">Working Hours</p>
                <p className="text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-full min-h-[400px] w-full relative bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.7836374092284!2d75.08863611481546!3d12.317544091285324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba465b05a6e7dfd%3A0xc3fce42a17fbc6c6!2sKanhangad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1628104859062!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Office Location Map"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Gradient Overlay for style */}
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-multiply"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
