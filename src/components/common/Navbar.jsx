import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 h-full w-20 sm:w-64 bg-black/40 backdrop-blur-xl shadow-2xl z-50 flex flex-col items-center sm:items-start py-8 px-2 sm:px-6 border-r border-cyan-400/30">
      {/* Logo/Brand */}
      <Link
        to="/"
        className="mb-10 text-2xl font-extrabold tracking-wide text-cyan-300 hover:text-fuchsia-400 transition-colors drop-shadow-[0_2px_16px_rgba(0,255,255,0.7)]"
        style={{ letterSpacing: "0.1em" }}
      >
        <span className="hidden sm:inline">ShopEase</span>
        <span className="sm:hidden">🛒</span>
      </Link>
      {/* Hamburger Icon for mobile */}
      <button
        className="sm:hidden mb-8 flex flex-col justify-center items-center"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-7 h-1 bg-cyan-300 mb-1 rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-7 h-1 bg-cyan-300 mb-1 rounded transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-7 h-1 bg-cyan-300 rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      {/* Nav Links */}
      <div className={`flex flex-col gap-4 w-full ${menuOpen ? "flex" : "hidden"} sm:flex`}>
        <NavLink to="/products" neon="cyan">Products</NavLink>
        <NavLink to="/cart" neon="fuchsia">Cart</NavLink>
        <NavLink to="/orders" neon="green">Orders</NavLink>
        <NavLink to="/login" neon="yellow">Login</NavLink>
      </div>
      {/* Custom neon hover styles */}
      <style>
        {`
          .neon-cyan:hover { color: #67e8f9 !important; text-shadow: 0 0 8px #67e8f9, 0 0 16px #06b6d4; }
          .neon-fuchsia:hover { color: #f472b6 !important; text-shadow: 0 0 8px #f472b6, 0 0 16px #d946ef; }
          .neon-green:hover { color: #6ee7b7 !important; text-shadow: 0 0 8px #6ee7b7, 0 0 16px #22d3ee; }
          .neon-yellow:hover { color: #fde68a !important; text-shadow: 0 0 8px #fde68a, 0 0 16px #facc15; }
        `}
      </style>
    </nav>
  );
}

// Neon NavLink component
function NavLink({ to, children, neon }) {
  return (
    <Link
      to={to}
      className={`block py-3 px-4 rounded-lg font-semibold text-gray-100 transition-all duration-200 hover:bg-white/10 neon-${neon} text-lg`}
      style={{ letterSpacing: "0.05em" }}
    >
      {children}
    </Link>
  );
}