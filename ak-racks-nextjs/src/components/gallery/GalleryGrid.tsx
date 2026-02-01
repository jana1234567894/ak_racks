'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
    src: string;
    alt: string;
    category?: string;
}

interface GalleryGridProps {
    images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    return (
        <>
            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="break-inside-avoid group cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={400}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-white font-medium">{image.alt}</p>
                                    {image.category && (
                                        <span className="text-orange-400 text-sm">{image.category}</span>
                                    )}
                                </div>
                            </div>

                            {/* Zoom Icon */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
                            {selectedImage.category && (
                                <span className="text-orange-400">{selectedImage.category}</span>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}

// Sample gallery images for the gallery page
export const galleryImages: GalleryImage[] = [
    { src: '/images/gallery-1.png', alt: 'Supermarket Installation', category: 'Supermarket Racks' },
    { src: '/images/gallery-2.png', alt: 'Warehouse Setup', category: 'Heavy Duty Racks' },
    { src: '/images/factory.png', alt: 'Manufacturing Unit', category: 'Factory' },
    { src: '/images/installation.png', alt: 'Installation Process', category: 'Installation' },
    { src: '/images/department-racks.png', alt: 'Department Store Display', category: 'Department Racks' },
    { src: '/images/vegetable-racks.png', alt: 'Fruit & Vegetable Display', category: 'Vegetable Racks' },
    { src: '/images/warehouse-racks.png', alt: 'Industrial Storage', category: 'Warehouse Racks' },
    { src: '/images/custom-racks.png', alt: 'Custom Rack Solutions', category: 'Custom Racks' },
];
