"use client"

import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"

export function Testimonials() {
    const testimonials = [
        {
            text: "This platform made finding my dream home incredibly easy! The virtual tours and detailed listings helped me make an informed decision. I moved into my new house within 2 months!",
            name: "Sarah Thompson",
            role: "Homeowner"
        },
        {
            text: "As a first-time buyer, I needed guidance and transparency. This platform provided everything—mortgage calculators, neighborhood insights, and responsive agents. Highly recommended!",
            name: "James Carter",
            role: "First-Time Buyer"
        },
        {
            text: "I'm a real estate photographer, and this platform helped showcase my property listings beautifully. The gallery features are perfect for highlighting stunning homes.",
            name: "Emma Rodriguez",
            role: "Photographer"
        },
        {
            text: "I use this for my rental properties, and the management tools are excellent—tenant screening, rent collection, and maintenance tracking. It's comprehensive and user-friendly.",
            name: "Alex Nguyen",
            role: "Property Owner"
        },
        {
            text: "I have no real estate experience, but I didn't need it with this platform! The step-by-step property search and detailed guides made buying my first home stress-free.",
            name: "Linda Patel",
            role: "New Homeowner"
        },
        {
            text: "It's great for finding properties quickly, but as an investor, I found the market analytics invaluable. Data-driven insights helped me make profitable investment decisions.",
            name: "Michael Brown",
            role: "Real Estate Investor"
        }
    ]

    return (
        <section className="py-20 bg-white min-h-screen flex items-center">
            <div className="max-w-[1400px] mx-auto px-12 w-full">
                {/* Header */}
                <SectionHeader
                    title={["Trusted by Landlords", "and Property Owners"]}
                    align="center"
                    variant="light"
                    className="mb-16"
                />

                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-24 mb-20 items-center">
                    {/* Left - Stats */}
                    <div>
                        <h2 className="text-[140px] font-bold text-[#0A0A0A] leading-[0.9] mb-5 tracking-tight" style={{ fontFamily: 'var(--font-roboto-flex)' }}>
                            25+
                        </h2>
                        <p className="text-[#505050] text-[15px] font-normal">
                            Properties owners helped so far.
                        </p>
                    </div>

                    {/* Right - CTA */}
                    <div className="flex flex-col justify-center">
                        {/* Avatar Group */}
                        <div className="flex -space-x-4 mb-7">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-[5px] border-white flex items-center justify-center overflow-hidden" />
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-[5px] border-white flex items-center justify-center overflow-hidden" />
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-[5px] border-white flex items-center justify-center overflow-hidden" />
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-[5px] border-white flex items-center justify-center overflow-hidden" />
                        </div>

                        <p className="text-[#0A0A0A] text-[15px] leading-[1.7] mb-8 max-w-[480px]">
                            Don't just take our word for it, hear from people who've found their dream homes using our platform.
                        </p>

                        <div className="flex gap-3">
                            <Button variant="primary" size="default">
                                Let's Chat!
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#FAFAFA] border-[0.7px] border-[#E5E5E5] p-8 hover:bg-white transition-all duration-300"
                        >
                            <p className="text-[#0A0A0A] text-[14px] leading-[1.65] mb-6 min-h-[140px]" style={{ fontFamily: 'var(--font-roboto-flex)' }}>
                                {testimonial.text}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex-shrink-0" />
                                <div>
                                    <p className="text-[#0A0A0A] font-semibold text-[14px] mb-1" style={{ fontFamily: 'var(--font-roboto-flex)' }}>
                                        {testimonial.name}
                                    </p>
                                    <p className="text-[#6B6B6B] text-[13px]" style={{ fontFamily: 'var(--font-roboto-flex)' }}>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
