import { SectionHeading } from './ui';
import {
  ChevronDown,
  Filter,
  Headphones,
  Search,
  Settings,
  Star,
} from 'lucide-react';

export function PlatformPreview() {
  return (
    <section id="platform" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark mask-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="The platform"
          title="A manager dashboard built for clarity."
          subtitle="One workspace for conversation intelligence, agent coaching, and pipeline risk — designed to scale with your team."
        />

        {/* Dashboard frame */}
        <div className="reveal reveal-delay-2 mt-16">
          <div className="overflow-hidden rounded-2xl bg-ink-900 shadow-float-dark ring-1 ring-white/10">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <span className="ml-2 text-xs font-medium text-ink-400">
                  app.salesbrain.ai / dashboard
                </span>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-ink-400 ring-1 ring-white/10">
                  Q3 · Renewals pod
                </span>
                <Settings className="h-4 w-4 text-ink-400" />
              </div>
            </div>

            {/* Body: sidebar + main */}
            <div className="grid grid-cols-12">
              {/* Sidebar */}
              <aside className="col-span-3 hidden border-r border-white/10 p-5 lg:block">
                <div className="space-y-1">
                  {[
                    ['Overview', true],
                    ['Conversations', false],
                    ['Agents', false],
                    ['Insights', false],
                    ['Coaching', false],
                    ['Reports', false],
                  ].map(([label, active]) => (
                    <div
                      key={label as string}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                        active
                          ? 'bg-brand-500/15 text-brand-200 ring-1 ring-brand-400/20'
                          : 'text-ink-400 hover:bg-white/5'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-brand-300' : 'bg-white/20'}`} />
                      {label}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                    This week
                  </div>
                  <div className="mt-2 font-display text-2xl font-semibold text-white">+6.4%</div>
                  <div className="text-[11px] text-brand-300">Conversion lift</div>
                </div>
              </aside>

              {/* Main */}
              <div className="col-span-12 p-5 lg:col-span-9 lg:p-6">
                {/* Top bar */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold">Overview</h3>
                    <p className="text-xs text-ink-400">Updated 2 min ago</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs text-ink-300 ring-1 ring-white/10 sm:flex">
                      <Search className="h-3.5 w-3.5" />
                      Search conversations
                    </div>
                    <button className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs text-ink-300 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                      <Filter className="h-3.5 w-3.5" />
                      Filter
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ['Calls analyzed', '1,284', '+18%'],
                    ['Avg. score', '82', '+4.2'],
                    ['Coaching actions', '96', '+12'],
                    ['At-risk deals', '7', '-3'],
                  ].map(([label, value, delta]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10"
                    >
                      <div className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                        {label}
                      </div>
                      <div className="mt-1.5 font-display text-xl font-semibold text-white">
                        {value}
                      </div>
                      <div className="mt-0.5 text-[11px] font-semibold text-brand-300">
                        {delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart + side */}
                <div className="mt-3 grid gap-3 lg:grid-cols-3">
                  <div className="rounded-xl bg-white/[0.03] p-5 ring-1 ring-white/10 lg:col-span-2">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-ink-200">
                        Team conversation score
                      </span>
                      <span className="text-[10px] text-ink-400">30-day trend</span>
                    </div>
                    <BigChart />
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-5 ring-1 ring-white/10">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-medium text-ink-200">Coaching queue</span>
                      <Headphones className="h-3.5 w-3.5 text-brand-300" />
                    </div>
                    <ul className="space-y-3.5">
                      {[
                        ['M. Chen', 'Objection handling', 'High'],
                        ['J. Okafor', 'Discovery questions', 'Med'],
                        ['A. Rivera', 'Closing technique', 'Low'],
                      ].map(([agent, topic, prio]) => (
                        <li key={agent} className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-[12px] font-medium text-ink-100">{agent}</div>
                            <div className="text-[11px] text-ink-400">{topic}</div>
                          </div>
                          <span
                            className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                              prio === 'High'
                                ? 'bg-red-500/15 text-red-300'
                                : prio === 'Med'
                                ? 'bg-amber-500/15 text-amber-300'
                                : 'bg-brand-500/15 text-brand-300'
                            }`}
                          >
                            {prio}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recent calls */}
                <div className="mt-3 overflow-hidden rounded-xl bg-white/[0.03] ring-1 ring-white/10">
                  <div className="border-b border-white/10 px-5 py-3 text-xs font-medium text-ink-200">
                    Recent conversations
                  </div>
                  <div className="divide-y divide-white/5">
                    {[
                      ['Acme Corp · Renewal', 'A. Rivera', 'Win', 94],
                      ['Globex · Discovery', 'M. Chen', 'Pending', 71],
                      ['Initech · Demo', 'J. Okafor', 'Win', 88],
                    ].map(([deal, agent, status, score]) => (
                      <div
                        key={deal as string}
                        className="grid grid-cols-12 items-center gap-2 px-5 py-3 text-xs transition-colors hover:bg-white/[0.02]"
                      >
                        <span className="col-span-5 font-medium text-ink-100 sm:col-span-4">
                          {deal}
                        </span>
                        <span className="col-span-3 hidden text-ink-400 sm:block">{agent}</span>
                        <span className="col-span-3 sm:col-span-2">
                          <span
                            className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                              status === 'Win'
                                ? 'bg-brand-500/15 text-brand-300'
                                : 'bg-amber-500/15 text-amber-300'
                            }`}
                          >
                            {status}
                          </span>
                        </span>
                        <span className="col-span-4 flex items-center justify-end gap-1.5 sm:col-span-3">
                          <Star className="h-3 w-3 text-brand-300" />
                          <span className="font-semibold text-ink-100">{score}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="reveal reveal-delay-3 mt-6 text-center text-xs text-ink-500">
          Dashboard preview — representative of the upcoming SalesBrain manager workspace.
        </p>
      </div>
    </section>
  );
}

function BigChart() {
  return (
    <svg viewBox="0 0 600 140" className="h-36 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34bcdc" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#34bcdc" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[28, 56, 84, 112].map((y) => (
        <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.04)" />
      ))}
      <path
        d="M0,104 L50,96 L100,108 L150,84 L200,90 L250,64 L300,72 L350,50 L400,58 L450,38 L500,44 L550,26 L600,32 L600,140 L0,140 Z"
        fill="url(#area)"
      />
      <path
        d="M0,104 L50,96 L100,108 L150,84 L200,90 L250,64 L300,72 L350,50 L400,58 L450,38 L500,44 L550,26 L600,32"
        fill="none"
        stroke="#76d4f0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="550" cy="26" r="4" fill="#76d4f0" />
      <circle cx="550" cy="26" r="8" fill="#76d4f0" fillOpacity="0.2" />
    </svg>
  );
}
