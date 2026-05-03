import React from 'react';
import { Trophy, Award, Star, GraduationCap, Crown } from 'lucide-react';

const englishToppers = [
  { name: "Topper 1", percentage: "96.40%", year: "2023-24", rank: "1st Rank", image: "/TopperEnglish.png", color: "from-yellow-400 to-yellow-600" },
  { name: "Topper 2", percentage: "94.20%", year: "2023-24", rank: "2nd Rank", image: "/TopperEnglish (2).png", color: "from-slate-300 to-slate-400" },
  { name: "Topper 3", percentage: "92.80%", year: "2023-24", rank: "3rd Rank", image: "/ToppersEnglish.png", color: "from-orange-400 to-orange-600" }
];

const hindiToppers = [
  { name: "Topper 1", percentage: "93.60%", year: "2023-24", rank: "1st Rank", image: "/TopperHindi.png", color: "from-yellow-400 to-yellow-600" },
  { name: "Topper 2", percentage: "91.40%", year: "2023-24", rank: "2nd Rank", image: "/TopperHindi (2).png", color: "from-slate-300 to-slate-400" },
  { name: "Topper 3", percentage: "89.80%", year: "2023-24", rank: "3rd Rank", image: "/TopperHindi (3).png", color: "from-orange-400 to-orange-600" }
];

function Achievers() {
  const TopperCard = ({ topper, index }) => (
    <div className="relative group">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
        {/* Banner Image - Natural Height */}
        <div className="relative w-full bg-white overflow-hidden leading-[0]">
          <img 
            src={topper.image} 
            alt={topper.name} 
            loading="lazy"
            className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
          />
          
          {/* Rank Badge - Floats on image */}
          <div className={`absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r ${topper.color} rounded-full text-white text-[10px] font-black shadow-lg border border-white/20 uppercase tracking-[0.2em]`}>
            {topper.rank}
          </div>
        </div>

        {/* Info Bar */}
        <div className="p-4 bg-gray-50/50 flex justify-between items-center border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">Batch</span>
            <span className="text-blue-900 font-black text-xs uppercase tracking-tight">{topper.year}</span>
          </div>
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${topper.color} flex items-center justify-center text-white text-sm font-black shadow-lg rotate-3 group-hover:rotate-0 transition-transform`}>
            {index + 1}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 font-sans">
      {/* Cinematic Hero Section */}
      <section className="bg-[#0f172a] text-white py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-2.5 rounded-full text-yellow-500 text-sm font-bold mb-8 backdrop-blur-xl border border-white/10 shadow-2xl">
            <Crown size={18} className="animate-pulse" />
            <span className="tracking-[0.3em] uppercase">The President's Honor Roll</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Wall of Fame
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Honoring the dedication, perseverance, and exceptional academic brilliance of our top performers.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        {/* English Medium Section */}
        <div className="mb-32">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 shadow-2xl border border-gray-100 mb-6">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">English Medium</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {englishToppers.map((topper, idx) => (
              <TopperCard key={idx} topper={topper} index={idx} />
            ))}
          </div>
        </div>

        {/* Hindi Medium Section */}
        <div className="mb-32">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-2xl border border-gray-100 mb-6">
              <Star size={32} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">Hindi Medium</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {hindiToppers.map((topper, idx) => (
              <TopperCard key={idx} topper={topper} index={idx} />
            ))}
          </div>
        </div>

        {/* Prestigious Quote */}
        <div className="relative mt-40 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-blue-900/5 rounded-[40px] blur-3xl"></div>
          <div className="relative bg-white p-12 md:p-20 rounded-[40px] shadow-2xl border border-gray-50 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-10">
              <Award size={40} className="text-blue-900" />
            </div>
            <p className="text-3xl md:text-4xl text-slate-800 font-serif italic leading-snug mb-10">
              "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-[2px] bg-orange-500 mb-4"></div>
              <span className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">Class of 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievers;
