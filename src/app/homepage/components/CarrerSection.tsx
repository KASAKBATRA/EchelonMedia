'use client';

import React, { useState, useEffect, useRef } from 'react';

// Role-based openings are paused for now.
// Keep this section generic until active hiring resumes.

interface ApplicationForm {
  name: string;
  email: string;
  phone: string;
  portfolio: string;
  message: string;
}

export default function CareersSection() {
  const [form, setForm] = useState<ApplicationForm>({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);

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
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(200,169,110,0.1) 0%, transparent 70%)',
              top: '-10%',
              right: '-5%',
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
              style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
            >
              Join the
              <br />
              <span
                style={{
                  fontFamily: 'var(--font-cursive)',
                  fontStyle: 'normal',
                  color: '#D6C3A3',
                  fontSize: '1.1em',
                  letterSpacing: '0.01em',
                }}
              >
                System.
              </span>
            </h2>
            <p
              className="text-echelon-muted mt-4 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
            >
              We hire people who are obsessed with their craft. If that&apos;s you, let&apos;s talk.
            </p>
          </div>

          <div className="max-w-5xl mx-auto reveal-hidden">
            <div
              className="relative rounded-[2rem] border p-6 md:p-10 lg:p-12 shadow-[0_25px_70px_rgba(62,47,43,0.14)] overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(244,239,230,0.95) 100%)',
                borderColor: 'rgba(200,169,110,0.25)',
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 15% 20%, rgba(200,169,110,0.12) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(200,169,110,0.08) 0%, transparent 50%)',
                }}
              />

              <div className="relative z-10 text-center mb-8">
                <h3
                  className="font-display text-echelon-black"
                  style={{
                    fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  No jobs available right now
                </h3>
                <p
                  className="text-echelon-muted mt-4 max-w-3xl mx-auto leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem' }}
                >
                  Drop your details for future opportunities. If you have not seen your role yet,
                  submit your profile and we will reach out when a matching role opens.
                </p>
                <p className="mt-2 text-echelon-muted" style={{ fontFamily: 'var(--font-body)' }}>
                  Resume mail:{' '}
                  <a
                    href="mailto:echelonmedia17@gmail.com"
                    className="font-semibold"
                    style={{ color: '#6E5228' }}
                  >
                    echelonmedia17@gmail.com
                  </a>
                </p>
              </div>

              {!mounted ? (
                <div
                  className="relative z-10 py-8 text-center text-echelon-muted"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Loading application form...
                </div>
              ) : submitted ? (
                <div className="relative z-10 text-center py-8">
                  <h4 className="font-display text-echelon-black text-2xl font-bold mb-3">
                    Details received
                  </h4>
                  <p className="text-echelon-muted" style={{ fontFamily: 'var(--font-body)' }}>
                    Thanks for sharing your profile. We will contact you when a relevant opportunity
                    opens.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <label
                      className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="off"
                      suppressHydrationWarning
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="off"
                      suppressHydrationWarning
                      className="form-input"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      autoComplete="off"
                      suppressHydrationWarning
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Portfolio / Resume Link
                    </label>
                    <input
                      type="url"
                      autoComplete="off"
                      suppressHydrationWarning
                      className="form-input"
                      placeholder="https://drive.google.com/..."
                      value={form.portfolio}
                      onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      className="block text-xs font-semibold text-echelon-black mb-1.5 uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Your Role / Skills
                    </label>
                    <textarea
                      rows={4}
                      autoComplete="off"
                      suppressHydrationWarning
                      className="form-input"
                      placeholder="Tell us your role, experience, and skills"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-center pt-2">
                    <button type="submit" className="btn-primary px-10 py-3.5">
                      Drop Your Details
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
