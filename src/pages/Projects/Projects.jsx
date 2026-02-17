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
        links: { demo: "https://amazon-clone-teal-one.vercel.app", github: "https://github.com/Kaleb-07/Amazon_clone.git" },
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
        links: { demo: "https://netfilx-clone-xi.vercel.app", github: "https://github.com/Kaleb-07/NetfilxClone.git" },
    },
    {
        id: 8,
        category: "Deployed",
        title: "User Management System",
        description: "Full-stack CRUD application demonstrating Create, Read, Update, Delete operations for user data (name, address, company) with seamless frontend-backend API integration",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        links: { github: "https://github.com/Kaleb-07/User--Managment.git" },
    },
    {
        id: 4,
        category: "Ongoing",
        title: "BookPad",
        description: "A digital library and marketplace for purchasing, reading, and managing books online.",
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
        links: { demo: "#" },
    },
    {
        id: 7,
        category: "Ongoing",
        title: "Agriculture Ecosystem",
        description: "A unified digital platform connecting Ethiopian farmers to markets, advice, rental tools, and buyers.",
        img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
        links: { demo: "#" },
    },
    {
        id: 5,
        category: "Design",
        title: "FitLife Brand Identity",
        description: "Modern fitness brand identity with logo design, color palette, typography system, and marketing materials.",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        links: { demo: "#" },
    },
    {
        id: 6,
        category: "Design",
        title: "SecureBank Mobile App",
        description: "Mobile banking app UI/UX redesign focusing on accessibility, intuitive navigation, and modern aesthetics.",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        links: { demo: "#" },
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const [comingSoonId, setComingSoonId] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const filteredProjects =
        filter === "all"
            ? projectsData
            : projectsData.filter((p) => p.category === filter);

    // Limit to 6 projects initially
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    const handleDemoClick = (e, id, link) => {
        if (link === "#") {
            e.preventDefault();
            setComingSoonId(id);
            setTimeout(() => setComingSoonId(null), 2000); // Reset after 2 seconds
        }
    };

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
                    {displayedProjects.map((project) => (
                        <div className="project-item" key={project.id}>
                            <div className="project-img">
                                <img src={project.img} alt={project.title} />
                            </div>

                            <div className="project-overlay">
                                {comingSoonId === project.id ? (
                                    <div className="coming-soon-msg text-white font-bold text-xl animate-bounce">
                                        Coming Soon...
                                    </div>
                                ) : (
                                    <div className="project-info text-gray-900 dark:text-white">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>

                                        <div className="project-links">
                                            {project.links.demo && (
                                                project.category === "Design" ? (
                                                    <a
                                                        href={project.links.demo}
                                                        target={project.links.demo === "#" ? "_self" : "_blank"}
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => handleDemoClick(e, project.id, project.links.demo)}
                                                    >
                                                        <FaEye />
                                                    </a>
                                                ) : (
                                                    <a
                                                        href={project.links.demo}
                                                        target={project.links.demo === "#" ? "_self" : "_blank"}
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => handleDemoClick(e, project.id, project.links.demo)}
                                                    >
                                                        <FaLink />
                                                    </a>
                                                )
                                            )}

                                            {project.links.github && (
                                                <a href={project.links.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                {filteredProjects.length > 6 && (
                    <div className="view-more-container">
                        <button
                            className="view-more-btn"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less" : "View More"}
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Projects;
