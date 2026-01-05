import { useEffect, useState } from "react";
import profileImg from "../../assets/MyProject/About-image.jpg"; // update according to your structure

export default function Hero() {
    const roles = ["Software Engineer", "Graphic Designer", "Video Editor"];
    const [currentText, setCurrentText] = useState("");
    const [currentRole, setCurrentRole] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 150;
        const timeout = setTimeout(() => {
            const fullText = roles[currentRole];
            setCurrentText(isDeleting ? fullText.slice(0, currentText.length - 1) : fullText.slice(0, currentText.length + 1));

            if (!isDeleting && currentText === fullText) {
                setIsDeleting(true);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRole, roles]);

    return (
        <section id="home" className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24">

                {/* Text Content */}
                <div className="text-center md:text-left max-w-xl space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Hi, I'm <span className="text-purple-600 dark:text-purple-400">Kaleb</span>
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                        I'm a <span className="text-purple-500">{currentText}</span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Creating digital experiences through code, design, and video editing.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg transform transition-all hover:scale-105 hover:bg-purple-700"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg transform transition-all hover:scale-105 hover:bg-purple-600 hover:text-white"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="relative w-72 md:w-96 flex justify-center md:justify-end">
                    <div className="rounded-full overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                        <img
                            src={profileImg}
                            alt="Kaleb's Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
