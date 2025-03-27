import { Link } from "react-router-dom";
import products from "../../mock/products";

const Home = () => {
    return (
        <div className="container mx-auto p-4">

            <div className="mb-8">
                <img
                    src="/assets/hero.jpg"
                    alt="Joyas"
                    className="w-full h-96 object-cover rounded-md shadow"
                />
            </div>

            <h2 className="text-2xl font-bold mb-4">Categorías</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                        <p className="font-bold mt-2">${product.price}</p>
                        <Link to={`/product/${product.id}`} className="mt-2 inline-block text-pink-500 hover:underline">Ver más</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
