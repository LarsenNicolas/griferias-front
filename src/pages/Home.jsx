import { Link } from "react-router-dom";
import products from "../../mock/products";
import categories from "../../mock/categories";

const Home = () => {
    return (
        <div className="container mx-auto">

            <div className="mb-8">
                <div className="container relative w-full h-96 rounded-md">
                    <img
                        src="https://icdn.tradew.com/file/202110/1575078/png/8044771.png"
                        alt="Imagen de fondo"
                        className="w-full h-96 object-cover brightness-50 rounded-md"
                    />

                    <div className="absolute inset-0 flex items-center justify-center sm:flex">
                        <img src="logo.jpeg" className="h-32 md:h-52 pr-2"/>
                        <h2 className="text-white text-4xl font-bold sm:text-7xl">Aethernum</h2>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {categories.map((category) => (
                <Link to={`/categories/${category.id}`}>
                    <div className="relative w-full h-96 rounded-md">

                        <img
                            src={category.image}
                            alt="Imagen de fondo"
                            className="w-full h-full object-cover brightness-50 rounded-md"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-3xl font-bold">{category.name}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-4">Productos destacados</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded"/>
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                            <p className="font-bold mt-2">${product.price}</p>
                            <Link to={`/product/${product.id}`}
                                  className="mt-2 inline-block text-pink-500 hover:underline">Ver
                                más</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
