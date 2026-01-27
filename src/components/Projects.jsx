function Projects() {
    const projects = [
        {
            role: "Full Stack Developer",
            year: "2024",
            title: "RecruiterRisk",
            description: "AI-powered trust verification platform for recruitment that detects fraudulent job postings and verifies recruiter authenticity",
            techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "AWS"],
            links: {
                github: "https://github.com/AdarshaAdi5379/conf-apply",
                live: "https://recruiterrisk.vercel.app"
            },
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
        },
        {
            role: "ML Engineer",
            year: "2024",
            title: "GM-UNet Soft Tissue Tumor Diagnosis",
            description: "Deep learning model for medical image segmentation with improved accuracy using Graph Attention Mechanisms",
            techStack: ["Python", "PyTorch", "OpenCV", "NumPy", "Medical Imaging"],
            links: {
                github: "https://github.com/AdarshaAdi5379/soft-tissue-tumor-detection",
                live: null
            },
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
        },
        {
            role: "Full Stack Developer",
            year: "2023 - 2024",
            title: "TaskZen",
            description: "Project management platform with real-time collaboration, task tracking, and progress visualization",
            techStack: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
            links: {
                github: "https://github.com/AdarshaAdi5379/TaskCode",
                live: "https://task-code-nine.vercel.app/"
            },
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
        },
        {
            role: "DevOps Engineer",
            year: "2023",
            title: "Global Terminal Calculator",
            description: "DevOps-focused terminal calculator with CI/CD automation and containerized deployment",
            techStack: ["Python", "Docker", "Kubernetes", "GitHub Actions", "AWS"],
            links: {
                github: "https://github.com/AdarshaAdi5379/terminal-calci",
                live: "https://hub.docker.com/repository/docker/adarsha5389/terminal-calci/general"
            },
            image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop"
        }
    ]

    return (
        <section id="work" className="py-24 px-6 bg-neutral-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">
                    Work
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-16">
                    Selected Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
                        >
                            {/* Image Container - Reduced Height to h-48 */}
                            <div className="h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-950 relative">
                                <div className="absolute inset-0 bg-neutral-900/5 dark:bg-transparent z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                {/* Role and Year */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs text-neutral-500 font-medium">{project.role}</span>
                                    <span className="text-neutral-300 dark:text-neutral-700">•</span>
                                    <span className="text-xs text-neutral-500">{project.year}</span>
                                </div>

                                {/* Project Title */}
                                <h3 className="text-neutral-900 dark:text-white font-semibold text-lg mb-2">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700/50 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/50">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                                    >
                                        GitHub
                                        <span className="text-neutral-400 group-hover:translate-x-0.5 transition-transform">→</span>
                                    </a>
                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            Live Demo
                                            <span className="text-neutral-400 group-hover:translate-x-0.5 transition-transform">→</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Projects
