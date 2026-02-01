'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Google Reviews Data
const googleReviews = [
    {
        id: 'gr-1',
        name: 'Arun Ram',
        rating: 5,
        date: '3 months ago',
        content: 'We purchased supermarket display racks for Sundaram Supermarket, and the overall experience has been excellent. The racks are durable, well-built, and designed to maximize space utilization. The quality of the materials and the finishing give a professional look to our store layout. Product delivery was prompt, and installation was handled efficiently. These racks have significantly improved the display and accessibility of our products. We are very satisfied with our purchase and would recommend these racks to other retailers.',
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
        name: 'Mohamed Bilal',
        rating: 5,
        date: '3 weeks ago',
        content: 'Best quality, best products, friendly staffs support. I have done my supermarket in inamkulathur branch by support of Mr.hariharan (AK racks).',
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
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-slate-300'}`}
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
            className="group h-full"
        >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200 h-full flex flex-col">
                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-1 mb-4">
                    {review.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="relative aspect-square overflow-hidden">
                            <Image
                                src={image}
                                alt={`Review photo ${imgIndex + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Review Info */}
                <div className="p-6 flex-grow flex flex-col">
                    {/* Header: Name, Date, Badge */}
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h4 className="font-bold text-slate-800 text-lg mb-1">{review.name}</h4>
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <span>{review.date}</span>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <GoogleIcon />
                                    <span className="font-medium">Google</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-orange-50 px-2 py-1 rounded-lg">
                            <StarRating rating={review.rating} />
                        </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-4 hover:line-clamp-none transition-all duration-300">
                        {review.content}
                    </p>

                    {/* View on Google Link */}
                    <a
                        href={review.reviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors mt-auto pt-4 border-t border-slate-100 w-full"
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

export function GoogleReviewsSection() {
    return (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
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
    );
}
