"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollRevealTextProps {
    text: string
    className?: string
}

export function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "end 0.5"],
    })

    // Split text into paragraphs based on newlines
    const paragraphs = text.split("\n").filter((p) => p.trim() !== "")

    // Calculate total words to normalize progress
    const totalWords = paragraphs.reduce((acc, p) => acc + p.split(" ").filter(w => w !== "").length, 0)

    let globalWordIndex = 0

    return (
        <div ref={container} className={className}>
            {paragraphs.map((paragraph, pIndex) => {
                const words = paragraph.split(" ").filter((w) => w !== "")
                return (
                    <p key={pIndex} className="flex flex-wrap mb-12 last:mb-0">
                        {words.map((word, wIndex) => {
                            const start = globalWordIndex / totalWords
                            const end = start + 1 / totalWords
                            globalWordIndex++

                            return (
                                <Word key={`${pIndex}-${wIndex}`} progress={scrollYProgress} range={[start, end]}>
                                    {word}
                                </Word>
                            )
                        })}
                    </p>
                )
            })}
        </div>
    )
}

interface WordProps {
    children: string
    progress: any
    range: [number, number]
}

const Word = ({ children, progress, range }: WordProps) => {
    const opacity = useTransform(progress, range, [0.3, 1])

    return (
        <span className="relative mr-3 mt-2">
            <span className="absolute opacity-30">{children}</span>
            <motion.span style={{ opacity: opacity }} className="text-white">
                {children}
            </motion.span>
        </span>
    )
}
