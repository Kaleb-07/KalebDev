import profileImg from "../../assets/MyProject/profile.png";

function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center bg-[#f9f9f9] dark:bg-[#1e1e1e] transition-colors py-16"
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className="text-center mb-12">
                    {/* Gradient Title */}
                    <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent 
              bg-gradient-to-r from-pink-500 via-purple-600 to-teal-500">
                        About Me
                    </h2>

                    {/* Triple underline */}
                    <div className="flex justify-center items-center gap-2 mt-2">
                        <div className="w-12 h-1 bg-pink-500 dark:bg-pink-400 rounded"></div>
                        <div className="w-24 h-1 bg-purple-600 dark:bg-purple-400 rounded"></div>
                        <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 rounded"></div>
                    </div>
                </div>

                {/* About Content */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image */}
                    <div className="flex-1 flex justify-center">
                        <div className="w-72 h-96 md:w-80 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={profileImg}
                                alt="Kaleb"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                            Software Engineering Student & Creative Professional
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                            I'm a passionate software engineering student with a strong interest in creating innovative
                            digital solutions. My journey in technology began with a curiosity about how digital products
                            are built, which led me to pursue formal education in software engineering.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                            Alongside my technical skills, I've developed expertise in video editing and graphic design. This
                            unique combination allows me to approach problems with both analytical and creative perspectives.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                            My goal is to build software that not only functions flawlessly but also provides an exceptional
                            user experience through thoughtful design and intuitive interfaces.
                        </p>

                        {/* Personal Info */}
                        <div className="grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-300 mb-6">
                            <div className="flex gap-2">
                                <span className="font-semibold text-purple-600 dark:text-purple-400">Name:</span>
                                <p>Kaleb</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-semibold text-purple-600 dark:text-purple-400">Email:</span>
                                <p>mesafint007@gmail.com</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-semibold text-purple-600 dark:text-purple-400">Freelance:</span>
                                <p>Available</p>
                            </div>
                        </div>

                        {/* CV Button with top margin */}
                        <div className="mt-6">
                            <a
                                href="#"
                                className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold
                hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500
                hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

