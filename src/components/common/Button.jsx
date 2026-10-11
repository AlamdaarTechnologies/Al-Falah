import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost' | 'dark'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  className = '',
  as = 'button',
  href,
  onClick,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded text-center transition-colors duration-150 select-none focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-4 py-2 gap-2",
    lg: "text-sm sm:text-base px-5 py-2.5 gap-2"
  };

  const variantStyles = {
    primary: "bg-navy-900 hover:bg-brand-800 text-white border border-navy-800 hover:border-gold-500/50 focus:ring-navy-900 shadow-sm transition-all",
    gold: "bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold focus:ring-gold-400 shadow-sm transition-all",
    secondary: "bg-brand-700 hover:bg-brand-800 text-white focus:ring-brand-700 shadow-sm",
    dark: "bg-slate-900 hover:bg-slate-800 text-white border border-slate-800",
    outline: "border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:text-navy-900 hover:border-navy-400 focus:ring-slate-400 shadow-sm",
    outlineGold: "border border-gold-500/80 bg-transparent hover:bg-gold-500/10 text-gold-400 hover:text-gold-300 focus:ring-gold-500",
    whatsapp: "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500 shadow-sm",
    ghost: "text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:ring-slate-300",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (as === 'a' || href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClass} onClick={onClick} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
