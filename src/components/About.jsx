function About() {
    return (
        <section id="about" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                    About
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-light text-white mb-16">
                    Background & Approach
                </h2>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Left Column - Professional Background */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-light text-white mb-4">
                                Professional Background
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm a full-stack developer and AI engineer with a focus on building
                                production-ready systems. My work spans web applications, machine learning
                                solutions, and cloud infrastructure—always with an emphasis on reliability,
                                scalability, and clean code.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-light text-white mb-4">
                                Engineering Philosophy
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                I believe in production-first engineering: writing code that works, ships,
                                and maintains well. Every project is an opportunity to solve real problems
                                with thoughtful architecture and pragmatic technology choices.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-light text-white mb-4">
                                Freelance Availability
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm available for freelance projects, contract work, and full-time opportunities.
                                I work with startups, small businesses, and technical teams who need end-to-end
                                development, AI integration, or cloud deployment expertise.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Education & Certifications */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-light text-white mb-4">
                                Education
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-white">Bachelor of Technology in Computer Science</p>
                                    <p className="text-sm text-gray-500">University Name • 2020 - 2024</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-light text-white mb-4">
                                Certifications
                            </h3>
                            <ul className="space-y-2">
                                <li className="text-gray-400">AWS Certified Solutions Architect</li>
                                <li className="text-gray-400">Google Cloud Professional Developer</li>
                                <li className="text-gray-400">TensorFlow Developer Certificate</li>
                                <li className="text-gray-400">Full Stack Web Development Specialization</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-light text-white mb-4">
                                Areas of Work
                            </h3>
                            <ul className="space-y-2">
                                <li className="text-gray-400">• Full-stack web application development</li>
                                <li className="text-gray-400">• AI/ML model development and integration</li>
                                <li className="text-gray-400">• Cloud infrastructure and DevOps</li>
                                <li className="text-gray-400">• Technical consulting and architecture review</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
