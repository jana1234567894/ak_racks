'use client';

import { useScroll, useTransform, useSpring, useReducedMotion, MotionValue } from 'framer-motion';
import { useEffect, useState, RefObject } from 'react';
import { isMobileDevice, isLowEndDevice } from '@/lib/utils';

interface ParallaxOptions {
    speed?: number;
    offset?: ['start end' | 'center center' | 'end start' | 'start start' | 'end end', 'start end' | 'center center' | 'end start' | 'start start' | 'end end'];
    clamp?: boolean;
}

// Main parallax hook with mobile safety
export function useParallax(
    ref: RefObject<HTMLElement | null>,
    options: ParallaxOptions = {}
): MotionValue<number> {
    const { speed = 0.5, offset = ['start end', 'end start'], clamp = true } = options;
    const prefersReducedMotion = useReducedMotion();
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable parallax on mobile, low-end devices, or reduced motion
        if (prefersReducedMotion || isLowEndDevice() || isMobileDevice()) {
            setShouldAnimate(false);
        }
    }, [prefersReducedMotion]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset,
    });

    const range = shouldAnimate ? [-100 * speed, 100 * speed] : [0, 0];

    const rawY = useTransform(scrollYProgress, [0, 1], range);

    // Add spring for smoother animation
    const springY = useSpring(rawY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return clamp ? rawY : springY;
}

// Simplified parallax for backgrounds (slower movement)
export function useBackgroundParallax(
    ref: RefObject<HTMLElement | null>
): MotionValue<number> {
    return useParallax(ref, { speed: 0.2 });
}

// Product image parallax (medium speed)
export function useProductParallax(
    ref: RefObject<HTMLElement | null>
): MotionValue<number> {
    return useParallax(ref, { speed: 0.4 });
}

// Text parallax (faster movement for depth illusion)
export function useTextParallax(
    ref: RefObject<HTMLElement | null>
): MotionValue<number> {
    return useParallax(ref, { speed: 0.6 });
}

// Opacity on scroll
export function useScrollOpacity(
    ref: RefObject<HTMLElement | null>,
    fadeIn: boolean = true
): MotionValue<number> {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    return useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        fadeIn ? [0, 0.8, 1] : [1, 0.8, 0]
    );
}

// Scale on scroll for reveal effects
export function useScrollScale(
    ref: RefObject<HTMLElement | null>
): MotionValue<number> {
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    return useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? [1, 1] : [0.8, 1]
    );
}
