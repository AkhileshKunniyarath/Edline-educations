"use client";
import { FiUserPlus, FiPhoneCall, FiList, FiSearch, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    title: 'Register Online',
    description: 'Fill out a quick form with your academic details and preferences — takes less than 2 minutes.',
    icon: FiUserPlus,
    color: '#3B82F6',
    glow: 'rgba(59,130,246,0.35)',
  },
  {
    number: '02',
    title: 'Guidance Call',
    description: 'Our expert counselors reach out to understand your goals, budget, and ideal career path.',
    icon: FiPhoneCall,
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.35)',
  },
  {
    number: '03',
    title: 'Course Selection',
    description: 'We match you with the best professional course from our extensive catalogue of programs.',
    icon: FiList,
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.35)',
  },
  {
    number: '04',
    title: 'College Shortlisting',
    description: 'Receive a curated list of top institutes that match your profile, budget and location preference.',
    icon: FiSearch,
    color: '#10B981',
    glow: 'rgba(16,185,129,0.35)',
  },
  {
    number: '05',
    title: 'Seat Confirmed',
    description: 'We handle all documentation and formalities so you just show up and start your dream journey.',
    icon: FiCheckCircle,
    color: '#EF4444',
    glow: 'rgba(239,68,68,0.35)',
  },
];

const AdmissionProcess = () => {
  return (
    <section id="process" className="section-padding overflow-hidden" style={{ background: '#07111F' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.3)' }}>
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Your Admission in{' '}
            <span style={{ background: 'linear-gradient(90deg,#60A5FA,#FFB400)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              5 Simple Steps
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#94A3B8' }}>
            A transparent, stress-free journey — from registration to your seat in a top college.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.4) 10%, rgba(59,130,246,0.4) 90%, transparent)' }} />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                  {/* Left / Right Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div
                      className={`inline-block rounded-2xl p-6 max-w-sm ${isEven ? 'lg:ml-auto' : ''}`}
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: `1px solid ${step.color}33`,
                        backdropFilter: 'blur(10px)',
                        boxShadow: `0 4px 30px ${step.glow}`,
                      }}>
                      <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: step.color }}>
                        Step {step.number}
                      </p>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{step.description}</p>
                    </div>
                  </div>

                  {/* Centre Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}33, ${step.color}66)`,
                        border: `2px solid ${step.color}88`,
                        boxShadow: `0 0 24px ${step.glow}`,
                      }}>
                      <Icon style={{ color: step.color, fontSize: '1.6rem' }} />
                    </div>
                    {/* Step number dot */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                      style={{ background: step.color }}>
                      {i + 1}
                    </div>
                  </div>

                  {/* Spacer for opposite column */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#register"
            onClick={(e) => { e.preventDefault(); const el = document.getElementById('register'); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' }); } }}
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-lg font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              color: '#ffffff',
              background: 'linear-gradient(135deg, #1E5ADC, #3B82F6)',
              boxShadow: '0 8px 32px rgba(30,90,220,0.45)',
            }}>
            Start Your Journey Now
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-sm" style={{ color: '#64748B' }}>
            Free consultation · No hidden charges
          </p>
        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;
