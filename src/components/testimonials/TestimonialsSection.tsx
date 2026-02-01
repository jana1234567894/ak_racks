'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonials, Testimonial } from '@/lib/testimonials';

// Google Reviews Data
const googleReviews = [
    {
        id: 'gr-1',
        name: 'Customer Review 1',
        rating: 5,
        reviewLink: 'https://maps.app.goo.gl/7bsrgFjsMPqEanRF7',
        images: [
            '/images/reviews/review-1/unnamed-2.jpg.jpeg',
            '/images/reviews/review-1/unnamed-3.jpg.jpeg',
            '/images/reviews/review-1/unnamed-4.jpg.jpeg',
            '/images/reviews/review-1/unnamed-5.jpg.jpeg',
        ],
    },
    {
        id: 'gr-2',
        name: 'Customer Review 2',
        rating: 5,
        reviewLink: 'https://maps.app.goo.gl/JUgBimWf3tyRyMGY8',
        images: [
            '/images/reviews/review-2/unnamed-2.jpg.jpeg',
            '/images/reviews/review-2/unnamed-3.jpg.jpeg',
            '/images/reviews/review-2/unnamed-4.jpg.jpeg',
            '/images/reviews/review-2/unnamed-5.jpg.jpeg',
        ],
    },
];

const GOOGLE_REVIEWS_LINK = 'https://maps.app.goo.gl/YbwsiyWZchHrwX6p8';

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-slate-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function GoogleIcon() {
    return (
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
    );
}

interface GoogleReviewCardProps {
    review: typeof googleReviews[0];
    index: number;
}

function GoogleReviewCard({ review, index }: GoogleReviewCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group"
        >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200">
                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-1">
                    {review.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="relative aspect-square overflow-hidden">
                            <Image
                                src={image}
                                alt={`Review photo ${imgIndex + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* Review Info */}
                <div className="p-5">
                    {/* Google Badge & Stars */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <GoogleIcon />
                            <span className="text-sm text-slate-500 font-medium">Google Review</span>
                        </div>
                        <StarRating rating={review.rating} />
                    </div>

                    {/* View on Google Link */}
                    <a
                        href={review.reviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                    >
                        <span>View on Google Maps</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>

                {/* Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Content */}
                <p className="text-slate-600 mt-4 mb-6 flex-grow leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <p className="font-semibold text-slate-800">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                        <p className="text-xs text-orange-500 font-medium">{testimonial.location}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        What Our
                        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Clients Say</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Trusted by businesses across Tamil Nadu for premium quality racks and exceptional service.
                    </p>
                </motion.div>

                {/* Google Reviews Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <GoogleIcon />
                        <h3 className="text-xl font-bold text-slate-800">Google Reviews</h3>
                    </div>

                    {/* Google Review Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                        {googleReviews.map((review, index) => (
                            <GoogleReviewCard key={review.id} review={review} index={index} />
                        ))}
                    </div>

                    {/* View All Reviews Button */}
                    <div className="text-center">
                        <a
                            href={GOOGLE_REVIEWS_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white border-2 border-slate-200 hover:border-orange-400 text-slate-700 hover:text-orange-600 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            <GoogleIcon />
                            <span>View All Reviews on Google</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="flex items-center gap-4 max-w-md mx-auto mb-12">
                    <div className="flex-1 h-px bg-slate-200"></div>
                    <span className="text-slate-400 text-sm font-medium px-4">More Testimonials</span>
                    <div className="flex-1 h-px bg-slate-200"></div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.slice(0, 6).map((testimonial, index) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
