import { Activity, BarChart3, MessageSquare, Sparkles, TrendingUp } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';

/**
 * 3D hero visual: a stacked, isometric dashboard preview with floating
 * insight panels. Pure CSS 3D transforms — no WebGL, keeps it fast.
 */
export function HeroVisual() {
  const { ref, tilt } = useTilt<HTMLDivElement>(5);

  return (
    <div className="perspective relative mx-auto w-full max-w-[600px]" ref={ref}>
      {/* Ambient glow — calmer, single hue */}
      <div className="pointer-events-none absolute -inset-12 -z-10">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/30 blur-[110px]" />
      </div>

      <div
        className="preserve-3d relative transition-transform duration-500 ease-out"
        style={{
          transform: `rotateX(${10 + tilt.rx}deg) rotateY(${-16 + tilt.ry}deg)`,
        }}
      >
        {/* Base dashboard panel */}
        <div className="glass-dark relative overflow-hidden rounded-2xl shadow-float-dark ring-1 ring-white/10">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <span className="ml-2 text-xs font-medium text-ink-300">salesbrain · manager</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-[10px] text-ink-400 ring-1 ring-white/10">
              <Activity className="h-3 w-3 text-brand-300" />
              live
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-3 gap-3 p-5">
            {/* KPI cards */}
            <KpiCard label="Calls analyzed" value="1,284" delta="+18%" />
            <KpiCard label="Avg. score" value="82" delta="+4.2" />
            <KpiCard label="Insights" value="312" delta="+27" />

            {/* Chart */}
            <div className="col-span-2 rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10">
              <div className="mb-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-medium text-ink-200">
                  <BarChart3 className="h-3.5 w-3.5 text-brand-300" />
                  Conversation score trend
                </span>
                <span className="text-[10px] text-ink-400">last 30 days</span>
              </div>
              <Sparkline />
            </div>

            {/* Side list */}
            <div className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/10">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                Top agents
              </div>
              <ul className="space-y-2">
                {[
                  ['A. Rivera', 94],
                  ['M. Chen', 89],
                  ['J. Okafor', 87],
                ].map(([name, score]) => (
                  <li key={name as string} className="flex items-center justify-between">
                    <span className="text-[11px] text-ink-200">{name}</span>
                    <span className="rounded-md bg-brand-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-brand-300">
                      {score}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Floating panel: insight */}
        <div
          className="preserve-3d absolute -right-6 -top-8 w-44 animate-float-slow rounded-xl bg-white p-3.5 shadow-float ring-1 ring-ink-100"
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-brand-600">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-semibold text-ink-800">AI Insight</span>
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-ink-500">
            Objection handling improved 23% this week across the renewals pod.
          </p>
        </div>

        {/* Floating panel: conversation */}
        <div
          className="preserve-3d absolute -left-8 bottom-10 w-48 animate-float rounded-xl bg-white p-3.5 shadow-float ring-1 ring-ink-100"
          style={{ transform: 'translateZ(80px)' }}
        >
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-brand-600">
              <MessageSquare className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-semibold text-ink-800">Live call</span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            <div className="flex gap-1.5">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              <p className="text-[10px] leading-snug text-ink-500">
                "Can you walk me through the pricing tiers?"
              </p>
            </div>
            <div className="flex gap-1.5">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
              <p className="text-[10px] leading-snug text-ink-500">
                Agent matched need → Pro plan. Confidence 0.91.
              </p>
            </div>
          </div>
        </div>

        {/* Floating chip: trend */}
        <div
          className="preserve-3d absolute -right-10 bottom-24 flex items-center gap-2 rounded-full bg-ink-900 px-3 py-1.5 text-[11px] font-semibold text-white shadow-float ring-1 ring-white/10 animate-float"
          style={{ transform: 'translateZ(40px)' }}
        >
          <TrendingUp className="h-3.5 w-3.5 text-brand-300" />
          Conversion +6.4%
        </div>
      </div>
    </div>
  );
}

function KpiCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/10">
      <div className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
        {label}
      </div>
      <div className="mt-1 font-display text-lg font-semibold text-white">{value}</div>
      <div className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold text-brand-300">
        <span>▲</span>
        {delta}
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 300 70" className="h-16 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34bcdc" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#34bcdc" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,52 L30,48 L60,54 L90,40 L120,44 L150,30 L180,34 L210,22 L240,26 L270,14 L300,18 L300,70 L0,70 Z"
        fill="url(#spark)"
      />
      <path
        d="M0,52 L30,48 L60,54 L90,40 L120,44 L150,30 L180,34 L210,22 L240,26 L270,14 L300,18"
        fill="none"
        stroke="#76d4f0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="270" cy="14" r="3.5" fill="#76d4f0" />
    </svg>
  );
}
