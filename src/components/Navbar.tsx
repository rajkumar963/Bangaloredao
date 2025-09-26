import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#platform' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <motion.nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 text-white ${
        scrolled 
          ? 'bg-white/15 backdrop-blur-sm shadow-lg border border-gray-200/50' 
          : 'bg-white/10 backdrop-blur-sm border border-white/20'
      } rounded-2xl`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className='text-xl font-bold transition-colors duration-300'>
              BLR DAO
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className='flex items-center space-x-2 font-medium transition-all '
                >
                  <span>{item.name}</span>
                </a>
                
                {/* Hover indicator */}
                <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full`} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-xl transition-colors duration-300 `}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="pt-6 pb-2 border-t border-gray-200/20 mt-4">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`block py-2 font-medium transition-colors duration-300`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;