import { useEffect, useMemo, useRef, useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'

function Projects() {
    const featuredProjects = useMemo(
        () => [
            {
                id: 'host',
                title: 'HOST',
                summary:
                    'Multi-tenant hosting platform dashboard + backend workflows for lifecycle management and deployments.',
                whatIBuilt: [
                    'Built dashboard modules using React and Django REST APIs with reusable component patterns',
                    'Designed backend workflows for authentication, RBAC, and multi-tenant architecture',
                    'Owned deployment/testing/debugging workflows across AWS environments to improve release reliability',
                    'Built Docker-based infrastructure modules for isolated WordPress and full-stack app environments',
                    'Implemented encrypted AWS S3 backup workflows with retention scheduling and AWS RDS failover support',
                ],
                tech: ['React', 'Django', 'Django REST', 'Docker', 'AWS', 'RBAC'],
                links: {
                    github: 'https://github.com/AdarshaAdi5379/host',
                    live: null,
                },
                image:
                    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop',
            },
            {
                id: 'sales-tracking',
                title: 'Sales Tracking System',
                summary:
                    'Full-stack sales management platform with Google Maps workflows, reporting, and AWS deployment.',
                whatIBuilt: [
                    'Developed a full-stack platform using React, PHP, and MySQL for field team workflows',
                    'Built Google Maps integrations, backend APIs, authentication, and reporting for route planning + visit tracking',
                    'Deployed on AWS EC2 + AWS RDS supporting 8 sales users and 3 administrators across 50+ institutions',
                ],
                tech: ['React', 'PHP', 'MySQL', 'Google Maps', 'AWS'],
                links: {
                    github: 'https://github.com/AdarshaAdi5379/salesTracking',
                    live: 'https://salestracking.edubricz.space/',
                },
                image:
                    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
            },
            {
                id: 'recruiter-risk',
                title: 'RecruiterRisk',
                summary:
                    'AI-based recruiter verification platform to detect fraudulent postings with trust scoring and risk analysis.',
                whatIBuilt: [
                    'Built a MERN full-stack app with recruiter dashboards and trust scoring workflows',
                    'Implemented JWT authentication and role-based access control (RBAC)',
                    'Designed backend APIs for risk analysis and structured data flows for scalable iteration',
                ],
                tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC'],
                links: {
                    github: 'https://github.com/AdarshaAdi5379/conf-apply',
                    live: 'https://recruiter-risk.vercel.app',
                },
                image:
                    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop',
            },
            {
                id: 'ytllm',
                title: 'YTLLM',
                summary:
                    'Turn YouTube videos into an interactive knowledge base with Q&A sessions and exportable outputs.',
                whatIBuilt: [
                    'Designed a clean product UI for long-running Q&A workflows over video content',
                    'Built chat-like interactions structured for clarity and reuse',
                    'Added export-friendly output flows (summaries and session history)',
                ],
                tech: ['React', 'FastAPI', 'YouTube API', 'LLMs'],
                links: {
                    github: 'https://github.com/AdarshaAdi5379/ytllm',
                    live: null,
                },
                image:
                    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&h=900&fit=crop',
            },
        ],
        [],
    )

    const otherProjects = useMemo(
        () => [
            {
                name: 'fportfolio',
                description:
                    'This portfolio site — React + Vite + Tailwind, designed as a clean product landing page.',
                tags: ['React', 'Vite', 'Tailwind'],
                links: {
                    github: 'https://github.com/AdarshaAdi5379/fportfolio',
                    live: 'https://adarsha-kk-port.vercel.app',
                },
            },
            {
                name: 'fos',
                description:
                    'Pseudonymous expression platform focused on key-based identity and minimal control surfaces.',
                tags: ['React', 'Express', 'SQLite'],
                links: {
                    github: 'https://github.com/AdarshaAdi5379/fos',
                    live: 'https://fos-ivory.vercel.app',
                },
            },
            {
                name: 'PayStream',
                description:
                    'Rule-driven payment-trigger platform (Pine Labs Hackathon — AWS) with dashboards and sessions.',
                tags: ['FastAPI', 'AWS', 'Rules Engine'],
                links: {
                    github: 'https://github.com/AdarshaAdi5379/PayStream',
                    live: null,
                },
            },
            {
                name: 'TaskCode',
                description:
                    'Task/project platform built in TypeScript with a simple, fast product surface.',
                tags: ['TypeScript'],
                links: {
                    github: 'https://github.com/AdarshaAdi5379/TaskCode',
                    live: 'https://task-code-nine.vercel.app',
                },
            },
            {
                name: 'Soft Tissue Tumor Diagnosis (GM-UNet)',
                description:
                    'MRI tumor segmentation pipelines with Dice/IoU metrics; TensorFlow training and evaluation workflows.',
                tags: ['Python', 'TensorFlow', 'OpenCV'],
                links: {
                    github: 'https://github.com/AdarshaAdi5379/soft-tissue-tumor-detection',
                    live: null,
                },
            },
        ],
        [],
    )

    const [activeId, setActiveId] = useState(null)
    const [showMore, setShowMore] = useState(false)

    const activeProject = useMemo(
        () => featuredProjects.find((p) => p.id === activeId) ?? null,
        [activeId, featuredProjects],
    )

    const dialogRef = useRef(null)
    const closeButtonRef = useRef(null)
    const lastActiveElementRef = useRef(null)

    const openProject = (id) => {
        lastActiveElementRef.current = document.activeElement
        setActiveId(id)
        window.location.hash = `project=${id}`
    }

    const closeProject = () => {
        setActiveId(null)
        if (window.location.hash.startsWith('#project=')) {
            window.location.hash = 'work'
        }
        const el = lastActiveElementRef.current
        if (el && typeof el.focus === 'function') {
            el.focus()
        }
    }

    useEffect(() => {
        const onHash = () => {
            const hash = window.location.hash || ''
            if (!hash.startsWith('#project=')) return
            const id = hash.replace('#project=', '')
            if (featuredProjects.some((p) => p.id === id)) {
                setActiveId(id)
            }
        }

        onHash()
        window.addEventListener('hashchange', onHash)
        return () => window.removeEventListener('hashchange', onHash)
    }, [featuredProjects])

    useEffect(() => {
        if (!activeProject) return undefined

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        const t = window.setTimeout(() => {
            closeButtonRef.current?.focus?.()
        }, 0)

        return () => {
            window.clearTimeout(t)
            document.body.style.overflow = previousOverflow
        }
    }, [activeProject])

    useEffect(() => {
        if (!activeProject) return undefined

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault()
                closeProject()
                return
            }

            if (e.key !== 'Tab') return

            const root = dialogRef.current
            if (!root) return

            const focusables = root.querySelectorAll(
                'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
            )
            const list = Array.from(focusables).filter((n) => n.offsetParent !== null)
            if (list.length === 0) return

            const first = list[0]
            const last = list[list.length - 1]

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault()
                last.focus()
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault()
                first.focus()
            }
        }

        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [activeProject])

    return (
        <section id="work" className="py-20 px-6 bg-brand-cream dark:bg-black transition-colors duration-300">
            {featuredProjects.map((p) => (
                <span key={p.id} id={`project=${p.id}`} className="hidden" />
            ))}

            <div className="max-w-6xl mx-auto">
                <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">Work</p>

                <div className="flex items-end justify-between gap-6 flex-wrap">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                            Featured Projects
                        </h2>
                        <p className="text-neutral-700 dark:text-neutral-400 text-base mt-3 max-w-2xl">
                            Click a project to view details — the rest stays hidden until you want it.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => openProject(project.id)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    openProject(project.id)
                                }
                            }}
                            className="relative text-left group rounded-3xl bg-white dark:bg-neutral-950 border border-brand-sand dark:border-neutral-800 p-6 hover:border-brand-gold dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none cursor-pointer"
                            aria-label={`Open ${project.title}`}
                        >
                            {project.links.live ? (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute top-5 right-5 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-gold text-neutral-900 hover:bg-[#C9924E] transition-colors"
                                    aria-label={`Open ${project.title} live`}
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    Live
                                </a>
                            ) : null}

                            <div className="flex items-start justify-between gap-4 pr-20">
                                <div className="min-w-0">
                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-400 mt-2">
                                        {project.summary}
                                    </p>
                                </div>
                                <span className="text-brand-gold group-hover:translate-x-0.5 transition-transform">→</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {project.tech.slice(0, 6).map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-full border border-brand-sand dark:border-neutral-800 font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <button
                        type="button"
                        onClick={() => setShowMore((v) => !v)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-sand dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/50 text-neutral-900 dark:text-white font-semibold hover:border-brand-gold dark:hover:border-neutral-700 transition-colors"
                        aria-expanded={showMore}
                        aria-controls="more-projects"
                    >
                        {showMore ? 'Hide more projects' : 'More projects'}
                        <span className={`transition-transform ${showMore ? 'rotate-90' : ''}`}>→</span>
                    </button>

                    {showMore ? (
                        <div
                            id="more-projects"
                            className="mt-5 rounded-3xl bg-white/60 dark:bg-neutral-950/50 border border-brand-sand dark:border-neutral-800 p-5"
                        >
                            <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4">
                                Scroll to browse more projects.
                            </p>

                            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
                                {otherProjects.map((project) => (
                                    <div
                                        key={project.name}
                                        className="snap-start min-w-[260px] max-w-[260px] rounded-2xl bg-white dark:bg-neutral-950 border border-brand-sand dark:border-neutral-800 p-5 shadow-sm dark:shadow-none"
                                    >
                                        <div className="min-w-0">
                                            <p className="text-base font-semibold text-neutral-900 dark:text-white truncate">
                                                {project.name}
                                            </p>
                                            <p className="text-sm text-neutral-700 dark:text-neutral-400 mt-2">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.slice(0, 6).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-full border border-brand-sand dark:border-neutral-800 font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 pt-4 mt-4 border-t border-brand-sand/60 dark:border-neutral-800">
                                            {project.links.github ? (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    GitHub
                                                </a>
                                            ) : null}

                                            {project.links.live ? (
                                                <a
                                                    href={project.links.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live
                                                </a>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            {activeProject ? (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${activeProject.title} details`}
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) closeProject()
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />

                    <div
                        ref={dialogRef}
                        className="relative w-full max-w-3xl max-h-[85vh] overflow-auto rounded-3xl bg-white dark:bg-neutral-950 border border-brand-sand dark:border-neutral-800 shadow-2xl"
                    >
                        <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-t-3xl">
                            <img
                                src={activeProject.image}
                                alt=""
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={closeProject}
                                className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 border border-brand-sand shadow-sm"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="flex items-start justify-between gap-6 flex-wrap">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                                        {activeProject.title}
                                    </h3>
                                    <p className="text-neutral-700 dark:text-neutral-400 mt-3">
                                        {activeProject.summary}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    {activeProject.links.github ? (
                                        <a
                                            href={activeProject.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-brand-sand dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:border-brand-gold dark:hover:border-neutral-700 transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            GitHub
                                        </a>
                                    ) : null}
                                    {activeProject.links.live ? (
                                        <a
                                            href={activeProject.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-brand-gold dark:bg-brand-gold text-neutral-900 hover:bg-[#C9924E] dark:hover:bg-[#C9924E] transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live
                                        </a>
                                    ) : null}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6">
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-medium">
                                        What I Built
                                    </p>
                                    <ul className="mt-3 space-y-2">
                                        {activeProject.whatIBuilt.map((line) => (
                                            <li key={line} className="text-sm text-neutral-800 dark:text-neutral-300">
                                                • {line}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-medium">
                                        Tech
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {activeProject.tech.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-full border border-brand-sand dark:border-neutral-800 font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    )
}

export default Projects
