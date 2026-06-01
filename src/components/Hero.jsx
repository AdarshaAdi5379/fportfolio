import { ArrowDown, FileDown } from 'lucide-react'

function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-[92vh] flex items-center px-6 pt-24 pb-16 bg-brand-cream dark:bg-black overflow-hidden transition-colors duration-300"
        >
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]" />

            {/* Warm accent wash (very subtle) */}
            <div className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-gold/20 blur-3xl dark:bg-brand-gold/10" />

            <div className="relative max-w-6xl mx-auto w-full">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-sand dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/50 backdrop-blur-sm text-neutral-700 dark:text-neutral-400 text-xs font-medium">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                        Open to full-time roles
                    </div>

                    <h1 className="mt-6 font-sans font-semibold text-5xl md:text-7xl tracking-tight text-neutral-900 dark:text-white leading-[1.02]">
                        Software Engineer — Full Stack Development — Backend Systems
                    </h1>

                    <p className="mt-6 text-base md:text-lg text-neutral-700 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        Software engineer with experience building scalable product-focused web applications and backend systems using React, Django, PostgreSQL, Docker, and AWS.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <a
                            href="#work"
                            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-brand-gold dark:bg-brand-gold text-neutral-900 font-semibold hover:bg-[#C9924E] dark:hover:bg-[#C9924E] transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white border border-brand-sand dark:border-neutral-800 hover:border-brand-gold dark:hover:border-neutral-700 transition-colors font-semibold"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/Adarsha_KK_Dev.pdf"
                            download
                            className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FileDown className="w-4 h-4" />
                            Resume
                        </a>
                    </div>

                    <div className="mt-12 hidden md:flex items-center gap-2 text-neutral-600 dark:text-neutral-500 text-sm">
                        <ArrowDown className="w-4 h-4" />
                        <span>Scroll for featured work</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
