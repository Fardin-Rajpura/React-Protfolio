import { useEffect, useState, useRef, use } from "react";

export const useScrollReveal = (option = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px',
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);


    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(element); // Unobserve After Reveal
            }
        },
            {
                threshold,
                rootMargin

            });

        observer.observe(element);


        return () => {
            if (element)
                 observer.unobserve(element);
        }

    }, [threshold, rootMargin]);

    return [ref, isVisible];


};