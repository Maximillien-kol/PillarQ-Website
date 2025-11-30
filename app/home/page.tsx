import { Hero } from "@/components/home/hero"
import { Problem } from "@/components/home/problem"
import { Solution } from "@/components/home/solution"
import { ProductFeatures } from "@/components/home/product-features"
import { ClientProperties } from "@/components/home/client-properties"
import { Insights } from "@/components/home/insights"
import { Pricing } from "@/components/home/pricing"
import { FAQ } from "@/components/home/faq"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Problem />
            <Solution />
            <ProductFeatures />
            <ClientProperties />
            <Pricing />
            <FAQ />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    )
}
