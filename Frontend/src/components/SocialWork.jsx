import React from 'react';
import { Heart, HelpingHand, Activity, BookCopy, GraduationCap, Quote, Star, Users } from 'lucide-react';

const socialWorks = [
  {
    title: "Free Education for Needy",
    description: "Our primary mission is to ensure that financial constraints never stand in the way of a child's right to learn. We identify talented yet underprivileged students and provide them with full scholarships, covering everything from fees to uniforms.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    impact: "100+ Students Helped"
  },
  {
    title: "Covid Relief Camp (2020)",
    description: "During the challenging times of the pandemic, DVM transformed into a community support hub. We organized awareness drives, distributed sanitation kits, and provided essential supplies to local families in Poisar.",
    icon: Activity,
    color: "from-red-500 to-rose-600",
    impact: "500+ Families Supported"
  },
  {
    title: "Aadhar Camp (2025)",
    description: "Recognizing the importance of documentation for government benefits, we host regular Aadhar registration and update camps. This service is open to all students and their families to ensure they stay connected with official services.",
    icon: HelpingHand,
    color: "from-orange-500 to-amber-600",
    impact: "Community Service"
  },
  {
    title: "Hindi Medium Support",
    description: "We are deeply committed to the Hindi medium curriculum, providing special resources, free coaching, and dedicated mentorship programs to ensure these students excel at par with any other medium.",
    icon: BookCopy,
    color: "from-emerald-500 to-teal-600",
    impact: "Dedicated Support"
  },
  {
    title: "Free Book Distribution",
    description: "Every academic year begins with our stationery drive. We distribute complete book sets, notebooks, and writing materials to students from economically weaker sections to ensure a confident start to their studies.",
    icon: Heart,
    color: "from-pink-500 to-purple-600",
    impact: "Annual Initiative"
  }
];

function SocialWork() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-orange-400 text-sm font-bold mb-6 backdrop-blur-md border border-white/10">
            <Star size={16} fill="currentColor" />
            COMMUNITY & IMPACT
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Social Initiatives</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Education is a tool for social change. At DVM High School, our responsibility extends beyond the classroom walls and into the heart of our community.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Quote size={40} className="text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Philosophy</h2>
              <p className="text-gray-600 text-lg leading-relaxed italic">
                "The best way to find yourself is to lose yourself in the service of others."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                <span className="font-bold text-blue-900 uppercase tracking-widest text-sm">Somvanshi Trust</span>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white">
                    <Users size={20} />
                  </div>
                  <h3 className="font-bold text-blue-900">Inclusivity</h3>
                </div>
                <p className="text-gray-600 text-sm">We believe quality education is a right, not a privilege. Our programs aim to bridge the gap between financial status and academic potential.</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                    <Heart size={20} />
                  </div>
                  <h3 className="font-bold text-blue-900">Compassion</h3>
                </div>
                <p className="text-gray-600 text-sm">Beyond academic teaching, we instill empathy and social responsibility in our students through active community participation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Grid - No Images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialWorks.map((work, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white p-8 md:p-12 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Decorative Background Gradient Circle */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${work.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full -mr-16 -mt-16`}></div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${work.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <work.icon size={32} />
                  </div>
                  
                  <div>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                      {work.impact}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">{work.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-6 h-full w-full">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Want to contribute to our mission?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            We are always looking for partners and volunteers who share our vision of education for all. Join us in making a difference in the lives of our students.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialWork;
