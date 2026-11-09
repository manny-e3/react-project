import React from 'react';
import { Layers, Shield, Globe, Compass, Cloud, Terminal } from 'lucide-react';

export default function LogoCloud() {
  const companies = [
    { name: 'HyperScale', icon: Layers },
    { name: 'Securitas', icon: Shield },
    { name: 'GlobalSphere', icon: Globe },
    { name: 'Vanguard OS', icon: Compass },
    { name: 'CloudMesh', icon: Cloud },
    { name: 'TerminalFlow', icon: Terminal },
  ];

  return (
    <div className="border-y border-slate-800/80 bg-slate-950/40 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
          Trusted by over 10,000+ ambitious developers and fast-scaling enterprises
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
          {companies.map((company) => {
            const Icon = company.icon;
            return (
              <div
                key={company.name}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer group"
              >
                <Icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span className="font-bold text-sm tracking-tight">{company.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

