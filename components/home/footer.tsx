"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-white">
            {/* Instagram Gallery Section - Increased Size */}
            <div className="grid grid-cols-2 md:grid-cols-6 h-90">
                {/* Image placeholders */}
                <div className="relative group overflow-hidden cursor-pointer">
                    <img
                        src="/post 1.jpg"
                        alt="Property 1"
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Instagram className="w-8 h-8" />
                        <span className="text-sm font-medium">View on Instagram</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden cursor-pointer">
                    <img
                        src="/post 2.jpg"
                        alt="Property 2"
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Instagram className="w-8 h-8" />
                        <span className="text-sm font-medium">View on Instagram</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden cursor-pointer">
                    <img
                        src="/post 3.jpg"
                        alt="Property 3"
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Instagram className="w-8 h-8" />
                        <span className="text-sm font-medium">View on Instagram</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden cursor-pointer">
                    <img
                        src="/post 4.jpg"
                        alt="Property 4"
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Instagram className="w-8 h-8" />
                        <span className="text-sm font-medium">View on Instagram</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden cursor-pointer">
                    <img
                        src="/post 5.jpg"
                        alt="Property 5"
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Instagram className="w-8 h-8" />
                        <span className="text-sm font-medium">View on Instagram</span>
                    </div>
                </div>
                {/* Instagram CTA */}
                <div className="bg-[#0D1B2A] flex flex-col items-center justify-center gap-3 text-white">
                    <Instagram className="w-10 h-10" />
                    <span className="font-medium text-lg">#pillarhomes</span>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-[#C9A34F] py-16">
                <div className="max-w-7xl h-20 mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <h2 className="text-white text-3xl md:text-4xl font-medium max-w-lg">
                            Let's find your dream home together.
                        </h2>
                        <div className="relative w-full md:w-auto md:min-w-[500px]">
                            <input
                                type="email"
                                placeholder=""
                                className="w-full bg-transparent border border-white/40 text-white placeholder:text-white/60 h-16 px-6 pr-32 rounded-full focus:outline-none focus:border-white/60 transition"
                            />
                            <button
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white px-8 h-12 text-sm font-medium transition rounded-full"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer - Dark blue-black background */}
            <div className="bg-[#0D1B2A] text-white py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-16">
                        {/* Brand Column */}
                        <div className="md:col-span-1">
                            <img
                                src="/full logo white.svg"
                                alt="PillarH Logo"
                                className="h-8 w-auto mb-4"
                            />
                            <p className="text-white/70 text-sm mb-4 leading-relaxed">
                                Premium Real Estate Solutions
                                <br />
                                Your Trusted Property Partner
                            </p>
                            <p className="text-white/90 text-sm py-4 font-medium">
                                Open Daily 9AM - 6PM PST
                                <br />
                                @Pillarhomes
                            </p>
                        </div>

                        {/* Services Column */}
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Services</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li>
                                    <Link href="/buy" className="hover:text-white transition">
                                        Buy Property
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sell" className="hover:text-white transition">
                                        Sell Property
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/rent" className="hover:text-white transition">
                                        Rent Property
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/financing" className="hover:text-white transition">
                                        Property Financing
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li>
                                    <Link href="/properties" className="hover:text-white transition">
                                        All Properties
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/agents" className="hover:text-white transition">
                                        Find an Agent
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-white transition">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-white transition">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Stay in Touch Column */}
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Stay in Touch</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li>
                                    <Link href="https://facebook.com" className="hover:text-white transition">
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://linkedin.com" className="hover:text-white transition">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://youtube.com" className="hover:text-white transition">
                                        Linkedin
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com" className="hover:text-white transition">
                                        Twitter
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 text-sm">
                            Copyright © 2025 PillarH. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-white/50">
                            <Link href="/privacy" className="hover:text-white transition">
                                Privacy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
