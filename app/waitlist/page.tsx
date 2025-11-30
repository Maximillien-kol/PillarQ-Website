import { WaitlistForm } from "@/components/waitlist-form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function WaitlistPage() {
    return (
        <div className="min-h-screen bg-muted/30 flex flex-col">
            <div className="mx-auto max-w-6xl px-4 py-8 flex-1 flex flex-col">
                {/* Header / Logo */}
                <header className="mb-1">
                    <div className="flex items-center gap-2">
                        <img
                            src="/full logo blue.svg"
                            alt="PillarH Logo"
                            className="h-15 w-30 object-contain"
                        />
                    </div>
                </header>

                {/* Main Content */}
                <main className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center flex-1">
                    {/* Left Column - Text & Form */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <span className="inline-block rounded-full bg-muted px-4 py-1.5 text-xs font-medium uppercase tracking-wider">
                                Launching Jan 25th, 2025
                            </span>
                            <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
                                We're Launching Soon...
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                                The modern rental management platform for landlords and property teams.
                            </p>
                        </div>

                        <WaitlistForm />

                        {/* Social Proof */}
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <Avatar className="h-8 w-8 border-2 border-background">
                                    <AvatarImage src="/black-woman-avatar.png" />
                                    <AvatarFallback>U1</AvatarFallback>
                                </Avatar>
                                <Avatar className="h-8 w-8 border-2 border-background">
                                    <AvatarImage src="/black-man-avatar.png" />
                                    <AvatarFallback>U2</AvatarFallback>
                                </Avatar>
                                <Avatar className="h-8 w-8 border-2 border-background">
                                    <AvatarImage src="/black-professional-avatar.png" />
                                    <AvatarFallback>U3</AvatarFallback>
                                </Avatar>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">27+</span> Landlords have already joined
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/minimalist-line-art-illustration-person-working-on.jpg"
                            alt="Person working with analytics"
                            className="w-full max-w-md"
                        />
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-auto border-t pt-6 pb-4">
                    <p className="text-sm text-muted-foreground text-center">
                        © 2025 - <span className="underline underline-offset-2">PillarH</span> - All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    )
}
