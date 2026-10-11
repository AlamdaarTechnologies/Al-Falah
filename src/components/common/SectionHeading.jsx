import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  className = ""
}) {
  return (
    <div className={`${centered ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-3xl'} ${className}`}>
      {badge && (
        <p className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-1.5 flex items-center gap-1.5 inline-flex">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          <span>{badge}</span>
        </p>
      )}
      
      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
