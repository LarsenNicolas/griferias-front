import {Link, useParams} from "react-router-dom";
import products from "../../mock/products";
import {useEffect} from "react";
import {toast} from "react-toastify";

const Products = () => {
    const { id } = useParams();
    const categoryId = parseInt(id);
    const filteredProducts = id
        ? products.filter((product) => product.category === categoryId)
        : products;

    useEffect(() => {
        if (filteredProducts.length === 0) {
            toast.warning("No hay productos disponibles en esta categoría.");

        }
    }, [categoryId, filteredProducts.length]);

    return (
        <div className="container mt-8 mx-auto">
            <div className="container mx-auto py-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {filteredProducts.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <div className="relative w-full h-[32rem] rounded-md overflow-hidden shadow-lg group">
                                <img
                                    src={product.image}
                                    alt={`Imagen de ${product.name}`}
                                    className="w-full h-full object-cover rounded-md transition-all duration-300 brightness-50 group-hover:brightness-100"
                                />

                                <div className="absolute bottom-0 left-0 w-full bg-[#a5732db5] bg-opacity-60 text-white px-4 py-4">
                                    <h2 className="text-xl font-semibold truncate">{product.name}</h2>
                                    <p className="text-lg font-medium">${product.price}</p>
                                    <p className="text-sm mt-1 truncate">{product.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
