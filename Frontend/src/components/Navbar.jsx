import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import './Navbar.css'

function Navbar({ onOpenForm }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false) // Close mobile menu on route change
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white text-sm py-3">
        <div className="container flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>9022081772 / 9820745556</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>dvmhighschool2021@gmail.com</span>
            </div>
          </div>
          <a 
            href="https://maps.app.goo.gl/9UTeePTkGUDN6hQY6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center md:items-start hover:text-orange-400 transition-colors"
          >
            <span className="text-[10px] bg-orange-500/20 px-2 py-0.5 rounded mb-1 animate-pulse">(Click for Directions 👇)</span>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Kandivali (East), Mumbai - 400101</span>
            </div>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <div className="container flex justify-between items-center py-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src="/Dvmlogo.png" alt="D.V.M. Logo" className="w-12 h-12 object-contain" />
            </Link>
            <Link to="/" className="hidden sm:block">
              <h1 className="text-xs xl:text-sm 2xl:text-base font-bold text-blue-900 leading-tight whitespace-nowrap">D.V.M. HIGH SCHOOL & JUNIOR COLLEGE</h1>
              <p className="text-xs xl:text-sm 2xl:text-base font-bold text-blue-900 leading-tight whitespace-nowrap">D.V.M. HINDI HIGH SCHOOL</p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8">
            <Link to="/" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors whitespace-nowrap text-sm xl:text-base">Home</Link>
            <a href="/#about" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors whitespace-nowrap text-sm xl:text-base">About</a>
            <a href="/#courses" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors whitespace-nowrap text-sm xl:text-base">Courses</a>
            <Link to="/activities" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors whitespace-nowrap text-sm xl:text-base">Activities</Link>
            <Link to="/social-work" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors whitespace-nowrap text-sm xl:text-base">Social Work</Link>
            <Link to="/achievers" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors whitespace-nowrap text-sm xl:text-base">Achievers</Link>
            <a href="https://wa.me/919022081772?text=Hello,%20I%20have%20an%20inquiry%20regarding%20D.V.M.%20High%20School%20%26%20Jr.%20College." target="_blank" rel="noopener noreferrer" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors whitespace-nowrap text-sm xl:text-base">Contact Us</a>
            <a 
              href="https://wa.me/919022081772?text=Hello,%20I%20would%20like%20to%20schedule%20a%20visit%20to%20D.V.M.%20High%20School%20%26%20Jr.%20College." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 xl:px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap text-sm xl:text-base"
            >
              Schedule Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="container flex flex-col gap-4">
              <Link to="/" className="text-blue-900 hover:text-orange-500 font-medium py-2 border-b border-gray-100">Home</Link>
              <a href="/#about" className="text-blue-900 hover:text-orange-500 font-medium py-2 border-b border-gray-100">About</a>
              <a href="/#courses" className="text-blue-900 hover:text-orange-500 font-medium py-2 border-b border-gray-100">Courses</a>
              <Link to="/activities" className="text-blue-900 hover:text-orange-500 font-medium py-2 border-b border-gray-100">Activities</Link>
              <Link to="/social-work" className="text-blue-900 hover:text-orange-500 font-medium py-2 border-b border-gray-100">Social Work</Link>
              <Link to="/achievers" className="text-blue-900 hover:text-orange-500 font-medium py-2 border-b border-gray-100">Achievers</Link>
              <a href="https://wa.me/919022081772?text=Hello,%20I%20have%20an%20inquiry%20regarding%20D.V.M.%20High%20School%20%26%20Jr.%20College." target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-orange-500 font-medium py-2 border-b border-gray-100">Contact Us</a>
              <a 
                href="https://wa.me/919022081772?text=Hello,%20I%20would%20like%20to%20schedule%20a%20visit%20to%20D.V.M.%20High%20School%20%26%20Jr.%20College." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold w-full mt-2 text-center"
              >
                Schedule Visit
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
