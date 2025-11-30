"use client"

import { Home, Building2, Factory, Warehouse } from "lucide-react"
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text"

export function AboutManifesto() {
    return (
        <section className="bg-[#111111] text-white py-32 mb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl">

                    {/* Combined Text Content with Scroll Animation */}
                    <div className="max-w-4xl mb-20">
                        <ScrollRevealText
                            text={`For years, rental management has been stuck in chaos. It's time to redefine the way properties are managed.\n\nAt PillarQ, we give landlords clarity, control, and confidence with a simple, automated platform. Manage without stress. Grow without limits. \nWelcome to the future of rental management`}
                            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white"
                        />
                    </div>

                    {/* Icons */}
                    <div className="flex gap-4 mt-20">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            <Home className="w-5 h-5 text-black" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-black" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            <Factory className="w-5 h-5 text-black" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            <Warehouse className="w-5 h-5 text-black" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
