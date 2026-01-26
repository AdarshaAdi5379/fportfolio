function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-6xl w-full">
                <div className="max-w-4xl">
                    {/* Meta line - Freelancer positioning */}
                    <p className="text-sm uppercase tracking-wide text-gray-400 mb-6">
                        Freelance Full-Stack Developer · AI & Cloud Engineer
                    </p>

                    {/* Headline - Identity statement */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                        Building production-ready systems with full-stack expertise and AI integration
                    </h1>

                    {/* Subtext - Capability summary */}
                    <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        I design, build, and deploy scalable web applications, AI-powered solutions,
                        and cloud infrastructure. From concept to production, I deliver systems that work.
                    </p>

                    {/* Text-based CTA */}
                    <a
                        href="#contact"
                        className="inline-block text-lg text-accent hover:text-white transition-colors"
                    >
                        Discuss a project →
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
