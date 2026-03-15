"use client";
import { FiCheckCircle, FiArrowRight, FiStar, FiAward, FiUsers, FiBookOpen } from 'react-icons/fi';

const statsData = [
  { icon: FiUsers, value: '5000+', label: 'Students Placed' },
  { icon: FiAward, value: '100+', label: 'Partner Colleges' },
  { icon: FiStar, value: '98%', label: 'Success Rate' },
  { icon: FiBookOpen, value: '15+', label: 'Years Experience' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#030B1A]">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(30, 90, 220, 0.45) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(16, 50, 150, 0.3) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, #4A90D9 1px, transparent 1px), linear-gradient(to bottom, #4A90D9 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, #1E5ADC, transparent)' }} />
        <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #FFB400, transparent)' }} />
      </div>

      <div className="container relative z-10 py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold"
              style={{ borderColor: 'rgba(30,90,220,0.6)', background: 'rgba(30,90,220,0.15)', color: '#93C5FD' }}>
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Admissions Open · 2026 – 2027
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white">
              Launch Your{' '}
              <span className="block" style={{ background: 'linear-gradient(90deg, #60A5FA 0%, #93C5FD 50%, #FFB400 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Medical Career
              </span>
              <span className="text-white">With Confidence</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: '#94A3B8' }}>
              Expert admissions guidance for MBBS, BDS & Allied Health Sciences in top colleges across South India.
              Your dream seat — guaranteed.
            </p>

            {/* Trust bullets */}
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start text-sm font-medium" style={{ color: '#CBD5E1' }}>
              {['Govt. Recognized', '100% Genuine Process', 'Zero Hidden Fees'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <FiCheckCircle className="text-blue-400 text-base flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#register"
                onClick={(e) => { e.preventDefault(); scrollTo('register'); }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white"
                style={{ color: '#ffffff', background: 'linear-gradient(135deg, #1E5ADC, #2563EB)', boxShadow: '0 8px 32px rgba(30,90,220,0.45)' }}>
                <span className="relative z-10 flex items-center gap-2" style={{ color: '#ffffff' }}>
                  Apply Now
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)' }} />
              </a>
              <a href="#services"
                onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: '#E2E8F0', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1E5ADC'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#E2E8F0'; }}
              >
                Free Counselling
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {statsData.map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: '#64748B' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — hidden on mobile, shown on lg+ ── */}
          <div className="hidden lg:flex relative items-center justify-center">

            {/* Main Card */}
            <div className="relative w-full max-w-lg rounded-3xl p-1 shadow-2xl" style={{ background: 'linear-gradient(135deg, rgba(30,90,220,0.6), rgba(255,180,0,0.3))' }}>
              <div className="rounded-[22px] p-8 space-y-6 relative overflow-hidden" style={{ background: '#0D1A33' }}>

                {/* Inner glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #60A5FA, transparent)' }} />

                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#64748B' }}>Your Roadmap</p>
                    <h3 className="text-xl font-bold text-white mt-1">Admission Journey</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(30,90,220,0.25)', border: '1px solid rgba(96,165,250,0.3)' }}>
                    🎓
                  </div>
                </div>

                {/* Steps */}
                {[
                  { icon: '📋', step: '01', title: 'Free Consultation', desc: 'Profile assessment & college shortlisting', color: '#3B82F6' },
                  { icon: '🏛️', step: '02', title: 'College Selection', desc: 'Choose from 100+ verified institutions', color: '#8B5CF6' },
                  { icon: '📄', step: '03', title: 'Secure Admission', desc: 'End-to-end documentation & seat lock', color: '#F59E0B' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold" style={{ color: item.color }}>{item.step}</span>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                      </div>
                      <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}

                {/* CTA inside card */}
                <a href="#register"
                  onClick={(e) => { e.preventDefault(); scrollTo('register'); }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:brightness-110"
                  style={{ color: '#ffffff', background: 'linear-gradient(90deg, #1E5ADC, #3B82F6)' }}>
                  Start Your Journey Today <FiArrowRight />
                </a>
              </div>
            </div>

            {/* Floating Badges — only on large screens so they don't overflow on mobile */}
            <div className="absolute -top-4 -left-14 bg-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <FiAward className="text-lg" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Partners</p>
                <p className="font-black text-gray-900 text-sm leading-none">100+ Colleges</p>
              </div>
            </div>

            <div className="absolute top-1/3 -right-14 bg-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-bold text-sm text-gray-800">Scholarships Available</span>
            </div>

            <div className="absolute -bottom-4 -right-12 bg-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '1s' }}>
              <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                <FiBookOpen className="text-lg" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-sm leading-none">NEET / KEAM</p>
                <p className="text-[10px] text-gray-400 font-medium">Expert Guidance</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
