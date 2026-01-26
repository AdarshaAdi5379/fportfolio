import { useState } from 'react'
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission - you can integrate with EmailJS, Formspree, etc.
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({ name: '', email: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const socialLinks = [
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:adarshakk1234@gmail.com',
            label: 'adarshakk1234@gmail.com'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://linkedin.com/in/adarshakk',
            label: '/in/adarshakk'
        },
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/AdarshaAdi5379',
            label: '@AdarshaAdi5379'
        }
    ]

    return (
        <section id="contact" className="py-20 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4 font-medium">
                    Contact
                </p>

                {/* Main Contact Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 bg-neutral-950 border border-neutral-800 rounded-3xl p-8 lg:p-12 mt-8">

                    {/* Left Column - Info */}
                    <div className="flex flex-col justify-between">
                        {/* Header */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight mb-6">
                                Let's build something amazing together
                            </h2>

                            <p className="text-neutral-400 text-base leading-relaxed mb-8">
                                Available for freelance projects, contract work, and full-time opportunities.
                                I'm always excited to collaborate on innovative ideas and challenging problems.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-neutral-400">
                                    <MapPin className="w-5 h-5 text-neutral-500" />
                                    <span className="text-sm">Based in India</span>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-400">
                                    <Phone className="w-5 h-5 text-neutral-500" />
                                    <span className="text-sm">+91 80507 90981</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-3">
                            <p className="text-xs uppercase tracking-wider text-neutral-600 font-medium mb-4">
                                Connect With Me
                            </p>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                                >
                                    <social.icon className="w-5 h-5" />
                                    <span className="text-sm font-medium">{social.label}</span>
                                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Name Input */}
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-neutral-400 uppercase tracking-wide"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="bg-neutral-900 border border-neutral-800 text-white rounded-lg p-4 
                                             placeholder:text-neutral-600 
                                             focus:ring-2 focus:ring-neutral-500/20 focus:border-white focus:outline-none 
                                             transition-all duration-200"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-neutral-400 uppercase tracking-wide"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="bg-neutral-900 border border-neutral-800 text-white rounded-lg p-4 
                                             placeholder:text-neutral-600 
                                             focus:ring-2 focus:ring-neutral-500/20 focus:border-white focus:outline-none 
                                             transition-all duration-200"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-neutral-400 uppercase tracking-wide"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project..."
                                    className="bg-neutral-900 border border-neutral-800 text-white rounded-lg p-4 
                                             placeholder:text-neutral-600 resize-none
                                             focus:ring-2 focus:ring-neutral-500/20 focus:border-white focus:outline-none 
                                             transition-all duration-200"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-semibold py-4 px-6 rounded-lg 
                                         hover:bg-neutral-200 transition-all duration-200 
                                         flex items-center justify-center gap-2 group mt-2"
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        {/* Response Time Note */}
                        <p className="text-xs text-neutral-600 mt-4 text-center">
                            I typically respond within 24-48 hours
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
