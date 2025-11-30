"use client"

import { AuthCarousel } from "@/components/auth/auth-carousel"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
    // Carousel data
    const carouselSlides = [
        {
            image: "/login (1).jpg",
            title: "Join our community",
            subtitle: "Start your property journey today"
        },
        {
            image: "/login (2).jpg",
            title: "List your properties",
            subtitle: "Reach thousands of potential tenants"
        },
        {
            image: "/login (3).jpg",
            title: "Manage with ease",
            subtitle: "All-in-one rental management platform"
        }
    ]

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side - Sign Up Form */}
            <RegisterForm />

            {/* Right Side - Image Section */}
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 hidden lg:flex flex-col">
                {/* Logo */}
                <div className="absolute top-8 right-8 z-10">
                    <img
                        src="/full logo blue.svg"
                        alt="PillarH Logo"
                        className="h-12 w-auto object-contain"
                    />
                </div>
                <AuthCarousel slides={carouselSlides} />
            </div>
        </div>
    )
}
