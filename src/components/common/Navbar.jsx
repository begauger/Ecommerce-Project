import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition-colors">
          ShopEase
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/products" className="hover:text-yellow-300 transition-colors">
            Products
          </Link>
          <Link to="/cart" className="hover:text-yellow-300 transition-colors">
            Cart
          </Link>
          <Link to="/orders" className="hover:text-yellow-300 transition-colors">
            Orders
          </Link>
          <Link to="/login" className="hover:text-yellow-300 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}