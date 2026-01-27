function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-neutral-50 dark:bg-black overflow-hidden transition-colors duration-300">
            <div className="max-w-6xl mx-auto mb-16">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">
                    Skills
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
                    Technology Stack
                </h2>

                <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-2xl">
                    A comprehensive collection of tools, languages, and frameworks I use to build production-ready applications.
                </p>
            </div>

            {/* Marquee Container 1 (Left Direction) */}
            <div className="relative flex overflow-x-hidden group mb-8">
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-neutral-50 to-transparent dark:from-black dark:to-transparent"></div>
                <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-neutral-50 to-transparent dark:from-black dark:to-transparent"></div>

                <div className="animate-scroll flex gap-8 whitespace-nowrap hover:[animation-play-state:paused] py-4">
                    {/* First Set of Skills */}
                    {[
                        { name: "React", bg: "#61DAFB", color: "#000" },
                        { name: "Next.js", bg: "#000000", color: "#FFF" },
                        { name: "TypeScript", bg: "#3178C6", color: "#FFF" },
                        { name: "Node.js", bg: "#339933", color: "#FFF" },
                        { name: "Python", bg: "#3776AB", color: "#FFF" },
                        { name: "TensorFlow", bg: "#FF6F00", color: "#FFF" },
                        { name: "PyTorch", bg: "#EE4C2C", color: "#FFF" },
                        { name: "Docker", bg: "#2496ED", color: "#FFF" },
                        { name: "Kubernetes", bg: "#326CE5", color: "#FFF" },
                        { name: "AWS", bg: "#232F3E", color: "#FFF" },
                        { name: "MongoDB", bg: "#47A248", color: "#FFF" },
                        { name: "PostgreSQL", bg: "#4169E1", color: "#FFF" },
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[160px] hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none"
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                                style={{ backgroundColor: skill.bg, color: skill.color }}
                            >
                                {skill.name.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                    {/* Duplicate Set for Infinite Scroll */}
                    {[
                        { name: "React", bg: "#61DAFB", color: "#000" },
                        { name: "Next.js", bg: "#000000", color: "#FFF" },
                        { name: "TypeScript", bg: "#3178C6", color: "#FFF" },
                        { name: "Node.js", bg: "#339933", color: "#FFF" },
                        { name: "Python", bg: "#3776AB", color: "#FFF" },
                        { name: "TensorFlow", bg: "#FF6F00", color: "#FFF" },
                        { name: "PyTorch", bg: "#EE4C2C", color: "#FFF" },
                        { name: "Docker", bg: "#2496ED", color: "#FFF" },
                        { name: "Kubernetes", bg: "#326CE5", color: "#FFF" },
                        { name: "AWS", bg: "#232F3E", color: "#FFF" },
                        { name: "MongoDB", bg: "#47A248", color: "#FFF" },
                        { name: "PostgreSQL", bg: "#4169E1", color: "#FFF" },
                    ].map((skill, index) => (
                        <div
                            key={`dup-${index}`}
                            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[160px] hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none"
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                                style={{ backgroundColor: skill.bg, color: skill.color }}
                            >
                                {skill.name.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Container 2 (Reverse Direction) */}
            <div className="relative flex overflow-x-hidden group">
                <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-neutral-50 to-transparent dark:from-black dark:to-transparent"></div>
                <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-neutral-50 to-transparent dark:from-black dark:to-transparent"></div>

                <div className="animate-scroll flex gap-8 whitespace-nowrap hover:[animation-play-state:paused] py-4" style={{ animationDirection: 'reverse' }}>
                    {/* Second Set of Skills */}
                    {[
                        { name: "Git", bg: "#F05032", color: "#FFF" },
                        { name: "Linux", bg: "#FCC624", color: "#000" },
                        { name: "Redis", bg: "#DC382D", color: "#FFF" },
                        { name: "GraphQL", bg: "#E10098", color: "#FFF" },
                        { name: "Tailwind", bg: "#38B2AC", color: "#FFF" },
                        { name: "Prisma", bg: "#2D3748", color: "#FFF" },
                        { name: "Jest", bg: "#C21325", color: "#FFF" },
                        { name: "Figma", bg: "#F24E1E", color: "#FFF" },
                        { name: "Vercel", bg: "#000000", color: "#FFF" },
                        { name: "OpenAI API", bg: "#412991", color: "#FFF" },
                        { name: "Three.js", bg: "#000000", color: "#FFF" },
                        { name: "Express", bg: "#000000", color: "#FFF" },
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[160px] hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none"
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                                style={{ backgroundColor: skill.bg, color: skill.color }}
                            >
                                {skill.name.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                    {/* Duplicate Set */}
                    {[
                        { name: "Git", bg: "#F05032", color: "#FFF" },
                        { name: "Linux", bg: "#FCC624", color: "#000" },
                        { name: "Redis", bg: "#DC382D", color: "#FFF" },
                        { name: "GraphQL", bg: "#E10098", color: "#FFF" },
                        { name: "Tailwind", bg: "#38B2AC", color: "#FFF" },
                        { name: "Prisma", bg: "#2D3748", color: "#FFF" },
                        { name: "Jest", bg: "#C21325", color: "#FFF" },
                        { name: "Figma", bg: "#F24E1E", color: "#FFF" },
                        { name: "Vercel", bg: "#000000", color: "#FFF" },
                        { name: "OpenAI API", bg: "#412991", color: "#FFF" },
                        { name: "Three.js", bg: "#000000", color: "#FFF" },
                        { name: "Express", bg: "#000000", color: "#FFF" },
                    ].map((skill, index) => (
                        <div
                            key={`dup-${index}`}
                            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[160px] hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none"
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                                style={{ backgroundColor: skill.bg, color: skill.color }}
                            >
                                {skill.name.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
