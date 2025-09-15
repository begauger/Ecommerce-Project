export default function ProductCard({ product }) {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 p-4 flex flex-col items-center transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-xl mb-4 shadow"
      />
      <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">{product.name}</h3>
      <p className="text-blue-900 text-center mb-2">{product.description}</p>
      <span className="text-lg font-semibold text-blue-700 mb-4">${product.price}</span>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full shadow transition">
        Add to Cart
      </button>
    </div>
  );
}