import React from "react";

// Import all your sections
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

// Landing Function
function Landing() {
    return (
        <main className="bg-background-color text-text-color font-sans">
            {/* Hero Section */}
            <section id="hero">
                <Hero />
            </section>

            {/* About Section */}
            <section id="about">
                <About />
            </section>

            {/* Skills Section */}
            <section id="skills">
                <Skills />
            </section>

            {/* Projects Section */}
            <section id="projects">
                <Projects />
            </section>

            {/* Testimonials Section */}
            <section id="testimonials">
                <Testimonials />
            </section>

            {/* Contact Section */}
            <section id="contact">
                <Contact />
            </section>
        </main>
    );
}
export default Landing;