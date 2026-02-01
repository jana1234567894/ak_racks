'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useParallax } from './useParallax';

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    direction?: 'up' | 'down';
}

export function ParallaxSection({
    children,
    className = '',
    speed = 0.3,
    direction = 'up',
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const y = useParallax(ref, { speed: direction === 'up' ? speed : -speed });
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            ref={ref}
            style={{ y: prefersReducedMotion ? 0 : y }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number;
}

export function ParallaxImage({
    src,
    alt,
    className = '',
    speed = 0.4,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const y = useParallax(ref, { speed });
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            ref={ref}
            style={{ y: prefersReducedMotion ? 0 : y }}
            className={`overflow-hidden ${className}`}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </motion.div>
    );
}

interface ParallaxBackgroundProps {
    children: ReactNode;
    backgroundImage?: string;
    backgroundColor?: string;
    className?: string;
    overlayOpacity?: number;
}

export function ParallaxBackground({
    children,
    backgroundImage,
    backgroundColor = 'transparent',
    className = '',
    overlayOpacity = 0.5,
}: ParallaxBackgroundProps) {
    const ref = useRef<HTMLDivElement>(null);
    const y = useParallax(ref, { speed: 0.2 });
    const prefersReducedMotion = useReducedMotion();

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            {/* Background Layer */}
            <motion.div
                style={{
                    y: prefersReducedMotion ? 0 : y,
                    backgroundColor,
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                }}
                className="absolute inset-0 -top-20 -bottom-20 bg-cover bg-center bg-no-repeat"
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-slate-900"
                style={{ opacity: overlayOpacity }}
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
