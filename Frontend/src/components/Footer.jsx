import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react'

function Footer({ onOpenForm }) {
  // Removed newsletter subscription handler as per request

  return (
    <footer className="bg-blue-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Child's Future?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who are already experiencing excellence in education at D.V.M. High School & Jr. College.
          </p>
          <button 
            onClick={onOpenForm}
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            Apply Now & Get Free Counseling
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/Dvmlogo.png" alt="D.V.M Logo" className="w-12 h-12 object-contain bg-white rounded-lg p-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold leading-tight">D.V.M. High School &amp; Junior College</h3>
                  <p className="text-xs text-gray-300">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing quality education with experienced teachers in Kandivali, Poisar since 2008.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                <li><a href="/#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="/#courses" className="hover:text-orange-500 transition-colors">Courses</a></li>
                <li><Link to="/social-work" className="hover:text-orange-500 transition-colors">Social Initiatives</Link></li>
                <li><Link to="/achievers" className="hover:text-orange-500 transition-colors">Achievers</Link></li>
                <li><Link to="/activities" className="hover:text-orange-500 transition-colors">Activities</Link></li>
                <li><a href="/#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="font-bold text-lg mb-6">Subjects</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Mathematics</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">English</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Science</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Social Studies</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/5 group-hover:bg-green-500/20 rounded-full flex items-center justify-center transition-all flex-shrink-0">
                    <Phone size={18} className="group-hover:text-green-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Call / WhatsApp</p>
                    <a
                      href="https://wa.me/919022081772"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-green-400 transition-colors"
                    >
                      +91 9022081772
                    </a>
                    <a
                      href="https://wa.me/919820745556"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-green-400 transition-colors"
                    >
                      +91 9820745556
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <p>dvmhighschool2021@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <a 
                  href="https://maps.app.goo.gl/9UTeePTkGUDN6hQY6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col mb-3 text-gray-400 hover:text-orange-500 transition-all"
                >
                  <span className="text-[10px] text-orange-500 mb-1 animate-pulse">(Click for Directions 👇)</span>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Poisar, Kandivali (East), Mumbai - 400101</span>
                  </div>
                </a>
                <p className="text-gray-500 text-sm">Mon-Sat: 10:00 AM - 6:00 PM</p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/dvm.highschoolofficials?igsh=NHE0cXg5N2RmdGh1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://youtube.com/@dvmhighschooljrcollegeofficial?si=INm1qBpSDA3MmRw7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>&copy; 2024 D.V.M. High School & Jr. College. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
