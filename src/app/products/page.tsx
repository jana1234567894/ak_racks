import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { productCategories, availableColors } from '@/lib/products';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Products - Complete Range of Display & Storage Racks',
    description: 'Explore our complete range of display and storage racks including supermarket racks, hyper store racks, fruit & vegetable racks, pharmacy racks, garments racks, and heavy duty racks. Available in 12+ colors.',
};

export default function ProductsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Our Products
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Complete Range of
                            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Display Racks</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            From supermarkets to warehouses, we have the perfect rack solution for your business. All products available in 12+ premium colors.
                        </p>

                        {/* Color Palette */}
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="text-slate-400 text-sm">Available Colors:</span>
                            <div className="flex flex-wrap gap-2">
                                {availableColors.slice(0, 8).map((color) => (
                                    <span key={color} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                                        {color}
                                    </span>
                                ))}
                                <span className="px-3 py-1 bg-orange-500/20 rounded-full text-xs text-orange-400 border border-orange-500/30">
                                    +{availableColors.length - 8} more
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productCategories.map((category, index) => (
                            <Link
                                key={category.slug}
                                href={`/products/${category.slug}`}
                                className="group"
                            >
                                <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                                        {/* Product Count Badge */}
                                        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {category.products.length} Products
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                            {category.name}
                                        </h2>
                                        <p className="text-slate-400 mb-4 line-clamp-2">
                                            {category.description}
                                        </p>

                                        {/* Sample Products */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {category.products.slice(0, 3).map((product) => (
                                                <span key={product.id} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                                                    {product.name}
                                                </span>
                                            ))}
                                            {category.products.length > 3 && (
                                                <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                                                    +{category.products.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* View Link */}
                                        <div className="flex items-center text-orange-400 font-medium group-hover:gap-3 gap-2 transition-all">
                                            <span>View Products</span>
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Can&apos;t Find What You&apos;re Looking For?
                    </h2>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                        We also offer custom rack solutions tailored to your specific requirements. Contact us for a free consultation!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={siteConfig.social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us
                        </a>
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-600 transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
