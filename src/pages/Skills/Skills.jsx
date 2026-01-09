export default function Skills() {
    const skillCategories = [
        {
            category: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
        },
        {
            category: "Tools & DevOps",
            skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel"],
        },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-slate-900 transition-colors"
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
                        <h3 className="text-xl font-bold mb-6 text-purple-600 dark:text-purple-400">
                            {cat.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-purple-500/20 dark:bg-purple-500/10 border border-purple-500/30 dark:border-purple-400/50 rounded-lg text-sm text-gray-800 dark:text-gray-200 transition-all hover:bg-purple-500/30 dark:hover:bg-purple-400/20 hover:scale-105"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
