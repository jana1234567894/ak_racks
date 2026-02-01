import { Metadata } from 'next';
import { GalleryGrid, galleryImages } from '@/components/gallery';

export const metadata: Metadata = {
    title: 'Gallery - Our Installations & Projects',
    description: 'Browse our gallery of completed rack installations across Tamil Nadu. See how AK Racks transforms supermarkets, pharmacies, warehouses, and retail stores with premium display solutions.',
};

export default function GalleryPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Our Work
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Project
                            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Gallery</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Explore our portfolio of completed installations across Tamil Nadu. From supermarkets to warehouses, see the quality and craftsmanship in every project.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <GalleryGrid images={galleryImages} />
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '500+', label: 'Projects Completed' },
                            { value: '38', label: 'Districts Served' },
                            { value: '50+', label: 'Product Types' },
                            { value: '100%', label: 'Client Satisfaction' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.value}</p>
                                <p className="text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
