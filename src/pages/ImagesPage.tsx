"use client";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Hero } from "./../components/Hero";
import { ImageComponent } from "./../components/ImageComponent";
import { Model } from "./../components/Model";
import { useState } from "react";

Modal.setAppElement("#root"); // For accessibility

const BASE_URL = "/public/data/images.json";

interface ImageItem {
    src: string;
    alt: string;
    hash: string;
}

interface CategoryData {
    hero?: {
        src: string;
        title: string;
    };
    images: ImageItem[];
}

interface QueryData {
    [key: string]: CategoryData | undefined; // Allow string indexing
}

const ImagesPage = () => {
    const { title: routeTitle } = useParams<{ title: string }>();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const { data, isError, isLoading } = useQuery<QueryData>({
        queryKey: ["images", routeTitle],
        queryFn: async () => {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            const data = await response.json();
            return data;
        },
    });

    // Safely retrieve category data
    const categoryData: CategoryData | null =
        data && routeTitle && data[routeTitle] ? data[routeTitle] : null;

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading data...</p>;

    return (
        <>
            <div>
                {categoryData?.hero ? (
                    <Hero src={categoryData.hero.src} header={categoryData.hero.title} />
                ) : (
                    <p>No hero data available.</p>
                )}
            </div>
            <div>
                {/* Image Thumbnails */}
                <div
                    className="list mx-3 mt-5 pt-3"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >
                    {categoryData?.images ? (
                        categoryData.images.map((item: ImageItem, index: number) => (
                            <div className="image" key={index}>
                                <ImageComponent
                                    src={item.src}
                                    alt={`Image ${index + 1}`}
                                    hash={item.hash}
                                    onClick={() => openModal(index)}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No images available.</p>
                    )}
                </div>
                {categoryData && (

                    <Model
                    categoryData={categoryData}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                />)}
            </div>
        </>
    );
};

export default ImagesPage;
