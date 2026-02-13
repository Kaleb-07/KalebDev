import { useEffect, useState } from "react";
import profileImg from "../../assets/MyProject/About-image.jpg";

const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
];
// hero logic
export default function Hero() {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const timeout = setTimeout(() => {
            if (charIndex < currentRole.length) {
                setText(currentRole.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else {
                setTimeout(() => {
                    setCharIndex(0);
                    setRoleIndex((roleIndex + 1) % roles.length);
                    setText("");
                }, 1500);
            }
        }, 120);

        return () => clearTimeout(timeout);
    }, [charIndex, roleIndex]);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-white dark:bg-slate-900 transition-colors"
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center gap-14">

                    {/* TEXT */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Hi, I’m{" "}
                            <span className="text-purple-600 dark:text-purple-400">Kaleb</span>
                        </h2>

                        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                            I’m a{" "}
                            <span className="text-purple-600 dark:text-purple-400">
                                {text}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-8">
                            Building robust software solutions, mobile apps, and intuitive web applications with a focus on performance and scalability.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold
                hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500
                hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                            >
                                View My Work
                            </a>

                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold
                hover:bg-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="flex-1 flex justify-center">
                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl animate-float">
                            <img
                                src={profileImg}
                                alt="Kaleb"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
