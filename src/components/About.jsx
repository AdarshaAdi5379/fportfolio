import { useState } from 'react'
import { Code2, Lightbulb, Briefcase } from 'lucide-react'

function About() {
    const [activeIndex, setActiveIndex] = useState(0)

    const cards = [
        {
            icon: Code2,
            title: "Professional Background",
            description: "Software engineer experienced in building scalable multi-tenant platforms, backend APIs, and containerized microservice systems. Skilled in system orchestration, secure multi-user architecture, and production deployment using React, Django, Docker, and AWS.",
            accent: "#38BDF8"
        },
        {
            icon: Briefcase,
            title: "Work Experience",
            description: "Edubricz Technologies — Full Stack Developer Intern (Aug 2025–Present, onsite): Architected HOST (multi-tenant PaaS) with Docker orchestration, centralized Nginx gateway routing, and encrypted AWS S3 backups; reduced deploy time 120s→50s and teardown 70s→35s. Freelance Frontend Developer (2024, remote): Delivered 6 production-ready React applications end-to-end.",
            accent: "#F97316"
        },
        {
            icon: Lightbulb,
            title: "Engineering Philosophy",
            description: "I believe in production-first engineering: writing code that works, ships, and maintains well. Every project is an opportunity to solve real problems with thoughtful architecture and pragmatic technology choices.",
            accent: "#A78BFA"
        },
        {
            icon: Briefcase,
            title: "Freelance Availability",
            description: "I'm available for freelance projects, contract work, and full-time opportunities. I work with startups, small businesses, and technical teams who need end-to-end development, AI integration, or cloud deployment expertise.",
            accent: "#34D399"
        }
    ]

    // Calculate card position and styling
    const getCardStyle = (index) => {
        const position = (index - activeIndex + cards.length) % cards.length

        if (position === 0) {
            // Active card - front
            return {
                transform: 'translateY(0) scale(1)',
                zIndex: 30,
                opacity: 1,
            }
        } else if (position === 1) {
            // First card behind
            return {
                transform: 'translateY(-16px) scale(0.95)',
                zIndex: 20,
                opacity: 0.7,
            }
        } else if (position === 2) {
            // Second card behind
            return {
                transform: 'translateY(-32px) scale(0.9)',
                zIndex: 10,
                opacity: 0.4,
            }
        } else {
            // Hidden cards
            return {
                transform: 'translateY(-48px) scale(0.85)',
                zIndex: 0,
                opacity: 0,
            }
        }
    }

    return (
        <section id="about" className="py-24 px-6 bg-neutral-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">
                    About
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                    Background & Approach
                </h2>

                <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-2xl mb-16">
                    A comprehensive overview of my professional journey, philosophy, and expertise.
                </p>

                {/* Stacked Cards Container */}
                <div className="relative w-full max-w-4xl mx-auto">
                    {/* Card Stack */}
                    <div className="relative h-[400px] md:h-[350px]">
                        {cards.map((card, index) => {
                            const style = getCardStyle(index)
                            const Icon = card.icon

                            return (
                                <div
                                    key={index}
                                    className="absolute inset-0 transition-all duration-700 ease-out"
                                    style={{
                                        transform: style.transform,
                                        zIndex: style.zIndex,
                                        opacity: style.opacity,
                                    }}
                                >
                                    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-3xl p-8 md:p-10 h-full shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 flex flex-col transition-colors duration-300">
                                        {/* Icon with Accent Color */}
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                            style={{
                                                backgroundColor: `${card.accent}20`,
                                            }}
                                        >
                                            <Icon
                                                className="w-7 h-7"
                                                style={{ color: card.accent }}
                                            />
                                        </div>

                                        {/* Card Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
                                            {card.title}
                                        </h3>

                                        {/* Card Description */}
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base md:text-lg flex-grow">
                                            {card.description}
                                        </p>

                                        {/* Card Number Indicator */}
                                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                                            <span className="text-sm text-neutral-500 dark:text-neutral-600 font-medium">
                                                {String(index + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
                                            </span>
                                            <div
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: card.accent }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex items-center justify-center gap-2 mt-12">
                        {cards.map((card, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className="group relative"
                                aria-label={`View ${card.title}`}
                            >
                                <div
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                            ? 'w-8 opacity-100'
                                            : 'opacity-30 hover:opacity-60'
                                        }`}
                                    style={{
                                        backgroundColor: index === activeIndex ? card.accent : '#A3A3A3'
                                    }}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Manual Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={() => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)}
                            className="px-6 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-black dark:hover:text-white transition-all duration-200 text-sm font-medium shadow-sm hover:shadow"
                        >
                            ← Previous
                        </button>
                        <button
                            onClick={() => setActiveIndex((prev) => (prev + 1) % cards.length)}
                            className="px-6 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-black dark:hover:text-white transition-all duration-200 text-sm font-medium shadow-sm hover:shadow"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
