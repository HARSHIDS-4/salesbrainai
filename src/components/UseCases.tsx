import { SectionHeading } from './ui';
import { Headset, LineChart, ShieldCheck, Users } from 'lucide-react';

const cases = [
  {
    icon: ShieldCheck,
    title: 'Insurance',
    body: 'Standardize how agents handle claims, disclosures, and compliance-sensitive conversations.',
  },
  {
    icon: Users,
    title: 'Sales teams',
    body: 'Coach reps on real calls, replicate what top performers do, and forecast with more confidence.',
  },
  {
    icon: Headset,
    title: 'Customer support',
    body: 'Identify recurring issues, measure resolution quality, and turn support into a revenue signal.',
  },
  {
    icon: LineChart,
    title: 'Performance management',
    body: 'Track team and individual trends over time with scorecards tied to actual outcomes.',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Use cases"
          title="Built for any team that runs conversations at scale."
          subtitle="SalesBrain adapts to the conversation patterns that matter most in your business."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`reveal reveal-delay-${i + 1} card-surface group relative overflow-hidden rounded-2xl p-8`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-ink-900 group-hover:text-brand-300">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-ink-900">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-ink-500">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
