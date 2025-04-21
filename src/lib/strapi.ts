export async function query(url: string) {
    const res = await fetch(`${import.meta.env.VITE_STRAPI_HOST}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`
        }
    })
    return res;
}