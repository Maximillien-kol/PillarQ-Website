"use client"

import { Plus, Minus, MoveRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"

export function FAQ() {
    const [openIndex, setOpenIndex] = useState(1)

    const faqs = [
        {
            question: "What features does this software offer?",
            answer: "Our platform offers comprehensive property listings, advanced search filters, virtual tours, neighborhood insights, mortgage calculators, direct agent communication, and real-time market analytics to help you make informed decisions."
        },
        {
            question: "How does this solution improve efficiency?",
            answer: "This solution boosts efficiency by automating tasks, streamlining workflows, and providing data insights that support faster, smarter decision-making."
        },
        {
            question: "What kind of support is provided?",
            answer: "We provide 24/7 customer support via chat, email, and phone. You'll also get access to dedicated property agents, comprehensive guides, video tutorials, and a knowledge base to assist you throughout your real estate journey."
        },
        {
            question: "How secure is the data managed by this software?",
            answer: "We implement bank-level encryption, secure data storage, regular security audits, and comply with all data protection regulations. Your personal and financial information is protected with multi-factor authentication and secure payment processing."
        },
        {
            question: "Can the software integrate with our existing systems?",
            answer: "Yes, our platform integrates seamlessly with major CRM systems, property management tools, email platforms, and accounting software. We offer API access and custom integration support for enterprise clients."
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section className="py-24 bg-white min-h-screen flex items-center">
            <div className="max-w-[1280px] mx-auto px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-[440px_1fr] gap-24 items-start">
                    {/* Left Side */}
                    <div className="max-w-[440px]">
                        <SectionHeader
                            title={["Frequently ask", "questions"]}
                            subtitle="FAQs"
                            description="Experience intelligent, efficient, and sustainable software designed to drive progress."
                            align="left"
                            variant="light"
                            className="mb-8"
                        />
                        <Button variant="primary" size="default">
                            Contact us
                        </Button>
                    </div>

                    {/* Right Side - FAQ Items */}
                    <div className="space-y-[14px]">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className={`w-full text-left transition-all duration-500 ease-in-out transform px-[26px] py-[22px] border-[0.7px] ${openIndex === index
                                        ? "bg-white border-gray-300 scale-[1.01]"
                                        : "bg-[#FAFAFA] border-gray-200 scale-100"
                                        }`}
                                >
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex items-start gap-[18px] flex-1">
                                            <span className={`text-[14px] font-medium min-w-[36px] pt-[2px] leading-none transition-all duration-300 ${openIndex === index ? "text-[#F59E0B]" : "text-[#D4D4D4]"
                                                }`} style={{ fontFamily: 'var(--font-roboto-flex)' }}>
                                                {String(index + 1).padStart(3, '0')}
                                            </span>
                                            <span className="text-[#1A1A1A] font-semibold text-[15px] leading-[1.55] tracking-[-0.01em] pt-[1px]" style={{ fontFamily: 'var(--font-roboto-flex)' }}>
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className="flex-shrink-0 pt-[3px]">
                                            <div className={`transition-all duration-300 ease-out ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                                {openIndex === index ? (
                                                    <Minus className="w-[18px] h-[18px] text-[#F59E0B] transition-colors duration-300" strokeWidth={2.8} />
                                                ) : (
                                                    <Plus className="w-[18px] h-[18px] text-[#1A1A1A] transition-colors duration-300" strokeWidth={2.8} />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 mt-[18px]' : 'max-h-0 opacity-0 mt-0'
                                            }`}
                                    >
                                        {faq.answer && (
                                            <div className="ml-[54px] pr-[42px]">
                                                <p className="text-[#A3A3A3] text-[13px] leading-[1.7] tracking-[-0.005em]" style={{ fontFamily: 'var(--font-roboto-flex)' }}>
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
