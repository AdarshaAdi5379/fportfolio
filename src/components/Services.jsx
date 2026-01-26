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
        <section id="services" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                    Services
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-light text-white mb-16">
                    What I Offer
                </h2>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-light text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.deliverables.map((item, idx) => (
                                    <li key={idx} className="text-sm text-gray-500 leading-relaxed">
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
