"use client"

import { useState, useEffect } from "react"

interface Slide {
    image: string
    title: string
    subtitle: string
}

interface AuthCarouselProps {
    slides: Slide[]
    className?: string
}

export function AuthCarousel({ slides, className = "" }: AuthCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <div className={`relative flex-1 flex items-end p-12 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Carousel Images */}
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {/* Overlay Text - Bottom Left */}
            <div className="relative z-10 text-white max-w-lg space-y-6">
                <div className="space-y-3">
                    <h1 className="text-5xl font-bold leading-tight transition-all duration-500">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl text-white/90 transition-all duration-500">
                        {slides[currentSlide].subtitle}
                    </p>
                </div>

                {/* Carousel Dots */}
                <div className="flex items-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'w-12 h-1 bg-white'
                                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
