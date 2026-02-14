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
        category: "Deployed",
        title: "Amazon-Cloning",
        description: "Full-stack web application with user authentication and payment integration",
        img: EcommerceImg,
        links: { demo: "https://amazon-cloning-carli.netlify.app/", github: "https://github.com/Kaleb-07/Amazon_clone.git" },
    },
    {
        id: 2,
        category: "Deployed",
        title: "Travel-Landing",
        description: "Ready for your next adventure? Explore destinations, book trips, and track your journey",
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
        links: { demo: "https://travel-landing-carli.netlify.app/", github: "https://github.com/Kaleb-07/Travel-Landing.git" },
    },
    {
        id: 3,
        category: "Deployed",
        title: "Netflix-Cloning",
        description: "Mobile-first web application for Entertainment and watch movies",
        img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
        links: { demo: "https://comforting-sunburst-0c3146.netlify.app/", github: "https://github.com/Kaleb-07/NetfilxClone.git" },
    },
    {
        id: 4,
        category: "Ongoing",
        title: "BookPad",
        description: "To buy the book with including reading place which is called degital library",
        img: EventHighlightImg,
        links: { demo: "#" },
    },
    {
        id: 7,
        category: "Ongoing",
        title: "Agriclture-Ecosystem",
        description: "To buy the book with including reading place which is called degital library",
        img: EventHighlightImg,
        links: { demo: "#" },
    },
    {
        id: 5,
        category: "Design",
        title: "Brand Identity",
        description: "Complete branding package for a fitness company",
        img: BrandIdentityImg,
        links: { demo: "#" },
    },
    {
        id: 6,
        category: "Design",
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
                    {["all", "Deployed", "Ongoing", "Design"].map((cat) => (
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
                                            project.category === "Design" ? (
                                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer"><FaEye /></a>
                                            ) : (
                                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer"><FaLink /></a>
                                            )
                                        )}

                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
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
