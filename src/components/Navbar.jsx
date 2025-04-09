import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const { cart } = useCart();

    return (
        <nav className="bg-[#a5732db5] dark:bg-[#a5732db5] shadow-md">
            <div className="container mx-auto px-4 py-8 flex justify-between items-center">

                    <Link to="/" className="hover:underline text-white">Inicio</Link>
                    <Link to="/products" className="hover:underline text-white">Productos</Link>
                    <Link to="/checkout" className="hover:underline text-white">Checkout</Link>

                    <Link to="/cart" className="relative">
                        <ShoppingCartIcon className="w-6 h-6 text-white"/>
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
                                {cart.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        )}
                    </Link>

            </div>
        </nav>
    );
};

export default Navbar;
