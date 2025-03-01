"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<"EN" | "ID">("EN");

  return (
    <ParallaxProvider>
      <div
        className={`${
          darkMode
            ? "dark bg-gray-900 text-white"
            : "bg-gradient-to-br from-yellow-50 via-orange-200 to-red-400 text-gray-900"
        } min-h-screen`}
      >
        {/* Header */}
        <header className="p-6 flex justify-between items-center bg-gray-100 dark:bg-gray-800 shadow-md fixed top-0 w-full z-50 h-16">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setLanguage(language === "EN" ? "ID" : "EN")}
              className="flex items-center"
            >
              <Globe className="mr-2" /> {language}
            </Button>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            {darkMode ? (
              <Moon className="text-yellow-400" size={20} />
            ) : (
              <Sun className="text-yellow-500" size={20} />
            )}
          </div>
        </header>

        {/* Fixed Sun at the Very Top - Deep Background */}
        {!darkMode && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300 rounded-full shadow-xl blur-3xl -z-50" />
        )}

        {/* Parallax Clouds - Floating in the Background */}
        {!darkMode && (
          <>
            <Parallax speed={-10}>
              <div className="absolute top-20 left-[10%] w-[300px] h-[100px] bg-white opacity-70 rounded-full blur-xl -z-40" />
            </Parallax>
            <Parallax speed={-15}>
              <div className="absolute top-40 right-[15%] w-[350px] h-[120px] bg-white opacity-60 rounded-full blur-xl -z-40" />
            </Parallax>
            <Parallax speed={-20}>
              <div className="absolute top-60 left-[30%] w-[400px] h-[150px] bg-white opacity-50 rounded-full blur-2xl -z-40" />
            </Parallax>
          </>
        )}

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden p-10 text-center pt-20">
          {/* Parallax Stars in Dark Mode */}
          {darkMode && (
            <Parallax speed={-50}>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-3 h-3 bg-white rounded-full opacity-80 animate-pulse absolute top-10 left-20" />
                <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-70 absolute top-40 left-1/4" />
                <div className="w-4 h-4 bg-blue-300 rounded-full opacity-80 absolute top-1/2 right-1/3" />
                <div className="w-3 h-3 bg-pink-500 rounded-full opacity-75 absolute bottom-10 right-20" />
              </div>
            </Parallax>
          )}

          {/* Text Animation */}
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white z-10"
          >
            {language === "EN"
              ? "Hello, I'm [Your Name]"
              : "Halo, Saya [Your Name]"}
          </motion.h2>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-2xl mt-3 text-lg md:text-xl text-gray-800 dark:text-gray-300 z-10"
          >
            {language === "EN"
              ? "I craft immersive web experiences that blend creativity and technology."
              : "Saya menciptakan pengalaman web imersif yang menggabungkan kreativitas dan teknologi."}
          </motion.p>

          {/* Floating Image Effect */}
          <motion.img
            src="/kirua.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-gray-500 shadow-lg mt-6 z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          />

          {/* Call to Action */}
          <motion.a
            href="/cv.pdf"
            download
            className="mt-6 px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 z-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Download CV
          </motion.a>
        </section>

        {/* ✅ Experience Section */}
        <section className="p-10">
          <h2 className="text-2xl font-bold text-center mb-6">Experience</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
            <li>Software Engineer at [Company] (2022 - Present)</li>
            <li>Frontend Developer Intern at [Company] (2021 - 2022)</li>
          </ul>
        </section>

        {/* ✅ Awards Section */}
        <section className="p-10">
          <h2 className="text-2xl font-bold text-center mb-6">Awards</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
            <li>Best Developer Award - XYZ Hackathon 2023</li>
            <li>Top 10 Finalist - ABC Coding Challenge</li>
          </ul>
        </section>

        {/* ✅ Other Activities Section */}
        <section className="p-10">
          <h2 className="text-2xl font-bold text-center mb-6">
            Other Activities
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
            <li>Open Source Contributor - React.js</li>
            <li>Mentor at Local Coding Bootcamp</li>
          </ul>
        </section>

        {/* ✅ Projects Section */}
        <section className="p-10">
          <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Project 1", description: "A cool project", link: "#" },
              {
                name: "Project 2",
                description: "Another amazing project",
                link: "#",
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* ✅ Skills Section */}
        <section className="p-10 text-center">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "TailwindCSS",
              "TypeScript",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg text-lg font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ✅ Contact Section */}
        <section className="p-10 text-center">
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            📧 Email:{" "}
            <a href="mailto:your.email@example.com" className="text-blue-500">
              your.email@example.com
            </a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-blue-500"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            🐙 GitHub:{" "}
            <a href="https://github.com/yourusername" className="text-blue-500">
              github.com/yourusername
            </a>
          </p>
        </section>

        {/* ✅ Footer */}
        <footer className="p-6 text-center bg-gray-100 dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} [Your Name] - All Rights Reserved.
          </p>
        </footer>
      </div>
    </ParallaxProvider>
  );
};

export default Portfolio;
