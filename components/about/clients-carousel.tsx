"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const clients = [
    { name: "ALTIMA", logo: "/placeholder-logo.svg" },
    { name: "MEISTER", logo: "/placeholder-logo.svg" },
    { name: "Soriana", logo: "/placeholder-logo.svg" },
    { name: "dpgmedia", logo: "/placeholder-logo.svg" },
    { name: "Panaracer", logo: "/placeholder-logo.svg" },
    { name: "epek", logo: "/placeholder-logo.svg" },
    { name: "Client 7", logo: "/placeholder-logo.svg" },
    { name: "Client 8", logo: "/placeholder-logo.svg" },
]

export function ClientsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true })

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="py-4 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                            Esteemed Clients
                        </h2>
                        <p className="text-gray-500 max-w-xl text-lg">
                            We're honored to have partnered with these reputable organizations on impactful architectural projects through the decades.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full h-12 w-12 border-gray-200 hover:bg-gray-50 hover:text-black"
                            onClick={scrollPrev}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full h-12 w-12 border-gray-200 hover:bg-gray-50 hover:text-black"
                            onClick={scrollNext}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {clients.map((client, index) => (
                            <div className="flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 pl-4" key={index}>
                                <div className="bg-white border border-gray-100 rounded-2xl h-40 flex items-center justify-center p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                                    {/* Placeholder for Logo */}
                                    <span className="text-xl font-bold text-gray-300 group-hover:text-gray-900 transition-colors">
                                        {client.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
