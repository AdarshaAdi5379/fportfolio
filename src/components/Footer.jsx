function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Name and Year */}
                    <p className="text-sm text-gray-500">
                        © {currentYear} Adarsha K K. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/adarshakk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/adarshakk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:adarshakk@example.com"
                            className="text-sm text-gray-500 hover:text-white transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
