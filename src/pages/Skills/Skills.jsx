import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaVuejs
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
    SiNetlify
} from "react-icons/si";

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
    ];

    return (
        <section
            id="skills"
            className="px-6 py-10 bg-gray-50 dark:bg-slate-900 transition-colors"
        >
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Skills & Expertise
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((cat) => (
                    <div
                        key={cat.category}
                        className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2"
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
