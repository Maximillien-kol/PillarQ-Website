"use client"

import { X, ArrowUp, Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

export function Solution() {
    return (
        <section className="py-20 min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f1f1f1ff' }}>
            <div className="max-w-5xl mx-auto px-8 w-full">
                <SectionHeader
                    title={["A Single Platform for Payments,","Tenants, and Property Control"]}
                    description="PillarQ replaces spreadsheets and WhatsApp chaos with a structured, easy-to-use system for managing every part of rental operations."
                    align="center"
                    variant="light"
                    className="mb-16"
                />
                <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <ArrowUp className="w-5 h-5 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-4xl font-bold text-emerald-500">40%</span>
                </div>
                <p className="text-emerald-600 text-sm font-medium">
                    Avg. increase in productivity
                </p>


                {/* Comparison Section */}
                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    {/* Left - Old Way */}
                    <div>
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 mb-6 h-52 flex items-center justify-center border-[0.7px] border-red-100">
                            <div className="text-center text-gray-400 text-sm">
                                Multiple Browser Tabs
                            </div>
                        </div>
                        <div className="text-red-500 text-xs font-bold mb-2 uppercase">The Old way</div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#0D1B2A' }}>
                            Managing all the tools manually
                        </h3>
                        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </p>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">Scattered tenant data</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">Untracked or lost receipts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">Maintenance requests get lost</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">Late payments every month</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">No visibility on property performance</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Our Way */}
                    <div>
                        <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 mb-6 h-52 flex items-center justify-center border-[0.7px] border-emerald-100">
                            <div className="text-center text-gray-400 text-sm">
                                Unified Dashboard
                            </div>
                        </div>
                        <div className="text-emerald-500 text-xs font-bold mb-2 uppercase">Our way (the right way)</div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#0D1B2A' }}>
                            200+ tools in a single tab/product
                        </h3>
                        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </p>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">Centralized tenant profiles</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">Automatic digital receipts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">Organized maintenance tracking</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">Automated rent reminders</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
                                </div>
                                <span className="text-gray-700 text-sm">Real-time property dashboard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
