"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Home, MapPin } from "lucide-react"
import { useState } from "react"

export function Hero() {
    const [searchType, setSearchType] = useState("rent")
    const [propertyType, setPropertyType] = useState("house")
    const [location, setLocation] = useState("Malang, Indonesia")

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-visible">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/hero.jpg)' }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 27, 42, 0.3)' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
                {/* Main Heading - Centered */}
                <div className="text-center mb-20">
                    <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight" style={{ fontFamily: 'var(--font-roboto-flex)' }}>
                        Manage Rentals With
                        <br />
                        Clarity, Control, and Confidence.
                    </h1>

                    <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        PillarQ helps landlords and property teams automate rent collection, track tenants,
                        <br />
                        and manage properties from a modern, secure platform built for the Rwandan market.
                    </p>
                </div>
            </div>

            {/* Bottom Search Filter Bar - Centered */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-6xl px-9">
                <div className="rounded-xl p-4 flex items-center gap-3 h-[100px]" style={{ backgroundColor: '#C9A34F' }}>
                    {/* Rent/Buy Dropdown */}
                    <div className="flex items-center gap-2 px-6 py-3 cursor-pointer transition flex-1">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-white font-medium text-sm">Rent/Buy</span>
                        <ChevronDown className="w-4 h-4 text-white/80 ml-auto" />
                    </div>

                    {/* Divider */}
                    <div className="h-5 w-px bg-white/20"></div>

                    {/* Property Type Dropdown */}
                    <div className="flex items-center gap-2 px-6 py-3 cursor-pointer transition flex-1">
                        <Home className="w-5 h-5 text-white" />
                        <span className="text-white font-medium text-sm">House</span>
                        <ChevronDown className="w-4 h-4 text-white/80 ml-auto" />
                    </div>

                    {/* Divider */}
                    <div className="h-5 w-px bg-white/20"></div>

                    {/* Location Dropdown */}
                    <div className="flex items-center gap-2 px-6 py-3 cursor-pointer transition flex-1">
                        <MapPin className="w-5 h-5 text-white" />
                        <span className="text-white font-medium text-sm">Malang, Indonesia</span>
                        <ChevronDown className="w-4 h-4 text-white/80 ml-auto" />
                    </div>

                    {/* Find Property Button */}
                    <Button variant="primary" size="default">
                        Find Property
                    </Button>
                </div>
            </div>
        </section>
    )
}
