import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="border rounded p-4 flex flex-col items-center shadow hover:scale-105 transition">
            <img src={product.image} alt={product.name} className="w-40 h-40 object-cover" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{formatPrice(product.price)}</p>
            <div className="flex gap-2 mt-2">
                <Button onClick={() => addToCart(product)}>Agregar</Button>
                <Link to={`/product/${product.id}`} className="text-blue-600 underline">Ver</Link>
            </div>
        </div>
    );
}
