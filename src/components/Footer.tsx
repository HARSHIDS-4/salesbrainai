import { Logo } from './Nav';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '#platform' },
      { label: 'Features', href: '#features' },
      { label: 'Use cases', href: '#use-cases' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Book demo', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#/privacy' },
      { label: 'Terms of Service', href: '#/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display text-[17px] font-semibold tracking-tight text-ink-900">
                SalesBrain
              </span>
            </a>
            <p className="mt-5 text-[14px] leading-[1.65] text-ink-500">
              AI-powered sales intelligence for teams that want to learn from
              every conversation and coach with clarity.
            </p>
            <a
              href="mailto:hello@salesbrain.ai"
              className="mt-4 inline-block text-[14px] font-medium text-brand-700 hover:underline"
            >
              hello@salesbrain.ai
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-ink-500 transition-colors hover:text-ink-900"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-7 sm:flex-row">
          <p className="text-[12.5px] text-ink-400">
            © {new Date().getFullYear()} SalesBrain, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[12.5px] text-ink-400">
            <a href="#/privacy" className="transition-colors hover:text-ink-700">Privacy</a>
            <a href="#/terms" className="transition-colors hover:text-ink-700">Terms</a>
            <a href="mailto:hello@salesbrain.ai" className="transition-colors hover:text-ink-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
