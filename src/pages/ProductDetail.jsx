import { useParams } from "react-router-dom";
import products from "../../mock/products";
import { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import Button from "../components/Button.jsx";
import {toast} from "react-toastify";
import {CheckCircle} from "lucide-react";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => String(p.id) === id);
    const [quantity, setQuantity] = useState(1);
    const addToCart = useCartStore((state) => state.addToCart);

    if (!product) {
        return (
            <div className="text-center mt-16">
                <h2 className="text-2xl font-semibold text-gray-700">Producto no encontrado</h2>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        toast.success("Agregaste "+ product.name +" a tu carrito de compras.",{
            icon: <CheckCircle className="text-[#a5732db5]"/>,
            style: {
                color: "#a5732db5",
                borderRadius: "8px",
                fontSize: "20px",
                width: "100%",
            }
        });
    };

    return (
        <div className="container mx-auto mt-10 mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 h-[36rem] rounded-md overflow-hidden shadow-lg">
                    <img
                        src={product.image}
                        alt={`Imagen de ${product.name}`}
                        className="w-full h-full object-cover brightness-75 rounded-md"
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">{product.name}</h2>
                    <p className="text-2xl text-primary font-semibold">${product.price}</p>
                    <p className="text-gray-600 text-lg">{product.description}</p>

                    <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                        <input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-20 px-3 py-2 border border-gray-300 rounded-md"
                        />
                        <Button
                            onClick={handleAddToCart}
                        >
                            Agregar al carrito
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
