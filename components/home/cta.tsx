"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-12">
                {/* CTA Section - Black Background */}
                <div className="p-16" style={{ backgroundColor: '#0D1B2A' }}>
                    <div className="max-w-4xl">
                        {/* Top Label with Line */}
                        <div className="flex items-center gap-4 mb-8">
                            <p className="text-white/70 text-sm italic">Let's Build Something Great Together</p>
                            <div className="flex-1 h-px bg-white/20"></div>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-5xl font-bold text-white mb-4">
                            Manage Rentals the Smart Way
                        </h2>

                        {/* Subtitle */}
                        <p className="text-2xl italic text-white/90 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                            Let's help you promote, manage & sell your properties.
                        </p>

                        {/* Description */}
                        <p className="text-white/70 text-base mb-10">
                            Partner with PillarH and join property owners who've leveled up with us.
                        </p>

                        {/* Button and Email */}
                        <div className="flex flex-col gap-6">
                            <Link href="/register">
                                <Button variant="secondary" size="default" className="w-fit">
                                    Get started
                                </Button>
                            </Link>

                            <a href="mailto:hello@pillarh.com" className="text-white/70 hover:text-white text-sm transition-colors">
                                hello@pillarh.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
