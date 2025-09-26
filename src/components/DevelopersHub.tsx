import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDiscord, FaLinkedinIn, FaTelegramPlane, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const DevelopersHub = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.dev-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      }
    );
  }, []);

  const socials = [
    { icon: <FaDiscord />, link: "https://discord.com/invite/BLRDAO", color: "" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com/company/blrdao", color: "from-blue-500 to-cyan-500" },
    { icon: <FaTwitter />, link: "https://twitter.com/BLRDAO", color: "from-sky-400 to-blue-500" },
    { icon: <FaTelegramPlane />, link: "https://t.me/BLRDAO", color: "from-teal-400 to-cyan-500" },
  ];

  return (
    <>
      <section id="community" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div
          ref={sectionRef}
          className="container mx-auto px-6 md:px-12 max-w-5xl rounded-3xl bg-gray-950/60 backdrop-blur-md border border-gray-800 shadow-xl"
        >
          <motion.div
            className="rounded-3xl p-10 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Join Our Growing Community
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
              Be part of a thriving ecosystem with grants, hackathons, and continuous support.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {socials.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`dev-card group relative flex items-center justify-center w-20 h-20 rounded
                             bg-gradient-to-br  shadow-lg transform transition 
                             hover:scale-110 hover:shadow-2xl`}
                >
                  <div className="absolute inset-0 rounded bg-slate-100 flex items-center justify-center transition-colors duration-300">
                    {item.icon && (
                      <span className="text-black text-6xl">{item.icon}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-800 text-gray-400 py-6 text-center">
        <span className="text-xl">
          All Rights Reserved ©2025 - Bengalore DAO        
        </span>
      </footer>
    </>
  );
};

export default DevelopersHub;
