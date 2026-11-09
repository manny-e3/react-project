import React, { useState } from 'react';
import { Terminal, Code2, Sliders, Check, Copy, CheckCircle2 } from 'lucide-react';

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState('cli');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'cli', label: 'Nova CLI', icon: Terminal },
    { id: 'code', label: 'Edge Worker', icon: Code2 },
    { id: 'config', label: 'Config Schema', icon: Sliders },
  ];

  const snippets = {
    cli: `$ npx nova deploy --prod --region auto

✔ Packaging artifacts (react-bundle.esm)
✔ Validating zero-trust encryption
✔ Deploying to 320 edge edge locations...
✔ Routing DNS & TLS certificates ready

🚀 Production URL: https://nova-app.edge.live
⚡ Build time: 820ms | Cold start: 8ms
STATUS: HEALTHY (100% traffic live)`,

    code: `import { defineEdgeHandler } from '@nova/runtime';

export default defineEdgeHandler(async ({ request, cache, env }) => {
  // Check geo-distributed cache
  const cachedData = await cache.match(request);
  if (cachedData) return cachedData;

  // Process distributed request
  const userGeo = request.headers.get('x-nova-geo-city');
  const payload = {
    status: 'ok',
    serverLocation: userGeo || 'Global Edge',
    timestamp: Date.now(),
  };

  return Response.json(payload, {
    headers: { 'Cache-Control': 's-maxage=3600' }
  });
});`,

    config: `import { defineConfig } from 'nova/config';

export default defineConfig({
  project: 'enterprise-dashboard',
  framework: 'react',
  edge: {
    runtime: 'edge-light',
    regions: ['iad1', 'fra1', 'sin1', 'nrt1'],
    streaming: true,
  },
  security: {
    headers: {
      strictTransportSecurity: true,
      contentSecurityPolicy: 'strict',
    },
    rateLimiting: { maxRequests: 5000, perMinute: 1 },
  },
});`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="showcase" className="py-20 bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Context & Bullet Points */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Developer First
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              One simple command. <br />
              Zero infrastructure pain.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We took away YAML complexities and cumbersome cloud consoles. Manage, configure, and ship your entire stack with intuitive APIs and lightweight configuration.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Instant Edge Functions</h4>
                  <p className="text-xs text-slate-400">Write standard Web APIs and run on V8 isolates without cold starts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Automated Secret Syncing</h4>
                  <p className="text-xs text-slate-400">Environment variables are encrypted at rest with hardware-level HSM keys.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Instant Preview URLs</h4>
                  <p className="text-xs text-slate-400">Every git push gets an isolated, ephemeral staging sandbox in seconds.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Console */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl overflow-hidden">

              {/* Header / Tabs */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/80">
                <div className="flex items-center gap-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${isActive
                            ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                          }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-800"
                  title="Copy code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Display Area */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto min-h-[260px] bg-slate-950/70">
                <pre className="whitespace-pre">
                  <code>{snippets[activeTab]}</code>
                </pre>
              </div>

              {/* Console Status Footer */}
              <div className="px-4 py-2 bg-slate-900 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Isolated Sandbox Environment
                </span>
                <span>Node.js v22 compatible</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

