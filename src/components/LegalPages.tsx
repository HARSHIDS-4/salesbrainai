import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Logo } from './Nav';

/**
 * Minimal hash-based router for legal pages. When the URL hash matches
 * a legal route, we render that page instead of the marketing landing.
 * Routes: #/privacy, #/terms
 */
export function LegalPages({ route }: { route: 'privacy' | 'terms' | null }) {
  useEffect(() => {
    if (route) window.scrollTo(0, 0);
  }, [route]);

  if (!route) return null;

  return (
    <div className="min-h-screen bg-ink-50">
      <header className="border-b border-ink-100 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-[17px] font-semibold tracking-tight text-ink-900">
              SalesBrain
            </span>
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-500 transition-colors hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        {route === 'privacy' ? <PrivacyPolicy /> : <TermsOfService />}
      </main>

      <footer className="border-t border-ink-100 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-7 sm:px-8">
          <p className="text-[12.5px] text-ink-400">
            © {new Date().getFullYear()} SalesBrain, Inc. All rights reserved. ·{' '}
            <a href="#/privacy" className="transition-colors hover:text-ink-700">Privacy</a> ·{' '}
            <a href="#/terms" className="transition-colors hover:text-ink-700">Terms</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <article>
      <h1 className="font-display text-[2rem] font-semibold tracking-tighter text-ink-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-[13px] text-ink-400">Last updated: July 16, 2026</p>

      <div className="prose-legal mt-10 space-y-9">
        <Section title="Overview">
          SalesBrain, Inc. ("SalesBrain," "we," "us") builds AI-powered tools
          that analyze sales conversations. This policy explains what data we
          collect, how we use it, and the choices you have. We design our
          systems to collect the minimum data needed to deliver our service and
          to protect it with enterprise-grade controls.
        </Section>

        <Section title="Data we process">
          <ul>
            <li><strong>Conversation data:</strong> audio recordings, transcripts, and metadata from calls you connect for analysis.</li>
            <li><strong>Account data:</strong> name, work email, company name, and team structure you provide when signing up.</li>
            <li><strong>Usage data:</strong> product interactions (e.g., features used, dashboards viewed) used to improve the product.</li>
            <li><strong>Technical data:</strong> IP address, browser type, and device information collected automatically.</li>
          </ul>
        </Section>

        <Section title="How we use your data">
          <p>We use your data to:</p>
          <ul>
            <li>Transcribe, analyze, and extract insights from your sales conversations.</li>
            <li>Generate agent scorecards, trend reports, and coaching recommendations.</li>
            <li>Provide, maintain, and secure the SalesBrain platform.</li>
            <li>Improve our models and product — using aggregated, de-identified patterns where possible.</li>
          </ul>
        </Section>

        <Section title="How we protect your data">
          <p>
            Data is encrypted in transit (TLS) and at rest. Access is
            role-based and logged. We do not sell your data, and we do not
            share conversation content with third parties for advertising.
          </p>
        </Section>

        <Section title="Data retention">
          <p>
            We retain conversation data for as long as your account is active
            or as needed to provide the service. You can request deletion of
            your data at any time by contacting{' '}
            <a href="mailto:privacy@salesbrain.ai" className="text-brand-700 hover:underline">
              privacy@salesbrain.ai
            </a>
            . We will process verified requests within 30 days.
          </p>
        </Section>

        <Section title="Your rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Object to or restrict certain processing.</li>
            <li>Export your data in a portable format.</li>
          </ul>
          <p>
            To exercise these rights, email{' '}
            <a href="mailto:privacy@salesbrain.ai" className="text-brand-700 hover:underline">
              privacy@salesbrain.ai
            </a>
            .
          </p>
        </Section>

        <Section title="Sub-processors">
          <p>
            We use trusted cloud infrastructure and AI providers to deliver the
            service. We require all sub-processors to maintain equivalent
            security and privacy commitments. A current list is available on
            request.
          </p>
        </Section>

        <Section title="International transfers">
          <p>
            SalesBrain is remote-first and may process data across regions. We
            apply appropriate safeguards (such as standard contractual clauses)
            for cross-border data transfers.
          </p>
        </Section>

        <Section title="Children's data">
          <p>
            SalesBrain is a B2B product and is not intended for use by
            individuals under 18. We do not knowingly collect data from minors.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy as our product evolves. Material changes
            will be posted on this page with an updated revision date. We
            encourage you to review this page periodically.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy or your data? Email{' '}
            <a href="mailto:privacy@salesbrain.ai" className="text-brand-700 hover:underline">
              privacy@salesbrain.ai
            </a>
            .
          </p>
        </Section>
      </div>
    </article>
  );
}

