import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col md:flex-row justify-around items-center lg:h-[83vh] py-4">
        {/* Image */}
        <div className="w-full md:w-auto  ">
          <Image 
            width={350} 
            height={350} 
            src="/Images/IMG_1314.png" 
            alt="ma photo de profil"
            className="mx-auto md:mx-0 rounded-[20px] p-1  transition duration-500 hover:translate-x-5 w-[300px]  my-10 md:my-0"
          />
        </div>
        {/* Texte et boutons */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-justify ">
          <h1 className="font-bold text-gray-800 text-[40px] md:text-[40px] mt-8 md:mt-0">
            Hello,
            <span className="text-blue-300">I</span>
            <span className="text-blue-400">'</span>
            <span className="text-blue-500">m</span>
            <span className="text-blue-600 ml-4">N</span>
            <span className="text-blue-700">i</span>
            <span className="text-blue-800">k</span>
            <span className="text-blue-900">k</span>
            <span className="text-blue-950">i,</span>
          </h1>
          <h2 className="text-[30px]  md:text-[30px] text-gray-800 mb-6 md:mb-8 ">
            Software Developer based in Ivory Coast
          </h2>
          <p className="text-gray-600 mb-10">
            Welcome to my Portfolio! I am a software developer specializing in creating robust and scalable applications and websites, with a passion for solving complex problems through innovative solutions.
          </p>
          {/* Boutons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6 md:mt-10">
            <div className="w-40 md:w-52 hover:text-white border-slate-800 text-center px-6 py-3 md:px-10 md:py-4 rounded-full font-bold hover:bg-gradient-to-tl hover:from-sky-500 hover:to-black border  transition duration-700  text-gray-600 shadow-md">
              <a href="/contact">Contact Me</a>
            </div>
            <div className="w-40 md:w-52 hover:text-white border-slate-800 text-center px-6 py-3 md:px-10 md:py-4 rounded-full font-bold hover:bg-gradient-to-tl hover:from-sky-500 hover:to-black border  transition duration-700  text-gray-600 shadow-md">
              <a href="/projects">View Projects</a>
            </div>
          </div>
        </div>

        
      </main>
      <Footer />
    </div>
  );
}
