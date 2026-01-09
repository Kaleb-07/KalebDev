import { useState } from "react";
import { FaLink, FaGithub, FaPlay, FaEye } from "react-icons/fa";
import EcommerceImg from "../../assets/MyProject/E-commerce.png";
import TaskManagmentImg from "../../assets/MyProject/TaskManagment.png";
import CommercialAdvertisementImg from "../../assets/MyProject/CommercialAdvertisement.png";
import EventHighlightImg from "../../assets/MyProject/EventHighlight.png";
import BrandIdentityImg from "../../assets/MyProject/BrandIdentity.png";
// Corrected Project Data
const projectsData = [
    {
        id: 1,
        category: "software",
        title: "E-commerce Website",
        description:
            "Full-stack web application with user authentication and payment integration",
        img: EcommerceImg,
        links: { demo: "#", github: "#" },
    },
    {
        id: 2,
        category: "software",
        title: "Task Management App",
        description: "Mobile-first web application for organizing tasks and projects",
        img: TaskManagmentImg,
        links: { demo: "#", github: "#" },
    },
    {
        id: 3,
        category: "video",
        title: "Commercial Advertisement",
        description: "30-second promotional video for a tech startup",
        img: CommercialAdvertisementImg,
        links: { demo: "#" },
    },
    {
        id: 4,
        category: "video",
        title: "Event Highlight Reel",
        description: "Compilation of key moments from a tech conference",
        img: EventHighlightImg,
        links: { demo: "#" },
    },
    {
        id: 5,
        category: "design",
        title: "Brand Identity",
        description: "Complete branding package for a fitness company",
        img: BrandIdentityImg,
        links: { demo: "#" },
    },
    {
        id: 6,
        category: "design",
        title: "UI/UX Design",
        description: "User interface design for a mobile banking application",
        img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
        links: { demo: "#" },
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("all");

    const filteredProjects =
        filter === "all"
            ? projectsData
            : projectsData.filter((project) => project.category === filter);

    return (
        <section id="projects" className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2 text-white">
                        My <span className="text-teal-400">Projects</span>
                    </h2>
                    <div className="flex justify-center gap-1 mt-2">
                        <span className="block w-8 h-1 bg-pink-400 rounded"></span>
                        <span className="block w-12 h-1 bg-teal-400 rounded"></span>
                        <span className="block w-8 h-1 bg-pink-400 rounded"></span>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {["all", "software", "video", "design"].map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === cat
                                ? "bg-teal-400 text-white"
                                : "bg-gray-800 text-gray-300 hover:bg-teal-500 hover:text-white"
                                }`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Projects Grid - centered */}
                <div className="flex justify-center">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center text-white p-4">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm mb-4">{project.description}</p>
                                    <div className="flex gap-4 text-lg">
                                        {project.links.demo &&
                                            (project.category === "video" ? (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    className="hover:text-teal-400"
                                                >
                                                    <FaPlay />
                                                </a>
                                            ) : project.category === "design" ? (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    className="hover:text-teal-400"
                                                >
                                                    <FaEye />
                                                </a>
                                            ) : (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    className="hover:text-teal-400"
                                                >
                                                    <FaLink />
                                                </a>
                                            ))}

                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                className="hover:text-teal-400"
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
