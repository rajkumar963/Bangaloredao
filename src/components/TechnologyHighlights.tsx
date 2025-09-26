import { Grid3X3, Share2, CircleDot, Star } from 'lucide-react';

const MultiverseXCards = () => {
  const cards = [
    {
      icon: <Grid3X3 className="w-8 h-8" />,
      title: "Projects",
      description: "A new dimension of utility built and launched on MultiversX.",
      backgroundText: "24",
      highlighted: false
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Partners",
      description: "Connected with leading platforms and protocols.",
      backgroundText: "10",
      highlighted: false
    },
    {
      icon: <CircleDot className="w-8 h-8" />,
      title: "Validators",
      description: "Secure the network and earn rewards.",
      backgroundText: "20",
      highlighted: false
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Service Providers",
      description: "Link your business with the MultiversX network.",
      backgroundText: "25",
      highlighted: false
    }
  ];

  return (
    <section  className="pt-10 bg-black">
      <div className="min-h-screen bg-black p-4 md:p-8 items-center justify-center ">
        <div className='flex items-center justify-center text-gray-100 pb-[60px]'>
          <h2 className='text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold'>Why With Us?</h2>
        </div>
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group relative  bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-300  cursor-pointer overflow-hidden ${
                  card.highlighted 
                    ? 'border-2 border-teal-400/50 hover:border-teal-500' 
                    : 'border border-gray-700/10 hover:border-teal-400/40'
                }`}
              >
                {/* Background Text */}
                <div className="absolute inset-0 flex  justify-center pointer-events-none">
                  <span className={`text-[200px] md:text-[300px] lg:text-[400px] xl:text-[300px] font-bold select-none transition-opacity duration-300 ${
                    card.highlighted 
                      ? 'text-gray-500/20' 
                      : 'text-gray-500/20 '
                  }`}
                  style={{
                    writingMode: 'horizontal-tb',
                    transform: 'rotate(0deg)',
                    
                  }}>
                    {card.backgroundText}
                  </span>
                </div>
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-900/40 rounded-2xl"></div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  card.highlighted 
                    ? 'bg-gradient-to-br from-teal-400/10 via-transparent to-teal-600/10'
                    : 'bg-gradient-to-br from-teal-400/5 via-transparent to-gray-600/5'
                }`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 md:mb-8">
                    <div className={`text-teal-400  ${
                      card.highlighted ? 'text-teal-300' : ''
                    }`}>
                      {card.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mb-6 md:mb-8">
                    <h3 className={`text-xl md:text-2xl font-semibold mb-3 md:mb-4 transition-colors duration-300 ${
                      card.highlighted 
                        ? 'text-white group-hover:text-teal-100' 
                        : 'text-gray-100 group-hover:text-white'
                    }`}>
                      {card.title}
                    </h3>
                    
                    <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                      card.highlighted 
                        ? 'text-gray-300 group-hover:text-gray-200' 
                        : 'text-gray-400 group-hover:text-gray-300'
                    }`}>
                      {card.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-teal-400/20 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiverseXCards;