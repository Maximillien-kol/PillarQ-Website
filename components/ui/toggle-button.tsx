"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'

interface ToggleOption {
    value: string
    label: string
    badge?: string
}

interface ToggleButtonProps {
    options: ToggleOption[]
    value: string
    onChange: (value: string) => void
    className?: string
}

export function ToggleButton({ options, value, onChange, className }: ToggleButtonProps) {
    return (
        <div className={cn("inline-flex p-1 bg-gray-100 gap-1", className)}>
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    onClick={() => onChange(option.value)}
                    className={cn(
                        "relative px-6 py-2.5 text-sm font-semibold transition-all duration-200 border-[0.7px]",
                        value === option.value
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-transparent text-gray-500 hover:text-gray-700 border-transparent"
                    )}
                >
                    {option.label}
                    {option.badge && (
                        <span
                            className="absolute -top-6 -right-2 px-2 py-1 bg-[#C9A34F] text-white text-xs font-semibold border-[0.7px] border-[#C9A34F]"
                            style={{ transform: 'rotate(10deg)' }}
                        >
                            {option.badge}
                        </span>
                    )}
                </button>
            ))}
        </div>
    )
}
