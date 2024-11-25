"use client";
import Modal from "react-modal";
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { Hero } from "./components/Hero";
import { ImageComponent } from "./components/ImageComponent.tsx";
import {Model} from "./components/Model.tsx";
import {useState} from "react";

Modal.setAppElement("#root"); // For accessibility

const BASE_URL = "/public/data/images.json";

// Define types for the image item
interface ImageItem {
    src: string;
    alt: string;
}

// Define types for the hero section and the category data
interface CategoryData {
    hero: {
        src: string;
        title: string;
        alt: string;
    };
    images: ImageItem[];
}

interface QueryData {
    Artworks?: CategoryData;
    MediaProjects?: CategoryData;
    Weddings?: CategoryData;
}

const ImagesPage = () => {
    const { title: routeTitle } = useParams<{ title: string }>();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const {
        data,
        isError,
        isLoading,
    } = useQuery<QueryData>({
        queryKey: [routeTitle],
        queryFn: async () => {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            const data = await response.json();
            return data;
        },
    });

    // Get category data based on routeTitle
    const categoryData = data ? data[routeTitle] : null;





    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading data...</p>;

    return (
        <>
            <div>
                {categoryData?.hero ? (
                    <Hero src={categoryData.hero.src} header={categoryData.hero.title} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div>
                {/* Image Thumbnails */}
                <div className="list mx-3 mt-5 pt-3">
                    {categoryData?.images ? (
                        categoryData.images.map((item: ImageItem, index: number) => (
                                <ImageComponent
                                    key={index}
                                    src={item.src}
                                    alt={`Image ${index + 1}`}
                                    hash={item.hash}
                                    onClick={() => openModal(index)}
                                />

                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <Model
                    categoryData = {categoryData}
                    isModalOpen = {isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    currentImageIndex = {currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                />
            </div>
        </>
    );
};
export default ImagesPage;