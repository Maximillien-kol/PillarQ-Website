"use client"

import { Bed, Bath, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"

export function ClientProperties() {
    const properties = [
        {
            name: "DuneHaven Residences",
            beds: 6,
            baths: 4,
            sqft: 1200,
            price: "$550,000",
            image: "/1 (1).jpg"
        },
        {
            name: "Family-Friendly Villas",
            beds: 8,
            baths: 5,
            sqft: 3000,
            price: "$840,000",
            image: "/1 (2).jpg"
        },
        {
            name: "Oceanfront Condominiums",
            beds: 5,
            baths: 4,
            sqft: 2600,
            price: "$655,000",
            image: "/1 (3).jpg"
        },
        {
            name: "Stonehaven Realty",
            beds: 4,
            baths: 4,
            sqft: 1800,
            price: "$200,000",
            image: "/1 (4).jpg"
        }
    ]

    return (
        <section className="py-20 border-t border-gray-200" style={{ backgroundColor: '#0D1B2A' }}>
            <div className="max-w-7xl mx-auto px-8 w-full">
                <SectionHeader
                    subtitle="Featured Properties"
                    title={["Explore Your Options", "Find Your Perfect Match"]}
                    variant="dark"
                />

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {properties.map((property, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            {/* Property Image */}
                            <div className="h-56 mb-4 overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Property Info */}
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-white">
                                    {property.name}
                                </h3>

                                {/* Property Details */}
                                <div className="flex items-center gap-3 text-xs text-white/70">
                                    <div className="flex items-center gap-1">
                                        <Bed className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                                        <span>{property.beds} Beds</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Bath className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                                        <span>{property.baths} Bath</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Maximize className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                                        <span>{property.sqft} m2</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-xl font-bold text-white pt-1">
                                    {property.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-12">
                    <Button variant="secondary" size="default">
                        View More Properties
                    </Button>
                </div>
            </div>
        </section>
    )
}

