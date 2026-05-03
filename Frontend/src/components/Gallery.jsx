import React from 'react';
import { ImageIcon } from 'lucide-react';

const galleryImages = [
  // Sports Day
  { src: "/Sports.png", category: "Sports Day", title: "Athletics Event" },
  { src: "/Sports1.png", category: "Sports Day", title: "Team Activity" },
  { src: "/Sports2.png", category: "Sports Day", title: "Prize Distribution" },
  
  // Science Exhibition
  { src: "/Science exhibition.png", category: "Science Exhibition", title: "Main Project Display" },
  { src: "/ScienceExhibition2.png", category: "Science Exhibition", title: "Student Presentations" },
  
  // School Picnic
  { src: "/Picnic.png", category: "School Picnic", title: "Fun at the Park" },
  { src: "/Picnic1.png", category: "School Picnic", title: "Group Photo" },
  { src: "/Picnic2.png", category: "School Picnic", title: "Outdoor Games" },
  
  // Idol Making
  { src: "/Idol.png", category: "Idol Making", title: "Clay Modeling" },
  { src: "/Idol1.png", category: "Idol Making", title: "Traditional Craft" },
  { src: "/Idol2.png", category: "Idol Making", title: "Creative Idols" },
  
  // Drawing Competition
  { src: "/Drawing.png", category: "Drawing Competition", title: "Art Festival" },
  { src: "/Drawing1.png", category: "Drawing Competition", title: "Coloring Session" },
  { src: "/Drawing2.png", category: "Drawing Competition", title: "Creative Expressions" },
  
  // Cultural Feast
  { src: "/Culturalfeastdandiya - Copy.png", category: "Cultural Feast", title: "Dandiya Celebration" },
  { src: "/CulturalfeastHindidiwas - Copy.png", category: "Cultural Feast", title: "Hindi Diwas" },
  { src: "/CulturalfeastTeachersday - Copy.png", category: "Cultural Feast", title: "Teachers Day Event" },
  { src: "/CulturfeastTeachers1 - Copy.png", category: "Cultural Feast", title: "Teachers Celebration" }
];

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the vibrant life at DVM High School through captured moments of joy, learning, and achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-1">{image.category}</span>
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ImageIcon className="text-white w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
