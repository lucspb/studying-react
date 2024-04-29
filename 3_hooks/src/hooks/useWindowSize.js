import { useState, useEffect } from "react";

export default function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        //funcao que altera os valores
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        //evento que dispara a funcao
        window.addEventListener('resize', handleResize)

        handleResize()

        //limpeza de memória
        return () => window.removeEventListener('resize', handleResize);

    }, [])

    return windowSize;

}