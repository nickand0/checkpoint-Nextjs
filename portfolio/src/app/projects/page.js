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
            title: 'Chat Application',
            description: 'Application de chat en temps réel avec des fonctionnalités de messagerie privée et de groupe. Utilise WebSocket pour la messagerie instantanée et une interface utilisateur conviviale.',
            technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
            images: '/images/chatApp.jpg',
            link: 'https://chatapp088.netlify.app/',
        },
        {
            title: 'Blog Application',
            description: "Une plateforme de blog moderne permettant de créer, modifier et commenter des articles. Inclut la mise en forme du texte, le balisage, et l'authentification des utilisateurs.",
            technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            images: '/images/blog.jpg',
            link: 'https://example.com',
        },
        {
            title: 'Portfolio Website ',
            description: 'Mon site portfolio personnel qui présente mes projets, compétences et informations de contact. Construit avec Next.js pour des performances optimisées et un référencement amélioré.',
            technologies: ['Next.js', 'Tailwind CSS'],
            images: '/images/portfolionext.jpg',
            link: 'https://portfolioando.netlify.app/',
        },
        {
            title: 'E-commerce Website',
            description: "Boutique en ligne avec liste de produits, panier, passage en caisse et intégration de paiement. Dispose d'un tableau de bord administrateur pour la gestion des produits et des commandes.",
            technologies: ['React', 'Node.js', 'Express', 'Stripe API', 'MongoDB'],
            images: '/images/e-commerce.jpg',
            link: 'https://e-commerce088.netlify.app/',
        },
        {
            title: 'calculatrice',
            description: 'Une calculatrice en ligne avec une interface simple et intuitive, construite en utilisant du HTML, JavaScript et Tailwind CSS.',
            technologies: ['Html','Javascript','tailwind'],
            images: '/images/calculate.jpg',
            link: 'https://nickand0.github.io/Calculate/',
        },
        {
            title: 'Devinette',
            description: 'Jeu en ligne interactif de devinettes, construit en HTML, JavaScript et Tailwind CSS.',
            technologies: ['Html','Javascript','tailwind'],
            images: '/images/devinette.jpg',
            link: 'https://nickand0.github.io/Devinette/',
        },
        {
            title: 'Citation',
            description: 'Générateur de citations aléatoires avec une interface minimaliste et responsive, créé avec HTML, JavaScript et Tailwind CSS.',
            technologies: ['Html','Javascript','tailwind'],
            images: '/images/citation.jpg',
            link: 'https://nickand0.github.io/Citation/',
        },
        {
            title: 'Changeur de couleur',
            description: 'Application de changement de couleur interactive pour les éléments de la page, créée avec HTML, JavaScript et CSS.',
            technologies: ['Html','Javascript','css'],
            images: '/images/change-color.jpg',
            link: 'https://nickand0.github.io/checkpoint-DOM2/',
        },
        {
            title: 'petit Panier',
            description: "Mini-application de gestion de panier, permettant d'ajouter ou de supprimer des articles. Construite en HTML, JavaScript et CSS.",
            technologies: ['Html','Javascript','css'],
            images: '/images/Panier.jpg',
            link: 'https://nickand0.github.io/checkpoint-DOM-1/',
        },
        {
            title: 'Portfolio avec tailwind',
            description: 'Site portfolio personnel utilisant Tailwind CSS pour une mise en page moderne et responsive.',
            technologies: ['Html','tailwind'],
            images: '/images/portfolio-tailwind.jpg',
            link: 'https://nickand0.github.io/projet-portfolio-Tailwind/',
        },
        {
            title: 'vitrine chaussure',
            description: 'Une page vitrine pour des chaussures, construite avec Bootstrap pour une mise en page fluide et responsive.',
            technologies: ['Html','css','bootstrap'],
            images: '/images/frontend-shoes.jpg',
            link: 'https://nickand0.github.io/projet-bootstrap2/',
        },
        {
            title: 'Portfolio',
            description: 'Portfolio simple et épuré présentant mes projets et compétences, construit en HTML et CSS.',
            technologies: ['Html','css'],
            images: '/images/portfoliocss.jpg',
            link: 'https://nickand0.github.io/Portfolio/'
        },
        {
            title: 'Agence de voyage',
            description: 'Site vitrine pour une agence de voyage, avec une mise en page attractive et responsive, construit avec Bootstrap et CSS.',
            technologies: ['Html','bootstrap','css'],
            images: '/images/agence-de-voyage.jpg',
            link: 'https://nickand0.github.io/projet-bootstrap1/'
        },
        {
            title: 'video arrière plan',
            description: "Page web mettant en valeur une vidéo d'arrière-plan avec un design minimaliste, construite en HTML et CSS.",
            technologies: ['Html','css'],
            images: '/images/arriere-plan-video.jpg',
            link: 'https://nickand0.github.io/challenge_ajout_video/'
        },
        {
            title: 'Card avec OOP',
            description: 'Application de gestion des articles, construite en JavaScript orienté objet (OOP) avec une interface stylisée en Tailwind CSS.',
            technologies: ['javascript','html','tailwind'],
            images: '/images/oop.jpg',
            link: 'https://github.com/nickand0/checkpoint-OOP/'
        },
        {
            title: 'profil avec react state',
            description: "Application React affichant un profil d'utilisateur avec la gestion d'état à travers React.",
            technologies: ['react','javascript','html','css'],
            images: '/images/react-state.jpg',
            link: 'https://github.com/nickand0/checkpoint-react-states/tree/master/stateproject'
        },
        {
            title: 'harman kardon avec react',
            description: "Vitrine interactive d'un produit Harman Kardon, construite en React pour une gestion dynamique des éléments.",
            technologies: ['react','javascript','html','css'],
            images: '/images/vitrine-react-harman.jpg',
            link: 'https://github.com/nickand0/checkpoint-1-React'
        },
        {
            title: 'fifa players card',
            description: 'Application de présentation de joueurs FIFA sous forme de cartes interactives, développée avec React.',
            technologies: ['react','javascript','html','css'],
            images: '/images/playerCard.jpg',
            link: 'https://github.com/nickand0/checkpoint-React2-Player-Card'
        },
        {
            title: 'Movie avec react',
            description: 'Application de présentation de films, avec gestion des routes et des états sous React.',
            technologies: ['react','javascript','html','css'],
            images: '/images/movie.jpg',
            link: 'https://github.com/nickand0/checkpoint-hook-react-router'
        },
        {
            title: 'tache todo avec redux',
            description: 'Application Todo utilisant Redux pour la gestion des états, offrant une organisation claire des tâches.',
            technologies: ['react','javascript','html','css'],
            images: '/images/todo-redux.jpg',
            link: 'https://github.com/nickand0/checkpoint-redux'
        },
        {
            title: 'vitrine gomycode avec express',
            description: 'Application vitrine pour Gomycode, développée avec EJS et Express, pour une gestion dynamique des vues et des contenus.',
            technologies: ['Ejs','javascript','css'],
            images: '/images/express-gomycode.jpg',
            link: 'https://github.com/nickand0/chekpoint-express.js/tree/master/webapp'
        },
        {
            title: 'API list',
            description: "Application affichant une liste d'utilisateurs obtenue via une API, avec une mise en page responsive en HTML et CSS.",
            technologies: ['Html','javascript','css'],
            images: '/images/list-user-api-react.jpg',
            link: 'https://github.com/nickand0/checkpoint-API'
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
                <div className="relative w-full max-w-6xl bg-white px-4 md:px-8 overflow-hidden">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-20">
                        My <span className="text-blue-300">Projects</span>
                    </h1>

                    <div className="relative flex justify-center  h-[80vh] md:h-[50vh] ">
                        <div className="relative flex justify-center w-full max-w-6xl px-4 md:px-8  md:py-0 h-[80vh] md:h-[50vh] overflow-x-hidden">

                            {/* Chevron Left Button */}
                            <button
                                onClick={scrollLeft}
                                className="absolute top-[47%]  left-6 md:left-20 transform  bg-gray-800 text-white p-2 rounded-full hover:bg-blue-600 transition-all z-20 "
                            >
                                <FaChevronLeft size={20}  />
                            </button>

                            {/* Projects Carousel */}
                            <div className="flex justify-center w-[80vw] md:w-full top-1/2 items-center  absolute">
                                {projectData.map((project, index) => {
                                    const isActive = index === currentIndex;
                                    return (
                                        <div
                                            key={index}
                                            className={`absolute w-full md:w-2/3 transition-all duration-1000 ease-in-out transform ${
                                                isActive
                                                    ? 'translate-x-0 opacity-100 scale-100 z-1'
                                                    : index < currentIndex
                                                    ? '-translate-x-full opacity-0 scale-90 z-0'
                                                    : 'translate-x-full opacity-0 scale-90 z-0'
                                                }`}
                                        >
                                            <div className="bg-white p-4 md:p-6 rounded-lg  flex flex-col md:flex-row justify-around items-center gap-4 md:gap-10 border md:h-[400px] shadow-lg">
                                                {/* Project Image */}
                                                <div className="mb-4">
                                                    <Image
                                                        src={project.images}
                                                        alt={project.title}
                                                        width={350}
                                                        height={250}
                                                        className="rounded-md object-cover"
                                                    />
                                                </div>

                                                <div className="w-full md:w-1/2 p-4 md:p-6 bg-slate-50 rounded-md md:h-[380px] md:overflow-y-auto">
                                                    {/* Project Title */}
                                                    <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-800">
                                                        {project.title}
                                                    </h2>
                                                    {/* Project Description */}
                                                    <p className="  text-[14px]  text-[#999] mb-4">
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
                                className="absolute top-1/2 right-6 md:right-20  transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-blue-600 transition-all z-2"
                            >
                                <FaChevronRight size={20}  />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
