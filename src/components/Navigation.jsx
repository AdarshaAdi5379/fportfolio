import { useEffect, useState } from 'react'

function Navigation() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16)
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300">
            <div
                className={
                    `flex items-center gap-3 sm:gap-6 px-6 py-3 rounded-full ` +
                    `bg-white/85 backdrop-blur-md ` +
                    `border border-brand-sand ` +
                    `shadow-xl shadow-neutral-200/40 ` +
                    `transition-all duration-300 ` +
                    (scrolled ? 'translate-y-0' : 'translate-y-2')
                }
            >
                <a
                    href="#hero"
                    className="text-neutral-900 font-medium hover:text-neutral-600 transition-colors tracking-tight text-sm md:text-base whitespace-nowrap"
                >
                    Adarsha K K
                </a>

                <div className="hidden sm:flex items-center gap-1">
                    <div className="w-px h-4 bg-neutral-200 mx-2" />
                    {[
                        ['Work', '#work'],
                        ['Contact', '#contact'],
                    ].map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className="text-sm text-neutral-700 hover:text-black px-4 py-1.5 rounded-full hover:bg-neutral-100 transition-all duration-200"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <div className="w-px h-4 bg-neutral-200 mx-2 hidden sm:block" />

                <div className="flex items-center gap-2">
                    <a
                        href="/Adarsha_KK_Dev.pdf"
                        download
                        className="bg-brand-gold text-neutral-900 text-sm font-medium px-5 py-2 rounded-full hover:bg-[#C9924E] transition-colors"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
