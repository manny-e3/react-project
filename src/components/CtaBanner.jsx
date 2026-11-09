import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-700 to-violet-800 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl shadow-indigo-950/60 border border-indigo-500/30">

          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-violet-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Start Shipping Today
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to elevate your engineering velocity?
            </h2>

            <p className="text-indigo-100 text-sm sm:text-base max-w-xl mx-auto">
              Join thousands of developers building fast, reliable, and scalable web apps on Nova. Get started in less than 2 minutes.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 max-w-md mx-auto text-white text-sm font-semibold flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-emerald-300" />
                Awesome! We sent your invite link to {email || 'your email'}.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-indigo-400/40 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-xl bg-white text-indigo-900 font-bold text-sm hover:bg-indigo-50 transition shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 text-indigo-900" />
                </button>
              </form>
            )}

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-indigo-200">
              <span>✓ Free 14-day trial</span>
              <span>✓ Instant GitHub sign-in</span>
              <span>✓ Cancel anytime</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

