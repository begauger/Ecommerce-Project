import ProductCard from "../components/products/ProductCard";

const products = [
  {
    id: 1,
    name: "Glass Water Bottle",
    description: "Stay hydrated in style.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Minimalist Watch",
    description: "Elegant and timeless.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  // Add more mock products as needed
];

export default function ProductList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 py-12 px-4">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-8 text-center drop-shadow">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}