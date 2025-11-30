"use client"

import { Button } from "@/components/ui/button"
import { ToggleButton } from "@/components/ui/toggle-button"
import { SectionHeader } from "@/components/ui/section-header"
import { Check, ArrowRight } from "lucide-react"
import { useState } from "react"

export function Pricing() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")


    const services = [
        {
            title: "Property Valuation",
            monthlyPrice: "$500",
            yearlyPrice: "$5000",
            unit: "/property",
            features: [
                "Full property assessment.",
                "Detailed market report.",
                "Comparative analysis.",
                "Investment recommendations."
            ],
            buttonText: "Book Now",
            isPrimary: true
        },
        {
            title: "Home Inspection",
            monthlyPrice: "$150",
            yearlyPrice: "$1500",
            unit: "",
            features: [
                "Complete home inspection.",
                "Structural assessment.",
                "Safety checks included.",
                "Same-day service."
            ],
            buttonText: "Enquire",
            isPrimary: false
        },
        {
            title: "Rental Management",
            monthlyPrice: "$200",
            yearlyPrice: "$2000",
            unit: "/hr",
            features: [
                "Tenant screening service.",
                "Rent collection handling.",
                "Property maintenance.",
                "24/7 support available."
            ],
            buttonText: "Enquire",
            isPrimary: false
        },
        {
            title: "Full Property Service",
            monthlyPrice: "$2000",
            yearlyPrice: "$20000",
            unit: "/hr",
            features: [
                "Complete property services.",
                "Legal documentation help.",
                "Professional photography.",
                "Marketing assistance."
            ],
            buttonText: "Enquire",
            isPrimary: false
        }
    ]

    const subscriptionBenefits = [
        "Priority and faster service req.",
        "Free annual property inspection.",
        "Repairs & installations discounts.",
        "Regular maintenance check-ups."
    ]

    return (
        <section className="py-20 bg-[#F5F5F5] min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <SectionHeader
                    title={["Simple, Transparent", "Pricing Built for Growth."]}
                />

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 border-[0.7px] border-[#E5E7EB] transition-all"
                        >
                            <h3 className="text-[#6B7280] text-[14px] font-medium mb-4">
                                {service.title}
                            </h3>
                            <div className="mb-6" key={billingPeriod}>
                                <span className="text-[32px] font-bold text-[#111827] leading-none">
                                    {billingPeriod === "monthly" ? service.monthlyPrice : service.yearlyPrice}
                                </span>
                                <span className="text-[#9CA3AF] text-[13px] ml-1">{service.unit}</span>
                            </div>

                            <ul className="space-y-2.5 mb-8">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-2">
                                        <Check className="w-[14px] h-[14px] text-[#9CA3AF] flex-shrink-0 mt-[3px]" />
                                        <span className="text-[#6B7280] text-[13px] leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={service.isPrimary ? "primary" : "outline"}
                                size="default"
                                className="w-full"
                            >
                                {service.buttonText}
                            </Button>
                        </div>
                    ))}
                </div>


                {/* Subscription Section */}
                <div className="bg-white border-[0.7px] border-[#C9A34F] p-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                        <div className="flex-1">
                            {/* Toggle Buttons */}
                            <div className="mb-8">
                                <ToggleButton
                                    options={[
                                        { value: "monthly", label: "Monthly" },
                                        { value: "yearly", label: "Yearly", badge: "Save 20%" }
                                    ]}
                                    value={billingPeriod}
                                    onChange={(value) => setBillingPeriod(value as "monthly" | "yearly")}
                                />
                            </div>

                            <h3 className="text-[32px] font-bold text-[#111827] leading-tight">
                                Stay covered, save more
                                <br />
                                with our subscription plan.
                            </h3>
                        </div>

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <span className="text-[#6B7280] text-[15px]">Subscribe Now For</span>
                            <span className="text-[#C9A34F] font-semibold text-[18px]" key={billingPeriod}>
                                ${billingPeriod === "monthly" ? "400" : "4000"}/{billingPeriod === "monthly" ? "month" : "year"}
                            </span>
                            <ArrowRight className="w-5 h-5 text-[#C9A34F]" />
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {subscriptionBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <Check className="w-[14px] h-[14px] text-[#9CA3AF] flex-shrink-0 mt-[3px]" />
                                <span className="text-[#6B7280] text-[13px] leading-relaxed">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
