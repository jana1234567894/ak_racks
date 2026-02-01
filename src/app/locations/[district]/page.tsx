import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { districts, getDistrictBySlug, getAllDistrictSlugs } from '@/lib/districts';
import { productCategories } from '@/lib/products';
import { siteConfig, generateDistrictMeta, generateDistrictContent } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo';

interface PageProps {
    params: Promise<{ district: string }>;
}

export async function generateStaticParams() {
    return getAllDistrictSlugs().map((slug) => ({
        district: slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { district } = await params;
    const districtData = getDistrictBySlug(district);

    if (!districtData) {
        return { title: 'District Not Found' };
    }

    const meta = generateDistrictMeta(districtData.name);

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
    };
}

export default async function DistrictPage({ params }: PageProps) {
    const { district } = await params;
    const districtData = getDistrictBySlug(district);

    if (!districtData) {
        notFound();
    }

    const content = generateDistrictContent(districtData.name);

    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', url: siteConfig.url },
                    { name: 'Locations', url: `${siteConfig.url}/locations` },
                    { name: districtData.name, url: `${siteConfig.url}/locations/${district}` },
                ]}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm mb-8">
                        <Link href="/" className="text-slate-400 hover:text-orange-400 transition-colors">
                            Home
                        </Link>
                        <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <Link href="/locations" className="text-slate-400 hover:text-orange-400 transition-colors">
                            Locations
                        </Link>
                        <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-orange-400">{districtData.name}</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-orange-400 text-sm font-medium">{districtData.name}, Tamil Nadu</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Display Rack Manufacturers in
                            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> {districtData.name}</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            {districtData.description}. AK Racks provides premium display rack solutions with complete design, manufacturing, supply, and installation services in {districtData.name}.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Rack Solutions in {districtData.name}
                                </h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-slate-300 whitespace-pre-line leading-relaxed">
                                        {content}
                                    </p>
                                </div>

                                {/* Major Cities */}
                                {districtData.majorCities.length > 0 && (
                                    <div className="mt-8 pt-8 border-t border-slate-700">
                                        <h3 className="text-lg font-semibold text-white mb-4">Areas We Serve in {districtData.name}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {districtData.majorCities.map((city) => (
                                                <span key={city} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm">
                                                    {city}
                                                </span>
                                            ))}
                                            <span className="px-4 py-2 bg-orange-500/20 rounded-lg text-orange-400 text-sm">
                                                + Entire {districtData.name} District
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* CTA */}
                                <div className="mt-8 pt-8 border-t border-slate-700">
                                    <h3 className="text-lg font-semibold text-white mb-4">Get a Quote for {districtData.name}</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent(`Hi! I am from ${districtData.name} and interested in your rack products. Please share more details.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            WhatsApp Us
                                        </a>
                                        <a
                                            href={`tel:${siteConfig.phone}`}
                                            className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-600 transition-all"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            Call Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            {/* Products */}
                            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
                                <h3 className="text-lg font-semibold text-white mb-4">Products Available in {districtData.name}</h3>
                                <ul className="space-y-3">
                                    {productCategories.map((category) => (
                                        <li key={category.slug}>
                                            <Link
                                                href={`/products/${category.slug}`}
                                                className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors"
                                            >
                                                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Other Districts */}
                            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Other Districts</h3>
                                <div className="flex flex-wrap gap-2">
                                    {districts
                                        .filter((d) => d.slug !== district)
                                        .slice(0, 10)
                                        .map((d) => (
                                            <Link
                                                key={d.slug}
                                                href={`/locations/${d.slug}`}
                                                className="px-3 py-1 bg-slate-800 rounded-lg text-slate-400 text-sm hover:bg-slate-700 hover:text-orange-400 transition-all"
                                            >
                                                {d.name}
                                            </Link>
                                        ))}
                                    <Link
                                        href="/locations"
                                        className="px-3 py-1 bg-orange-500/20 rounded-lg text-orange-400 text-sm hover:bg-orange-500/30 transition-all"
                                    >
                                        View All →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Popular Products in {districtData.name}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productCategories.slice(0, 4).map((category) => (
                            <Link
                                key={category.slug}
                                href={`/products/${category.slug}`}
                                className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all"
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-1">{category.products.length} Products</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
