import React from 'react'
import { BookOpen, Users, Trophy, Heart } from 'lucide-react'

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About D.V.M High School & Jr. College
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Located in the heart of Kandivali, Poisar, D.V.M High School & Jr. College stands as a beacon of educational excellence. With a commitment to nurturing young minds and fostering all-round development, we have been transforming lives for years.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our experienced team of educators brings decades of combined expertise in Math, English, and Science education. We believe in creating an environment where every student can thrive academically and personally.
            </p>
            {/* Motto */}
            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-900 rounded-r-lg">
              <p className="text-blue-900 font-bold italic">
                MOTTO: “EDUCATION FOR ALL, OPPORTUNITY FOR LIFE.”
              </p>
              <p className="text-sm text-gray-600 mt-1">Established: 14th June, 2008</p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <p className="text-3xl font-bold text-blue-900">500+</p>
                <p className="text-gray-600 mt-2">Happy Students</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <p className="text-3xl font-bold text-blue-900">35+</p>
                <p className="text-gray-600 mt-2">Experienced Teachers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <p className="text-3xl font-bold text-blue-900">95%</p>
                <p className="text-gray-600 mt-2">Success Rate</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <p className="text-3xl font-bold text-blue-900">15+</p>
                <p className="text-gray-600 mt-2">Years Legacy</p>
              </div>
            </div>
          </div>

          {/* Right - Leadership & Features */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <Users className="text-orange-500" />
                Our Leadership
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-orange-600 text-sm uppercase tracking-wider mb-3">Trust: SOMVANSHI SHAIKSHANIK SANSTHAN</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                    <li><span className="font-semibold text-blue-900">Mr. Shivsahay H. Singh</span><br/><span className="text-xs">President</span></li>
                    <li><span className="font-semibold text-blue-900">Mrs. Vimladevi S. Singh</span><br/><span className="text-xs">Vice-President</span></li>
                    <li><span className="font-semibold text-blue-900">Mr. Shambhunath H. Singh</span><br/><span className="text-xs">Secretary</span></li>
                    <li><span className="font-semibold text-blue-900">Mr. Virendrapratap S. Singh</span><br/><span className="text-xs">Managing Trustee</span></li>
                    <li><span className="font-semibold text-blue-900">Mr. Amarpratap Singh</span><br/><span className="text-xs">Member</span></li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-orange-600 text-sm uppercase tracking-wider mb-3">Head Mistresses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-semibold text-blue-900">Mrs. Sangeeta A. Singh</span> - D.V.M Hindi High School</li>
                    <li><span className="font-semibold text-blue-900">Mrs. Jyoti P. Lalwani</span> - D.V.M High School & Jr. College</li>
                    <li><span className="font-semibold text-blue-900">Mrs. Pratima P. Pal</span> - D.V.M Hindi School (Primary Section)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: BookOpen, title: "Quality Curriculum", desc: "Modern teaching methods" },
                { icon: Trophy, title: "Excellence", desc: "Consistent achievements" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                  <item.icon className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
