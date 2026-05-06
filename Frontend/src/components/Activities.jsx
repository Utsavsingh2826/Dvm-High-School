import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Palette, Music, Dumbbell, Microscope, Globe } from 'lucide-react';
import Lightbox from './Lightbox';

const activities = [
  {
    title: "Sports Day",
    description: "Annual sports meet featuring athletics, team sports, and physical displays of skill and teamwork.",
    icon: Dumbbell,
    image: "/Sports.png",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Science Exhibition",
    description: "Students showcasing innovative science projects, models, and experiments to parents and guests.",
    icon: Microscope,
    image: "/Science exhibition.png",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "School Picnic",
    description: "Educational and fun-filled outdoor trips to explore new places and bond with classmates.",
    icon: Globe,
    image: "/Picnic.png",
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Idol Making",
    description: "Creative workshops where students learn to craft beautiful traditional idols with clay.",
    icon: Palette,
    image: "/Idol.png",
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Drawing Competition",
    description: "Expressing creativity through colors and imagination in various annual art festivals.",
    icon: Palette,
    image: "/Drawing.png",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Cultural Feast",
    description: "Celebrating festivals and special days with traditional dance, music, and cultural performances.",
    icon: Music,
    image: "/Culturalfeastdandiya - Copy.png",
    color: "bg-pink-100 text-pink-600"
  }
];

function Activities() {
  const [active, setActive] = useState(null);

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            School Activities
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond academics, we offer a wide range of extracurricular activities to ensure the all-round development of our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Section */}
              {activity.image ? (
                <button
                  type="button"
                  onClick={() => setActive(activity)}
                  aria-label={`View ${activity.title}`}
                  className="h-64 bg-gray-200 relative overflow-hidden block w-full cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
                </button>
              ) : (
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <activity.icon className="w-12 h-12 mb-2" />
                    <span className="text-sm font-medium">Image Placeholder</span>
                  </div>
                </div>
              )}
              {/* Content Section */}
              <div className="p-8 text-center flex flex-col items-center">
                <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {activity.description}
                </p>
                <div className="w-12 h-1 bg-gray-100 group-hover:bg-orange-500 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-blue-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Want to see more?</h3>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Follow our social media channels to stay updated with the latest events and achievements at D.V.M. High School & Jr. College.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link 
              to="/gallery" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
            >
              View Gallery
            </Link>
            <a 
              href="/#contact" 
              className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Lightbox
        image={active?.image}
        alt={active?.title}
        caption={active?.title}
        onClose={() => setActive(null)}
      />
    </section>
  );
}

export default Activities;
