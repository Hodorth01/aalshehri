import {useEffect} from "react";

export const inViewHook =(itemRef:React.RefObject<HTMLDivElement> ,rootMargin:string )=> {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            { threshold: .5 , rootMargin:rootMargin} // Trigger when 50% of the element is visible
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

}