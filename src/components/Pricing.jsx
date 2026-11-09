import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: 'Developer',
      description: 'Ideal for prototyping, personal projects, and indie creators.',
      price: 0,
      period: 'forever',
      popular: false,
      cta: 'Start for Free',
      features: [
        'Up to 3 active production projects',
        '100 GB global edge bandwidth',
        '50,000 serverless invocations / mo',
        'Automatic SSL & custom domains',
        'Community Discord & Forum support',
      ],
    },
    {
      name: 'Pro Team',
      description: 'For growing teams requiring scale, observability, and dedicated speed.',
      price: annualBilling ? 24 : 29,
      period: '/ month, billed yearly',
      popular: true,
      cta: 'Start 14-Day Free Trial',
      features: [
        'Unlimited active projects & branches',
        '1 TB high-speed edge bandwidth',
        '10,000,000 serverless invocations',
        'Automated CI/CD preview sandboxes',
        'Continuous performance & trace logs',
        'Role-based access & team seats (up to 10)',
        'Priority 24/7 technical support',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Custom governance, private clusters, and dedicated SLA contracts.',
      price: annualBilling ? 99 : 119,
      period: '/ month per seat',
      popular: false,
      cta: 'Talk to Solutions Architect',
      features: [
        'Unlimited multi-region clusters',
        'Custom edge bandwidth volume',
        '99.999% guaranteed Uptime SLA',
        'SOC2, HIPAA & ISO27001 compliance',
        'Custom SAML SSO & audit logs',
        'Dedicated Solutions Engineer',
        '1-hour critical response time guarantee',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            Simple & Transparent
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Transparent pricing for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              teams of every size
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Start free, build rapidly, and only pay when your application reaches production scale.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annualBilling ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
              role="switch"
              aria-checked={annualBilling}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-indigo-500 shadow-lg ring-0 transition duration-200 ease-in-out ${annualBilling ? 'translate-x-6' : 'translate-x-0'
                  }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${annualBilling ? 'text-white' : 'text-slate-400'}`}>
              Yearly
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${plan.popular
                  ? 'border-2 border-indigo-500 bg-slate-900/90 shadow-2xl shadow-indigo-500/20 md:-translate-y-2'
                  : 'border border-slate-800 bg-slate-900/50 hover:border-slate-700'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-bold tracking-wide uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-400 min-h-[36px]">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-xs text-slate-400">
                    {plan.price === 0 ? '/ forever' : plan.period}
                  </span>
                </div>

                <div className="mt-8 space-y-3">
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Included features:</p>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80">
                <a
                  href="#cta"
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all ${plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white shadow-lg shadow-indigo-500/25'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

