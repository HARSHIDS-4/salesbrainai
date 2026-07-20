import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  dark?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span
          className={`reveal inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            dark
              ? 'bg-white/5 text-brand-300 ring-1 ring-white/10'
              : 'bg-brand-50 text-brand-700 ring-1 ring-brand-100'
          }`}
        >
          <span className="h-1 w-1 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`reveal reveal-delay-1 mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-tighter sm:text-[2.5rem] ${
          dark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`reveal reveal-delay-2 mt-5 text-[17px] leading-[1.65] ${
            dark ? 'text-ink-300' : 'text-ink-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2';
  const styles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'text-ink-600 hover:text-ink-900 hover:bg-ink-50',
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
      <span className="h-1 w-1 rounded-full bg-current" />
      {children}
    </span>
  );
}
