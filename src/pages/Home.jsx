import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import categories from "../../mock/categories";
import { Parallax } from 'react-scroll-parallax';
import { getHomeInfo } from "../lib/get-home-info.js";
import {useEffect, useState} from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const Home = () => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        getHomeInfo().then(data => {
            setTitle(data?.title || "Sin título");
        });
    }, []);

    return (
        <div className="w-full mx-auto">

            {/* Hero con parallax simple */}
            <div
                className="relative w-full h-screen bg-fixed bg-center bg-cover"
                style={{ backgroundImage: 'url(https://icdn.tradew.com/file/202110/1575078/png/8044771.png)' }}
            >
                <div className="absolute inset-0 bg-[#a5732db5] mix-blend-multiply"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <img
                        src="logo.jpeg"
                        alt="Logo"
                        className="h-32 md:h-52 mb-6 drop-shadow-lg animate-float"
                    />
                    <h1 className="text-5xl sm:text-7xl font-serif font-bold drop-shadow-md">
                        {title}
                    </h1>
                </div>
            </div>

            {categories.map((category, i) => (
                <Link to={`/products/${category.id}`}>
                <motion.section
                    key={category.id}
                    className={`flex flex-col ${
                        i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center justify-center overflow-hidden py-12`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    {/* Imagen */}
                    <div className="w-full md:w-1/2 overflow-hidden group relative">
                            <Parallax speed={-10}>
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                                />
                            </Parallax>
                    </div>

                    {/* Título */}
                    <motion.div
                        className="w-full md:w-1/2 flex items-center justify-center px-4 mt-6 md:mt-0 text-center"
                        initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-gray-900">
                            {category.name}
                        </h2>
                    </motion.div>
                </motion.section>
                </Link>
            ))}

        </div>
    );
};
