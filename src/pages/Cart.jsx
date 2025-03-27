import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Carrito</h2>

            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-b py-2">
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio unitario: ${item.price}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Eliminar</button>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p className="font-bold">Total: ${total}</p>
                        <button onClick={clearCart} className="bg-red-500 text-white py-2 px-4 rounded mt-2">Vaciar Carrito</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
