import { useState, useEffect } from 'react'

export function useTheme() {
    // Initialize theme from localStorage or system preference
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme')
            if (savedTheme) {
                return savedTheme
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
        return 'dark' // Default to dark if no window (SSR safety)
    })

    useEffect(() => {
        const root = window.document.documentElement

        // Remove previous theme class
        root.classList.remove('light', 'dark')

        // Add current theme class
        root.classList.add(theme)

        // Save to localStorage
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return { theme, toggleTheme }
}
