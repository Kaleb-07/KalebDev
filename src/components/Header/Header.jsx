import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [activeLink, setActiveLink] = useState("home");

    // Global dark mode
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Scroll-based active link highlighting
    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100; // Offset for header height

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveLink(links[index].id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">

                <div
                    className="flex items-center gap-1.5 leading-none cursor-pointer group"
                    onClick={() => window.location.reload()}
                >
                    <span className="text-purple-500 dark:text-purple-400 font-mono text-xl font-bold animate-pulse">&lt;</span>
                    <span className="text-2xl font-black tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-b from-gray-800 via-gray-600 to-purple-600 dark:from-white dark:via-slate-200 dark:to-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.55)] transition-all group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.7)] uppercase">
                        KALEB
                    </span>
                    <span className="text-purple-400 dark:text-purple-300 font-mono text-xl font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse">/&gt;</span>
                </div>

                {/* Desktop Nav + Socials + Theme Toggle */}
                <div className="ml-auto flex items-center gap-8">
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => {
                                    e.preventDefault();           // prevent default anchor jump
                                    setActiveLink(link.id);       // set active link

                                    // Smooth scroll to section
                                    const section = document.getElementById(link.id);
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }
                                }}
                                className={`relative font-medium transition-colors
                            ${activeLink === link.id
                                        ? "text-purple-600 dark:text-purple-400"
                                        : "text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                                    }
                            after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-purple-600
                            after:transition-all after:duration-300
                            ${activeLink === link.id
                                        ? "after:w-full"
                                        : "after:w-0 hover:after:w-full"
                                    }
                            `}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>



                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="text-xl text-gray-700 dark:text-gray-300"
                    >
                        {theme === "dark" ? "🌞" : "🌙"}
                    </button>

                    {/* Hamburger */}
                    <button
                        className="md:hidden p-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-700">
                    <nav className="flex flex-col items-center gap-8 py-8">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => {
                                    e.preventDefault();           // prevent default anchor jump
                                    setActiveLink(link.id);       // set active link
                                    setMenuOpen(false);           // close mobile menu

                                    // Smooth scroll to section
                                    const section = document.getElementById(link.id);
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }
                                }}
                                className={`relative text-lg font-medium transition-colors text-center
                        ${activeLink === link.id
                                        ? "text-purple-600 dark:text-purple-400"
                                        : "text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                                    }
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-purple-600
                        after:transition-all after:duration-300
                        ${activeLink === link.id
                                        ? "after:w-full"
                                        : "after:w-0 hover:after:w-full"
                                    }
                    `}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Mobile Social Icons */}
                        <div className="flex items-center gap-6 pt-4 border-t dark:border-slate-700 w-full justify-center">
                            <a href="https://github.com/Kaleb-07" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/kaleb-mulugeta" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
