import React from 'react';
import {
  Zap,
  ShieldCheck,
  Globe,
  GitBranch,
  BarChart3,
  Cpu,
  Users,
  Sparkles
} from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: Zap,
      title: 'Ultra-Fast Edge Delivery',
      description: 'Deploy statically or serverlessly to 300+ edge locations around the globe with sub-15ms cold start times.',
      tag: 'Speed',
      gradient: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    },
    {
      icon: GitBranch,
      title: 'Automated Git Workflows',
      description: 'Push to your Git repository and let Nova handle builds, preview environments, automated tests, and rollout.',
      tag: 'CI / CD',
      gradient: 'from-indigo-500/20 to-violet-500/20 text-indigo-400 border-indigo-500/30',
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Trust Architecture',
      description: 'Built-in automated TLS certificates, DDoS mitigation, encrypted secrets management, and role-based access control.',
      tag: 'Security',
      gradient: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    },
    {
      icon: BarChart3,
      title: 'Deep Telemetry & Traces',
      description: 'Full stack observability out of the box. Trace bottlenecks, inspect edge request logs, and monitor metrics in real time.',
      tag: 'Analytics',
      gradient: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30',
    },
    {
      icon: Cpu,
      title: 'Autonomous Scaling',
      description: 'Scale dynamically from 0 to millions of concurrent requests seamlessly without provisioning physical servers.',
      tag: 'Infra',
      gradient: 'from-purple-500/20 to-fuchsia-500/20 text-purple-400 border-purple-500/30',
    },
    {
      icon: Users,
      title: 'Collaborative Previews',
      description: 'Generate instant staging preview URLs for pull requests, enabling teams, stakeholders, and QA to review effortlessly.',
      tag: 'Teamwork',
      gradient: 'from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30',
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Built for Modern Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything you need to ship <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              world-class software
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Stop wrestling with fragmented cloud services and fragile scripts. Nova provides a unified developer platform designed for maximum developer velocity.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.gradient} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-indigo-400 group-hover:text-indigo-300">
                  <span>Explore feature documentation</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

