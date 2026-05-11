import React from 'react';
import { Trophy, Crown, Download, Maximize2, Sparkles } from 'lucide-react';

function Achievers() {
  const bannerImage = "/Bannerimage1.jpeg";

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Premium Hero Section */}
      <section className="relative bg-[#0a0f1d] text-white py-24 md:py-32 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px] animate-pulse delay-700"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full text-amber-400 text-sm font-bold mb-8 backdrop-blur-md border border-white/20 shadow-2xl">
            <Trophy size={18} className="animate-bounce" />
            <span className="tracking-[0.3em] uppercase">Academic Excellence 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Wall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">Brilliance</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Celebrating the extraordinary achievements of our students who have set new benchmarks of excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <Sparkles className="text-amber-400" size={16} />
              <span className="text-sm font-medium">S.S.C. Result 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <Sparkles className="text-amber-400" size={16} />
              <span className="text-sm font-medium">H.S.C. Result 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Banner Section */}
      <section className="container mx-auto px-4 -mt-12 md:-mt-20 pb-24 relative z-20">
        <div className="bg-white p-2 md:p-4 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 backdrop-blur-sm group">
          <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-slate-100">
            {/* Toolbar Overlay */}
            <div className="absolute top-6 right-6 z-30 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a 
                href={bannerImage} 
                download 
                className="w-12 h-12 bg-white/90 backdrop-blur-md text-slate-900 rounded-full flex items-center justify-center shadow-xl hover:bg-amber-400 hover:text-white transition-all transform hover:scale-110"
                title="Download Banner"
              >
                <Download size={20} />
              </a>
              <button 
                onClick={() => window.open(bannerImage, '_blank')}
                className="w-12 h-12 bg-white/90 backdrop-blur-md text-slate-900 rounded-full flex items-center justify-center shadow-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                title="View Full Size"
              >
                <Maximize2 size={20} />
              </button>
            </div>

            {/* The Main Banner Image */}
            <img 
              src={bannerImage} 
              alt="D.V.M. High School & Jr. College Toppers 2026" 
              className="w-full h-auto block shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
              onError={(e) => {
                e.target.src = "https://placehold.co/1200x800/0a0f1d/amber-400?text=Banner+Image+Not+Found+(Bannerimage1.jpeg)";
              }}
            />
            
            {/* Interactive Shine Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </div>
        </div>

        {/* Informative Footer */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl mb-6 shadow-sm">
            <Crown size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">A Legacy of Success</h3>
          <p className="text-slate-600 leading-relaxed italic">
            "Education is the most powerful weapon which you can use to change the world. These achievers are the testament to our commitment to excellence."
          </p>
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="h-px w-12 bg-slate-200"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">D.V.M. High School & Jr. College</span>
            <div className="h-px w-12 bg-slate-200"></div>
          </div>
        </div>
      </section>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl translate-x-1/2"></div>
      </div>
    </div>
  );
}

export default Achievers;
