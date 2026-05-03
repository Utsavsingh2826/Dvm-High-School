import React from 'react'
import { Calculator, BookMarked, Microscope, Globe } from 'lucide-react'

function Courses() {
  const courses = [
    {
      icon: Calculator,
      title: "Mathematics",
      description: "From basic arithmetic to advanced algebra and geometry. Special focus on problem-solving and conceptual clarity.",
      highlights: ["Algebra & Geometry", "Trigonometry", "Calculus", "Problem Solving"]
    },
    {
      icon: BookMarked,
      title: "English",
      description: "Literature, grammar, and composition. Developing communication skills and love for languages.",
      highlights: ["Grammar & Writing", "Literature Study", "Speaking Skills", "Essay Writing"]
    },
    {
      icon: Microscope,
      title: "Science",
      description: "Physics, Chemistry, and Biology with practical experiments and demonstrations.",
      highlights: ["Physics Labs", "Chemistry Experiments", "Biology Practicals", "STEM Projects"]
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "History, Geography, and Civics to develop informed and responsible citizens.",
      highlights: ["History & Culture", "Geography", "Civics", "Current Affairs"]
    }
  ]

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive curriculum with special emphasis on Math, English, and Science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white flex items-center justify-center h-32 group-hover:scale-105 transition-transform">
                <course.icon className="w-12 h-12" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                <div className="space-y-2">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
