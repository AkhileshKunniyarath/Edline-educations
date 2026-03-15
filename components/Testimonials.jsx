"use client";
import { useState } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight, FiAward } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Sneha Reddy",
    initials: "SR",
    course: "BSc Nursing",
    college: "Top Nursing College, Bangalore",
    review: "ED LINE Edu Consultancy helped me get admission to my dream nursing college in Bangalore. The entire process was smooth, and their guidance was invaluable.",
    rating: 5,
    accent: '#1E5ADC',
    bg: 'rgba(30,90,220,0.08)',
    border: 'rgba(30,90,220,0.2)',
    tag: 'NEET 2025',
  },
  {
    id: 2,
    name: "Rahul Krishnan",
    initials: "RK",
    course: "BTech Computer Science",
    college: "Premium Engineering Institute, Chennai",
    review: "I was confused about which college to choose. Their expert counselors not only helped me shortlist the best colleges but also assisted with the admission formalities.",
    rating: 5,
    accent: '#0A4D8C',
    bg: 'rgba(10,77,140,0.08)',
    border: 'rgba(10,77,140,0.2)',
    tag: 'KEAM 2025',
  },
  {
    id: 3,
    name: "Aiswarya Nair",
    initials: "AN",
    course: "MBBS",
    college: "Medical College, Mangalore",
    review: "Getting an MBBS seat seemed impossible until I contacted ED LINE. Their thorough knowledge of the NEET admission process made my dream come true.",
    rating: 5,
    accent: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.2)',
    tag: 'NEET 2025',
  },
];

const StarRow = ({ rating, color }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <FiStar key={i} size={14} style={{ fill: color, color }} />
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((p) => (p - 1 + total) % total);
  const next = () => setActive((p) => (p + 1) % total);

  return (
    <section className="section-padding overflow-hidden" style={{ background: '#F0F6FF' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(30,90,220,0.1)', color: '#1E5ADC', border: '1px solid rgba(30,90,220,0.25)' }}>
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span style={{ color: '#0A1F44' }}>Student </span>
            <span style={{ color: '#1E5ADC' }}>Success Stories</span>
          </h2>
          <p className="text-lg" style={{ color: '#64748B' }}>
            Hear from students who turned their dreams into reality with our guidance.
          </p>
        </div>

        {/* Desktop — 3-card grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              onClick={() => setActive(i)}
              className="relative rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                background: active === i ? '#ffffff' : '#ffffff',
                border: `1.5px solid ${active === i ? t.accent : '#E2E8F0'}`,
                boxShadow: active === i
                  ? `0 12px 40px rgba(30,90,220,0.15)`
                  : '0 2px 12px rgba(0,0,0,0.05)',
              }}
            >
              {/* Quote mark */}
              <div className="text-6xl font-serif leading-none mb-2 select-none" style={{ color: t.accent, opacity: 0.2 }}>"</div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: '#475569' }}>
                "{t.review}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
                  style={{ background: t.bg, border: `1.5px solid ${t.border}`, color: t.accent }}>
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate" style={{ color: '#0A1F44' }}>{t.name}</p>
                  <p className="text-xs truncate" style={{ color: '#94A3B8' }}>{t.course} · {t.college}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: '1px solid #F1F5F9' }}>
                <StarRow rating={t.rating} color={t.accent} />
                <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: t.bg, color: t.accent }}>
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — single card slider */}
        <div className="lg:hidden mb-10">
          {(() => {
            const t = testimonials[active];
            return (
              <div className="rounded-2xl p-7 bg-white transition-all duration-300"
                style={{ border: `1.5px solid ${t.accent}`, boxShadow: '0 12px 40px rgba(30,90,220,0.12)' }}>
                <div className="text-6xl font-serif leading-none mb-2 select-none" style={{ color: t.accent, opacity: 0.2 }}>"</div>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#475569' }}>"{t.review}"</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-black flex-shrink-0"
                    style={{ background: t.bg, border: `1.5px solid ${t.border}`, color: t.accent }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: '#0A1F44' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#94A3B8' }}>{t.course} · {t.college}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #F1F5F9' }}>
                  <StarRow rating={t.rating} color={t.accent} />
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: t.bg, color: t.accent }}>
                    {t.tag}
                  </span>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5">
          <button onClick={prev}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-105 bg-white"
            style={{ border: '1.5px solid #E2E8F0', color: '#64748B', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <FiChevronLeft size={20} />
          </button>

          <div className="flex gap-2 items-center">
            {testimonials.map((t, i) => (
              <button key={i} onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: active === i ? '24px' : '8px',
                  height: '8px',
                  background: active === i ? '#1E5ADC' : '#CBD5E1',
                }}
              />
            ))}
          </div>

          <button onClick={next}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-105 bg-white"
            style={{ border: '1.5px solid #E2E8F0', color: '#64748B', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Trust banner */}
        <div className="mt-16 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left bg-white"
          style={{ border: '1.5px solid #DBEAFE', boxShadow: '0 4px 20px rgba(30,90,220,0.08)' }}>
          <div className="flex items-center gap-3">
            <FiAward size={28} style={{ color: '#FFB400' }} />
            <div>
              <p className="font-bold text-sm" style={{ color: '#0A1F44' }}>5,000+ Students Placed</p>
              <p className="text-xs" style={{ color: '#94A3B8' }}>Across top institutions in South India</p>
            </div>
          </div>
          <div className="w-px h-10 hidden sm:block" style={{ background: '#E2E8F0' }} />
          <div>
            <p className="font-bold text-sm" style={{ color: '#0A1F44' }}>98% Success Rate</p>
            <p className="text-xs" style={{ color: '#94A3B8' }}>Verified admissions every year</p>
          </div>
          <div className="w-px h-10 hidden sm:block" style={{ background: '#E2E8F0' }} />
          <div>
            <p className="font-bold text-sm" style={{ color: '#0A1F44' }}>Rated 4.9 / 5</p>
            <p className="text-xs" style={{ color: '#94A3B8' }}>By over 1,000+ families</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
