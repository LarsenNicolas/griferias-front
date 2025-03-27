import { useParams } from "react-router-dom";
import products from "../../mock/products";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const foundProduct = products.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) return <div>Loading...</div>;

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <div className="container mx-auto p-4">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
            <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
            <p className="mt-2">{product.description}</p>
            <p className="mt-2 font-semibold">Material: {product.material}</p>
            <p className="mt-2 font-semibold">Tamaño: {product.size}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>

                <div className="flex items-center">
                    <button className="px-2 py-1 border" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                    <span className="mx-2">{quantity}</span>
                    <button className="px-2 py-1 border" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <button onClick={handleAddToCart} className="bg-pink-500 text-white py-2 px-4 rounded-md">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}
