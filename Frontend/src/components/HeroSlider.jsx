import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/ScienceExhibition2.png',
    title: 'Experienced Teachers, Quality Education',
    subtitle: 'Our commitment is to the all-round development and bright future of every child.',
    cta: 'Meet Our Team',
  },
  {
    id: 2,
    image: '/Science exhibition.png',
    title: 'Special Focus on Math, English & Science',
    subtitle: 'Excellence in academics with personalized attention and modern teaching methods.',
    cta: 'Learn More',
  },
  {
    id: 3,
    image: '/Culturalfeastdandiya - Copy.png',
    title: 'All-Round Development',
    subtitle: 'Nurturing minds, building character, and preparing leaders for tomorrow.',
    cta: 'Explore Courses',
  },
  {
    id: 4,
    image: '/Drawing.png',
    title: 'A Place of Learning & Growth',
    subtitle: 'We believe every student has the potential to achieve great things with the right guidance.',
    cta: 'Know More',
  },
  {
    id: 5,
    image: '/Sports.png',
    title: 'Building Future Leaders Today',
    subtitle: 'Join our vibrant school community where every child is valued, supported and inspired.',
    cta: 'Schedule Visit',
  },
  {
    id: 6,
    image: '/Picnic1.png',
    title: 'Welcome to D.V.M. High School & Jr. College',
    subtitle: 'A legacy of academic excellence, values, and holistic student development.',
    cta: 'Discover More',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

  const prev = () => { setCurrent((c) => (c - 1 + slides.length) % slides.length); setPaused(true) }
  const next = () => { setCurrent((c) => (c + 1) % slides.length); setPaused(true) }
  const goTo = (i) => { setCurrent(i); setPaused(true) }

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slides ── */}
      {slides.map((slide, i) => {
        const isActive = i === current
        return (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              zIndex: isActive ? 10 : 0,
            }}
          >
            {/* Background image with zoom */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: isActive ? 'scale(1.07)' : 'scale(1)',
                transition: 'transform 8s ease-out',
              }}
            />

            {/* Dark gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.15) 100%)',
            }} />

            {/* Bottom vignette */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '200px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
            }} />

            {/* Content */}
            <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', zIndex: 2 }}>
              <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
                <div style={{ maxWidth: '680px' }}>

                  {/* Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(249,115,22,0.25)',
                    border: '1px solid rgba(249,115,22,0.5)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 18px',
                    borderRadius: '999px',
                    marginBottom: '1.5rem',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fb923c', display: 'inline-block' }} />
                    <span style={{ color: '#fed7aa', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Welcome to D.V.M. High School & Jr. College
                    </span>
                  </div>

                  {/* Title */}
                  <h1 style={{
                    fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1.1,
                    marginBottom: '1.25rem',
                    textShadow: '0 4px 24px rgba(0,0,0,0.4)',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s',
                  }}>
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: '#e5e7eb',
                    lineHeight: 1.7,
                    marginBottom: '2.5rem',
                    maxWidth: '560px',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s',
                  }}>
                    {slide.subtitle}
                  </p>

                  {/* Buttons */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s',
                  }}>
                    <a
                      href={slide.id === 5 ? "https://wa.me/919022081772?text=Hello,%20I%20would%20like%20to%20schedule%20a%20visit%20to%20D.V.M.%20High%20School%20%26%20Jr.%20College." : (slide.cta.includes('Courses') ? '#courses' : '#about')}
                      target={slide.id === 5 ? "_blank" : undefined}
                      rel={slide.id === 5 ? "noopener noreferrer" : undefined}
                      style={{
                        background: 'linear-gradient(135deg, #f97316, #ea580c)',
                        color: '#fff',
                        padding: '14px 32px',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textDecoration: 'none',
                        boxShadow: '0 8px 24px rgba(249,115,22,0.4)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        display: 'inline-block',
                      }}
                      onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(249,115,22,0.5)' }}
                      onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(249,115,22,0.4)' }}
                    >
                      {slide.cta}
                    </a>
                    <a
                      href="https://wa.me/919022081772?text=Hello,%20I%20have%20an%20inquiry%20regarding%20D.V.M.%20High%20School%20%26%20Jr.%20College."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(255,255,255,0.12)',
                        color: '#fff',
                        padding: '14px 32px',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textDecoration: 'none',
                        border: '2px solid rgba(255,255,255,0.5)',
                        backdropFilter: 'blur(8px)',
                        transition: 'background 0.2s, border-color 0.2s',
                        display: 'inline-block',
                      }}
                      onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.borderColor = '#fff' }}
                      onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
                    >
                      Contact Us
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* ── Slide counter ── */}
      <div style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 30,
        background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
        color: '#fff', padding: '6px 14px', borderRadius: '999px',
        fontSize: '13px', fontWeight: 600,
        border: '1px solid rgba(255,255,255,0.15)',
      }}>
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* ── Left Arrow ── */}
      <button
        onClick={prev}
        style={{
          position: 'absolute', left: '1.25rem', top: '50%',
          transform: 'translateY(-50%)', zIndex: 30,
          width: 48, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.45)', color: '#fff',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', cursor: 'pointer',
          backdropFilter: 'blur(6px)',
          transition: 'background 0.2s, transform 0.2s',
        }}
        onMouseOver={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.7)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)' }}
        onMouseOut={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.45)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)' }}
      >
        <ChevronLeft size={22} />
      </button>

      {/* ── Right Arrow ── */}
      <button
        onClick={next}
        style={{
          position: 'absolute', right: '1.25rem', top: '50%',
          transform: 'translateY(-50%)', zIndex: 30,
          width: 48, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.45)', color: '#fff',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', cursor: 'pointer',
          backdropFilter: 'blur(6px)',
          transition: 'background 0.2s, transform 0.2s',
        }}
        onMouseOver={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.7)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)' }}
        onMouseOut={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.45)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)' }}
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Progress dots ── */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)', zIndex: 30,
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 32 : 10,
              height: 10,
              borderRadius: '999px',
              background: i === current ? '#f97316' : 'rgba(255,255,255,0.45)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, zIndex: 30,
        height: '3px',
        background: 'linear-gradient(to right, #f97316, #fb923c)',
        width: `${((current + 1) / slides.length) * 100}%`,
        transition: 'width 0.6s ease',
      }} />

    </section>
  )
}
