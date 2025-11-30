"use client"

import { Globe, Clock, Layers, TrendingUp, Shield } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

export function Problem() {
    const topFeatures = [
        {
            title: "Scattered tenant data",
            description: "Landlords keep tenant details in WhatsApp, notebooks, and phones, making it hard to track terms, dates, and contacts.",
            image: "/problem 1.png"
        },
        {
            title: "Untracked or lost receipts",
            description: "Many landlords issue manual receipts or forget to record payments, leading to mistakes and confusion at month-end.",
            image: "/problem 2.png"
        },
        {
            title: "Maintenance requests get lost",
            description: "Requests get sent randomly on WhatsApp and are forgotten or mixed with unrelated chats.",
            image: "/problem 3.png"
        }
    ]

    const bottomFeatures = [
        {
            title: "Late payments every month",
            description: "Tenants forget deadlines, causing delayed rent cycles and unpredictable cash flow.",
            image: "/problem 4.png"
        },
        {
            title: "No visibility on property performance",
            description: "Landlords cannot see who paid, who is late, which units are vacant, or how revenue is changing. Decisions become blind guesses.",
            image: "/problem 5.png"
        }
    ]

    const renderCard = (feature: any, index: number) => (
        <div key={index} className="bg-white p-8 border-[0.7px] border-gray-100 transition-all">
            <div className="w-11 h-11 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
            </div>
            <h3 className="text-[19px] font-bold text-[#1F2937] mb-3 leading-tight">
                {feature.title}
            </h3>
            <p className="text-[#6B7280] text-[13px] mb-10 leading-relaxed">
                {feature.description}
            </p>
            <div className="h-[180px] bg-gradient-to-br from-gray-50 to-white border-[0.7px] border-gray-50 overflow-hidden">
                {feature.image && (
                    <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
        </div>
    )

    return (
        <section className="py-20 bg-[#F8F9FA] min-h-screen flex items-center">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Title & Subtitle */}
                <SectionHeader
                    title={["Rental Management Today Is","Stressful and Unorganized"]}
                    description="Managing rentals in Rwanda often relies on manual notes, scattered messages, and late payments that slow down growth."
                    align="center"
                    variant="light"
                    className="mb-16"
                />

                {/* First Row - 3 Cards */}
                <div className="grid md:grid-cols-3 gap-5 mb-5">
                    {topFeatures.map(renderCard)}
                </div>

                {/* Second Row - 2 Cards */}
                <div className="grid md:grid-cols-2 gap-5">
                    {bottomFeatures.map(renderCard)}
                </div>
            </div>
        </section>
    )
}
