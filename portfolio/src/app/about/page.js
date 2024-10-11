"use client"; // Add this if you're using Next.js 13's app directory
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importer les icônes de chevron

export default function About() {
  // États pour contrôler l'ouverture des sections
  const [openSections, setOpenSections] = useState({
    frontEnd: false,
    backEnd: false,
    fullStack: false,
    optimization: false,
    consulting: false
  });

  // Fonction pour gérer l'ouverture et la fermeture des sections
  const toggleSection = (section) => {
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className=" md:h-[83vh]  py-10 h-">
        <div className="container mx-auto px-4">
          {/* Services Section */}
          <section className="md:mt-32 mb-12 flex flex-col md:flex-row justify-around items-start mt-10 overflow-hidden">
            <div className='w-full md:w-1/3 mb-10 md:mb-0 text-center md:text-left'>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">My <span className='text-blue-300'>Skills</span></h2>
              <p className='text-gray-800'>
                Software Developer with expertise in building modern, scalable, and high-performance web applications. I enjoy solving complex problems with innovative and reliable solutions.
              </p>
              <div className='mt-10 w-40 md:w-52 border-black hover:text-white text-center px-6 py-3 md:px-10 md:py-4 rounded-full font-bold hover:bg-gradient-to-bl hover:from-sky-500 hover:to-black border hover:scale-[1.1] transition duration-700  text-gray-600 shadow-md mx-auto md:mx-0'>
                <a href='/contact'>Contact Me</a>
              </div>
            </div>
            
            <div className="w-full md:w-2/4 flex flex-col gap-4">
              {/* Section 1 */}
              <div
                className={`group bg-white px-6 py-2 rounded-lg shadow-md transition duration-500 ${openSections.frontEnd ? 'h-auto' : 'h-14'} overflow-hidden`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('frontEnd')}
                >
                  <h3 className="text-2xl font-semibold text-gray-500 group-hover:text-blue-400">Front-end Development</h3>
                  {openSections.frontEnd ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openSections.frontEnd && (
                  <p className="mt-2 text-gray-700">
                    Building modern and interactive user interfaces using frameworks such as React, Next.js.
                  </p>
                )}
              </div>

              {/* Section 2 */}
              <div
                className={`group bg-white px-6 py-2 rounded-lg shadow-md transition duration-500 ${openSections.backEnd ? 'h-auto' : 'h-14'} overflow-hidden`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('backEnd')}
                >
                  <h3 className="text-2xl font-semibold text-gray-500 group-hover:text-blue-400">Back-end Development</h3>
                  {openSections.backEnd ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openSections.backEnd && (
                  <p className="mt-2 text-gray-700">
                    Developing robust server-side applications and APIs using Node.js, Express. Designing relational and NoSQL databases.
                  </p>
                )}
              </div>

              {/* Section 3 */}
              <div
                className={`group bg-white px-6 py-2 rounded-lg shadow-md transition duration-500 ${openSections.fullStack ? 'h-auto' : 'h-14'} overflow-hidden`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('fullStack')}
                >
                  <h3 className="text-2xl font-semibold text-gray-500 group-hover:text-blue-400">Full Stack Applications</h3>
                  {openSections.fullStack ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openSections.fullStack && (
                  <p className="mt-2 text-gray-700">
                    Creating complete web applications by combining front-end and back-end technologies like MERN (MongoDB, Express, React, Node).
                  </p>
                )}
              </div>

              {/* Section 4 */}
              <div
                className={`group bg-white px-6 py-2 rounded-lg shadow-md transition duration-500 ${openSections.optimization ? 'h-auto' : 'h-14'} overflow-hidden`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('optimization')}
                >
                  <h3 className="text-2xl font-semibold text-gray-500 group-hover:text-blue-400">Performance Optimization</h3>
                  {openSections.optimization ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openSections.optimization && (
                  <p className="mt-2 text-gray-700">
                    Optimizing applications to improve performance, load times, and efficiency using advanced caching and resource management techniques.
                  </p>
                )}
              </div>

              {/* Section 5 */}
              <div
                className={`group bg-white px-6 py-2 rounded-lg shadow-md transition duration-500 ${openSections.consulting ? 'h-auto' : 'h-14'} overflow-hidden`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('consulting')}
                >
                  <h3 className="text-2xl font-semibold text-gray-500 group-hover:text-blue-400">Technical Consulting</h3>
                  {openSections.consulting ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openSections.consulting && (
                  <p className="mt-2 text-gray-700">
                    Providing consultation and guidance to implement technical architectures tailored to the specific needs of your project.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
