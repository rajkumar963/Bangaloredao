import { Shield, Box, Users, Code, Activity } from 'lucide-react';

const KeyMetrics = () => {
  const features = [
    {
      icon: <Box className="w-12 h-12" />,
      title: "Native Assets",
      subtitle: "Safest User Experience",
      description: "Built-in asset management with enterprise-grade security protocols",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure Proof of Stake",
      subtitle: "Energy-efficient consensus mechanism with provable security guarantees",
      description: "",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "30% Developer Royalties",
      subtitle: "Developers get 30% of the gas fee every time someone calls their smart contract",
      description: "",
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Adaptive State Sharding",
      subtitle: "The first to present a viable solution where all three aspects of sharding are live",
      description: "",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "WASM-Based Virtual Machine",
      subtitle: "Write smart contracts in familiar languages, compile, and run them through the fastest VM in the space",
      description: "",
    },
    {
      icon: <Box className="w-12 h-12" />,
      title: "Resilient and Battle-Tested",
      subtitle: "",
      description: "",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="flex space-x-1">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-8 bg-gradient-to-b from-yellow-400 via-green-400 to-blue-400 rounded-full transform rotate-12"
                  style={{
                    transform: `rotate(${i * 6}deg) translateY(${Math.sin(i * 0.5) * 10}px)`,
                    opacity: 0.7 + (Math.sin(i * 0.3) * 0.3)
                  }}
                />
              ))}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent">
            Bengalore DAO
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {feature.subtitle && (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.subtitle}
                  </p>
                )}
                
                {feature.description && (
                  <p className="text-gray-400 text-xs mt-2">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Animated chain visualization */}
        <div className="flex justify-center items-center space-x-2 mt-16 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-16 bg-gradient-to-b from-yellow-400 via-green-400 to-blue-400 rounded-full transform origin-bottom"
              style={{
                transform: `rotate(${Math.sin(Date.now() * 0.001 + i * 0.5) * 15}deg) scaleY(${0.8 + Math.sin(Date.now() * 0.002 + i * 0.3) * 0.4})`,
                opacity: 0.6 + Math.sin(Date.now() * 0.003 + i * 0.2) * 0.4,
                animationDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default KeyMetrics;