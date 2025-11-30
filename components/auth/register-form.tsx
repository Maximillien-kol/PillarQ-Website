"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [fullName, setFullName] = useState("")
    const [businessType, setBusinessType] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [agreeToTerms, setAgreeToTerms] = useState(false)

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ fullName, businessType, phoneNumber, email, password, confirmPassword, agreeToTerms })
    }

    return (
        <div className="flex flex-col bg-white h-full">
            {/* Mobile Logo */}
            <div className="lg:hidden p-6">
                <img
                    src="/full logo blue.svg"
                    alt="PillarH Logo"
                    className="h-10 w-auto object-contain"
                />
            </div>

            {/* Form Container */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-lg space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            Create Your Account
                        </h2>
                        <p className="text-gray-500">
                            Sign up to get started with PillarH
                        </p>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleRegister} className="space-y-5">
                        {/* Full Name and Business Type - Side by Side */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Full Name Field */}
                            <div className="space-y-2">
                                <Label htmlFor="fullName">
                                    Full Name
                                </Label>
                                <Input
                                    id="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="h-12"
                                    required
                                />
                            </div>

                            {/* Business Type Dropdown */}
                            <div className="space-y-2">
                                <Label htmlFor="businessType">
                                    Business Type
                                </Label>
                                <select
                                    id="businessType"
                                    value={businessType}
                                    onChange={(e) => setBusinessType(e.target.value)}
                                    className="h-12 w-full rounded-md bg-background px-3 py-2 text-sm outline-none border-[0.5px] border-input focus:border-input focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                >
                                    <option value="">Select type...</option>
                                    <option value="individual">Individual/Tenant</option>
                                    <option value="landlord">Landlord</option>
                                    <option value="agent">Agent</option>
                                </select>
                            </div>
                        </div>

                        {/* Phone Number Field */}
                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber">
                                Enter Your Number
                            </Label>
                            <Input
                                id="phoneNumber"
                                type="tel"
                                placeholder="+250 700 000 000"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="h-12"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-12"
                                required
                            />
                        </div>

                        {/* Password Fields - Side by Side */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="password">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="h-12 pr-12"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">
                                    Confirm Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="h-12 pr-12"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start gap-2">
                            <Checkbox
                                id="terms"
                                checked={agreeToTerms}
                                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                                className="mt-0.5"
                            />
                            <Label
                                htmlFor="terms"
                                className="cursor-pointer font-normal text-sm leading-relaxed"
                            >
                                I agree to the{" "}
                                <Link href="/terms" className="text-blue-600 hover:text-blue-700 hover:underline">
                                    Terms of Service
                                </Link>
                                {" "}and{" "}
                                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 hover:underline">
                                    Privacy Policy
                                </Link>
                            </Label>
                        </div>

                        {/* Sign Up Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            disabled={!agreeToTerms}
                        >
                            Create Account
                        </Button>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>

                        {/* Social Sign Up Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                size="default"
                                className="gap-2"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Google
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="default"
                                className="gap-2"
                            >
                                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Facebook
                            </Button>
                        </div>
                    </form>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
