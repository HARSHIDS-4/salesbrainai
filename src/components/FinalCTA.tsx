import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-16 text-center shadow-float-dark ring-1 ring-white/10 sm:px-16 sm:py-20">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark mask-radial-b" />
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/12 blur-3xl" />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-300 ring-1 ring-white/10">
            <span className="h-1 w-1 rounded-full bg-current" />
            Get started
          </span>

          <h2 className="mx-auto mt-7 max-w-2xl font-display text-[2rem] font-semibold leading-[1.12] tracking-tighter text-white sm:text-[2.5rem]">
            See SalesBrain on your own conversations.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.6] text-ink-300">
            Book a 30-minute demo. We'll connect a sample of your calls and show
            you the insights, scorecards, and trends your team has been missing.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[14px] font-semibold text-ink-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:hello@salesbrain.ai"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-6 py-3.5 text-[14px] font-semibold text-white ring-1 ring-white/15 transition-all duration-300 hover:bg-white/10"
            >
              Contact sales
            </a>
          </div>

          <p className="mt-7 text-[12.5px] text-ink-500">
            No commitment · Live in days · Built for enterprise security
          </p>
        </div>
      </div>
    </section>
  );
}
