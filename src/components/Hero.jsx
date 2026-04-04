function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 bg-neutral-50 dark:bg-black overflow-hidden pt-32 md:pt-20 transition-colors duration-300">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

            {/* Radial Spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-neutral-50 to-neutral-50 dark:from-neutral-800/40 dark:via-black dark:to-black"></div>

            {/* Content */}
            <div className="relative max-w-5xl w-full text-center z-10">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm mb-10 transition-all hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 cursor-default">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">Available for Work</span>
                </div>

                {/* Headline with Gradient */}
                <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 leading-[1.1]">
                    <span className="text-neutral-900 dark:text-white block">
                        Building scalable
                    </span>
                    <span className="bg-gradient-to-b from-neutral-600 via-neutral-900 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-neutral-600 bg-clip-text text-transparent block">
                        production systems.
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12 max-w-2xl mx-auto">
                    Full Stack Software Engineer focused on backend and platform systems — multi-tenant platforms, APIs, and production deployments.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-xl shadow-neutral-900/10 dark:shadow-white/10"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="#work"
                        className="px-8 py-4 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200"
                    >
                        View Projects
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-50">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-neutral-400 dark:via-neutral-500 to-transparent"></div>
            </div>
        </section>
    )
}

export default Hero
