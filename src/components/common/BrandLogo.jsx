import React from 'react';

/**
 * BrandLogo Component for AL FALAH HARDWARE & SANITARY
 * Displays the authentic AF circular pipe fitting emblem & corporate typography.
 * Supports light & dark modes, icon-only, compact and full banner variants.
 */
export function AfEmblem({ size = 42, className = '', isLight = false }) {
  const goldColor = isLight ? '#F2D07E' : '#D4A034';
  const navyColor = isLight ? '#FFFFFF' : '#0B1B38';

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 group-hover:scale-105 ${className}`}
    >
      <defs>
        <linearGradient id={`goldGrad-${isLight ? 'light' : 'dark'}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5B853" />
          <stop offset="50%" stopColor="#D4A034" />
          <stop offset="100%" stopColor="#B88226" />
        </linearGradient>
        <linearGradient id={`navyGrad-${isLight ? 'light' : 'dark'}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isLight ? '#FFFFFF' : '#142B56'} />
          <stop offset="100%" stopColor={isLight ? '#F0F4F9' : '#0B1B38'} />
        </linearGradient>
      </defs>

      {/* Gold Circular Pipe Fitting Ring */}
      <circle 
        cx="256" 
        cy="256" 
        r="195" 
        stroke={`url(#goldGrad-${isLight ? 'light' : 'dark'})`} 
        strokeWidth="26" 
        fill="none" 
      />
      
      {/* Top Pipe Flange / Coupling Fitting */}
      <g transform="translate(256, 61)">
        <rect x="-16" y="-18" width="32" height="24" rx="3" fill={`url(#goldGrad-${isLight ? 'light' : 'dark'})`} />
        <rect x="-24" y="-12" width="8" height="12" rx="2" fill={`url(#goldGrad-${isLight ? 'light' : 'dark'})`} />
        <rect x="16" y="-12" width="8" height="12" rx="2" fill={`url(#goldGrad-${isLight ? 'light' : 'dark'})`} />
        <line x1="-16" y1="-6" x2="16" y2="-6" stroke={isLight ? '#D4A034' : '#9A6B15'} strokeWidth="2" />
      </g>

      {/* Monogram AF */}
      {/* 'A' Left Leg (Navy Blue in light theme / White in dark theme) */}
      <path 
        d="M192 145 L130 355 L182 355 L204 278 L238 278 L222 225 L214 250 L192 145 Z" 
        fill={`url(#navyGrad-${isLight ? 'light' : 'dark'})`} 
      />
      
      {/* 'A' Right Leg & Crossbar (Lustrous Gold) */}
      <path 
        d="M192 145 L208 225 L260 355 L310 355 L242 205 L228 145 Z" 
        fill={`url(#goldGrad-${isLight ? 'light' : 'dark'})`} 
      />
      <polygon 
        points="172,285 272,285 260,250 184,250" 
        fill={`url(#goldGrad-${isLight ? 'light' : 'dark'})`} 
      />

      {/* 'F' Top Arm and Middle Arm (Navy/White) */}
      <path 
        d="M236 155 L382 155 L354 212 L254 212 Z" 
        fill={`url(#navyGrad-${isLight ? 'light' : 'dark'})`} 
      />
      <path 
        d="M246 235 L346 235 L334 278 L262 278 Z" 
        fill={`url(#navyGrad-${isLight ? 'light' : 'dark'})`} 
      />
    </svg>
  );
}

export default function BrandLogo({ 
  variant = 'full', 
  theme = 'dark', // 'dark' (navy text for white bg) or 'light' (white text for navy bg)
  size = 'md', 
  showTagline = true,
  className = '',
  onClick
}) {
  const isLight = theme === 'light';

  const sizeMap = {
    sm: { icon: 34, title: 'text-sm font-extrabold', sub: 'text-[9px]', gap: 'gap-2' },
    md: { icon: 44, title: 'text-base sm:text-lg font-extrabold', sub: 'text-[10px] sm:text-[11px]', gap: 'gap-2.5' },
    lg: { icon: 56, title: 'text-xl sm:text-2xl font-black', sub: 'text-xs sm:text-sm', gap: 'gap-3' },
    xl: { icon: 72, title: 'text-2xl sm:text-3xl font-black', sub: 'text-xs sm:text-sm', gap: 'gap-4' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} onClick={onClick}>
        <AfEmblem size={currentSize.icon} isLight={isLight} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div 
        className={`inline-flex flex-col items-center text-center group cursor-pointer ${className}`}
        onClick={onClick}
      >
        <AfEmblem size={currentSize.icon * 1.3} isLight={isLight} />
        <div className="mt-2">
          <span className={`block tracking-tight uppercase leading-none font-black ${isLight ? 'text-white' : 'text-navy-900'} ${currentSize.title}`}>
            AL FALAH
          </span>
          <span className={`block tracking-widest uppercase font-bold mt-1 text-gold-500 ${currentSize.sub}`}>
            HARDWARE & SANITARY
          </span>
        </div>
      </div>
    );
  }

  // Full Horizontal Lockup (Default)
  return (
    <div 
      className={`inline-flex items-center ${currentSize.gap} group select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <AfEmblem size={currentSize.icon} isLight={isLight} />
      <div className="flex flex-col text-left">
        <span className={`tracking-tight uppercase leading-tight font-extrabold transition-colors ${
          isLight 
            ? 'text-white group-hover:text-gold-300' 
            : 'text-navy-900 group-hover:text-brand-700'
        } ${currentSize.title}`}>
          AL FALAH
        </span>
        {showTagline && (
          <span className={`font-bold tracking-wider uppercase leading-none mt-0.5 ${
            isLight ? 'text-gold-400' : 'text-gold-600'
          } ${currentSize.sub}`}>
            HARDWARE & SANITARY
          </span>
        )}
      </div>
    </div>
  );
}
