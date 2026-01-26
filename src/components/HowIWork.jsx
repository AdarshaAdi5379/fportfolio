import { Search, Map, Code, Rocket } from 'lucide-react'

function HowIWork() {
    const steps = [
        {
            icon: Search,
            number: "01",
            title: "Discovery & Requirements",
            description: "We dive deep into your project goals, technical constraints, and success criteria. I ask the hard questions upfront to ensure we're solving the right problem.",
            color: "text-blue-400" // Accent color ref
        },
        {
            icon: Map,
            number: "02",
            title: "Architecture & Planning",
            description: "I design a scalable system architecture, select the optimal tech stack, and create a roadmap. No guesswork—just a clear, actionable implementation plan.",
            color: "text-purple-400"
        },
        {
            icon: Code,
            number: "03",
            title: "Build & Iterate",
            description: "Development happens in rapid sprints. You get deployable previews early and often, allowing for real-time feedback and continuous improvement.",
            color: "text-green-400"
        },
        {
            icon: Rocket,
            number: "04",
            title: "Deploy & Support",
            description: "I handle the production launch, set up monitoring, and provide documentation. The job isn't done until the system is live, stable, and delivering value.",
            color: "text-orange-400"
        }
    ]

    return (
        <section id="process" className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Background Gradient Mesh (Subtle) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">
                        Process
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        From Concept to Code
                    </h2>
                    <p className="text-neutral-400 max-w-2xl text-lg">
                        A structured, transparent workflow designed to deliver high-quality software without the chaos.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Connecting Line (Desktop Only) - Visual connector */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800 -translate-x-1/2" />

                    {steps.map((step, index) => {
                        const Icon = step.icon
                        // Even items (0, 2) go left, Odd items (1, 3) go right on Desktop
                        // We add specific margins to create the "timeline" look
                        const isEven = index % 2 === 0

                        return (
                            <div
                                key={index}
                                className={`relative group ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:mt-24'}`}
                            >
                                {/* Timeline Dot (Desktop) */}
                                <div className={`hidden md:flex absolute top-8 w-4 h-4 bg-black border-2 border-neutral-700 rounded-full z-10 transition-colors duration-300 group-hover:border-white group-hover:scale-110 
                                    ${isEven ? 'right-0 translate-x-[9px]' : 'left-0 -translate-x-[9px]'}`}
                                />

                                {/* Card Content */}
                                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 group-hover:-translate-y-1">
                                    {/* Number & Icon Header */}
                                    <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                        <span className="text-5xl font-bold text-neutral-800 select-none font-mono">
                                            {step.number}
                                        </span>
                                        <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${step.color}`}>
                                            <Icon size={24} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HowIWork
