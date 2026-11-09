import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does Nova compare to traditional cloud providers like AWS or GCP?',
      a: 'Nova abstracts the complex infrastructure management of raw cloud primitives. Instead of setting up VPCs, IAM policies, and load balancers manually, Nova offers an instant developer workflow with automatic global routing, edge caching, and automated TLS without maintenance overhead.',
    },
    {
      q: 'Can I connect my existing custom domain and SSL certificate?',
      a: 'Yes, absolutely. You can attach any custom domain or apex zone in seconds. Nova automatically provisions and renews free wildcard SSL/TLS certificates via Let’s Encrypt with automated OCSP stapling.',
    },
    {
      q: 'Which web frameworks and runtimes are supported out of the box?',
      a: 'Nova provides native zero-configuration presets for React, Next.js, Vite, Vue, SvelteKit, Astro, Remix, and standard Node.js / Bun / Deno edge handlers. Custom Dockerfiles and containers are also supported on our Enterprise plan.',
    },
    {
      q: 'Can I migrate my project from Vercel, Netlify, or Heroku?',
      a: 'Yes! Migration is seamless. With our one-click Git integration or the `npx nova import` CLI command, you can import repositories in under 3 minutes with all environment variables preserved.',
    },
    {
      q: 'What happens if our traffic spikes unexpectedly?',
      a: 'Our edge nodes are serverless and autoscaling. When a traffic spike hits, new isolated execution sandboxes spin up in less than 10 milliseconds across our 320+ edge data centers with zero downtime.',
    },
    {
      q: 'Is there a free tier for open source and personal hobby projects?',
      a: 'Yes! Our Developer plan is free forever. It comes with generous bandwidth, SSL, Git preview branches, and serverless compute so you can experiment without ever entering a credit card.',
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Everything you need to know about the Nova platform, billing, and architecture.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-850/50 transition cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

