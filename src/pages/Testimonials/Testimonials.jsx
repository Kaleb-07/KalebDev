import { useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import client1 from "../../assets/Client/ClientOne.png";
import client2 from "../../assets/Client/ClientTwo.png";
import client3 from "../../assets/Client/ClientThree.png";

const testimonials = [
    {
        id: 0,
        name: "Dagim Worku",
        role: "CEO, Tech Innovations",
        image: client1,
        message:
            "Kaleb is a top-tier Software Engineer. He architected a scalable backend for our platform that improved performance by 40%. His technical depth and problem-solving skills are impressive.",
    },
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Product Manager, Creative Studios",
        image: client2,
        message:
            "We hired Kaleb for a complex mobile app, and he delivered a flawless React Native experience. He bridges the gap between clean code and intuitive UI/UX design perfectly.",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Founder, StartUp Hub",
        image: client3,
        message:
            "His eye for design is unmatched. Kaleb redesigned our entire dashboard, making it not only visually stunning but also incredibly user-friendly. A true Full Stack Developer who cares about the user.",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const prev = () =>
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const next = () =>
        setCurrent((prev) => (prev + 1) % testimonials.length);

    return (
        <section
            id="testimonials"
            className="py-10 bg-gray-50 dark:bg-[rgb(30,30,30)] transition-colors"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                        Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-teal-500">Testimonials</span>
                    </h2>
                    <div className="flex justify-center items-center gap-2 mt-2">
                        <div className="w-12 h-1 bg-pink-500 dark:bg-pink-400 rounded"></div>
                        <div className="w-24 h-1 bg-purple-600 dark:bg-purple-400 rounded"></div>
                        <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 rounded"></div>
                    </div>
                </div>

                {/* TESTIMONIAL BOX */}
                <div className="bg-white dark:bg-[rgb(18,18,18)] rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto transition-all duration-500">

                    <div className="flex flex-col md:flex-row items-center gap-6">

                        {/* IMAGE */}
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-purple-600 shadow-md flex-shrink-0">
                            <img
                                key={current}
                                src={testimonials[current].image}
                                alt={testimonials[current].name}
                                className="w-full h-full object-cover animate-fade-in"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="flex-1 text-center md:text-left">
                            <FaQuoteLeft className="text-3xl text-purple-600 mb-4 mx-auto md:mx-0" />

                            <div key={current} className="animate-fade-in">
                                <p
                                    className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4
                           min-h-[120px] md:min-h-[96px] text-lg italic"
                                >
                                    "{testimonials[current].message}"
                                </p>

                                <h4 className="font-bold text-gray-900 dark:text-white text-xl">
                                    {testimonials[current].name}
                                </h4>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {testimonials[current].role}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CONTROLS */}
                    <div className="flex justify-center items-center gap-6 mt-8">

                        <button
                            onClick={prev}
                            className="p-3 rounded-full border border-purple-600 text-purple-600
                         hover:bg-purple-600 hover:text-white transition-all hover:scale-110"
                        >
                            <FaChevronLeft />
                        </button>

                        {/* DOTS */}
                        <div className="flex justify-center gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index
                                        ? "bg-purple-600 w-6"
                                        : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-400"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-3 rounded-full border border-purple-600 text-purple-600
                         hover:bg-purple-600 hover:text-white transition-all hover:scale-110"
                        >
                            <FaChevronRight />
                        </button>

                    </div>


                </div>
            </div>
        </section>
    );
}
