import { useEffect, useState } from "react";

export const useTypewriter = (text, speed = 50) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, index));
            index++;
            if (index > text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return displayed;
};
