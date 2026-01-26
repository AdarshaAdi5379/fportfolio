import { Code2, Brain, Cloud, Terminal } from 'lucide-react'

function AreasOfWork() {
    const areas = [
        {
            icon: Code2,
            title: "Full-Stack Web Development",
            description: "Building scalable, performant web applications using modern React ecosystems. Noteable expertise in creating responsive, interactive user interfaces and robust backend APIs.",
            tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "group-hover:border-blue-400/50"
        },
        {
            icon: Brain,
            title: "AI/ML Development & Integration",
            description: "Developing custom machine learning models and integrating AI capabilities into web applications. Specialized in NLP, computer vision, and predictive analytics.",
            tags: ["TensorFlow", "PyTorch", "OpenCV", "LLMs"],
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "group-hover:border-purple-400/50"
        },
        {
            icon: Cloud,
            title: "Cloud Infrastructure & DevOps",
            description: "Architecting secure, scalable cloud solutions. I handle CI/CD automation, containerization, and infrastructure as code to ensure reliable deployments.",
            tags: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
            color: "text-orange-400",
            bg: "bg-orange-400/10",
            border: "group-hover:border-orange-400/50"
        },
        {
            icon: Terminal,
            title: "Technical Consulting",
            description: "Providing expert guidance on technology choices, architecture reviews, and code quality audits to help teams build better software faster.",
            tags: ["System Design", "Code Audits", "Mentoring", "Strategy"],
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "group-hover:border-green-400/50"
        }
    ]

    return (
        <section id="expertise" className="py-20 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">
                    Expertise
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-semibold text-white mb-16">
                    Areas of Work
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {areas.map((area, index) => {
                        const Icon = area.icon
                        return (
                            <div
                                key={index}
                                className={`group p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 transition-all duration-300 hover:bg-neutral-900 ${area.border}`}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-3 rounded-xl ${area.bg} ${area.color}`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-neutral-600 text-sm font-mono">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {area.title}
                                </h3>

                                <p className="text-neutral-400 leading-relaxed mb-8 h-20">
                                    {area.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {area.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium text-neutral-400 bg-neutral-800 rounded-full border border-neutral-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default AreasOfWork
