import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'About Us - Leading Rack Manufacturers in Tamil Nadu',
    description: 'Learn about AK Racks, a premier rack manufacturing company based in Trichy, Tamil Nadu. We specialize in designing, manufacturing, and installing display racks for supermarkets, stores, and warehouses across all 38 districts.',
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            About AK Racks
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Your Trusted Partner for
                            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Display Solutions</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            {siteConfig.tagline} — We are a leading rack manufacturing and display solution company serving all 38 districts of Tamil Nadu.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/factory.png"
                                    alt="AK Racks Manufacturing Unit"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Stats Overlay */}
                            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl hidden md:block">
                                <p className="text-4xl font-bold text-white">10+</p>
                                <p className="text-orange-100">Years of Excellence</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Who We Are
                            </h2>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                AK Racks is a Tamil Nadu–based rack manufacturing and display solution company offering end-to-end services including design, manufacturing, supply, and installation.
                            </p>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Based in Trichy, we provide a wide range of racks for supermarkets, hyper stores, fruit and vegetable shops, electronic stores, pharmacies, garment stores, fancy stores, and warehouses. Our solutions are focused on durability, space optimization, and modern retail display.
                            </p>

                            {/* Services */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {siteConfig.services.map((service) => (
                                    <div key={service} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-300">{service}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
                            >
                                Get In Touch
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            The AK Racks Advantage
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🏭',
                                title: 'In-House Manufacturing',
                                description: 'Complete control over quality with our own manufacturing facility in Trichy.',
                            },
                            {
                                icon: '🎨',
                                title: '12+ Color Options',
                                description: 'Wide range of powder-coated finishes to match your store aesthetics.',
                            },
                            {
                                icon: '🔧',
                                title: 'Professional Installation',
                                description: 'Expert installation team ensuring perfect setup every time.',
                            },
                            {
                                icon: '🚚',
                                title: 'Pan Tamil Nadu Delivery',
                                description: 'Serving all 38 districts with reliable delivery and support.',
                            },
                        ].map((feature, index) => (
                            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-colors">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                                Our Location
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Visit Our Showroom
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                                        <p className="text-slate-400">{siteConfig.address.full}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                                        <a href={`tel:${siteConfig.phone}`} className="text-orange-400 hover:text-orange-300">{siteConfig.phone}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                        <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:text-orange-300">{siteConfig.email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d78.6897!3d10.8059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzIxLjIiTiA3OMKwNDEnMjIuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
