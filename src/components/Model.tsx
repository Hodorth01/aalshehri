
interface Image {
    src: string; // Assuming each image has a `src` property
}

interface CategoryData {
    images: Image[]; // `images` is an array of `Image` objects
}

interface Props {
    categoryData: CategoryData ; // Updated type for `categoryData`
    isModalOpen: boolean;
    currentImageIndex: number;
    setIsModalOpen: (value: boolean | ((prevState: boolean) => boolean)) => void;
    setCurrentImageIndex: (value: number | ((prevState: number) => number)) => void;
}


export const Model = (props: Props) => {
    const closeModal = () => {
        props.setIsModalOpen(false);
    };

    const nextImage = () => {
        if (props.categoryData.images) {
            props.setCurrentImageIndex((prev) => (prev + 1) % props.categoryData.images.length);
        }
    };

    const prevImage = () => {
        if (props.categoryData.images) {
            props.setCurrentImageIndex((prev) => (prev - 1 + props.categoryData.images.length) % props.categoryData.images.length);
        }
    };

    return (
        <>
            {props.isModalOpen && props.categoryData.images && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                        <img
                            src={props.categoryData.images[props.currentImageIndex].src}
                            alt={`Image ${props.currentImageIndex + 1}`}
                            className="modal-image"
                        />
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
