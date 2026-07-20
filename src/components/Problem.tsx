import { SectionHeading } from './ui';
import { AlertTriangle, Database, MessagesSquare, UserX } from 'lucide-react';

const problems = [
  {
    icon: MessagesSquare,
    title: 'Calls live everywhere',
    body: 'Zoom, dialer, CRM — conversations are scattered across tools, untagged, and impossible to compare at scale.',
  },
  {
    icon: UserX,
    title: 'Coaching is guesswork',
    body: 'Managers review a handful of calls per rep. Most interactions never become feedback, so patterns stay hidden.',
  },
  {
    icon: Database,
    title: 'Insights stay buried',
    body: 'Objections, win/loss signals, and deal risks are locked in audio. They never become data your team can act on.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The problem"
          title="Your best sales data is trapped in conversations."
          subtitle="Teams run thousands of calls every week. Without structure, that volume becomes noise — and the patterns that drive revenue stay invisible."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${i + 1} card-surface rounded-2xl p-8`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-50 text-ink-600 ring-1 ring-ink-100">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-ink-900">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-ink-500">{p.body}</p>
            </article>
          ))}
        </div>

        {/* Inline callout */}
        <div className="reveal reveal-delay-4 mt-8 flex items-center gap-3 rounded-2xl bg-ink-50 px-7 py-5 text-[14px] leading-relaxed text-ink-600 ring-1 ring-ink-100">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500" />
          <span>
            The result: coaching stays reactive, forecasts drift, and your top
            performers' plays never get repeated across the team.
          </span>
        </div>
      </div>
    </section>
  );
}
