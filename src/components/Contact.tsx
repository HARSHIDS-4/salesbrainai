import { useState } from 'react';
import { ArrowRight, Calendar, Mail, MapPin } from 'lucide-react';
import { SectionHeading } from './ui';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-50/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk."
          subtitle="Book a demo or send us a note. We'll get back to you within one business day."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact details */}
          <div className="reveal space-y-4">
            <a
              href="mailto:hello@salesbrain.ai"
              className="card-surface group flex items-start gap-4 rounded-2xl p-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                  Email
                </div>
                <div className="mt-0.5 text-[14.5px] font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
                  hello@salesbrain.ai
                </div>
                <div className="mt-0.5 text-[13px] text-ink-500">
                  For demos, partnerships, and press.
                </div>
              </div>
            </a>

            <div className="card-surface flex items-start gap-4 rounded-2xl p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Calendar className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                  Book a demo
                </div>
                <div className="mt-0.5 text-[14.5px] font-semibold text-ink-900">
                  30 minutes, on us
                </div>
                <div className="mt-1 text-[13px] leading-relaxed text-ink-500">
                  We'll connect a sample of your calls and walk you through the
                  insights, scorecards, and trends.
                </div>
              </div>
            </div>

            <div className="card-surface flex items-start gap-4 rounded-2xl p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-50 text-ink-600 ring-1 ring-ink-100">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                  Company
                </div>
                <div className="mt-0.5 text-[14.5px] font-semibold text-ink-900">
                  SalesBrain, Inc.
                </div>
                <div className="mt-0.5 text-[13px] text-ink-500">
                  Remote-first, US-based. Operating globally.
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1">
            <div className="card-surface rounded-2xl p-7 sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <ArrowRight className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink-900">
                    Thanks — we'll be in touch.
                  </h3>
                  <p className="mt-2.5 max-w-sm text-[14px] leading-relaxed text-ink-500">
                    Your message is on its way to our team. Expect a reply at{' '}
                    <span className="font-medium text-ink-700">{form.email || 'your inbox'}</span>{' '}
                    within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', company: '', message: '' });
                    }}
                    className="mt-6 text-[14px] font-semibold text-brand-700 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      name="name"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      placeholder="Jordan Lee"
                      required
                    />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      placeholder="jordan@company.com"
                      required
                    />
                  </div>
                  <Field
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                    placeholder="Acme Corp"
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-ink-400"
                    >
                      What can we help with?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your team and what you're looking to improve."
                      className="mt-2 w-full resize-none rounded-xl border-0 bg-ink-50 px-4 py-3 text-[14px] text-ink-900 ring-1 ring-ink-200 transition-all placeholder:text-ink-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14px] font-semibold text-white sm:w-auto"
                  >
                    Send message
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-[12.5px] text-ink-400">
                    By submitting, you agree to our{' '}
                    <a href="#/privacy" className="text-ink-600 hover:underline">
                      Privacy Policy
                    </a>
                    . We'll never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] font-semibold uppercase tracking-wider text-ink-400"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border-0 bg-ink-50 px-4 py-3 text-[14px] text-ink-900 ring-1 ring-ink-200 transition-all placeholder:text-ink-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-400"
      />
    </div>
  );
}
