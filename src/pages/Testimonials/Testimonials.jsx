import { useState } from "react";
import clientOne from "../../assets/Client/ClientOne.png";
import clientTwo from "../../assets/Client/ClientTwo.png";
import clientThree from "../../assets/Client/ClientThree.png";

const testimonials = [
    {
        name: "Dagim Worku",
        role: "CEO, Tech Innovations",
        img: clientOne,
        quote:
            "Kaleb is an exceptional software engineer. His attention to detail and problem-solving skills are outstanding. He delivered our project ahead of schedule and exceeded our expectations.",
    },
    {
        name: "Sarah Johnson",
        role: "Marketing Director, Creative Studios",
        img: clientTwo,
        quote:
            "Working with Kaleb on our video editing project was a pleasure. His creative vision and technical skills transformed our raw footage into a compelling story that resonated with our audience.",
    },
    {
        name: "Michael Chen",
        role: "Brand Manager, Global Retail",
        img: clientThree,
        quote:
            "Kaleb's graphic design work for our brand refresh was exactly what we needed. He captured our vision perfectly and delivered designs that were both beautiful and functional. Highly recommended!",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () =>
        setCurrent((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () =>
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section
            id="testimonials"
            className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold gradient-text">
                        Client <span className="text-purple-600 dark:text-purple-400">Testimonials</span>
                    </h2>
                    <div className="flex justify-center items-center mt-2 gap-1">
                        <span className="w-16 h-1 bg-purple-500 rounded-full"></span>
                        <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
                        <span className="w-16 h-1 bg-purple-500 rounded-full"></span>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="relative max-w-3xl mx-auto overflow-hidden min-h-[220px]">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 rounded-lg shadow-lg p-6 md:p-8
                ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
                bg-white dark:bg-slate-800`}
                        >
                            <div className="flex flex-col md:flex-row items-start gap-4 max-w-full">
                                <div className="text-purple-600 dark:text-purple-400 text-3xl flex-shrink-0">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg break-words">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="mt-4 flex items-center gap-3">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover shadow-md"
                                />
                                <div>
                                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 text-sm">
                                        {item.name}
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center mt-8 gap-4">
                    <button
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-purple-100 dark:bg-slate-700 hover:bg-purple-200 dark:hover:bg-slate-600 transition-colors"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-purple-100 dark:bg-slate-700 hover:bg-purple-200 dark:hover:bg-slate-600 transition-colors"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center items-center mt-4 gap-2">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                ${index === current ? "bg-purple-600 dark:bg-purple-400" : "bg-gray-300 dark:bg-gray-600"}`}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}
