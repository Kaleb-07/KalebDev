import { Mail, Github, Linkedin, Send, AlertCircle, FileText, MapPin } from "lucide-react";
import cvFile from "../../assets/CV/Software_Developer_CV.pdf";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_placeholder";
const TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_placeholder";
const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key_placeholder";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMessage("");

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                reply_to: formData.email,
            });

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again.");
            console.error(error);

            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section
            id="contact"
            className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
        >
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                        Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-teal-500">Touch</span>
                    </h2>
                    <div className="flex justify-center items-center gap-2 mt-2 mb-4">
                        <div className="w-12 h-1 bg-pink-500 dark:bg-pink-400 rounded"></div>
                        <div className="w-24 h-1 bg-purple-600 dark:bg-purple-400 rounded"></div>
                        <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 rounded"></div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div>
                        <div className="relative text-2xl font-bold mb-6 w-fit group cursor-default">
                            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-teal-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Contact Information
                            </span>
                            <span className="relative bg-clip-text text-gray-900 dark:text-white group-hover:text-transparent transition-colors duration-300">
                                Contact Information
                            </span>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-center gap-6">
                            {/* Email */}
                            <a
                                href="mailto:Mesafint007@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 hover:border-blue-600 transition shadow-sm hover:shadow-md"
                            >
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600 rounded-2xl flex items-center justify-center">
                                    <Mail className="text-blue-600 dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Email
                                    </p>
                                    <p className="text-gray-900 dark:text-white font-medium">
                                        mesafint007@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-4 p-4 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 transition shadow-sm hover:shadow-md">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-600 rounded-2xl flex items-center justify-center">
                                    <MapPin className="text-purple-600 dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Location
                                    </p>
                                    <p className="text-gray-900 dark:text-white font-medium">
                                        Addis Ababa, ETH
                                    </p>
                                </div>
                            </div>

                            {/* GitHub */}
                            <a
                                href="https://github.com/Kaleb-07"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 hover:border-gray-900 transition shadow-sm hover:shadow-md"
                            >
                                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                                    <Github className="text-gray-900 dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        GitHub
                                    </p>
                                    <p className="text-gray-900 dark:text-white font-medium">
                                        Kaleb-07
                                    </p>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/kaleb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 hover:border-blue-600 transition shadow-sm hover:shadow-md"
                            >
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600 rounded-2xl flex items-center justify-center">
                                    <Linkedin className="text-blue-600 dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        LinkedIn
                                    </p>
                                    <p className="text-gray-900 dark:text-white font-medium">
                                        kaleb
                                    </p>
                                </div>
                            </a>

                            {/* Resume */}
                            <a
                                href={cvFile}
                                download="Software_Developer_CV.pdf"
                                className="flex items-center gap-4 p-4 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 hover:border-green-600 transition shadow-sm hover:shadow-md group"
                            >
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FileText className="text-green-600 dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Resume
                                    </p>
                                    <p className="text-gray-900 dark:text-white font-medium">
                                        Download CV
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className="relative text-2xl font-bold mb-6 w-fit group cursor-default">
                            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-teal-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Send a Message
                            </span>
                            <span className="relative bg-clip-text text-gray-900 dark:text-white group-hover:text-transparent transition-colors duration-300">
                                Send a Message
                            </span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Your message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none transition-all"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 shadow-md"
                                >
                                    {status === "sending" ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {status === "success" && (
                                    <p className="text-green-500 text-center text-sm font-medium animate-fade-in">
                                        Message sent successfully!
                                    </p>
                                )}

                                {status === "error" && (
                                    <div className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg animate-fade-in">
                                        <AlertCircle className="text-red-600 dark:text-red-400" />
                                        <p className="text-red-600 dark:text-red-400 text-sm">
                                            {errorMessage}
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
