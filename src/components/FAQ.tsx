import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from './ui';

const faqs = [
  {
    q: "How does SalesBrain analyze my calls?",
    a: "We connect to your existing call sources — conferencing tools, dialers, or uploaded audio. SalesBrain transcribes, segments, and scores each conversation, then extracts structured signals like objections, deal risks, and next steps. No manual tagging required.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are live within a few days. After you connect a call source, analysis starts automatically. There is no lengthy onboarding or professional services engagement required to see your first insights.",
  },
  {
    q: "Is my conversation data secure?",
    a: "Yes. Data is encrypted in transit and at rest. Access is role-based, and conversation logs are audit-ready. We are built to meet enterprise security requirements from day one — you can read more in our Privacy Policy.",
  },
  {
    q: "Which tools does SalesBrain integrate with?",
    a: "We integrate with common conferencing and dialer platforms, and we can push structured insights into your CRM. If you have a specific tool in mind, reach out — we are expanding integrations based on customer needs.",
  },
  {
    q: "Is SalesBrain a coaching tool or an analytics tool?",
    a: "Both. Managers get analytics — trends, team health, pipeline risk — and coaching workflows — per-rep scorecards and prioritized feedback. The goal is to turn analysis into action, not just another dashboard.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing scales with team size and conversation volume. We offer pilot programs for early customers. Book a demo and we will share a plan that fits your team.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          subtitle="The essentials on how SalesBrain works, what it integrates with, and how to get started."
        />

        <div className="reveal reveal-delay-2 mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink-100 transition-shadow duration-300 hover:shadow-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[15px] font-semibold tracking-tight text-ink-900 sm:text-base">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-[1.7] text-ink-500">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="reveal reveal-delay-3 mt-12 text-center text-[14px] text-ink-500">
          Still have questions?{" "}
          <a
            href="mailto:hello@salesbrain.ai"
            className="font-semibold text-brand-700 hover:underline"
          >
            Email us
          </a>{" "}
          — we reply within one business day.
        </p>
      </div>
    </section>
  );
}
