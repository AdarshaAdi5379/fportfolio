function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 bg-neutral-950 overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

            {/* Radial Spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/50 via-neutral-950 to-neutral-950"></div>

            {/* Content */}
            <div className="relative max-w-4xl w-full text-center z-10">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-neutral-400">Available for Freelance Work</span>
                </div>

                {/* Headline with Gradient */}
                <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6">
                    <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                        Building production-ready systems with full-stack expertise
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                    I design, build, and deploy scalable web applications, AI-powered solutions,
                    and cloud infrastructure. From concept to production, I deliver systems that work.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="#work"
                        className="px-8 py-3 text-neutral-400 hover:text-white font-medium rounded-full border border-neutral-800 hover:border-neutral-600 transition-all duration-200"
                    >
                        View My Work
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
