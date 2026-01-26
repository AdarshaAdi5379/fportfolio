function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-lg font-light text-white hover:text-accent transition-colors">
                        Adarsha K K
                    </a>

                    <div className="flex gap-8">
                        <a
                            href="#work"
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Work
                        </a>
                        <a
                            href="#about"
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
