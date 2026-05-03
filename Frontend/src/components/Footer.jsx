import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail('')
  }

  return (
    <footer className="bg-blue-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Child's Future?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who are already experiencing excellence in education at DVM High School.
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
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
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-bold">
                  DVM
                </div>
                <div>
                  <h3 className="font-bold">DVM High School</h3>
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

            {/* Contact & Newsletter */}
            <div>
              <h3 className="font-bold text-lg mb-6">Stay Updated</h3>
              <form onSubmit={handleSubscribe} className="mb-6">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg text-blue-900 bg-white/10 border border-white/20 focus:outline-none focus:border-orange-500 mb-3 placeholder-gray-400"
                  required
                />
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-lg font-semibold transition-all">
                  Subscribe
                </button>
              </form>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>9022081772 / 9820745556</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>dvmhighschool2021@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-2 mb-3 text-gray-400">
                  <MapPin size={18} />
                  <span>Poisar, Kandivali (East), Mumbai - 400101</span>
                </div>
                <p className="text-gray-500 text-sm">Mon-Fri: 8:00 AM - 4:00 PM</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>&copy; 2024 DVM High School. All rights reserved.</p>
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
