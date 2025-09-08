import { useEffect, useRef } from "react";
import { useAppContext } from "../../context/GlobalAppContextProvider";

const PageLoader = () => {

    const { setLoading } = useAppContext();
    const preloaderRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (preloaderRef.current) {
                preloaderRef.current.classList.add("preloaded");
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="preloader" ref={preloaderRef}>
            <div className="line"></div>
        </div>
    )
}

export default PageLoader