"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScanFace } from "lucide-react"

export function AboutHero() {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
            {/* Left Image - Line Art Style */}
            <div className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                    <img
                        src="/about.jpg"
                        alt="Architectural Design"
                        className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    />
                </div>
                {/* Decorative elements could go here */}
            </div>

            {/* Right Content */}
            <div className="space-y-4">
                <h1 className="text-6xl md:text-xl lg:text-8xl font-bold tracking-tighter text-gray-900 leading-[0.9]">
                    1<span className="text-[0.5em] align-top">st</span> <span className="text-gray-200">Rental<br />Management</span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    PillarQ helps landlords and property teams manage tenants, rent, and properties in one secure platform.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link href="/register">
                        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 h-12 text-base">
                            Get Started
                        </Button>
                    </Link>
                    <Button variant="outline" className="rounded-full px-8 h-12 text-base">
                        Learn More
                    </Button>
                </div>

                <div className="pt-1">
                    <div className="flex items-start gap-4">
                        <div className="mt-1">
                            <ScanFace className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Contact us</h3>
                            <p className="text-sm text-gray-500 mt-1 max-w-xs">
                                Online learning involves courses offered by primary institutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
