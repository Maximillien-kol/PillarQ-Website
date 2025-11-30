"use client"

import { AuthCarousel } from "@/components/auth/auth-carousel"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
    // Carousel data
    const carouselSlides = [
        {
            image: "/login (1).jpg",
            title: "Find your sweet home",
            subtitle: "Schedule visit in just a few clicks"
        },
        {
            image: "/login (2).jpg",
            title: "Discover your dream property",
            subtitle: "Browse thousands of verified listings"
        },
        {
            image: "/login (3).jpg",
            title: "Smart rental management",
            subtitle: "Manage your properties with ease"
        }
    ]

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side - Image Section */}
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 hidden lg:flex flex-col">
                {/* Logo */}
                <div className="absolute top-8 left-8 z-10">
                    <img
                        src="/full logo blue.svg"
                        alt="PillarH Logo"
                        className="h-12 w-auto object-contain"
                    />
                </div>

                <AuthCarousel slides={carouselSlides} />
            </div>

            {/* Right Side - Login Form */}
            <LoginForm />
        </div>
    )
}
