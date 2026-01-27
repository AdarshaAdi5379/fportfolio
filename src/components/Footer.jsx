import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 px-6 border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-neutral-900 dark:text-white font-medium tracking-tight">Adarsha K K</span>
                        <p className="text-sm text-neutral-500">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/AdarshaAdi5379"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/adarshakk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:adarshakk1234@gmail.com"
                            className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
