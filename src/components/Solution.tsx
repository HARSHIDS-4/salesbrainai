import { SectionHeading } from './ui';
import { ArrowRight, ClipboardList, Compass, Cpu, Ear } from 'lucide-react';

const steps = [
  {
    icon: Ear,
    title: 'Conversation analysis',
    body: 'Every call is transcribed, segmented, and tagged — talk ratio, questions, objections, and outcome.',
  },
  {
    icon: Cpu,
    title: 'Insight extraction',
    body: 'AI pulls structured signals: deal risks, competitor mentions, pricing friction, and buying intent.',
  },
  {
    icon: ClipboardList,
    title: 'Agent coaching',
    body: 'Per-rep scorecards show what to repeat and what to fix — grounded in actual conversations, not guesswork.',
  },
  {
    icon: Compass,
    title: 'Decision support',
    body: 'Managers see trends across the pipeline and act on patterns instead of anecdotes.',
  },
];

export function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-50/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The solution"
          title="From raw conversations to structured intelligence."
          subtitle="SalesBrain turns unstructured call data into a clean, queryable layer your team can act on — across coaching, forecasting, and strategy."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} card-surface group relative rounded-2xl p-7`}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-brand-300">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl font-semibold text-ink-100">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-base font-semibold tracking-tight text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-500">{s.body}</p>

              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-ink-200 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
