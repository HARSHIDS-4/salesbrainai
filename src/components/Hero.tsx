import { ArrowRight, Play, ShieldCheck } from 'lucide-react';
import { Button } from './ui';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]">
        <div className="absolute left-1/2 top-0 h-[460px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-100/60 via-brand-50/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="reveal inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-600 shadow-soft ring-1 ring-ink-100">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
              </span>
              AI sales intelligence for modern revenue teams
            </span>

            <h1 className="reveal reveal-delay-1 mt-7 font-display text-[2.75rem] font-semibold leading-[1.06] tracking-tighter text-ink-900 sm:text-5xl md:text-[3.5rem]">
              Close more deals by learning from{' '}
              <span className="text-gradient">every sales conversation</span>.
            </h1>

            <p className="reveal reveal-delay-2 mt-6 max-w-lg text-[18px] leading-[1.6] text-ink-500">
              SalesBrain turns your sales calls into structured data — agent
              scorecards, deal-risk signals, and coaching priorities in one
              dashboard. So managers coach what matters and reps repeat what wins.
            </p>

            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="#contact" className="px-6 py-3.5 text-[15px]">
                Book a demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button variant="secondary" href="#platform" className="px-6 py-3.5 text-[15px]">
                <Play className="h-4 w-4 text-brand-600" />
                See the platform
              </Button>
            </div>

            <div className="reveal reveal-delay-4 mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand-600" />
                Built for enterprise security
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-ink-300" />
                Live in days, not quarters
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="reveal reveal-delay-2">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
