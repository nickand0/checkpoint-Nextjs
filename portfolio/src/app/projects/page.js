"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projectData = [
        {
            title: 'Blog Application',
            description: 'A modern blog platform for creating, editing, and commenting on blog posts. Includes rich text formatting, tagging, and user authentication.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            image: '/images/blog.jpg',
            link: 'https://example.com',
        },
        {
            title: 'Chat Application',
            description: 'A real-time chat application with private and group messaging features. Built with WebSocket for live messaging and a user-friendly interface.',
            technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
            image: '/images/chatApp.jpg',
            link: 'https://example.com',
        },
        {
            title: 'Portfolio Website',
            description: 'My personal portfolio website showcasing my projects, skills, and contact information. Built with Next.js for fast performance and SEO optimization.',
            technologies: ['Next.js', 'Tailwind CSS'],
            image: '/images/portfolio.jpg',
            link: 'https://example.com',
        },
        {
            title: 'E-commerce Website',
            description: 'An online store with product listing, cart, checkout, and payment integration. Includes admin dashboard for managing products and orders.',
            technologies: ['React', 'Node.js', 'Express', 'Stripe API', 'MongoDB'],
            image: '/images/e-commerce.jpg',
            link: 'https://example.com',
        },
    ];

    const scrollLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectData.length - 1));
    };

    const scrollRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex < projectData.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center pt-[50px] md:h-[83vh] bg-white">
                <div className="relative w-full max-w-6xl bg-white px-4 md:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-20">
                        My <span className="text-blue-300">Projects</span>
                    </h1>

                    {/* Chevron Left Button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-blue-600 transition hover:transform hover:rotate-12"
                    >
                        <FaChevronLeft size={20} md={24} />
                    </button>

                    {/* Projects Carousel */}
                    <div className="flex justify-center items-center mb-20 md:mb-0">
                        {projectData.map((project, index) => {
                            const isActive = index === currentIndex;
                            return (
                                <div
                                    key={index}
                                    className={`${
                                        isActive
                                            ? 'transform scale-110 opacity-100 duration-500'
                                            : 'transform scale-75 opacity-50 duration-500'
                                        } transition-transform flex flex-col items-center w-full md:w-2/3 `}
                                    style={{ display: isActive ? 'block' : 'none' }} 
                                >
                                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-around items-center gap-4 md:gap-10 border md:h-[400px] ">
                                        {/* Project Image */}
                                        <div className="mb-4">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={350}
                                                height={250}
                                                className="rounded-md object-cover "
                                            />
                                        </div>

                                        <div className="w-full md:w-1/2 p-4 md:p-6 bg-slate-50 rounded-md md:h-[380px] md:overflow-y-auto">
                                            {/* Project Title */}
                                            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-800">
                                                {project.title}
                                            </h2>
                                            {/* Project Description */}
                                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                                {project.description}
                                            </p>
                                            {/* Project Technologies */}
                                            <div className="mb-3">
                                                <h3 className="font-semibold text-gray-900 mb-2">
                                                    Technologies:
                                                </h3>
                                                <ul className="list-disc list-inside">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <li className="text-sm text-gray-500" key={techIndex}>
                                                            {tech}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Project Link */}
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block text-blue-500 hover:underline mt-2"
                                                >
                                                    View Project
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Chevron Right Button */}
                    <button
                        onClick={scrollRight}
                        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-blue-600 transition hover:transform hover:rotate-[-12deg]"
                    >
                        <FaChevronRight size={20} md={24} />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
