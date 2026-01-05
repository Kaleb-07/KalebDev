import { useState, useEffect } from "react";

export default function Footer() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Global dark mode
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const resources = [
        { name: "Resume", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "Twitter", href: "#" },
    ];

    const services = [
        { name: "Web Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Graphic Design", href: "#" },
        { name: "Video Editing", href: "#" },
    ];

    const contact = [
        { name: "Email: hello@kaleb.dev", href: "mailto:hello@kaleb.dev" },
        { name: "Location: San Francisco, CA", href: "#" },
    ];

    return (
        <footer className="border-t border-purple-500/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-gray-800 dark:text-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-5 gap-8 mb-8">

                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold gradient-text mb-4">Kaleb</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Full Stack Developer passionate about creating exceptional web experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-bold mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="relative hover:text-purple-500 dark:hover:text-purple-400 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-purple-500 dark:after:bg-purple-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            {resources.map((res) => (
                                <li key={res.name}>
                                    <a
                                        href={res.href}
                                        className="relative hover:text-purple-500 dark:hover:text-purple-400 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-purple-500 dark:after:bg-purple-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                                    >
                                        {res.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <a
                                        href={service.href}
                                        className="relative hover:text-purple-500 dark:hover:text-purple-400 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-purple-500 dark:after:bg-purple-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            {contact.map((c) => (
                                <li key={c.name}>
                                    <a
                                        href={c.href}
                                        className="relative hover:text-purple-500 dark:hover:text-purple-400 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-purple-500 dark:after:bg-purple-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                                    >
                                        {c.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-300/30 dark:border-gray-700/50 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
                    <p>&copy; 2026 Kaleb. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
