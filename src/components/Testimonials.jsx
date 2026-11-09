import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Chen',
      role: 'VP of Engineering at FinEdge',
      avatar: 'SC',
      avatarColor: 'from-blue-500 to-indigo-600',
      content:
        'Nova cut our multi-region deployment times from 45 minutes down to 30 seconds. The zero-config setup and edge latency improvements immediately made our checkout experience lightning fast.',
      rating: 5,
    },
    {
      name: 'Marcus Brody',
      role: 'Staff Architect at HyperScale Labs',
      avatar: 'MB',
      avatarColor: 'from-violet-500 to-fuchsia-600',
      content:
        'The developer ergonomics of Nova are simply unmatched. Our entire engineering team was onboarded within an afternoon, and our cloud infrastructure bill dropped by 42%.',
      rating: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'Co-Founder & CTO at Nexus AI',
      avatar: 'ER',
      avatarColor: 'from-amber-500 to-rose-600',
      content:
        'Ephemeral staging environments for every pull request have revolutionized how our product designers and QA engineers collaborate. We cannot imagine shipping without it.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            Real Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by builders across <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              high-growth companies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Discover why forward-thinking development teams migrate to Nova to power their next-generation applications.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col justify-between hover:border-slate-700 transition duration-200"
            >
              <Quote className="w-8 h-8 text-indigo-500/20 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.avatarColor} flex items-center justify-center text-white font-bold text-xs shadow-md`}
                >
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

