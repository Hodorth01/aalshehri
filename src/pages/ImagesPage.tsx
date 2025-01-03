"use client";
import Modal from "react-modal";
import CategoryBtns from "../components/CategoryBtns";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import  Hero  from "../components/Hero";
import { ImageComponent } from "../components/ImageComponent";
import { Model } from "../components/Model";
import { useState } from "react";

Modal.setAppElement("#root");

// Define the base URL for fetching image data
const BASE_URL = "/data/images.json";

// Interface to define the structure of each image item
interface ImageItem {
    src: string;
    srcset: string;
    sizes: string;
    alt: string;
    hash: string;
}

// Interface to define the structure of category data (hero and images)
interface CategoryData {
    hero?: {
        src: string;
        title: string;
        srcset: string;
        sizes: string;
    };
    images: ImageItem[];
}

// Interface for the query data, allowing string indexing
interface QueryData {
    [key: string]: CategoryData | undefined;
}

const ImagesPage = () => {
    // Get the title parameter from the URL
    const { title: routeTitle } = useParams<{ title: string }>();

    // State for managing modal visibility
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    // State for tracking the index of the currently displayed image
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    // Function to open the modal and set the current image index
    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };
    // Use the useQuery hook to fetch image data
    const { data, isError, isLoading } = useQuery<QueryData>({
        queryKey: ["images", routeTitle], // Query key with the route title
        queryFn: async () => {
            // Fetch the image data from the BASE_URL
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch"); // Handle fetch error
            }
            const data = await response.json();
            return data;
        },
    });

    // Safely retrieve category data based on the route title
    const categoryData: CategoryData | null =
        data && routeTitle && data[routeTitle] ? data[routeTitle] : null;



    // Show loading text while the data is being fetched
    if (isLoading) return <p>Loading...</p>;

    // Show error message if the data fetching fails
    if (isError) return <p>Error loading data...</p>;


    return (
        <>
            <div>
                {/* Display hero section if available */}
                {categoryData?.hero ? (
                    <Hero src={categoryData.hero.src} header={categoryData.hero.title} srcset={categoryData.hero.srcset} sizes={categoryData.hero.sizes} />
                ) : (
                    <p>No hero image available.</p> // Fallback if no hero is provided
                )}
            </div>

            <div>
                {/* Display the list of image thumbnails */}
                <div
                    className="list mx-3 mt-5 pt-3"
                >
                    {categoryData?.images ? (
                        // Map through the images and display each thumbnail
                        categoryData.images.map((item: ImageItem, index: number) => (
                            <div className="image" key={index}
                             >
                                <ImageComponent
                                    src={item.src}
                                    srcSet={item.srcset}
                                    sizes={item.sizes}
                                    alt={`Image ${index + 1}`} // Alt text for accessibility
                                    hash={item.hash}
                                    onClick={() => openModal(index)} // Open modal on click
                                />
                            </div>
                        ))
                    ) : (
                        <p>No images available.</p> // Fallback if no images are available
                    )}
                </div>
                <CategoryBtns/>
                {/* Render the modal component with image details */}
                {categoryData && (
                    <Model
                        categoryData={categoryData}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        currentImageIndex={currentImageIndex}
                        setCurrentImageIndex={setCurrentImageIndex}
                    />
                )}
            </div>
        </>
    );
};

export default ImagesPage;
