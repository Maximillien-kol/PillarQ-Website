"use client"

import { useState } from "react"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { Search, Bed, Bath, Maximize, ChevronDown, Map, Menu, Star, ChevronRight, Building, Home, Building2, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PropertiesPage() {
    const [activeFilter, setActiveFilter] = useState("City")

    const filters = [
        { name: "City", count: 89 },
        { name: "House", count: 45 },
        { name: "Residential", count: 23 },
        { name: "Apartment", count: 34 }
    ]

    const properties = [
        {
            image: "/1 (1).jpg",
            name: "Riverside Retreat",
            beds: 4,
            bathrooms: 3,
            sqft: 3500,
            price: "$500,000",
            type: "Bedroom Apartment"
        },
        {
            image: "/1 (2).jpg",
            name: "Golden Meadows",
            beds: 6,
            bathrooms: 4,
            sqft: 4500,
            price: "$750,000",
            type: "Beachfront Condo"
        },
        {
            image: "/1 (3).jpg",
            name: "Cityscape Lofts",
            beds: 7,
            bathrooms: 6,
            sqft: 7500,
            price: "$950,000",
            type: "Luxury Apartment"
        },
        {
            image: "/1 (4).jpg",
            name: "Maple Grove Garden House",
            beds: 4,
            bathrooms: 4,
            sqft: 2500,
            price: "$280,000",
            type: "Bedroom Apartment"
        },
        {
            image: "/1 (1).jpg",
            name: "Sunset Towers Eklosbet",
            beds: 7,
            bathrooms: 4,
            sqft: 6500,
            price: "$600,000",
            type: "High-Rise Studio"
        },
        {
            image: "/1 (2).jpg",
            name: "The Grand Residency",
            beds: 5,
            bathrooms: 4,
            sqft: 4500,
            price: "$450,000",
            type: "Loft Apartment"
        },
        {
            image: "/1 (3).jpg",
            name: "Ocean Sea Breeze",
            beds: 8,
            bathrooms: 5,
            sqft: 9500,
            price: "$1,200,000",
            type: "Luxury Apartment"
        },
        {
            image: "/1 (4).jpg",
            name: "The Urban Nest Lofts",
            beds: 6,
            bathrooms: 4,
            sqft: 5500,
            price: "$550,000",
            type: "Luxury Penthouse"
        },
        {
            image: "/1 (1).jpg",
            name: "Emerald Residency Duplex House",
            beds: 7,
            bathrooms: 4,
            sqft: 7500,
            price: "$850,000",
            type: "Duplex Apartment"
        }
    ]

    const agents = [
        {
            name: "Floyd Miles",
            image: "/agent-1.jpg",
            experience: "10+ Years",
            rating: 4.9,
            specializations: ["Luxury Homes", "Commercial Properties", "Property"]
        },
        {
            name: "Devon Lane",
            image: "/agent-2.jpg",
            experience: "4+ Years",
            rating: 4.2,
            specializations: ["Luxury Homes", "Commercial Properties", "Property"]
        },
        {
            name: "Ralph Edwards",
            image: "/agent-3.jpg",
            experience: "14+ Years",
            rating: 4.7,
            specializations: ["Luxury Homes", "Commercial Properties", "Property"]
        },
        {
            name: "Albert Flores",
            image: "/agent-4.jpg",
            experience: "9+ Years",
            rating: 4.9,
            specializations: ["Luxury Homes", "Commercial Properties", "Property"]
        },
        {
            name: "Jane Cooper",
            image: "/agent-5.jpg",
            experience: "5+ Years",
            rating: 4.5,
            specializations: ["Luxury Homes", "Commercial Properties", "Property"]
        },
        {
            name: "Jerome Bell",
            image: "/agent-6.jpg",
            experience: "11+ Years",
            rating: 4.6,
            specializations: ["Luxury Homes", "Commercial Properties", "Property"]
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header variant="light" />

            <div className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
                {/* Search and Filters Bar */}
                <div className="flex items-center justify-between mb-8 gap-4">
                    {/* Search Input */}
                    <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-full px-6 py-3 flex-1 max-w-xs">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="City"
                            className="bg-transparent outline-none text-sm flex-1"
                        />
                    </div>

                    {/* Filter Chips */}
                    <div className="flex items-center gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter.name}
                                onClick={() => setActiveFilter(filter.name)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeFilter === filter.name
                                        ? "bg-[#0D1B2A] text-white"
                                        : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                                    }`}
                            >
                                {filter.name === "City" && <Building className="w-4 h-4" />}
                                {filter.name === "House" && <Home className="w-4 h-4" />}
                                {filter.name === "Residential" && <Layers className="w-4 h-4" />}
                                {filter.name === "Apartment" && <Building2 className="w-4 h-4" />}
                                <span>{filter.name}</span>
                                <span className={activeFilter === filter.name ? "text-white/80" : "text-gray-500"}>
                                    ({filter.count})
                                </span>
                            </button>
                        ))}

                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-gray-300 transition-all">
                            <Map className="w-4 h-4" />
                            <span>Show Map</span>
                        </button>

                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-gray-300 transition-all">
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {properties.map((property, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Property Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Property Details */}
                            <div className="p-6">
                                {/* Stats */}
                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <Bed className="w-4 h-4" />
                                        <span>Bed- {property.beds < 10 ? `0${property.beds}` : property.beds}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Bath className="w-4 h-4" />
                                        <span>Bathroom- {property.bathrooms < 10 ? `0${property.bathrooms}` : property.bathrooms}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Maximize className="w-4 h-4" />
                                        <span>{property.sqft}sqft</span>
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {property.name}
                                </h3>

                                {/* Price and Type */}
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-gray-900">
                                        {property.price}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {property.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center mb-20">
                    <Button variant="secondary">
                        Load More..
                    </Button>
                </div>

                {/* Meet Our Top Real Estate Agents Section */}
                <div className="bg-[#F5F5F5] -mx-6 px-6 py-16 rounded-3xl">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Top Real Estate Agents
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Connect with trusted professionals to find your dream home.
                        </p>
                    </div>

                    {/* Agents Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {agents.map((agent, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Agent Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 overflow-hidden">
                                            {/* Placeholder for agent image */}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{agent.name}</h3>
                                            <p className="text-sm text-gray-500">{agent.experience}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded">
                                        <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                                        <span className="text-sm font-semibold text-gray-900">{agent.rating}</span>
                                    </div>
                                </div>

                                {/* Specialization */}
                                <div>
                                    <p className="text-xs font-semibold text-gray-900 mb-3">Specialization</p>
                                    <div className="flex flex-wrap gap-2">
                                        {agent.specializations.map((spec, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-gray-50 rounded-full text-xs text-gray-700 border border-gray-200"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Explore More Button */}
                    <div className="flex justify-center">
                        <Button variant="primary" className="gap-2">
                            <span>Explore More</span>
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
