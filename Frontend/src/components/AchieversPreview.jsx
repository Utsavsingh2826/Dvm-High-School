import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Star, ArrowRight, Sparkles } from 'lucide-react';

function AchieversPreview() {
  return (
    <section className="py-24 bg-[#0a0f1d] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-[0.3em] mb-6 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <Trophy size={16} className="text-amber-500" />
            Our Hall of Fame
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Achievers 2026</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light">
            Witness the historic performance of our S.S.C. and H.S.C. students. Their hard work and dedication have once again placed D.V.M. High School at the pinnacle of excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-amber-400 font-black text-3xl mb-1">97%</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">School Result</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-blue-400 font-black text-3xl mb-1">93.80%</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Top Scorer (S.S.C.)</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-purple-400 font-black text-3xl mb-1">82.67%</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">H.S.C. Topper</div>
            </div>
          </div>

          <Link 
            to="/achievers" 
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1"
          >
            View Full Topper List <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      {/* Floating Sparkles */}
      <div className="absolute top-1/4 left-10 animate-pulse text-amber-500/20">
        <Sparkles size={48} />
      </div>
      <div className="absolute bottom-1/4 right-10 animate-pulse delay-500 text-blue-500/20">
        <Sparkles size={32} />
      </div>
    </section>
  );
}

export default AchieversPreview;
