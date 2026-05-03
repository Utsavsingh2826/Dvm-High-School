import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Star, ArrowRight } from 'lucide-react';

const topAchievers = [
  { name: "Aditi S. Mishra", percentage: "96.40%", medium: "English" },
  { name: "Vivek R. Yadav", percentage: "93.60%", medium: "Hindi" },
  { name: "Rahul J. Gupta", percentage: "94.20%", medium: "English" }
];

function AchieversPreview() {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <div className="inline-flex items-center gap-2 text-orange-400 font-bold text-sm uppercase tracking-widest mb-4">
              <Trophy size={16} />
              Our Hall of Fame
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Academic Achievers</h2>
          </div>
          <Link 
            to="/achievers" 
            className="flex items-center gap-2 text-orange-400 font-bold hover:text-white transition-colors"
          >
            View All Toppers <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topAchievers.map((achiever, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Star size={20} fill="white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{achiever.name}</h3>
              <p className="text-blue-200 mb-4">{achiever.medium} Medium</p>
              <div className="text-4xl font-black text-orange-400">{achiever.percentage}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchieversPreview;
