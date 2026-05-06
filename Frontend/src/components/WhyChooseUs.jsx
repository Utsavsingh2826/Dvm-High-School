import React from 'react'
import { Target, Users, Smile, Shield } from 'lucide-react'

function WhyChooseUs() {
  const reasons = [
    {
      icon: Target,
      title: "Goal-Oriented Education",
      description: "Personalized learning paths designed to help each student achieve their full potential in academics and beyond."
    },
    {
      icon: Users,
      title: "Interactive Learning",
      description: "Interactive learning methods ensure individual attention and personalized feedback from our expert faculty."
    },
    {
      icon: Smile,
      title: "Positive Environment",
      description: "Safe, nurturing, and inclusive atmosphere where every student feels valued and motivated to excel."
    },
    {
      icon: Shield,
      title: "Parent Partnership",
      description: "Regular communication and collaboration with parents to ensure holistic development of every child."
    }
  ]

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Join Our Community</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold text-2xl">✓</span>
                  <span>Experienced and dedicated teachers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold text-2xl">✓</span>
                  <span>State-of-the-art facilities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold text-2xl">✓</span>
                  <span>Proven track record of success</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold text-2xl">✓</span>
                  <span>Holistic development programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold text-2xl">✓</span>
                  <span>Regular parent-teacher interactions</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/919022081772?text=Hello,%20I%20would%20like%20to%20schedule%20a%20visit%20to%20D.V.M.%20High%20School%20%26%20Jr.%20College." 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-all text-center"
              >
                Schedule a Visit
              </a>
            </div>
          </div>

          {/* Right - Reasons Grid */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 animate-slide-up">
              Why Choose D.V.M.?
            </h2>
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 group-hover:scale-110 transition-transform">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900">{reason.title}</h3>
                  <p className="text-gray-600 mt-1">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
