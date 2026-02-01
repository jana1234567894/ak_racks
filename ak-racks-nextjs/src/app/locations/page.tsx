import { Metadata } from 'next';
import Link from 'next/link';
import { districts } from '@/lib/districts';

export const metadata: Metadata = {
    title: 'Service Areas - All 38 Districts of Tamil Nadu',
    description: 'AK Racks serves all 38 districts of Tamil Nadu with premium display rack solutions. Find rack manufacturers near you for supermarkets, pharmacies, garments stores, and warehouses.',
};

export default function LocationsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Service Coverage
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Serving All
                            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> 38 Districts</span>
                            <br />of Tamil Nadu
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            From Chennai to Kanniyakumari, we deliver premium rack solutions with installation support across every corner of Tamil Nadu.
                        </p>
                    </div>
                </div>
            </section>

            {/* Districts Grid */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {districts.map((district) => (
                            <Link
                                key={district.slug}
                                href={`/locations/${district.slug}`}
                                className="group bg-slate-900 border border-slate-700 hover:border-orange-500/50 rounded-xl p-5 transition-all hover:shadow-lg hover:shadow-orange-500/10"
                            >
                                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-500/20 transition-colors">
                                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                                    {district.name}
                                </h2>
                                <p className="text-slate-500 text-xs mt-1 line-clamp-1">{district.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '38', label: 'Districts' },
                            { value: '500+', label: 'Installations' },
                            { value: '10+', label: 'Years' },
                            { value: '100%', label: 'Coverage' },
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
