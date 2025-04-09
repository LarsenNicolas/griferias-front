import { Link } from "react-router-dom";
import categories from "../../mock/categories";

const Home = () => {
    return (
        <div className="container mt-8 mx-auto">

            <div className="mb-8">
                <div className="container relative w-full h-96 rounded-md">
                    <div className="relative w-full h-96 rounded-md group overflow-hidden">
                        <img
                            src="https://icdn.tradew.com/file/202110/1575078/png/8044771.png"
                            alt="Imagen de fondo"
                            className="w-full h-full object-cover brightness-50 group-hover:brightness-80 transition-all duration-300 ease-in-out rounded-md"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src="logo.jpeg" className="h-32 md:h-52 pr-2"/>
                            <h2 className="text-white text-4xl font-bold sm:text-7xl">Aethernum</h2>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mx-auto py-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {categories.map((category) => (
                        <Link to={`/products/${category.id}`}>
                            <div className="relative w-full h-96 rounded-md group overflow-hidden">
                                <img
                                    src={category.image}
                                    alt="Imagen de fondo"
                                    className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300 ease-in-out rounded-md"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-3xl font-bold">{category.name}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
