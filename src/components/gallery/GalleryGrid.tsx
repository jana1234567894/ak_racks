'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

interface GalleryGridProps {
    images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];

    const filteredImages = activeCategory === 'All'
        ? images
        : images.filter(img => img.category === activeCategory);

    return (
        <>
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === category
                            ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                            : 'bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-600 border border-slate-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <motion.div
                layout
                className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-6 space-y-3 md:space-y-6"
            >
                <AnimatePresence>
                    {filteredImages.map((image, index) => (
                        <motion.div
                            layout
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="break-inside-avoid group cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-md">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <p className="text-white font-medium">{image.alt}</p>
                                        <span className="text-orange-400 text-sm">{image.category}</span>
                                    </div>
                                </div>

                                {/* Zoom Icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                    <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={1200}
                                height={800}
                                className="w-full h-auto max-h-[85vh] object-contain"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
                                <span className="text-orange-400">{selectedImage.category}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// Gallery Images Data
export const galleryImages: GalleryImage[] = [
    { src: '/images/gallery/gallery/IMG-20161230-WA0043.jpg', alt: 'Fresh Produce Rack', category: 'Fruit & Vegetable Racks' },
    { src: '/images/gallery/gallery/glass-showcase-vegetable-racks.jpg', alt: 'Glass Showcase Vegetable Rack', category: 'Fruit & Vegetable Racks' },

    { src: '/images/gallery/gallery/bagrack.jpg', alt: 'Bag Display Rack', category: 'Fancy Store Racks' },
    { src: '/images/gallery/gallery/chappel-rack.jpg', alt: 'Footwear Display Rack', category: 'Fancy Store Racks' },
    { src: '/images/gallery/gallery/shoe-rack.jpg', alt: 'Shoe Rack', category: 'Fancy Store Racks' },
    { src: '/images/gallery/gallery/stationary-rack.jpg', alt: 'Stationery Display Rack', category: 'Fancy Store Racks' },
    { src: '/images/gallery/gallery/stationary.jpg', alt: 'Stationery Items Rack', category: 'Fancy Store Racks' },
    { src: '/images/gallery/gallery/toys-hanger-rack.jpg', alt: 'Toys Hanger Rack', category: 'Fancy Store Racks' },

    { src: '/images/gallery/gallery/clock house.jpg', alt: 'Clock House Display', category: 'Pharmacy Racks' },
    { src: '/images/gallery/gallery/clock-house.jpg', alt: 'Clock House Unit', category: 'Pharmacy Racks' },

    { src: '/images/gallery/gallery/plates showcase.jpg', alt: 'Plates Showcase', category: 'Supermarket Racks' },

    { src: '/images/gallery/gallery/sports-shop hanger.jpg', alt: 'Sports Shop Hanger', category: 'Garments Racks' },
];
