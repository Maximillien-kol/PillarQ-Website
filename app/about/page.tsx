"use client"

import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { ClientsCarousel } from "@/components/about/clients-carousel"
import { BlogSection } from "@/components/about/blog-section"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStats } from "@/components/about/about-stats"
import { AboutManifesto } from "@/components/about/about-manifesto"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header with light variant */}
            <div className="relative z-50 pb-32">
                <Header variant="light" />
            </div>

            <div className="pt-12 px-6 max-w-7xl mx-auto pb-20">
                {/* Hero Section */}
                <AboutHero />

                {/* Stats Section */}
                <AboutStats />
            </div>

            {/* New Dark Section - Full Width */}
            <AboutManifesto />

            {/* Clients Section */}
            <ClientsCarousel />

            {/* Blog Section */}
            <BlogSection />

            <Footer />
        </main>
    )
}
