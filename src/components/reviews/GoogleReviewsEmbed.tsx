'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface GoogleReviewsEmbedProps {
    /**
     * The Google Maps embed URL. Get this from:
     * 1. Go to Google Maps and search for your business
     * 2. Click "Share" → "Embed a map"
     * 3. Copy the src URL from the iframe code
     * 
     * Example: "https://www.google.com/maps/embed?pb=!1m18!..."
     */
    embedUrl?: string;
    /** Section title */
    title?: string;
    /** Section subtitle */
    subtitle?: string;
    /** Custom class for the section */
    className?: string;
}

export function GoogleReviewsEmbed({
    embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d77.123456789!3d11.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAK%20Racks!5e0!3m2!1sen!2sin!4v1234567890",
    title = "What Our Customers Say",
    subtitle = "Read genuine reviews from our satisfied customers on Google",
    className = "",
}: GoogleReviewsEmbedProps) {
    const prefersReducedMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] as const,
            },
        },
    };

    return (
        <section className={`py-16 md:py-20 bg-slate-50 ${className}`}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={prefersReducedMotion ? "visible" : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="text-center mb-10 md:mb-12"
                >
                    <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
                        Customer Reviews
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                        {title}
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        {subtitle}
                    </p>

                    {/* Google Badge */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        <span className="text-slate-500 text-sm font-medium">
                            Verified Google Reviews
                        </span>
                    </div>
                </motion.div>

                {/* Google Maps Embed */}
                <motion.div
                    initial={prefersReducedMotion ? "visible" : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200"
                >
                    {/* Desktop iframe */}
                    <iframe
                        src={embedUrl}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps - AK Racks Location and Reviews"
                        className="hidden md:block"
                    />

                    {/* Mobile iframe */}
                    <iframe
                        src={embedUrl}
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps - AK Racks Location and Reviews"
                        className="block md:hidden"
                    />
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={prefersReducedMotion ? "visible" : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="text-center mt-8"
                >
                    <a
                        href="https://www.google.com/maps/search/AK+Racks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                    >
                        <span>View All Reviews on Google</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
