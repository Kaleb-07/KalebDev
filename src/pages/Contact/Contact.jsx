import { Mail, Github, Linkedin, Send, AlertCircle } from "lucide-react";
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
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        I am open to internship and junior developer opportunities. Feel free
                        to reach out.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            {/* Email */}
                            <a
                                href="mailto:your.email@example.com"
                                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-600 transition"
                            >
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600 rounded-lg flex items-center justify-center">
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

                            {/* GitHub */}
                            <a
                                href="https://github.com/Kaleb-07"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-900 transition"
                            >
                                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
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
                                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-600 transition"
                            >
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600 rounded-lg flex items-center justify-center">
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
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Mesafint007@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
                            />

                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                            />

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition disabled:opacity-50"
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
                                <p className="text-green-500 text-center text-sm">
                                    Message sent successfully!
                                </p>
                            )}

                            {status === "error" && (
                                <div className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                                    <AlertCircle className="text-red-600 dark:text-red-300" />
                                    <p className="text-red-600 dark:text-red-300 text-sm">
                                        {errorMessage}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
