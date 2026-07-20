import { SectionHeading } from './ui';
import { Building2, Mail, MapPin } from 'lucide-react';

const facts = [
  { icon: Building2, label: 'Company', value: 'SalesBrain, Inc.' },
  { icon: MapPin, label: 'Operating model', value: 'Remote-first, US-based team' },
  { icon: Mail, label: 'Contact', value: 'hello@salesbrain.ai' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About"
              title="The intelligence layer for sales conversations."
              subtitle="SalesBrain is an AI-powered platform that helps revenue teams learn from every call. We turn unstructured conversations into structured data — so coaching gets sharper, forecasts get steadier, and good plays get repeated."
            />
            <div className="reveal reveal-delay-3 mt-8 space-y-5 text-[15.5px] leading-[1.7] text-ink-600">
              <p>
                Most sales intelligence tools tell you what happened. SalesBrain
                tells you why — and what to do next. We focus on the signals that
                actually move revenue: objection handling, discovery quality,
                deal risk, and the behaviors that separate top performers from
                the rest of the team.
              </p>
              <p>
                We are an early-stage, remote-first company building for the
                realities of modern revenue teams: distributed reps, fragmented
                tooling, and managers who need clarity, not more dashboards to
                maintain.
              </p>
            </div>
          </div>

          {/* Company facts card */}
          <div className="reveal reveal-delay-2">
            <div className="card-surface overflow-hidden rounded-2xl">
              <div className="border-b border-ink-100 bg-ink-50/50 px-7 py-6">
                <h3 className="font-display text-base font-semibold tracking-tight text-ink-900">
                  Company
                </h3>
                <p className="mt-1.5 text-[13.5px] text-ink-500">
                  The essentials, for due-diligence and partnership conversations.
                </p>
              </div>
              <ul className="divide-y divide-ink-100">
                {facts.map((f) => (
                  <li key={f.label} className="flex items-center gap-4 px-7 py-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <f.icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                        {f.label}
                      </div>
                      <div className="mt-0.5 text-[14.5px] font-medium text-ink-800">
                        {f.value}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-ink-50/50 px-7 py-5">
                <p className="text-[13px] leading-relaxed text-ink-500">
                  Looking to partner or integrate? Reach out at{' '}
                  <a
                    href="mailto:hello@salesbrain.ai"
                    className="font-semibold text-brand-700 hover:underline"
                  >
                    hello@salesbrain.ai
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
