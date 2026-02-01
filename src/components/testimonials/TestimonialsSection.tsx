'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonials, Testimonial } from '@/lib/testimonials';

import { GoogleReviewsSection } from './GoogleReviewsSection';

// StarRating Component
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
            className="group h-full"
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
                <GoogleReviewsSection />

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
