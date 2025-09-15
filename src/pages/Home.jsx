import { useEffect, useState } from "react";

// Featured items data
const featured = [
  {
    name: "Neon Water Bottle",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Futuristic Headphones",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Glassy Smartwatch",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  const [show, setShow] = useState([false, false, false]);

  useEffect(() => {
    setTimeout(() => setShowCard(true), 300);

    // Wait for card to finish sliding in, then show featured items
    const cardSlideDuration = 2000; // ms, matches duration-[2000ms]
    const buffer = 100; // ms, small buffer for smoothness
    featured.forEach((_, i) => {
      setTimeout(() => {
        setShow((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 300 + cardSlideDuration + buffer + i * 600); // 300 is initial delay for card
    });
  }, []);

  // Calculate the same translate-x as the card for the trail
  const trailTranslate = showCard ? "translate-x-0" : "-translate-x-[80vw]";
  const trailOpacity = showCard ? "opacity-0" : "opacity-80";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Neon/blurred blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-400 opacity-30 rounded-full filter blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[28rem] h-[28rem] bg-fuchsia-500 opacity-30 rounded-full filter blur-3xl animate-pulse-slow z-0" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-400 opacity-20 rounded-full filter blur-2xl -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Water trail effect, moves with the card */}
      <div
        className={`
          absolute z-10 left-1/2 top-1/2 -translate-y-1/2 pointer-events-none
          transition-all duration-[2000ms] ease-[cubic-bezier(.77,0,.18,1)]
          ${trailTranslate} ${trailOpacity}
        `}
        style={{
          width: "44rem",
          height: "240px",
          background: "linear-gradient(90deg, rgba(34,211,238,0.55) 0%, rgba(236,72,153,0.45) 100%)",
          filter: "blur(64px)",
          borderRadius: "120px",
          transform: "translate(-60%, -50%)",
        }}
      />

      {/* Glassmorphism Card with slide-in animation */}
      <div
        className={`
          relative z-20 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl px-10 py-14 max-w-xl w-full border border-cyan-400/40 border-t-fuchsia-400/60 border-l-green-400/60
          transition-all duration-[2000ms] ease-[cubic-bezier(.77,0,.18,1)] 
          ${showCard ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[80vw]"}
        `}
        style={{
          boxShadow: "0 8px 32px 0 rgba(0,255,255,0.15), 0 0 16px 2px #0ff8, 0 0 32px 8px #f0f",
          borderTop: "1.5px solid rgba(244,0,255,0.5)",
          borderLeft: "1.5px solid rgba(0,255,128,0.5)"
        }}
      >
        <h1 className="text-5xl font-extrabold text-cyan-300 mb-6 text-center drop-shadow-[0_2px_16px_rgba(0,255,255,0.7)]">
          ShopEase
        </h1>
        <p className="text-lg text-gray-100 text-center mb-10">
          Discover a modern eCommerce experience.<br />
          Browse products, add to cart, and enjoy a seamless checkout—all in a beautiful, mobile-friendly interface.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="/products"
            className="bg-cyan-500/80 hover:bg-cyan-400/90 text-white font-bold py-2 px-8 rounded-full shadow-lg transition backdrop-blur-md border border-cyan-300/60"
          >
            Shop Now
          </a>
          <a
            href="/login"
            className="bg-fuchsia-500/60 hover:bg-fuchsia-400/80 text-white font-bold py-2 px-8 rounded-full shadow border border-fuchsia-300/60 transition backdrop-blur-md"
          >
            Login
          </a>
        </div>

        {/* Featured Items */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <h2 className="text-2xl font-bold text-cyan-200 mb-2 tracking-wide">Featured Items</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            {featured.map((item, i) => (
              <div
                key={item.name}
                className={`bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg border border-cyan-400/30 p-4 flex flex-col items-center w-48 transition-all duration-700 ease-out
                  ${show[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 250}ms` }}
              >
                <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-xl mb-2 shadow" />
                <span className="text-cyan-100 font-semibold text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animation for blobs */}
      <style>
        {`
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite alternate;
          }
          @keyframes pulse-slow {
            0% { transform: scale(1) translateY(0); }
            100% { transform: scale(1.1) translateY(20px); }
          }
        `}
      </style>
    </div>
  );
}