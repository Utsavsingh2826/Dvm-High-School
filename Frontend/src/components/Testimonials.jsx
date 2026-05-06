import React from 'react'
import { Star } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      name: "Raj Kumar",
      role: "Student",
      text: "D.V.M. High School & Jr. College changed my life! The teachers are incredibly supportive and the personalized attention helped me improve my grades significantly.",
      rating: 5
    },
    {
      name: "Mrs. Sharma",
      role: "Parent",
      text: "Excellent school with experienced faculty. My son's interest in science has grown tremendously. Highly impressed with the teaching methodology.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      role: "Student",
      text: "The best decision my parents made! The school provides a perfect balance between academics and extra-curricular activities. I love studying here!",
      rating: 5
    },
    {
      name: "Mr. Gupta",
      role: "Parent",
      text: "Outstanding infrastructure and brilliant teachers. My daughter's confidence has increased manifold. Truly a premium educational institution.",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">What People Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from our students and parents about their experience at D.V.M. High School & Jr. College
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-blue-900">{testimonial.name}</p>
                <p className="text-sm text-orange-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
