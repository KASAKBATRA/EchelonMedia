'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Job {
  id: string;
  title: string;
  type: string;
  icon: string;
  description: string;
  skills: string[];
}

const JOBS: Job[] = [
  {
    id: 'content-creator',
    title: 'Content Creator',
    type: 'Full-time · On-site',
    icon: '✍️',
    description: 'Craft compelling visual and written content across platforms. You live and breathe trends.',
    skills: ['Reels', 'Copywriting', 'Photography', 'Canva / Adobe'],
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    type: 'Full-time · Hybrid',
    icon: '🎬',
    description: 'Edit cinematic videos for brands, events, and weddings. Your cuts tell stories.',
    skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics'],
  },
  {
    id: 'social-media-manager',
    title: 'Social Media Manager',
    type: 'Full-time · Remote',
    icon: '📱',
    description: 'Manage brand presences, grow communities, and run paid campaigns that actually convert.',
    skills: ['Meta Ads', 'Analytics', 'Community Mgmt', 'Strategy'],
  },
];

interface ApplicationForm {
  name: string;
  email: string;
  phone: string;
  portfolio: string;
  message: string;
}

export default function CareersSection() {
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [form, setForm] = useState<ApplicationForm>({ name: '', email: '', phone: '', portfolio: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const popupBackdropRef = useRef<HTMLDivElement>(null);
  const popupPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-hidden');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const backdrop = popupBackdropRef.current;
    const panel = popupPanelRef.current;
    if (!backdrop || !panel) return;

    if (activeJob) {
      document.body.classList.add('modal-open');
      setSubmitted(false);
      const t = setTimeout(() => {
        backdrop.classList.add('open');
        panel.classList.add('open');
      }, 10);
      return () => clearTimeout(t);
    } else {
      document.body.classList.remove('modal-open');
      backdrop.classList.remove('open');
      panel.classList.remove('open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [activeJob]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveJob(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/API here
    setSubmitted(true);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="careers"
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ background: 'var(--bg-primary)' }}
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 careers-grid-bg pointer-events-none" />

        {/* Atmospheric Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="blob-1 absolute rounded-full"
            style={{
              width: '500px', height: '500px',
              background: 'radial-gradient(circle, rgba(200,169,110,0.1) 0%, transparent 70%)',
              top: '-10%', right: '-5%',
              filter: 'blur(60px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-16 reveal-hidden">
            <div className="section-label justify-center">Careers</div>
            <h2
              className="font-display text-echelon-black"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em' }}
            >
              Join the<br />
              <span style={{ fontFamily: 'var(--font-cursive)', fontStyle: 'normal', color: '#C8A96E', fontSize: '1.1em', letterSpacing: '0.01em' }}>System.</span>
            </h2>
            <p className="text-echelon-muted mt-4 max-w-md mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
              We hire people who are obsessed with their craft. If that's you, let's talk.
            </p>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {JOBS.map((job, i) => (
              <div
                key={job.id}
                className={`careers-card reveal-hidden stagger-child p-8`}
                onClick={() => setActiveJob(job)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveJob(job)}
                aria-label={`Apply for ${job.title} position`}
              >
                <div className="text-3xl mb-5">{job.icon}</div>
                <div
                  className="text-xs font-bold mb-2 uppercase tracking-widest"
                  style={{ color: '#C8A96E', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {job.type}
                </div>
                <h3
                  className="font-display text-echelon-black text-xl font-bold mb-3"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {job.title}
                </h3>
                <p className="text-echelon-muted text-sm leading-relaxed mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(26,26,26,0.05)',
                        color: '#8A8178',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-echelon-black hover-arrow" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Apply Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center reveal-hidden">
            <p className="text-echelon-muted text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Don't see your role? We're always looking for exceptional talent.
            </p>
            <a href="mailto:careers@echelonmedia.in" className="btn-outline">
              Send Your Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Application Popup */}
      <div
        ref={popupBackdropRef}
        className="popup-backdrop"
        onClick={() => setActiveJob(null)}
      />
      <div ref={popupPanelRef} className="popup-panel">
        {activeJob && (
          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: '#F5F0E8', border: '1px solid rgba(26,26,26,0.08)' }}
          >
            {/* Popup Header */}
            <div
              className="p-6 md:p-8 relative"
              style={{ background: '#1A1A1A' }}
            >
              <button
                onClick={() => setActiveJob(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
                aria-label="Close application form"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
              <div className="text-3xl mb-3">{activeJob.icon}</div>
              <h3 className="font-display text-white text-2xl font-bold mb-1" style={{ letterSpacing: '-0.02em' }}>
                {activeJob.title}
              </h3>
              <p className="text-white/50 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{activeJob.type}</p>
            </div>

            {/* Form */}
            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="font-display text-echelon-black text-xl font-bold mb-2">Application Received!</h4>
                  <p className="text-echelon-muted text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    We'll review your application and get back to you within 3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Portfolio / Work Link
                    </label>
                    <input
                      type="url"
                      className="form-input"
                      placeholder="https://yourportfolio.com"
                      value={form.portfolio}
                      onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Why Echelon?
                    </label>
                    <textarea
                      rows={3}
                      className="form-input"
                      placeholder="Tell us what makes you the one..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ resize: 'none' }}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Submit Application
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2l-7 20-4-9-9-4 20-7z"/><path d="M22 2L11 13"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}