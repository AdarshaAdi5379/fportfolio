function Projects() {
    const projects = [
        {
            role: "Full Stack Developer",
            year: "2024",
            title: "RecruiterRisk",
            description: [
                "AI-powered trust verification platform for recruitment",
                "Detects fraudulent job postings and verifies recruiter authenticity",
                "Reduces hiring fraud by analyzing patterns and behavioral signals"
            ],
            techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "AWS"],
            links: {
                github: "https://github.com/yourusername/recruiterrisk",
                live: null
            }
        },
        {
            role: "ML Engineer",
            year: "2024",
            title: "GM-UNet Soft Tissue Tumor Diagnosis",
            description: [
                "Deep learning model for medical image segmentation",
                "Improved accuracy in soft tissue tumor detection",
                "Implemented Graph Attention Mechanisms for enhanced feature extraction"
            ],
            techStack: ["Python", "PyTorch", "OpenCV", "NumPy", "Medical Imaging"],
            links: {
                github: "https://github.com/yourusername/gm-unet",
                live: null
            }
        },
        {
            role: "Full Stack Developer",
            year: "2023 - 2024",
            title: "TaskZen",
            description: [
                "Project management platform with real-time collaboration",
                "Task tracking, team coordination, and progress visualization",
                "Built with modern web technologies for scalability"
            ],
            techStack: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
            links: {
                github: "https://github.com/yourusername/taskzen",
                live: "https://taskzen-demo.vercel.app"
            }
        },
        {
            role: "DevOps Engineer",
            year: "2023",
            title: "Global Terminal Calculator",
            description: [
                "DevOps-focused terminal calculator with global accessibility",
                "CI/CD pipeline automation and containerized deployment",
                "Demonstrates cloud infrastructure and deployment best practices"
            ],
            techStack: ["Python", "Docker", "Kubernetes", "GitHub Actions", "AWS"],
            links: {
                github: "https://github.com/yourusername/global-terminal-calc",
                live: null
            }
        }
    ]

    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                    Work
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-light text-white mb-16">
                    Selected Projects
                </h2>

                {/* Projects Stack */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Role and Year */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-sm text-gray-500">{project.role}</span>
                                <span className="text-gray-700">•</span>
                                <span className="text-sm text-gray-500">{project.year}</span>
                            </div>

                            {/* Project Title */}
                            <h3 className="text-2xl font-light text-white mb-4">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <ul className="space-y-2 mb-6">
                                {project.description.map((item, idx) => (
                                    <li key={idx} className="text-gray-400 leading-relaxed">
                                        • {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs bg-zinc-800 text-gray-400 rounded-full border border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-6">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-accent hover:text-white transition-colors"
                                    >
                                        View Code →
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-accent hover:text-white transition-colors"
                                    >
                                        Live Demo →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
