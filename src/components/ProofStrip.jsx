import { Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react'

function ProofStrip() {
    const items = [
        {
            icon: Briefcase,
            title: 'Internship',
            value: 'Edubricz Technologies',
            subvalue: 'Full-Stack Developer',
        },
        {
            icon: GraduationCap,
            title: 'Graduation',
            value: '2026',
            subvalue: 'B.E. Computer Science',
        },
        {
            icon: Sparkles,
            title: 'Focus',
            value: 'Product UI + Systems',
            subvalue: 'Web apps, APIs, deployments',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'India',
            subvalue: 'Open to remote/hybrid',
        },
    ]

    return (
        <section id="proof" className="px-6 py-12 bg-brand-cream dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {items.map((item) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={item.title}
                                className="h-full rounded-2xl bg-white dark:bg-neutral-950 border border-brand-sand dark:border-neutral-800 p-5 shadow-sm dark:shadow-none"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-medium">
                                            {item.title}
                                        </p>
                                        <p className="text-base font-semibold text-neutral-900 dark:text-white mt-2">
                                            {item.value}
                                        </p>
                                        {item.subvalue ? (
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                                {item.subvalue}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-brand-sand dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProofStrip
