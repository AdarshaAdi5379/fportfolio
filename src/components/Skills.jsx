function Skills() {
    const skillCategories = [
        {
            category: "Languages",
            skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
        },
        {
            category: "Frontend",
            skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "Django", "Flask", "Spring Boot", "REST APIs"]
        },
        {
            category: "Databases",
            skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"]
        },
        {
            category: "AI / ML",
            skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision"]
        },
        {
            category: "DevOps & Cloud",
            skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
        },
        {
            category: "Tools & Workflow",
            skills: ["Git", "VS Code", "Postman", "Figma", "Jira", "Linux"]
        }
    ]

    return (
        <section id="skills" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                    Skills
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-light text-white mb-16">
                    Technical Capabilities
                </h2>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-lg font-light text-white">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm text-gray-400"
                                    >
                                        {skill}{idx < category.skills.length - 1 ? ' •' : ''}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
