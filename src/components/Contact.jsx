function Contact() {
    const contactMethods = [
        {
            label: "Email",
            value: "adarshakk@example.com",
            link: "mailto:adarshakk@example.com"
        },
        {
            label: "Phone",
            value: "+91 XXXXX XXXXX",
            link: "tel:+91XXXXXXXXXX"
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/adarshakk",
            link: "https://linkedin.com/in/adarshakk"
        },
        {
            label: "GitHub",
            value: "github.com/adarshakk",
            link: "https://github.com/adarshakk"
        }
    ]

    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                    Contact
                </p>

                {/* Section Heading */}
                <h2 className="text-3xl font-light text-white mb-8">
                    Get In Touch
                </h2>

                {/* Availability Message */}
                <p className="text-lg text-gray-400 mb-16 max-w-2xl">
                    Available for freelance projects, contract work, and full-time opportunities.
                    Let's discuss how I can help with your next project.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6 max-w-2xl">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.link}
                            target={method.label === "LinkedIn" || method.label === "GitHub" ? "_blank" : undefined}
                            rel={method.label === "LinkedIn" || method.label === "GitHub" ? "noopener noreferrer" : undefined}
                            className="flex items-baseline gap-4 group hover:text-accent transition-colors"
                        >
                            <span className="text-sm text-gray-500 w-24">
                                {method.label}
                            </span>
                            <span className="text-lg text-gray-400 group-hover:text-white transition-colors">
                                {method.value}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact
