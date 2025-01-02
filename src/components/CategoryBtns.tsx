import {useParams } from "react-router-dom";
import { useRef} from "react";
import {inViewHook} from "../hooks/inViewHook";
const CategoryBtns= ()=>{
    const { title: routeTitle } = useParams<{ title: string }>();
    const itemRef = useRef<HTMLDivElement>(null);

    const categories = ["Artworks","Weddings","Media"]

    const navigateCategory = (direction: "next" | "prev") => {
        const currentIndex = categories.indexOf(routeTitle as string);
        let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

        // Handle boundary conditions
        if (newIndex >= categories.length) newIndex = 0;
        if (newIndex < 0) newIndex = categories.length - 1;
        // Navigate to the new category
        window.location.href = `/images/${categories[newIndex]}`;

    };
    inViewHook(itemRef,"25px 0px")
    const currentIndex = categories.indexOf(routeTitle as string);
    const nextCategory = categories[(currentIndex + 1) % categories.length];
    const prevCategory = categories[(currentIndex - 1 + categories.length) % categories.length];

    return (
        <div className="row col-12 p-lg-4 mt-3 category-btns-container" ref={itemRef}>
            <div className="col-lg-6 col-md-12 d-flex">
                <button className="category-btns" onClick={() => navigateCategory("prev")}>

                    ← {prevCategory}
                </button>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-end">
                <button className="category-btns" onClick={() => navigateCategory("next")}>
                    {nextCategory} →
                </button>
            </div>
        </div>

    )
}
export default CategoryBtns;