function TermsOfService() {
  return (
    <article>
      <h1 className="font-display text-[2rem] font-semibold tracking-tighter text-ink-900 sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-3 text-[13px] text-ink-400">Last updated: July 16, 2026</p>

      <div className="prose-legal mt-10 space-y-9">
        <Section title="Acceptance of terms">
          By accessing or using SalesBrain, you agree to these Terms of Service.
          If you are using SalesBrain on behalf of a company, you represent that
          you have authority to bind that company.
        </Section>

        <Section title="Description of service">
          <p>
            SalesBrain provides AI-powered analysis of sales conversations,
            including transcription, insight extraction, agent performance
            reporting, and coaching support. We may update or modify features
            as the product evolves.
          </p>
        </Section>

        <Section title="Your responsibilities">
          <ul>
            <li>You are responsible for the accuracy of the data you submit and for having rights to analyze conversations you upload.</li>
            <li>You agree not to use SalesBrain for unlawful purposes or to violate any applicable law or third-party rights.</li>
            <li>You are responsible for maintaining the security of your account credentials.</li>
          </ul>
        </Section>

        <Section title="Acceptable use">
          <p>You agree not to:</p>
          <ul>
            <li>Reverse engineer, decompile, or attempt to extract our models or proprietary algorithms.</li>
            <li>Resell or sublicense access to SalesBrain without written permission.</li>
            <li>Upload content that is unlawful, infringing, or that you do not have rights to process.</li>
            <li>Interfere with or disrupt the service or its infrastructure.</li>
          </ul>
        </Section>

        <Section title="Data ownership">
          <p>
            You retain ownership of your conversation data. SalesBrain retains a
            limited license to process that data solely to provide and improve
            the service. We do not claim ownership of your content.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            SalesBrain, its design, and its underlying technology are the
            property of SalesBrain, Inc. These Terms do not grant you any right
            to our trademarks, logos, or proprietary methods.
          </p>
        </Section>

        <Section title="Fees and billing">
          <p>
            Paid plans are billed according to the pricing agreed at signup.
            Fees are non-refundable except where required by law. We will
            provide notice before any material pricing change.
          </p>
        </Section>

        <Section title="Service availability">
          <p>
            We target high availability but do not guarantee uninterrupted
            service. We may schedule maintenance and will strive to minimize
            disruption. We are not liable for outages beyond our reasonable
            control.
          </p>
        </Section>

        <Section title="Termination">
          <p>
            You may stop using SalesBrain at any time. We may suspend or
            terminate access for violations of these Terms or for non-payment.
            Upon termination, your data will be processed per our retention
            policy in the Privacy Policy.
          </p>
        </Section>

        <Section title="Disclaimers">
          <p>
            SalesBrain is provided "as is." We do not warrant that insights or
            scores are error-free or that the service will meet all your
            requirements. AI-generated outputs should be reviewed before
            acting on them.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the maximum extent permitted by law, SalesBrain, Inc. shall not
            be liable for indirect, incidental, or consequential damages
            arising from your use of the service.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These Terms are governed by the laws of the United States, without
            regard to conflict-of-laws principles. Disputes will be resolved in
            the courts of competent jurisdiction.
          </p>
        </Section>

        <Section title="Changes to these Terms">
          <p>
            We may update these Terms periodically. Material changes will be
            posted on this page with an updated revision date. Continued use
            of SalesBrain after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these Terms? Email{' '}
            <a href="mailto:hello@salesbrain.ai" className="text-brand-700 hover:underline">
              hello@salesbrain.ai
            </a>
            .
          </p>
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-lg font-semibold tracking-tight text-ink-900">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-[1.7] text-ink-600 [&_a]:font-semibold [&_a]:text-brand-700 [&_a:hover]:underline [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}
