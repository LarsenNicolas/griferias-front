import {query} from "./strapi";

export function getHomeInfo() {
    return query("home")
        .then(res => {
            console.log("Respuesta Strapi:", res.data);
            return res.data;
        })
        .catch(err => {
            console.error("Error al obtener home info:", err);
            return { title: "Error" };
        });
}
