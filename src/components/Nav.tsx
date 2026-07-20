import { useEffect, useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Platform', href: '#platform' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-100 bg-white/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-display text-[17px] font-semibold tracking-tight text-ink-900">
            SalesBrain
          </span>
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-ink-500 transition-colors hover:bg-ink-50 hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#contact"
            className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-ink-500 transition-colors hover:text-ink-900"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="btn-primary rounded-xl px-4 py-2.5 text-[13.5px] font-semibold text-white"
          >
            Book demo
          </a>
        </div>

        {/* Mobile: always-visible demo CTA + menu */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="btn-primary rounded-lg px-3.5 py-2 text-xs font-semibold text-white"
          >
            Book demo
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 ring-1 ring-ink-200 transition-colors hover:bg-ink-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-ink-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`grid h-8 w-8 place-items-center rounded-lg bg-ink-900 shadow-soft ${className}`}
    >
      <Brain className="h-[18px] w-[18px] text-brand-300" />
    </span>
  );
}
