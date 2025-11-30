"use client"

import { SectionHeader } from "@/components/ui/section-header"

export function ProductFeatures() {
    const features = [
        {
            title: "SMS rent reminders",
            description: "Send scheduled reminders before due date, on due date, and post-due date.",
            image: "/solution 1.png"
        },
        {
            title: "Mobile money payment logging",
            description: "Track mobile money payments with easy manual or API-assisted verification",
            image: "/solution 2.png"
        },
        {
            title: "Digital receipts & history",
            description: "Generate and store receipts instantly; see lifetime payment history per tenant",
            image: "/solution 3.png"
        },
        {
            title: "Maintenance ticketing",
            description: "Tenants submit issues; landlords track progress and status clearly.",
            image: "/solution 4.png"
        },
        {
            title: "Unit and property management",
            description: "Add apartments, houses, and single rooms with occupancy status and rent amounts.",
            image: "/solution 5.png"
        },
        {
            title: "Revenue analytics",
            description: "Charts and metrics showing monthly income, paid vs unpaid units, and vacancy rate.",
            image: "/solution 6.png"
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-8 w-full">
                <SectionHeader
                    title={["Powerful Features That","Simplify Rental Operations"]}
                />

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="border-[0.7px] border-gray-200 p-8 transition-colors"
                        >
                            {/* Feature Visual */}
                            <div className="bg-gray-100 h-48 mb-6 flex items-center justify-center border-[0.7px] border-gray-200 overflow-hidden">
                                {feature.image ? (
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-gray-400 text-sm">Feature Visual</div>
                                )}
                            </div>

                            {/* Feature Info */}
                            <h3 className="text-lg font-bold mb-3" style={{ color: '#0D1B2A' }}>
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
