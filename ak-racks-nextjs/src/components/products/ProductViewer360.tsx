'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProductViewer360Props {
    images: string[];
    alt: string;
}

export function ProductViewer360({ images, alt }: ProductViewer360Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [isAutoRotating, setIsAutoRotating] = useState(false);

    // Auto rotation
    useEffect(() => {
        if (!isAutoRotating || isDragging) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 500);

        return () => clearInterval(interval);
    }, [isAutoRotating, isDragging, images.length]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setIsAutoRotating(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setIsAutoRotating(false);
    };

    const handleMove = useCallback((clientX: number) => {
        if (!isDragging) return;

        const diff = clientX - startX;
        const sensitivity = 5;

        if (Math.abs(diff) > sensitivity) {
            const direction = diff > 0 ? -1 : 1;
            setCurrentIndex((prev) => {
                const next = prev + direction;
                if (next < 0) return images.length - 1;
                if (next >= images.length) return 0;
                return next;
            });
            setStartX(clientX);
        }
    }, [isDragging, startX, images.length]);

    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

    const handleEnd = () => {
        setIsDragging(false);
    };

    if (images.length === 0) {
        return (
            <div className="w-full aspect-square bg-slate-100 rounded-2xl flex items-center justify-center">
                <p className="text-slate-400">No 360° view available</p>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Main Viewer */}
            <div
                className="relative w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleEnd}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.8 }}
                        transition={{ duration: 0.1 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`${alt} - View ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            draggable={false}
                            priority={currentIndex === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* 360 Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium">
                    <svg className="w-4 h-4 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    360°
                </div>

                {/* Instructions */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-center text-sm">
                    {isDragging ? 'Release to stop' : 'Drag to rotate'}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-4">
                <button
                    onClick={() => {
                        setIsAutoRotating(!isAutoRotating);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${isAutoRotating
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                >
                    {isAutoRotating ? (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Pause
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Auto Rotate
                        </>
                    )}
                </button>

                {/* Progress Dots */}
                <div className="flex items-center gap-1">
                    {images.slice(0, Math.min(8, images.length)).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsAutoRotating(false);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex % Math.min(8, images.length)
                                ? 'w-6 bg-orange-500'
                                : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
