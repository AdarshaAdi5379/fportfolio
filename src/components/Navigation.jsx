import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
            <div className={`
                flex items-center gap-8 px-8 py-4 rounded-full 
                bg-white/80 dark:bg-black/80 backdrop-blur-md 
                border border-neutral-200 dark:border-white/10 
                shadow-xl shadow-neutral-200/50 dark:shadow-black/50
                transition-all duration-300
                ${scrolled ? 'py-3 px-6' : 'py-4 px-8'}
            `}>
                <a
                    href="#"
                    className="text-neutral-900 dark:text-white font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors tracking-tight text-sm md:text-base whitespace-nowrap"
                >
                    Adarsha K K
                </a>

                <div className="hidden sm:flex items-center gap-1">
                    <div className="w-px h-4 bg-neutral-200 dark:bg-white/10 mx-2"></div>

                    {[
                        ['Work', '#work'],
                        ['Skills', '#skills'],
                        ['About', '#about'],
                        ['Process', '#process']
                    ].map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white px-4 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 transition-all duration-200"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <div className="w-px h-4 bg-neutral-200 dark:bg-white/10 mx-2 hidden sm:block"></div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <a
                        href="#contact"
                        className="bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
