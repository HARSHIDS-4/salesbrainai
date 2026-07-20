import { SectionHeading } from './ui';
import {
  BarChart3,
  Eye,
  LineChart,
  ListChecks,
  MessagesSquare,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: MessagesSquare,
    title: 'Smart call analysis',
    body: 'Automatic transcription, segmentation, and scoring for every conversation — no manual review required.',
  },
  {
    icon: Users,
    title: 'Agent performance insights',
    body: 'Per-rep scorecards on talk ratio, question quality, objection handling, and outcome trends over time.',
  },
  {
    icon: LineChart,
    title: 'Trend detection',
    body: 'Surface emerging objections, competitor mentions, and deal risks across your portfolio — before they cost you.',
  },
  {
    icon: BarChart3,
    title: 'Conversation intelligence',
    body: 'Search and filter every call by topic, sentiment, and outcome to find what your winning reps do differently.',
  },
  {
    icon: ListChecks,
    title: 'Structured data extraction',
    body: 'Turn free-form dialogue into clean fields — budget, timeline, decision criteria, next steps.',
  },
  {
    icon: Eye,
    title: 'Manager visibility',
    body: 'One dashboard for team health, coaching priorities, and pipeline risk — no spreadsheets required.',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title="What a revenue team needs to learn from every call."
          subtitle="A complete layer for analyzing conversations, coaching agents, and making decisions from structured sales data."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`reveal reveal-delay-${(i % 3) + 1} card-surface group relative overflow-hidden rounded-2xl p-8`}
            >
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-brand-300 transition-transform duration-300 group-hover:scale-105">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="relative mt-6 font-display text-lg font-semibold tracking-tight text-ink-900">
                {f.title}
              </h3>
              <p className="relative mt-3 text-[15px] leading-[1.65] text-ink-500">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
