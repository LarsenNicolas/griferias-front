import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";

function App() {
    return (
        <DarkModeProvider>
            <CartProvider>
                <BrowserRouter>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-1">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/product/:id" element={<ProductDetail />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </BrowserRouter>
            </CartProvider>
        </DarkModeProvider>
    );
}

export default App;
