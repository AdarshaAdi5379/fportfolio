function Projects() {
    const featuredProjects = [
        {
            title: "HOST",
            subtitleLeft: "TypeScript",
            subtitleRight: "Updated Mar 2026",
            description: "A high-fidelity hosting platform dashboard with a custom Git deployment engine and billing management.",
            techStack: ["TypeScript", "React"],
            links: {
                github: "https://github.com/AdarshaAdi5379/host",
                live: null
            },
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
        },
        {
            title: "Edubricz Sales Tracking System",
            subtitleLeft: "React + PHP + MySQL",
            subtitleRight: "Updated May 2026",
            description: "A full field-sales route + visit tracking platform with GPS/photo proof, Google Maps coverage insights, reports, and an admin dashboard + mobile app workflow.",
            techStack: ["React", "PHP", "MySQL", "Google Maps", "Capacitor"],
            links: {
                github: "https://github.com/AdarshaAdi5379/salesTracking",
                live: "https://salestracking.edubricz.space/"
            },
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        },
        {
            title: "Soft Tissue Tumor Detection (GM-UNet)",
            subtitleLeft: "Jupyter Notebook",
            subtitleRight: "Updated Mar 2026",
            description: "MRI-based tumor segmentation and classification using GM-UNet and EfficientNet, with a Flutter app for inference and visualization.",
            techStack: ["TensorFlow", "Python", "OpenCV"],
            links: {
                github: "https://github.com/AdarshaAdi5379/soft-tissue-tumor-detection",
                live: null
            },
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
        },
        {
            title: "RecruiterRisk",
            subtitleLeft: "JavaScript",
            subtitleRight: "Updated Nov 2025",
            description: "AI-driven full-stack platform for recruitment trust: verify recruiters, detect fraudulent listings, and compute trust scores using external verification APIs.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
            links: {
                github: "https://github.com/AdarshaAdi5379/conf-apply",
                live: "https://recruiter-risk.vercel.app"
            },
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
        },
        {
            title: "TaskCode",
            subtitleLeft: "TypeScript",
            subtitleRight: "Updated Mar 2026",
            description: "Task/project platform built in TypeScript.",
            techStack: ["TypeScript"],
            links: {
                github: "https://github.com/AdarshaAdi5379/TaskCode",
                live: "https://task-code-nine.vercel.app"
            },
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
        }
    ]

    const projects = [
        {
            name: "fportfolio",
            description: "A modern, production-ready freelance portfolio website built with React, Vite, and Tailwind CSS.",
            updated: "Apr 2026",
            tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
            links: { github: "https://github.com/AdarshaAdi5379/fportfolio", live: "https://adarsha-kk-port.vercel.app" }
        },
        {
            name: "fos",
            description: "A publicly visible, cryptographically pseudonymous platform for unrestricted expression, where identity is reduced to a key and speech precedes control.",
            updated: "Mar 2026",
            tags: ["React", "Express", "SQLite", "secp256k1", "BIP39"],
            links: { github: "https://github.com/AdarshaAdi5379/fos", live: "https://fos-ivory.vercel.app" }
        },
        {
            name: "ytllm",
            description: "Turn any YouTube video into an interactive, AI-powered knowledge base: ask questions, get summaries, and export chats to PDF/DOCX.",
            updated: "Mar 2026",
            tags: ["React", "FastAPI", "Gemini", "YouTube API"],
            links: { github: "https://github.com/AdarshaAdi5379/ytllm", live: null }
        },
        {
            name: "PayStream",
            description: "Rule-driven payment-trigger platform (Pine Labs Hackathon — AWS) with backend + dashboard flow for sessions, charts, settlement, and AI explanations.",
            updated: "Mar 2026",
            tags: ["FastAPI", "AWS", "Pine Labs", "Rules Engine"],
            links: { github: "https://github.com/AdarshaAdi5379/PayStream", live: null }
        },
        {
            name: "max",
            description: "Next.js app with Supabase + Better Auth, Drizzle ORM, Stripe payments, and email/notification integrations (Resend/Nodemailer).",
            updated: "Mar 2026",
            tags: ["Next.js", "TypeScript", "Supabase", "Drizzle", "Stripe"],
            links: { github: "https://github.com/AdarshaAdi5379/max", live: null }
        },
        {
            name: "reciept",
            description: "Secure, versioned receipt management system for internal college financial infrastructure with audit logs, Excel upload validation, and PDF generation.",
            updated: "Feb 2026",
            tags: ["Django", "DRF", "Next.js", "PostgreSQL", "WeasyPrint"],
            links: { github: "https://github.com/AdarshaAdi5379/reciept", live: null }
        },
        {
            name: "calci",
            description: "Visual-only calculator UI built using HTML and CSS.",
            updated: "Feb 2026",
            tags: ["HTML", "CSS"],
            links: { github: "https://github.com/AdarshaAdi5379/calci", live: null }
        },
        {
            name: "tate",
            description: "AI-powered online examination and performance analytics system built with Next.js, Prisma, Supabase/PostgreSQL, and Gemini integrations.",
            updated: "Jan 2026",
            tags: ["Next.js", "Prisma", "Supabase", "Gemini", "PostgreSQL"],
            links: { github: "https://github.com/AdarshaAdi5379/tate", live: null }
        },
        {
            name: "terminal-calci",
            description: "A global Java-based terminal calculator packaged and deployed via Docker and GitHub Actions.",
            updated: "Nov 2025",
            tags: ["Java", "Docker", "GitHub Actions"],
            links: { github: "https://github.com/AdarshaAdi5379/terminal-calci", live: null }
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
                    Featured Projects
                </h2>

                {/* Featured Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {featuredProjects.map((project, index) => (
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
                                {/* Meta */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs text-neutral-500 font-medium">{project.subtitleLeft}</span>
                                    <span className="text-neutral-300 dark:text-neutral-700">•</span>
                                    <span className="text-xs text-neutral-500">{project.subtitleRight}</span>
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

                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                    Projects
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm dark:shadow-none"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <h4 className="text-neutral-900 dark:text-white font-semibold truncate">
                                        {project.name}
                                    </h4>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 line-clamp-2">
                                        {project.description}
                                    </p>
                                    {project.tags?.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700/50 font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                    <span className="text-xs text-neutral-500 dark:text-neutral-500">{project.updated}</span>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800/50">
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                                >
                                    GitHub
                                    <span className="text-neutral-400 transition-transform">→</span>
                                </a>
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                                    >
                                        Live
                                        <span className="text-neutral-400 transition-transform">→</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Projects
