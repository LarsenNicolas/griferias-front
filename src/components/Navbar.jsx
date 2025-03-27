import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { useCart } from "../context/CartContext";
import { MoonIcon, SunIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { cart } = useCart();

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                    Joyas Shop
                </Link>

                <div className="flex items-center space-x-6">
                    <Link to="/" className="hover:underline text-gray-600 dark:text-gray-300">Inicio</Link>
                    <Link to="/checkout" className="hover:underline text-gray-600 dark:text-gray-300">Checkout</Link>

                    <button onClick={toggleDarkMode} className="focus:outline-none">
                        {isDarkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-600" />}
                    </button>

                    <Link to="/cart" className="relative">
                        <ShoppingCartIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
                                {cart.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
