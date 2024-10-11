import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-500  p-5">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-center items-center gap-6 md:gap-28">
        <p className="mb-4 md:mb-0">© 2024 Mon Portfolio. Tous droits réservés.</p>
        
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/nickandoniaina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/nickandoniaina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://ci.linkedin.com/in/nikki-andriamahefa-7463b8193"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/nickand0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
