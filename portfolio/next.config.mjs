/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,  // Désactive les optimisations d'images pour un export statique
      },  // Ajoute cette ligne pour permettre l'exportation statique
  };
  
  export default nextConfig;
  