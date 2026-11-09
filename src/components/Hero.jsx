import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Zap, Activity, Cpu, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background radial glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/20 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium backdrop-blur-md hover:border-indigo-500/50 transition">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
            <span>Next-Gen Cloud Experience</span>
            <span className="text-slate-500">|</span>
            <span className="text-white font-semibold flex items-center gap-1">
              Zero Config Setup <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build, launch & scale <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">
              at the speed of thought
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nova empowers developers and modern product teams to orchestrate services,
            monitor realtime telemetry, and ship globally without infrastructure overhead.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Start Free 14-Day Trial
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#showcase"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
            >
              <Play className="w-4 h-4 fill-current text-indigo-400" />
              Watch 2-Min Demo
            </a>
          </div>

          {/* Micro social proof under CTA */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Type II certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Instant deployment</span>
            </div>
          </div>
        </div>

        {/* Interactive Dashboard / Product Mockup */}
        <div className="mt-14 sm:mt-20 relative max-w-5xl mx-auto">
          {/* Border Glow Frame */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-indigo-500/30 via-violet-600/20 to-transparent blur-xl opacity-75" />

          <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline">nova-cloud://app.production.workspace/cluster</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  All Systems Operational
                </span>
              </div>
            </div>

            {/* Dashboard Content Interior */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              {/* Stat Cards Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-950/70 border border-slate-800/80 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Global Latency</span>
                    <Activity className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">12 ms</div>
                  <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                    ↑ 38% faster than avg
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/80 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Uptime SLA</span>
                    <Server className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">99.998%</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1">
                    Last 365 days
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/80 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Active Nodes</span>
                    <Cpu className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">480 / 480</div>
                  <div className="text-[11px] text-emerald-400 font-medium mt-1">
                    Auto-balanced
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/80 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Daily Requests</span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">14.2M</div>
                  <div className="text-[11px] text-emerald-400 font-medium mt-1">
                    ↑ 18.4% this week
                  </div>
                </div>
              </div>

              {/* Graphic Activity Stream */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/60">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Edge Node Telemetry & Traffic</h3>
                    <p className="text-xs text-slate-400">Real-time throughput distributed across 42 global regions</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-xs rounded-md bg-indigo-500/20 text-indigo-300 font-medium">
                      Live Stream
                    </span>
                  </div>
                </div>

                {/* Simulated Wave / Bar Graph */}
                <div className="pt-6 grid grid-cols-12 sm:grid-cols-24 gap-1.5 items-end h-28">
                  {[45, 60, 52, 78, 65, 90, 84, 98, 70, 85, 92, 100, 80, 75, 88, 94, 82, 91, 87, 95, 89, 96, 92, 99].map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-indigo-600/40 to-indigo-400 hover:from-indigo-500 hover:to-violet-400 rounded-t transition-all duration-300 cursor-pointer"
                      style={{ height: `${height}%` }}
                      title={`Traffic interval ${i + 1}: ${height}% capacity`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

