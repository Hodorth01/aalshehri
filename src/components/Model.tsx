interface Image {
    src: string; // The source URL of the image
}

interface CategoryData {
    images: Image[]; // An array of images to be displayed in the modal
}

interface Props {
    categoryData: CategoryData; // The category data containing images
    isModalOpen: boolean; // Whether the modal is open or closed
    currentImageIndex: number; // The index of the current image being displayed
    setIsModalOpen: (value: boolean | ((prevState: boolean) => boolean)) => void; // Function to set modal open state
    setCurrentImageIndex: (value: number | ((prevState: number) => number)) => void; // Function to update the current image index
}

export const Model = (props: Props) => {
    // Function to close the modal
    const closeModal = () => {
        props.setIsModalOpen(false);
    };

    // Function to show the next image
    const nextImage = () => {
        if (props.categoryData.images) {
            props.setCurrentImageIndex((prev) => (prev + 1) % props.categoryData.images.length);
        }
    };

    // Function to show the previous image
    const prevImage = () => {
        if (props.categoryData.images) {
            props.setCurrentImageIndex((prev) => (prev - 1 + props.categoryData.images.length) % props.categoryData.images.length);
        }
    };

    return (
        <>
            {props.isModalOpen && props.categoryData.images && (
                // Modal overlay
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* Close button */}
                        <button className="close-btn" onClick={closeModal}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        {/* Previous image button */}
                        <button className="prev-btn" onClick={prevImage}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon"
                            >
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        {/* Image being displayed in the modal */}
                        <img
                            src={props.categoryData.images[props.currentImageIndex].src}
                            alt={`Image ${props.currentImageIndex + 1}`} // Alt text for accessibility
                            className="modal-image"
                        />

                        {/* Next image button */}
                        <button className="next-btn" onClick={nextImage}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
