import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import About from './components/About'
import Features from './components/Features'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import SocialWork from './components/SocialWork'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import Achievers from './components/Achievers'
import AchieversPreview from './components/AchieversPreview'
import Footer from './components/Footer'
import ScrollToTop from './utils/ScrollToTop'

const Home = () => (
  <>
    <HeroSlider />
    <About />
    <Features />
    <Courses />
    <WhyChooseUs />
  </>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/social-work" element={<SocialWork />} />
          <Route path="/achievers" element={<Achievers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
