"use client";
import React, { useState, useEffect } from "react";

interface ImageSlidesProps {
  images: string[];
}

export const ImageSlides: React.FC<ImageSlidesProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Group images into pairs for two images per slide
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push([images[i], images[i + 1] || ""]); // Add empty string if there is no second image
  }

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + 1 === groupedImages.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? groupedImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Autoplay every 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentSlide]);

  return (
    <div id="carouselExampleIndicators" className="relative w-full">
      {/* Carousel indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-auto mb-4 shadow-lg rounded-lg flex list-none justify-center p-0">
        {groupedImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${
              currentSlide === index ? "opacity-100" : "opacity-50"
            } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="relative w-full overflow-hidden">
        {groupedImages.map((group, index) => (
          <div
            key={index}
            className={`relative flex ${
              currentSlide === index ? "flex" : "hidden"
            } transition-transform duration-[600ms] ease-in-out justify-center items-center`}
          >
            {group.map((image, idx) =>
              image ? (
                <img
                  key={idx}
                  src={image}
                  alt={`Slide ${index * 2 + idx + 1}`}
                  className="block w-full md:w-[50%] h-[300px] md:h-[400px] lg:h-[500px] object-cover shadow-lg rounded-lg mx-2"
                  style={{ maxHeight: "600px" }} // Keeps the image height consistent on larger screens
                />
              ) : null
            )}
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={prevSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={nextSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};
