import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    /** Optional subtitle shown above the main title (e.g., "Simple Pricing. Exceptional Service.") */
    subtitle?: string
    /** Main title text - can be a string or array of strings for multi-line titles */
    title: string | string[]
    /** Optional description/body text shown below the title */
    description?: string
    /** Text alignment */
    align?: "left" | "center" | "right"
    /** Theme variant for different backgrounds */
    variant?: "light" | "dark"
    /** Custom className for additional styling */
    className?: string
}

export function SectionHeader({
    subtitle,
    title,
    description,
    align = "center",
    variant = "light",
    className
}: SectionHeaderProps) {
    const titleArray = Array.isArray(title) ? title : [title]

    const alignmentClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }[align]

    const subtitleColorClass = variant === "dark" ? "text-gray-400" : "text-[#9CA3AF]"
    const titleColorClass = variant === "dark" ? "text-white" : "text-[#1F2937]"
    const descriptionColorClass = variant === "dark" ? "text-gray-300" : "text-gray-600"

    return (
        <div className={cn(alignmentClass, "mb-12", className)}>
            {titleArray.map((line, index) => (
                <h2
                    key={index}
                    className={cn(
                        "text-[42px] leading-tight font-bold",
                        titleColorClass,
                        index < titleArray.length - 1 && "mb-1"
                    )}
                >
                    {line}
                </h2>
            ))}

            {subtitle && (
                <p className={cn(subtitleColorClass, "text-[15px] mt-4 mb-4 font-normal")}>
                    {subtitle}
                </p>
            )}

            {description && (
                <p className={cn(descriptionColorClass, "text-lg max-w-2xl mt-4", {
                    "mx-auto": align === "center",
                    "ml-0": align === "left",
                    "mr-0": align === "right"
                })}>
                    {description}
                </p>
            )}
        </div>
    )
}
