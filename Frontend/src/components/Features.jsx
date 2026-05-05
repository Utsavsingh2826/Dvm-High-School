import React from 'react'
import { Users, Monitor, Shield, GraduationCap, Heart, CreditCard, CheckCircle } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: Users,
      title: "Qualified & Dedicated Staff",
      description: "Our experienced educators are committed to providing personalized attention to every student."
    },
    {
      icon: Monitor,
      title: "Digital & Science Labs",
      description: "Well-equipped computer classrooms and science labs for hands-on technical learning."
    },
    {
      icon: Shield,
      title: "CCTV Surveillance",
      description: "A secure environment with comprehensive CCTV coverage to ensure student safety."
    },
    {
      icon: GraduationCap,
      title: "Play Way Method",
      description: "Interactive and engaging teaching methods designed to make learning enjoyable and effective."
    },
    {
      icon: Users,
      title: "Limited Class Size",
      description: "Small student-to-teacher ratios ensuring individual attention and better interaction."
    },
    {
      icon: Heart,
      title: "Counselling Sessions",
      description: "Personalized counselling available for both parents and children for holistic support."
    },
    {
      icon: CreditCard,
      title: "Affordable Fees",
      description: "Quality education made accessible through an affordable and transparent fee structure."
    },
    {
      icon: CheckCircle,
      title: "Digital Attendance",
      description: "Modern digital attendance tracking for improved efficiency and parent communication."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Why We're Different</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine traditional values with modern teaching techniques to create an unparalleled educational experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
