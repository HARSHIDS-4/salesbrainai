import { SectionHeading } from './ui';
import { Cpu, FileCheck, Layers, Lock, ShieldCheck, Workflow } from 'lucide-react';

const blocks = [
  {
    icon: Layers,
    title: 'Scalable architecture',
    body: 'Built on cloud-native infrastructure that handles thousands of conversations per week without slowing your workflow.',
  },
  {
    icon: Workflow,
    title: 'AI-first workflow',
    body: 'AI handles transcription, tagging, and summarization — people focus on decisions and coaching.',
  },
  {
    icon: Lock,
    title: 'Secure by design',
    body: 'Role-based access, data encryption in transit and at rest, and audit trails that fit enterprise requirements.',
  },
  {
    icon: Cpu,
    title: 'Built for modern teams',
    body: 'Designed for distributed revenue orgs that live in calls, CRMs, and messaging tools.',
  },
];

const badges = [
  { icon: ShieldCheck, label: 'Data encrypted in transit & at rest' },
  { icon: FileCheck, label: 'Role-based access control' },
  { icon: Lock, label: 'Audit-ready conversation logs' },
  { icon: Layers, label: 'Cloud-native, horizontally scalable' },
];

export function Trust() {
  return (
    <section className="relative bg-ink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Trust & credibility"
          title="Engineered for enterprise readiness."
          subtitle="SalesBrain is built to meet the standards of security and compliance-conscious teams — without the enterprise bloat."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className={`reveal reveal-delay-${i + 1} card-surface rounded-2xl p-7`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-brand-300">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink-900">
                {b.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-500">{b.body}</p>
            </div>
          ))}
        </div>

        {/* Honest capability badges — no fake logos, no invented metrics */}
        <div className="reveal reveal-delay-3 mt-6 rounded-2xl border border-ink-100 bg-white p-7 sm:p-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-400">
            What you can count on
          </p>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <b.icon className="h-4 w-4" />
                </span>
                <span className="text-[13.5px] font-medium text-ink-700">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
