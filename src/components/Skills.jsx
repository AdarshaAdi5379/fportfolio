function Skills() {
    // Comprehensive tech stack with icons
    const skills = [
        { name: "React", icon: "⚛️", color: "#61DAFB" },
        { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
        { name: "TypeScript", icon: "TS", color: "#3178C6" },
        { name: "Python", icon: "🐍", color: "#3776AB" },
        { name: "Node.js", icon: "📗", color: "#339933" },
        { name: "Next.js", icon: "▲", color: "#FFFFFF" },
        { name: "TensorFlow", icon: "🧠", color: "#FF6F00" },
        { name: "PyTorch", icon: "🔥", color: "#EE4C2C" },
        { name: "Docker", icon: "🐳", color: "#2496ED" },
        { name: "Kubernetes", icon: "☸️", color: "#326CE5" },
        { name: "AWS", icon: "☁️", color: "#FF9900" },
        { name: "MongoDB", icon: "🍃", color: "#47A248" },
        { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
        { name: "Git", icon: "📦", color: "#F05032" },
        { name: "Figma", icon: "🎨", color: "#F24E1E" },
        { name: "Tailwind", icon: "💨", color: "#06B6D4" },
        { name: "Express", icon: "⚡", color: "#FFFFFF" },
        { name: "Vue.js", icon: "💚", color: "#4FC08D" },
        { name: "Django", icon: "🎸", color: "#092E20" },
        { name: "Redis", icon: "🔴", color: "#DC382D" },
        { name: "GraphQL", icon: "◈", color: "#E10098" },
        { name: "Firebase", icon: "🔥", color: "#FFCA28" },
        { name: "Linux", icon: "🐧", color: "#FCC624" },
        { name: "Azure", icon: "☁️", color: "#0078D4" },
    ]

    return (
        <section id="skills" className="py-20 px-6 bg-black overflow-hidden">
            <div className="max-w-6xl mx-auto mb-16">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">
                    Skills
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-semibold text-white mb-4">
                    Technical Arsenal
                </h2>

                <p className="text-neutral-400 text-base max-w-2xl">
                    A comprehensive toolkit spanning full-stack development, AI/ML, cloud infrastructure, and modern DevOps practices.
                </p>
            </div>

            {/* Infinite Marquee Container */}
            <div
                className="relative w-full overflow-hidden group"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
            >
                {/* Scrolling Wrapper - Pauses on Hover */}
                <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
                    {/* First Set of Skills */}
                    {skills.map((skill, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex-shrink-0 mx-8 flex flex-col items-center justify-center transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                        >
                            <div
                                className="w-16 h-16 flex items-center justify-center text-4xl mb-3 rounded-xl bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:border-neutral-600"
                                style={{
                                    '--skill-color': skill.color,
                                }}
                            >
                                {skill.icon}
                            </div>
                            <span className="text-xs text-neutral-500 font-medium whitespace-nowrap">
                                {skill.name}
                            </span>
                        </div>
                    ))}

                    {/* Duplicate Set for Seamless Loop */}
                    {skills.map((skill, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex-shrink-0 mx-8 flex flex-col items-center justify-center transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                        >
                            <div
                                className="w-16 h-16 flex items-center justify-center text-4xl mb-3 rounded-xl bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:border-neutral-600"
                                style={{
                                    '--skill-color': skill.color,
                                }}
                            >
                                {skill.icon}
                            </div>
                            <span className="text-xs text-neutral-500 font-medium whitespace-nowrap">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Secondary Row - Reverse Direction for Visual Interest */}
            <div
                className="relative w-full overflow-hidden mt-8 group"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
            >
                <div className="flex animate-scroll group-hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
                    {/* First Set */}
                    {[...skills].reverse().map((skill, index) => (
                        <div
                            key={`reverse-first-${index}`}
                            className="flex-shrink-0 mx-8 flex flex-col items-center justify-center transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                        >
                            <div
                                className="w-16 h-16 flex items-center justify-center text-4xl mb-3 rounded-xl bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:border-neutral-600"
                            >
                                {skill.icon}
                            </div>
                            <span className="text-xs text-neutral-500 font-medium whitespace-nowrap">
                                {skill.name}
                            </span>
                        </div>
                    ))}

                    {/* Duplicate Set */}
                    {[...skills].reverse().map((skill, index) => (
                        <div
                            key={`reverse-second-${index}`}
                            className="flex-shrink-0 mx-8 flex flex-col items-center justify-center transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                        >
                            <div
                                className="w-16 h-16 flex items-center justify-center text-4xl mb-3 rounded-xl bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:border-neutral-600"
                            >
                                {skill.icon}
                            </div>
                            <span className="text-xs text-neutral-500 font-medium whitespace-nowrap">
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
