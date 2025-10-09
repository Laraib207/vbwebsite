"use client";
import React, { useState } from "react";

const CustomerFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Charu Bharadwaj",
      location: "Delhi",
      image: "/images/cu1.png",
      feedback:
        "Focuses on trying multiple products, better quality and pricing compared to competitors, and being happy with the brand Highlights health benefits, aromatic Oil, commitment to transparency, no additives, pure authentic products, and more things Nice. !",
    },
    {
      id: 2,
      name: "Tahir",
      location: "Mumbai",
      image: "/images/cu2.png",
      feedback:
        "Emphasizes freshness, purity, farm-fresh taste, rich curd, perfect paneer, ethical sourcing, and confidence in serving family! Focuses on trying multiple products, better quality and pricing compared to competitors and being happy with the brand Highlights health benefits, aromatic ghee, commitment to transparency, no additives, pure authentic products, and kids loving the milk!",
    },
    {
      id: 3,
      name: "Tanya Malhotra",
      location: "Bangalore",
      image: "/images/cu3.png",
      feedback:
        "Highlights health benefits, aromatic ghee, commitment to transparency, no additives, pure authentic products, and kids loving the milk!Emphasizes freshness, purity, farm-fresh taste, rich curd, perfect paneer, ethical sourcing, and confidence in serving family! Focuses on trying multiple products, better quality and pricing compared to competitors",
    },
    {
      id: 4,
      name: "Shobita Malhotra",
      location: "Chennai",
      image: "/images/cu4.png",
        feedback:"Focuses on trying multiple products, better quality and pricing compared to competitors and being happy with the brand Highlights health benefits, aromatic ghee, commitment to transparency, no additives, pure authentic products, and kids loving the milk!Emphasizes freshness, purity, farm-fresh taste, rich curd, perfect paneer, ethical sourcing, and confidence in serving family!",
}
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-pink-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Customer Feedback
          </h2>
          <p className="text-lg sm:text-xl font-medium text-gray-700">
            What Customer Say About Us !
          </p>
          <div className="mt-4 sm:mt-6 w-24 sm:w-32 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-8 sm:mb-12">
          {/* Customer Image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full"></div>
              <div className="absolute inset-2 bg-white rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative dots around image */}
              <div className="absolute -top-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-10 -right-6 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full"></div>
              <div className="absolute -bottom-6 left-1/4 w-5 h-5 sm:w-7 sm:h-7 bg-red-400 rounded-full"></div>
            </div>
          </div>

          {/* Feedback Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left px-4 sm:px-0">
            {/* Quote Icon */}
            <div className="mb-4 sm:mb-6">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 mx-auto lg:mx-0"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>
            </div>

            {/* Feedback Text */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic">
              {currentTestimonial.feedback}
            </p>

            {/* Customer Name */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              - {currentTestimonial.name}
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              {currentTestimonial.location}
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="group w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-red-500 border-2 border-gray-300 hover:border-red-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-3 h-3 sm:w-4 sm:h-4 bg-gray-900 ring-2 ring-gray-900 ring-offset-2"
                    : "w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="group w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-red-500 border-2 border-gray-300 hover:border-red-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;