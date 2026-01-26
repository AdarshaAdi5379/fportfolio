function HowIWork() {
    const steps = [
        {
            number: "01",
            title: "Discovery & Requirements",
            description: "We discuss your project goals, technical needs, and success criteria. I ask questions to understand the problem deeply before proposing solutions."
        },
        {
            number: "02",
            title: "Architecture & Planning",
            description: "I design the system architecture, choose the right technology stack, and create a clear implementation plan with milestones and deliverables."
        },
        {
            number: "03",
            title: "Build & Iterate",
            description: "I develop the solution incrementally, sharing progress regularly. You get working software early and often, with room for feedback and adjustments."
        },
        {
            number: "04",
            title: "Deploy & Support",
            description: "I handle deployment to production, ensure everything works smoothly, and provide documentation. Post-launch support is included to address any issues."
        }
    ]

    return (
        <section id="how-i-work" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                    Process
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-light text-white mb-16">
                    How I Work
                </h2>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="space-y-3">
                            <div className="text-sm text-gray-500 font-light">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-light text-white">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowIWork
