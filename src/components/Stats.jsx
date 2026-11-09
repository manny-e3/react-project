import React from 'react';

export default function Stats() {
  const stats = [
    { label: 'Edge Locations Worldwide', value: '320+', detail: 'Sub-second distribution across 6 continents' },
    { label: 'Documented Uptime SLA', value: '99.999%', detail: 'Backed by enterprise-grade guarantees' },
    { label: 'Daily Processed Events', value: '2.5B+', detail: 'Seamless horizontal scaling at peak loads' },
    { label: 'Average Global Latency', value: '< 15ms', detail: 'Edge-rendered directly near end-users' },
  ];

  return (
    <section className="py-16 border-y border-slate-900 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center sm:text-left p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-700/60 transition"
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-violet-300 to-white bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

