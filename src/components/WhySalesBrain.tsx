import { SectionHeading } from './ui';
import { Gauge, Lightbulb, Repeat, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: TrendingUp,
    title: 'Better coaching',
    body: 'Ground feedback in real conversations instead of gut feel and a handful of sampled calls.',
  },
  {
    icon: Gauge,
    title: 'Faster insights',
    body: 'Go from call to structured signal in minutes, not after a week of manual review.',
  },
  {
    icon: Repeat,
    title: 'Improved conversions',
    body: 'Find what winning reps do differently and repeat it across the whole team.',
  },
  {
    icon: Lightbulb,
    title: 'Structured intelligence',
    body: 'A clean, queryable layer of what your customers actually said — and why.',
  },
];

export function WhySalesBrain() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-brand-50/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why SalesBrain"
          title="The business value, without the hype."
          subtitle="SalesBrain is built to make coaching sharper, decisions faster, and revenue more repeatable."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <article
              key={v.title}
              className={`reveal reveal-delay-${i + 1} card-surface group relative overflow-hidden rounded-2xl p-8`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-brand-300 transition-transform duration-300 group-hover:scale-105">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-ink-900">
                {v.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-ink-500">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
