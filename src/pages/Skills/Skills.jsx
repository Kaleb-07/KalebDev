import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaVuejs,
    FaLightbulb,
    FaUsers,
    FaFileAlt,
    FaTasks,
    FaCodeBranch
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiFirebase,
    SiVercel,
    SiGithubactions,
    SiFigma,
    SiNetlify,
    SiMysql
} from "react-icons/si";
import "../Projects/Projects.css";

export default function Skills() {
    const skillCategories = [
        {
            category: "Frontend & Mobile",
            skills: [
                { name: "React", icon: <FaReact className="text-blue-400" /> },
                { name: "React Native", icon: <FaReact className="text-blue-400" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
                { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
            ],
        },
        {
            category: "Backend & Database",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
                { name: "Express", icon: <SiExpress className="text-gray-600 dark:text-gray-400" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
            ],
        },
        {
            category: "Tools, DevOps & Design",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
                { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
                { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
                { name: "AWS", icon: <FaAws className="text-orange-400" /> },
                { name: "CI/CD", icon: <SiGithubactions className="text-gray-800 dark:text-white" /> },
                { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
                { name: "Netlify", icon: <SiNetlify className="text-teal-600" /> },
            ],
        },
        {
            category: "Soft Skills",
            skills: [
                { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-500" /> },
                { name: "Project Management", icon: <FaTasks className="text-indigo-500" /> },
                { name: "Documentation", icon: <FaFileAlt className="text-blue-500" /> },
                { name: "Team Collaboration", icon: <FaUsers className="text-green-500" /> },
                { name: "Code Review", icon: <FaCodeBranch className="text-purple-500" /> },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="px-6 py-10 bg-gray-50 dark:bg-slate-900 transition-colors"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                    Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-teal-500">Expertise</span>
                </h2>
                <div className="flex justify-center items-center gap-2 mt-2">
                    <div className="w-12 h-1 bg-pink-500 dark:bg-pink-400 rounded"></div>
                    <div className="w-24 h-1 bg-purple-600 dark:bg-purple-400 rounded"></div>
                    <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 rounded"></div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((cat, index) => (
                    <div
                        key={cat.category}
                        className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2 ${index === 3 ? 'md:col-start-2' : ''
                            }`}
                    >
                        <h3 className="text-xl font-bold mb-6 text-purple-600 dark:text-purple-400 border-b border-purple-500/20 pb-2">
                            {cat.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 dark:bg-purple-500/10 border border-purple-500/30 dark:border-purple-400/50 rounded-lg text-sm text-gray-800 dark:text-gray-200 transition-all hover:bg-purple-500/30 dark:hover:bg-purple-400/20 hover:scale-105"
                                >
                                    {skill.icon}
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
