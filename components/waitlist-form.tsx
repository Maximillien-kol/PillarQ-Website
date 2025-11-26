"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsLoading(true)
      setError("")

      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })

        if (!response.ok) {
          throw new Error('Failed to submit')
        }

        setIsSubmitted(true)
      } catch (err) {
        setError('Something went wrong. Please try again.')
        console.error('Error submitting email:', err)
      } finally {
        setIsLoading(false)
      }
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm font-medium text-foreground">🎉 You're on the list! We'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <Input
          type="email"
          placeholder="Enter your email to get early access"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 bg-background border-input"
          required
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="h-11 px-6 font-medium bg-gradient-to-b from-[#5C5C5C] to-black hover:from-[#5C5C5C] hover:to-black transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? "Joining..." : "Notify Me"}
        </Button>
      </form>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
