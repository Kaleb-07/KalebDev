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
            "Kaleb is an exceptional software engineer. His attention to detail and problem-solving skills are outstanding. He delivered our project ahead of schedule and exceeded our expectations.",
    },
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Marketing Director, Creative Studios",
        image: client2,
        message:
            "Working with Kaleb on our video editing project was a pleasure. His creative vision and technical skills transformed our raw footage into a compelling story that resonated with our audience.",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Brand Manager, Global Retail",
        image: client3,
        message:
            "Kaleb's graphic design work for our brand refresh was exactly what we needed. He captured our vision perfectly and delivered designs that were both beautiful and functional.",
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
                    <h2 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        Client <span className="text-gray-500 dark:text-gray-300">Testimonials</span>
                    </h2>

                    <div className="flex justify-center items-center gap-2">
                        <span className="w-10 h-1 bg-purple-600 rounded"></span>
                        <span className="w-20 h-1 bg-gray-300 dark:bg-gray-600 rounded"></span>
                        <span className="w-10 h-1 bg-purple-600 rounded"></span>
                    </div>
                </div>

                {/* TESTIMONIAL BOX */}
                <div className="bg-white dark:bg-[rgb(18,18,18)] rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto transition-colors">

                    <div className="flex flex-col md:flex-row items-center gap-6">

                        {/* IMAGE */}
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-purple-600 shadow-md flex-shrink-0">
                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="flex-1 text-center md:text-left">
                            <FaQuoteLeft className="text-3xl text-purple-600 mb-4 mx-auto md:mx-0" />

                            <p
                                className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4
                           min-h-[120px] md:min-h-[96px]"
                            >
                                {testimonials[current].message}
                            </p>

                            <h4 className="font-bold text-gray-900 dark:text-white">
                                {testimonials[current].name}
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400">
                                {testimonials[current].role}
                            </p>
                        </div>
                    </div>

                    {/* CONTROLS */}
                    <div className="flex justify-center items-center gap-6 mt-8">

                        <button
                            onClick={prev}
                            className="p-3 rounded-full border border-purple-600 text-purple-600
                         hover:bg-purple-600 hover:text-white transition-all"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={next}
                            className="p-3 rounded-full border border-purple-600 text-purple-600
                         hover:bg-purple-600 hover:text-white transition-all"
                        >
                            <FaChevronRight />
                        </button>

                    </div>

                    {/* DOTS */}
                    <div className="flex justify-center gap-3 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${current === index
                                    ? "bg-purple-600"
                                    : "bg-gray-300 dark:bg-gray-600"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
