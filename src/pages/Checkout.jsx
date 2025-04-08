import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Checkout() {
    const { cart, clearCart } = useCart();
    const [isLoading, setIsLoading] = useState(false);

    const handleBuy = () => {
        setIsLoading(true);
        setTimeout(() => {
            alert("¡Gracias por tu compra! 🎉");
            clearCart();
            setIsLoading(false);
        }, 2000);
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Finaliza tu Compra</h2>
            {isLoading ? (
                <div className="flex justify-center items-center">
                    <div className="spinner-border text-blue-600" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                </div>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between py-2">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>{item.price * item.quantity} USD</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 text-xl font-bold">
                        <strong>Total: {total} USD</strong>
                    </div>
                    <Button onClick={handleBuy} className="mt-4">Confirmar Compra</Button>
                </div>
            )}
        </div>
    );
}
