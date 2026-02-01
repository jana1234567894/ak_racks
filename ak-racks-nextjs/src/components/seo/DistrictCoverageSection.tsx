'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { districts } from '@/lib/districts';

export function DistrictCoverageSection() {
    // Group districts for display
    const popularDistricts = districts.slice(0, 12);

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '50px 50px',
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                        Service Coverage
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Serving All
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> 38 Districts</span>
                        <br />of Tamil Nadu
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        From Chennai to Kanniyakumari, we deliver premium rack solutions with installation support across every corner of Tamil Nadu.
                    </p>
                </motion.div>

                {/* Districts Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
                >
                    {popularDistricts.map((district, index) => (
                        <motion.div
                            key={district.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href={`/locations/${district.slug}`}
                                className="block bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-orange-500/50 rounded-xl p-4 text-center transition-all hover:bg-slate-800 group"
                            >
                                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-500/20 transition-colors">
                                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-medium text-sm group-hover:text-orange-400 transition-colors">
                                    {district.name}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/locations"
                        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
                    >
                        View all 38 districts
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: '38', label: 'Districts', icon: '📍' },
                        { value: '500+', label: 'Installations', icon: '🏪' },
                        { value: '10+', label: 'Years', icon: '⭐' },
                        { value: '50+', label: 'Products', icon: '🛒' },
                    ].map((stat, index) => (
                        <div
                            key={stat.label}
                            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                        >
                            <span className="text-3xl mb-2 block">{stat.icon}</span>
                            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
