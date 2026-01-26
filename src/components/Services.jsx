function Services() {
    const services = [
        {
            title: "Full-Stack Web Development",
            description: "End-to-end web application development with modern frameworks",
            deliverables: [
                "Responsive web applications with React and modern frontend frameworks",
                "RESTful APIs and backend services with Node.js, Python, or Java",
                "Database design and integration (SQL and NoSQL)"
            ]
        },
        {
            title: "AI & Machine Learning Solutions",
            description: "Intelligent systems powered by machine learning and AI",
            deliverables: [
                "Custom ML models for classification, prediction, and analysis",
                "AI integration into existing applications",
                "Computer vision and natural language processing solutions"
            ]
        },
        {
            title: "Cloud & Deployment",
            description: "Scalable cloud infrastructure and DevOps practices",
            deliverables: [
                "Cloud deployment on AWS, Azure, or Google Cloud",
                "CI/CD pipeline setup and automation",
                "Container orchestration with Docker and Kubernetes"
            ]
        },
        {
            title: "Technical Consulting",
            description: "Strategic guidance for technical decisions and architecture",
            deliverables: [
                "System architecture design and review",
                "Technology stack selection and evaluation",
                "Code review and optimization recommendations"
            ]
        }
    ]

    return (
        <section id="services" className="py-12 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">
                    Services
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-semibold text-white mb-16">
                    What I Offer
                </h2>

                {/* Services Grid - Bento Style */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition duration-500"></div>

                            {/* Card */}
                            <div className="relative bg-black border border-white/[0.1] rounded-3xl p-8 hover:border-white/[0.2] transition-all duration-300 backdrop-blur-md">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.deliverables.map((item, idx) => (
                                        <li key={idx} className="text-sm text-neutral-500 leading-relaxed flex items-start">
                                            <span className="text-cyan-400 mr-2">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
