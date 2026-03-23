'use client';
import React from 'react';
import Image from 'next/image';

const COLLABORATOR_LOGOS = [
  '/assets/image/all_logos-removebg-preview.png',
  '/assets/image/all_logos__1_-removebg-preview.png',
  '/assets/image/all_logos__2_-removebg-preview.png',
  '/assets/image/all_logos__3_-removebg-preview.png',
  '/assets/image/all_logos__4_-removebg-preview.png',
  '/assets/image/all_logos__5_-removebg-preview.png',
  '/assets/image/all_logos__6_-removebg-preview.png',
  '/assets/image/all_logos__7_-removebg-preview.png',
  '/assets/image/all_logos__8_-removebg-preview.png',
];

export default function CollaboratorsSection() {
  return (
    <section className="relative py-16 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#c9a84c]/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 text-center mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c9a84c]/70 mb-2">Brands We've Worked With</p>
        <h2 className="text-2xl md:text-3xl font-light text-white/90 tracking-wide">
          Our <span className="font-cursive text-[#c9a84c] text-3xl md:text-4xl">Collaborators</span>
        </h2>
      </div>

      {/* Mobile: all logos in rows */}
      <div className="relative px-4 md:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {COLLABORATOR_LOGOS.map((logoSrc, idx) => (
            <div
              key={`${logoSrc}-${idx}`}
              className="flex items-center justify-center rounded-2xl px-3 py-3 bg-[#F4EFE6] border border-[#C8A96E]/35 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <Image
                src={logoSrc}
                alt="Collaborator logo"
                width={220}
                height={90}
                className="h-12 w-auto object-contain opacity-100 transition-all duration-300 filter contrast-125 saturate-115"
                priority={idx < 5}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: marquee */}
      <div className="relative overflow-hidden hidden md:block">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

        <div className="flex collaborators-marquee gap-6 md:gap-10 py-2">
          {[...COLLABORATOR_LOGOS, ...COLLABORATOR_LOGOS].map((logoSrc, idx) => (
            <div
              key={`${logoSrc}-${idx}`}
              className="flex-shrink-0 flex items-center rounded-2xl px-4 md:px-5 py-3 bg-[#F4EFE6] border border-[#C8A96E]/35 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <Image
                src={logoSrc}
                alt="Collaborator logo"
                width={300}
                height={120}
                className="h-14 md:h-20 w-auto object-contain opacity-100 transition-all duration-300 filter contrast-125 saturate-115"
                priority={idx < 5}
                aria-hidden={idx >= COLLABORATOR_LOGOS.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
