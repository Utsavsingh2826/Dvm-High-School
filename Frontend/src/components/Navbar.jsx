import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import './Navbar.css'

function Navbar() {
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
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Kandivali (East), Mumbai - 400101</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <div className="container flex justify-between items-center py-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src="/Dvmlogo.png" alt="DVM Logo" className="w-12 h-12 object-contain" />
            </Link>
            <Link to="/" className="hidden sm:block">
              <h1 className="text-lg font-bold text-blue-900 leading-tight">DVM HIGH SCHOOL</h1>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold">Excellence in Education</p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors">Home</Link>
            <a href="/#about" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors">About</a>
            <a href="/#courses" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors">Courses</a>
            <Link to="/activities" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors">Activities</Link>
            <Link to="/social-work" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors">Social Work</Link>
            <Link to="/achievers" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors">Achievers</Link>
            <a href="/#contact" className="nav-link text-blue-900 hover:text-orange-500 font-medium transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
              Apply Now
            </button>
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
              <a href="/#contact" className="text-blue-900 hover:text-orange-500 font-medium py-2 border-b border-gray-100">Contact</a>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold w-full mt-2">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
