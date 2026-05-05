import React, { useEffect } from 'react'
import { X } from 'lucide-react'

function Lightbox({ image, alt = '', caption = '', onClose }) {
  useEffect(() => {
    if (!image) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image preview'}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md transition-colors z-10"
      >
        <X size={24} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-7xl w-full max-h-full flex flex-col items-center"
      >
        <img
          src={image}
          alt={alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        {caption && (
          <p className="mt-4 text-white/90 text-center text-base sm:text-lg font-medium">
            {caption}
          </p>
        )}
      </div>
    </div>
  )
}

export default Lightbox
