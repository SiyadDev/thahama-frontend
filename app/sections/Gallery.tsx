"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

gsap.registerPlugin(ScrollTrigger);

// Placeholder gallery images - in production, these would be actual product/store images
const galleryItems = [
  { id: 1, category: "Store", alt: "Store Interior" },
  { id: 2, category: "Products", alt: "Fresh Produce" },
  { id: 3, category: "Bakery", alt: "Fresh Bakery Items" },
  { id: 4, category: "Store", alt: "Shopping Aisle" },
  { id: 5, category: "Products", alt: "Meat Selection" },
  { id: 6, category: "Store", alt: "Store Entrance" },
  { id: 7, category: "Bakery", alt: "Bread Display" },
  { id: 8, category: "Products", alt: "Vegetables" },
  { id: 9, category: "Store", alt: "Checkout Area" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Gallery items animation
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll(".gallery-item");

        gsap.fromTo(
          items,
          {
            opacity: 0,
            scale: 0.8,
            rotateZ: -5,
          },
          {
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Generate placeholder slides for lightbox
  const slides = galleryItems.map((item) => ({
    src: `https://placehold.co/800x600/0F172A/FACC15?text=${item.alt.replace(/\s+/g, "+")}`,
    alt: item.alt,
  }));

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-6"
        >
          Our <span className="text-accent">Gallery</span>
        </h2>

        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Take a look inside our stores and discover the quality we offer
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => openLightbox(index)}
            >
              {/* Placeholder image with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark to-primary flex items-center justify-center">
                <div className="text-center">
                  <div className="text-accent text-6xl mb-4">📷</div>
                  <p className="text-white font-semibold text-lg">{item.alt}</p>
                  <p className="text-gray-300 text-sm">{item.category}</p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
      />
    </section>
  );
}

