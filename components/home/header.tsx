"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header({ variant = "dark" }: { variant?: "light" | "dark" }) {
    const isDark = variant === "dark"
    const pathname = usePathname()

    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/home" className="flex items-center gap-3">
                    <img
                        src={isDark ? "/logo hero white.svg" : "/logo hero blue.svg"}
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                </Link>

                {/* Navigation Links - Glassmorphism Background */}
                <nav className={`hidden md:flex items-center gap-2 backdrop-blur-md rounded-full px-2 py-2 ${isDark ? "bg-white/20" : "bg-gray-100/50 border border-gray-200"
                    }`}>
                    {[
                        { name: "Home", href: "/home" },
                        { name: "About", href: "/about" },
                        { name: "Properties", href: "/properties" },
                        { name: "News", href: "/news" },
                        { name: "Contact", href: "/contact" },
                    ].map((link) => {
                        const isActive = pathname === link.href || (link.href === "/home" && pathname === "/")

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition ${isActive
                                    ? isDark
                                        ? "bg-white text-gray-900 hover:bg-white/90 shadow-sm"
                                        : "bg-white text-gray-900 hover:bg-gray-50 border border-gray-100 shadow-sm"
                                    : isDark
                                        ? "text-white hover:bg-white/10"
                                        : "text-gray-600 hover:bg-gray-200/50 hover:text-gray-900"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

                {/* Get Started Button */}
                <Link href="/register">
                    <Button
                        variant={isDark ? "secondary" : "primary"}
                        size="default"
                    >
                        Get Started
                    </Button>
                </Link>
            </div>
        </header>
    )
}
