"use client";
import { useState } from 'react';
import { FiPlus, FiMinus, FiMessageCircle } from 'react-icons/fi';

const faqs = [
  {
    category: 'Admissions',
    question: "Do you help with NEET admission?",
    answer: "Yes, we provide end-to-end guidance for NEET counseling, document verification, college shortlisting, and allotment strategies to secure a seat in the best medical colleges."
  },
  {
    category: 'Colleges',
    question: "Which colleges do you provide admission in?",
    answer: "We have tied up with 100+ reputed colleges across South India, covering major educational hubs like Bangalore, Mangalore, Coimbatore, and Chennai — across Medical, Nursing, Engineering, and Management streams."
  },
  {
    category: 'Finance',
    question: "Is scholarship available?",
    answer: "Yes, we guide eligible students to secure merit-based scholarships and government financial aid. We also negotiate favorable fee structures for early admissions with our partner institutions."
  },
  {
    category: 'Campus Life',
    question: "Is hostel facility available?",
    answer: "Absolutely. All our partner colleges offer secure and hygienic hostel facilities for both boys and girls. We provide detailed information on hostel fees, amenities, and campus lifestyle before you finalize your admission."
  },
  {
    category: 'Fees',
    question: "What are your counseling charges?",
    answer: "Our initial career counseling and college suggestion session is completely free. We charge a nominal service fee only if you choose to process your admission through us, which covers documentation and admission processing."
  },
];

const categoryColors = {
  'Admissions': { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
  'Colleges':   { bg: '#F0FDF4', text: '#15803D', border: '#BBF7D0' },
  'Finance':    { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA' },
  'Campus Life':{ bg: '#FDF4FF', text: '#7E22CE', border: '#E9D5FF' },
  'Fees':       { bg: '#F0F9FF', text: '#0369A1', border: '#BAE6FD' },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="section-padding" style={{ background: '#F0F6FF' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(30,90,220,0.1)', color: '#1E5ADC', border: '1px solid rgba(30,90,220,0.25)' }}>
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span style={{ color: '#0A1F44' }}>Frequently </span>
            <span style={{ color: '#1E5ADC' }}>Asked Questions</span>
          </h2>
          <p className="text-lg" style={{ color: '#64748B' }}>
            Everything you need to know about admissions — answered honestly.
          </p>
        </div>

        {/* Two columns on desktop */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: decorative panel */}
          <div className="hidden lg:flex flex-col gap-5 lg:col-span-2 sticky top-28">
            <div className="rounded-2xl p-6 bg-white" style={{ border: '1.5px solid #DBEAFE', boxShadow: '0 4px 20px rgba(30,90,220,0.08)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(30,90,220,0.1)' }}>
                <FiMessageCircle size={22} style={{ color: '#1E5ADC' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1F44' }}>Still have questions?</h3>
              <p className="text-sm mb-5" style={{ color: '#64748B' }}>
                Our counselors are available Mon – Sat, 9 AM to 7 PM to answer everything personally.
              </p>
              <a href="#contact"
                onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); } }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg,#1E5ADC,#3B82F6)', boxShadow: '0 6px 20px rgba(30,90,220,0.3)' }}>
                Talk to an Expert
              </a>
            </div>

            {/* Stats */}
            {[
              { value: '100+', label: 'Partner Colleges' },
              { value: '5000+', label: 'Students Placed' },
              { value: 'Free', label: 'Initial Counseling' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl px-5 py-4 bg-white flex items-center gap-4"
                style={{ border: '1px solid #E2E8F0' }}>
                <p className="text-2xl font-black" style={{ color: '#1E5ADC' }}>{s.value}</p>
                <p className="text-sm font-medium" style={{ color: '#64748B' }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const cat = categoryColors[faq.category];
              return (
                <div key={i}
                  className="rounded-2xl overflow-hidden transition-all duration-300 bg-white"
                  style={{
                    border: `1.5px solid ${isOpen ? '#1E5ADC' : '#E2E8F0'}`,
                    boxShadow: isOpen ? '0 8px 24px rgba(30,90,220,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                  }}>

                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                    onClick={() => toggle(i)}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {/* Category pill */}
                      <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}>
                        {faq.category}
                      </span>
                      <span className="font-semibold text-base" style={{ color: isOpen ? '#1E5ADC' : '#0A1F44' }}>
                        {faq.question}
                      </span>
                    </div>
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                      style={{ background: isOpen ? '#1E5ADC' : '#F1F5F9' }}>
                      {isOpen
                        ? <FiMinus size={14} style={{ color: '#fff' }} />
                        : <FiPlus size={14} style={{ color: '#64748B' }} />
                      }
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#475569', borderTop: '1px solid #F1F5F9', paddingTop: '12px' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
