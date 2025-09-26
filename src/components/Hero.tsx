// import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

// const Hero = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const particlesRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (particlesRef.current) {
//       const particles = particlesRef.current.children;
//       gsap.fromTo(
//         particles,
//         { opacity: 0, scale: 0 },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 2,
//           stagger: 0.1,
//           ease: 'power2.out',
//           repeat: -1,
//           yoyo: true,
//         }
//       );
//     }
//   }, []);

//   return (
//     <section id="platform" className="relative min-h-screen bg-black overflow-hidden overflow-y-hidden">
     
//       <div className="container mx-auto px-6 pt-20 pb-16 relative z-10  ">
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-black/50">
//           <motion.div
//             className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//            <div className='flex flex-col items-center justify-center z-20'>
//               <motion.h1
//               className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight  flex items-center  justify-center"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                   The Internet-Scale{' '}  
//                   <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent ">
//                     Blockchain
//                   </span>
                
//               </motion.h1>
                
//                 <motion.p
//                   className="flex items-center justify-center text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                 >
//                   Empowering the Future of Decentralized Applications with 
//                   unmatched scalability, security, and sustainability
//                 </motion.p>
//            </div>

//             <div className=' flex mt-[-150px] items-center justify-between z-[-10] rounded-2xl'>
//               <div className='z-[-10] ml-[-100px]' >
//                 <img 
//                   src="https://cdn.multiversx.com/webflow/Hero%20section%20background.webp" alt="left img" 
//                   className='w-[300px] h-[300px] rotateY-180'
//                 />
//                 <img 
//                   src="https://cdn.multiversx.com/webflow/Home-Hero-Bg-03.webp" alt="left img"
//                   className='w-[500px] h-[500px] ' 
//                 />
//               </div>
//               <div className='mr-[-100px] mt-[-100px] z-[-10]'>
//                 <img 
//                  src="https://cdn.multiversx.com/webflow/Glass%20shield%404-1080x1080%201.webp" alt=" right img"
//                  className='w-[700px] h-[600px] mr-[-20px]' 
//                 />
//               </div>
//             </div>
//           </motion.div>
         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      gsap.fromTo(
        particles,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          stagger: 0.1,
          ease: 'power2.out',
          repeat: -1,
          yoyo: true,
        }
      );
    }
  }, []);

  return (
    <section
      id="platform"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Abstract glowing shapes */}
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/30 to-transparent rounded-full blur-3xl z-0"></div>
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-radial from-purple-600/40 to-transparent rounded-full blur-3xl z-0"></div>
      {/* End Abstract */}

      <div className="relative z-10 w-full max-w-4xl mx-auto py-24 flex flex-col items-center">
        <motion.h1
          className="text-white font-bold text-5xl md:text-7xl text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Internet-Scale{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
            Blockchain
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-300 text-xl md:text-2xl text-center max-w-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Blockchain is a distributed blockchain network for next-gen applications. Decentralized via 3,000+ nodes, scalable through sharding, fast, secure & green.
        </motion.p>
        
      </div>

      {/* Abstract image overlays if desired */}
      <img
        src="https://cdn.multiversx.com/webflow/Hero%20section%20background.webp"
        alt="left abstract"
        className="absolute left-8 bottom-8 w-[200px] lg:w-[350px] pointer-events-none select-none opacity-70"
      />
      <img
        src="https://cdn.multiversx.com/webflow/Glass%20shield%404-1080x1080%201.webp"
        alt="right abstract"
        className="absolute right-4 top-32 w-[300px] lg:w-[400px] pointer-events-none select-none opacity-70"
      />
    </section>
  );
};

export default Hero;
