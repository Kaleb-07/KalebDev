import { useState } from "react";
import { FaLink, FaGithub, FaPlay, FaEye } from "react-icons/fa";
import "./Projects.css";

import EcommerceImg from "../../assets/MyProject/E-commerce.png";
import TaskManagmentImg from "../../assets/MyProject/TaskManagment.png";
import CommercialAdvertisementImg from "../../assets/MyProject/CommercialAdvertisement.png";
import EventHighlightImg from "../../assets/MyProject/EventHighlight.png";
import BrandIdentityImg from "../../assets/MyProject/BrandIdentity.png";

const projectsData = [
    {
        id: 1,
        category: "software",
        title: "Amazon-Cloning",
        description: "Full-stack web application with user authentication and payment integration",
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
        img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
        links: { demo: "#" },
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("all");

    const filteredProjects =
        filter === "all"
            ? projectsData
            : projectsData.filter((p) => p.category === filter);

    return (
        <section id="projects" className="projects-section bg-white dark:bg-gray-900">
            <div className="projects-container">

                {/* Header */}
                <div className="projects-header text-gray-900 dark:text-white">
                    <h2>
                        My <span className="text-teal-400">Projects</span>
                    </h2>
                    <div className="title-underline">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Filters */}
                <div className="project-filters">
                    {["all", "software", "video", "design"].map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? "active bg-teal-500 text-white dark:bg-teal-400" : ""} dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-teal-500`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div className="project-item" key={project.id}>
                            <div className="project-img">
                                <img src={project.img} alt={project.title} />
                            </div>

                            <div className="project-overlay">
                                <div className="project-info text-gray-900 dark:text-white">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>

                                    <div className="project-links">
                                        {project.links.demo && (
                                            project.category === "video" ? (
                                                <a href={project.links.demo}><FaPlay /></a>
                                            ) : project.category === "design" ? (
                                                <a href={project.links.demo}><FaEye /></a>
                                            ) : (
                                                <a href={project.links.demo}><FaLink /></a>
                                            )
                                        )}

                                        {project.links.github && (
                                            <a href={project.links.github}><FaGithub /></a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
