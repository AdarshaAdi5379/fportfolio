import { useState, useEffect } from 'react'
import { GraduationCap, Award } from 'lucide-react'

function Credentials() {
    const [activeIndex, setActiveIndex] = useState(0)

    const cards = [
        {
            icon: GraduationCap,
            title: "Education",
            items: [
                {
                    degree: "Bachelor of Technology in Computer Science",
                    institution: "Visveswaraya Technological University",
                    period: "2022 - 2026",
                    details: "Strong foundation in algorithms, data structures, software engineering, and artificial intelligence"
                }
            ],
            accent: "#F59E0B"
        },
        {
            icon: Award,
            title: "Certifications",
            items: [
                {
                    name: "AWS Certified Solutions Architect",
                    issuer: "Amazon Web Services",
                    description: "Cloud architecture and infrastructure design"
                },
                {
                    name: "Google Cloud Professional Developer",
                    issuer: "Google Cloud",
                    description: "Cloud-native application development"
                },
                {
                    name: "TensorFlow Developer Certificate",
                    issuer: "TensorFlow",
                    description: "Machine learning and deep learning"
                },
                {
                    name: "Full Stack Web Development Specialization",
                    issuer: "Coursera",
                    description: "End-to-end web application development"
                }
            ],
            accent: "#EC4899"
        },
        {
            icon: Award,
            title: "Achievements",
            items: [
                {
                    name: "Pine Labs Hackathon (AWS)",
                    description: "Built PayStream, an automated payment-trigger platform using FastAPI and rule-driven workflows."
                }
            ],
            accent: "#10B981"
        }
    ]

    // Auto-rotate cards every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cards.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [cards.length])

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
                transform: 'translateY(-20px) scale(0.94)',
                zIndex: 20,
                opacity: 0.6,
            }
        } else {
            // Hidden cards
            return {
                transform: 'translateY(-40px) scale(0.88)',
                zIndex: 10,
                opacity: 0,
            }
        }
    }

    return (
        <section id="credentials" className="py-24 px-6 bg-neutral-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">
                    Credentials
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                    Education & Expertise
                </h2>

                <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-2xl mb-16">
                    Academic background, professional certifications, and core areas of specialization.
                </p>

                {/* Stacked Cards Container */}
                <div className="relative w-full max-w-4xl mx-auto">
                    {/* Card Stack */}
                    <div className="relative h-[500px] md:h-[450px]">
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
                                    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-3xl p-8 md:p-10 h-full shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 flex flex-col overflow-y-auto transition-colors duration-300">
                                        {/* Icon with Accent Color */}
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
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
                                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight flex-shrink-0">
                                            {card.title}
                                        </h3>

                                        {/* Card Content - Dynamic based on card type */}
                                        <div className="space-y-6 flex-grow">
                                            {card.title === "Education" && card.items.map((item, idx) => (
                                                <div key={idx} className="space-y-2">
                                                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                                        {item.degree}
                                                    </h4>
                                                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                                                        {item.institution}
                                                    </p>
                                                    <p className="text-neutral-400 dark:text-neutral-500 text-sm font-medium">
                                                        {item.period}
                                                    </p>
                                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mt-2">
                                                        {item.details}
                                                    </p>
                                                </div>
                                            ))}

                                            {card.title === "Certifications" && card.items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="pb-4 border-b border-neutral-100 dark:border-neutral-800 last:border-0 last:pb-0"
                                                >
                                                    <h4 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-neutral-500 dark:text-neutral-500 text-sm mb-2">
                                                        {item.issuer}
                                                    </p>
                                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}

                                            {card.title === "Achievements" && card.items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="pb-4 border-b border-neutral-100 dark:border-neutral-800 last:border-0 last:pb-0"
                                                >
                                                    <h4 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Card Number Indicator */}
                                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex-shrink-0">
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

export default Credentials
