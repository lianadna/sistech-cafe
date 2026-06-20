import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffbfa] relative text-gray-800">
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        /* Menghentikan animasi saat user melakukan hover */
        .marquee-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <Navbar />

      <div className="absolute top-24 left-10 grid grid-cols-3 gap-2 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-pink-400"></div>
        ))}
      </div>
      <div className="absolute right-12 top-28 text-yellow-400 text-2xl font-bold">✦</div>
      <div className="absolute right-[45%] bottom-1/3 text-pink-300 text-xl rotate-12">📐</div>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-center">
          
          <div className="relative w-full max-w-xl text-center lg:text-left z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-50 border border-pink-100 px-4 py-2 text-sm font-medium text-pink-500 shadow-sm">
              ☕ Women-Owned Cafe
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-[4.2rem]">
              Enjoy Local Coffee
              <span className="block text-[#FF74B1] mt-2">Brewed With</span>
              <span className="block text-[#FF74B1]">Passion</span>
            </h1>

            <p className="mt-6 text-base text-gray-600 sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Sistech Cafe serves high-quality local coffee while empowering
              extraordinary women through creativity, collaboration, and care.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#FF74B1] px-8 py-4 font-semibold text-white transition-all hover:bg-[#e0659b] shadow-lg shadow-[#FF74B1]/20 group">
                Explore Menu <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#FF74B1] px-8 py-4 font-semibold text-[#FF74B1] bg-white transition-all hover:bg-[#FF74B1] hover:text-white">
                Learn More <span className="transition-transform hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[54%] flex gap-4 relative z-10">
            
            <div className="w-[60%] flex flex-col gap-4">
              <div className="relative h-[290px] w-full rounded-[2.5rem] overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80" 
                  alt="Premium Latte Art" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&auto=format&fit=crop&q=80" 
                  alt="Vintage Coffee Grinder" 
                  className="w-full h-[180px] rounded-[2.2rem] object-cover shadow-sm" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=80" 
                  alt="Traditional Coffee Cup" 
                  className="w-full h-[180px] rounded-[2.2rem] object-cover shadow-sm" 
                />
              </div>
            </div>
            
            <div className="w-[40%] flex flex-col gap-4">
              <img 
                src="https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&auto=format&fit=crop&q=80" 
                alt="Barista Pouring Milk Latte Art" 
                className="w-full h-[135px] rounded-[2.2rem] object-cover shadow-sm" 
              />
              <img 
                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&auto=format&fit=crop&q=80" 
                alt="Fresh Coffee Beans in Hands" 
                className="w-full h-[135px] rounded-[2.2rem] object-cover shadow-sm" 
              />
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&auto=format&fit=crop&q=80" 
                alt="Pour Over V60 Coffee" 
                className="w-full h-[186px] rounded-[2.2rem] object-cover shadow-sm" 
              />
            </div>

          </div>
          
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-12 lg:px-16 z-20 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 rounded-[2.5rem] bg-white px-10 py-8 shadow-xl shadow-pink-100/30 border border-gray-100/70">
          
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-50 text-xl">
              ☕
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Premium Coffee</h4>
              <p className="text-xs text-gray-500 mt-0.5">Made from local beans</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-50 text-xl">
              ❤️
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Made with Love</h4>
              <p className="text-xs text-gray-500 mt-0.5">By extraordinary women</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-50 text-xl">
              👥
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Community First</h4>
              <p className="text-xs text-gray-500 mt-0.5">Building meaningful impact</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-50 text-xl">
              🌱
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Sustainable</h4>
              <p className="text-xs text-gray-500 mt-0.5">For a better tomorrow</p>
            </div>
          </div>

        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-20 text-center lg:px-16 border-t border-gray-100 mt-12 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF74B1]">Our Community Partners</h3>
        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">Brewing together with the best.</h2>
        
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          We partner with local farmers, sustainable suppliers, and community-driven brands. 
          Together, we ensure every cup you drink makes a positive impact from farm to table.
        </p>

        <button className="mt-8 rounded-xl bg-[#FF74B1] px-8 py-3.5 font-semibold text-white transition hover:bg-[#e0659b] shadow-md">
          Partner With Us
        </button>

        <div className="marquee-container mt-16 w-full overflow-hidden relative flex py-4">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="animate-scroll flex w-[200%] shrink-0 items-center justify-around gap-12 sm:gap-20">
            {[...partners, ...partners].map((logoUrl, index) => (
              <img 
                key={index} 
                src={logoUrl} 
                alt={`Partner ${index}`} 
                className="h-14 sm:h-16 w-auto object-contain grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100 bg-white rounded-xl p-2" 
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

