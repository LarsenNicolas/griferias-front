import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Products from "./pages/Products.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ParallaxProvider} from "react-scroll-parallax";
import {Home} from "./pages/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <ParallaxProvider>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/products" element={<Products/>} />
                            <Route path="/products/:id" element={<Products/>} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
                <ToastContainer position="top-right"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                pauseOnHover
                                draggable
                                theme="light"/>
            </ParallaxProvider>
        </BrowserRouter>
    );
}

export default App;
