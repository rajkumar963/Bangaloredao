

const galleryItems = [
  {
    type: "stat",
    content: {
      number: "2,6k",
      description: "xDay 2023 attendees",
      bgColor: "bg-purple-300",
      textColor: "text-black",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      alt: "Conference presentation",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
      alt: "Developers at conference",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop",
      alt: "Networking session",
    },
  },
  {
    type: "stat",
    content: {
      number: "39k",
      description: "On Discord and Telegram",
      bgColor: "bg-cyan-200",
      textColor: "text-black",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop",
      alt: "Conference hall",
    },
  },
  {
    type: "stat",
    content: {
      number: "1k+",
      description: "participants in the xDay 2023 hackathon",
      bgColor: "bg-yellow-200",
      textColor: "text-black",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      alt: "Hackathon participants",
    },
  },
];

const secondRowItems = [
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      alt: "Conference stage",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
      alt: "Developer team",
    },
  },
  {
    type: "stat",
    content: {
      number: "1k+",
      description: "participants in the xDay 2023 hackathon",
      bgColor: "bg-yellow-200",
      textColor: "text-black",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
      alt: "Conference attendees",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop",
      alt: "Tech presentation",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop",
      alt: "Networking area",
    },
  },
  {
    type: "stat",
    content: {
      number: "2,6k",
      description: "xDay 2023 attendees",
      bgColor: "bg-purple-300",
      textColor: "text-black",
    },
  },
  {
    type: "image",
    content: {
      src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      alt: "Exhibition area",
    },
  },
];

function GalleryItem({ item }) {
  if (item.type === "stat") {
    return (
      <div className={`${item.content.bgColor} ${item.content.textColor} p-6 rounded-3xl min-w-[280px] h-[200px] flex flex-col justify-center border-0 shadow-lg`}>
        <div className="text-4xl md:text-6xl font-bold mb-2">{item.content.number}</div>
        <div className="text-sm md:text-lg font-medium leading-tight">{item.content.description}</div>
      </div>
    );
  }

  return (
    <div className="min-w-[300px] h-[200px] rounded-3xl overflow-hidden shadow-lg">
      <img 
        src={item.content.src} 
        alt={item.content.alt} 
        className="w-full h-full object-cover" 
        onError={(e) => {
          e.target.src = `data:image/svg+xml,${encodeURIComponent(`
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="300" height="200" fill="#333"/>
              <text x="150" y="100" text-anchor="middle" fill="white" font-size="16">${item.content.alt}</text>
            </svg>
          `)}`;
        }}
      />
    </div>
  );
}

export default function ScrollingGallery() {
  // Duplicate items for seamless scrolling
  const duplicatedFirstRow = [...galleryItems, ...galleryItems, ...galleryItems];
  const duplicatedSecondRow = [...secondRowItems, ...secondRowItems, ...secondRowItems];

  return (
    <>
      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right-to-left {
          animation: scroll-right-to-left 25s linear infinite;
        }

        .animate-scroll-left-to-right {
          animation: scroll-left-to-right 25s linear infinite;
        }
      `}</style>

      <section className="py-20 bg-black overflow-hidden relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="space-y-8">
          {/* First row - scrolls right to left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll-right-to-left">
              {duplicatedFirstRow.map((item, index) => (
                <GalleryItem key={`row1-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Second row - scrolls left to right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll-left-to-right">
              {duplicatedSecondRow.map((item, index) => (
                <GalleryItem key={`row2-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}