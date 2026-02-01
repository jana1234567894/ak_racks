// AK Racks Complete Product Catalog

export interface Product {
    id: string;
    name: string;
    category: string;
    categorySlug: string;
    description: string;
    image: string;
    features?: string[];
    material?: string;
    quality?: string;
    sizes?: string[];
    specifications?: string[];
}

export interface ProductCategory {
    name: string;
    slug: string;
    description: string;
    image: string;
    products: Product[];
}

export interface ColorOption {
    name: string;
    hex: string;
}

export const availableColors: ColorOption[] = [
    { name: 'Red', hex: '#DC2626' },
    { name: 'Blue', hex: '#2563EB' },
    { name: 'Yellow', hex: '#EAB308' },
    { name: 'Pink', hex: '#EC4899' },
    { name: 'Grey', hex: '#6B7280' },
    { name: 'Sky Blue', hex: '#0EA5E9' },
    { name: 'Brown', hex: '#92400E' },
    { name: 'Orange', hex: '#F97316' },
    { name: 'Light Green', hex: '#84CC16' },
    { name: 'Green', hex: '#16A34A' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Cream', hex: '#FEF3C7' },
];

export const productCategories: ProductCategory[] = [
    {
        name: 'Supermarket Racks',
        slug: 'supermarket-racks',
        description: 'Premium display racks designed for supermarkets with maximum visibility and easy customer access.',
        image: '/images/supermarket-rack.png',
        products: [
            { id: 'sm-1', name: 'Corner Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Space-efficient corner display solution', image: '/images/gallery/supermarket-racks/12Corner Rack.JPG' },
            { id: 'sm-2', name: 'Wall Channel Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Wall-mounted channel rack system', image: '/images/gallery/supermarket-racks/8Wall Channel Rack.JPG' },
            { id: 'sm-3', name: 'Reverse Corner Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Reverse corner optimization rack', image: '/images/gallery/supermarket-racks/13Reverse Corner Rack.jpg' },
            { id: 'sm-4', name: 'Wall Rack (Aluminium Stopper)', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Wall rack with aluminium stoppers', image: '/images/gallery/supermarket-racks/1Wall Rack (Aluminium Stopper).JPG' },
            { id: 'sm-5', name: 'Center Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Double-sided center aisle rack', image: '/images/gallery/supermarket-racks/10Center Rack.JPG' },
            { id: 'sm-6', name: 'Hook Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Versatile hook display system', image: '/images/gallery/supermarket-racks/11Hook Rack.JPG' },
            { id: 'sm-7', name: 'Masala Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Specialized rack for spices and masalas', image: '/images/gallery/supermarket-racks/14Masala Rack.JPG' },
            { id: 'sm-8', name: 'Oil Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Heavy-duty rack for oil bottles', image: '/images/gallery/supermarket-racks/15Oil Rack.JPG' },
            { id: 'sm-9', name: 'Snacks Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Eye-level snacks display rack', image: '/images/gallery/supermarket-racks/17Snacks Rack.JPG' },
            { id: 'sm-10', name: 'Wall Rack (Aluminium Mesh Stopper)', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Wall rack with mesh stoppers', image: '/images/gallery/supermarket-racks/3Wall Rack (Aluminum Mesh Stopper).jpg' },
            { id: 'sm-11', name: 'Wall Rack (High Rise Aluminium Stopper)', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'High-rise wall display rack', image: '/images/gallery/supermarket-racks/4Wall Rack (High Rise Aluminum Stopper).JPG' },
            { id: 'sm-12', name: 'Wall Rack (Data Strip)', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Wall rack with data strip for pricing', image: '/images/gallery/supermarket-racks/6Wall Rack (Data Strip).JPG' },
        ]
    },
    {
        name: 'Hyper Store Racks',
        slug: 'hyper-store-racks',
        description: 'Large-format display and storage solutions for hyper stores and large retail spaces.',
        image: '/images/hyper-store-rack.png',
        products: [
            { id: 'hs-1', name: 'Single Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Single-sided storage solution', image: '/images/gallery/hyper-store-racks/IMG-20221020-WA0008.jpg' },
            { id: 'hs-2', name: 'Wall Hyper Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Wall-mounted hyper storage', image: '/images/gallery/hyper-store-racks/Wall Hyper Storage Rack.jpg' },
            { id: 'hs-3', name: 'Display Glass Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Premium glass display rack', image: '/images/gallery/hyper-store-racks/IMG-20170419-WA0038.jpg' },
            { id: 'hs-4', name: 'Center Hyper Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Double-sided center rack', image: '/images/gallery/hyper-store-racks/Center Hyper Storage Rack.jpg' },
            { id: 'hs-5', name: 'Multi Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Multi-tier storage system', image: '/images/gallery/hyper-store-racks/IMG20220715134153.jpg' },
            { id: 'hs-6', name: 'Display Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Combined display and storage', image: '/images/gallery/hyper-store-racks/IMG-20221020-WA0030.jpg' },
        ]
    },
    {
        name: 'Fruit & Vegetable Racks',
        slug: 'fruit-vegetable-racks',
        description: 'Specialized racks designed for fresh produce display with optimal ventilation and visibility.',
        image: '/images/fruit-vegetable-rack.png',
        products: [
            { id: 'fv-1', name: 'Frame & Plastic Tray Fruit & Vegetable Rack', category: 'Fruit & Vegetable Racks', categorySlug: 'fruit-vegetable-racks', description: 'Durable plastic tray system', image: '/images/gallery/fruit-vegetable-racks/IMG-20161230-WA0043.jpg' },
            { id: 'fv-2', name: 'Mirror & SS Tray Fruit & Vegetable Rack', category: 'Fruit & Vegetable Racks', categorySlug: 'fruit-vegetable-racks', description: 'Premium stainless steel tray with mirror finish', image: '/images/gallery/fruit-vegetable-racks/IMG-20231227-WA0009.jpg' },
        ]
    },
    {
        name: 'Electronic Racks',
        slug: 'electronic-racks',
        description: 'Sturdy display solutions for electronics, appliances, and tech products.',
        image: '/images/electronic-rack.png',
        products: [
            { id: 'er-1', name: 'Electronic Racks', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Standard electronic display rack', image: '/images/gallery/electronic-racks/IMG20220616195407.jpg' },
            { id: 'er-2', name: 'Glass Racks', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Tempered glass display rack', image: '/images/gallery/electronic-racks/IMG20220414185623.jpg' },
            { id: 'er-3', name: 'TV & AC & Water Heater Rack', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Heavy-duty appliance display', image: '/images/gallery/electronic-racks/IMG-20190103-WA0008.jpg' },
            { id: 'er-4', name: 'Bar Hanging Racks', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Hanging display system', image: '/images/gallery/electronic-racks/IMG20220622131431.jpg' },
            { id: 'er-5', name: 'Brand Display Board Rack', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Brand promotion display', image: '/images/gallery/electronic-racks/IMG20220616195422.jpg' },
        ]
    },
    {
        name: 'Pharmacy Racks',
        slug: 'pharmacy-racks',
        description: 'Clean, organized display solutions for pharmacies and medical stores.',
        image: '/images/pharmacy-rack.png',
        products: [
            { id: 'ph-1', name: 'Pharmacy Rack', category: 'Pharmacy Racks', categorySlug: 'pharmacy-racks', description: 'Standard pharmacy display rack', image: '/images/gallery/pharmacy-racks/IMG20211227122320.jpg' },
            { id: 'ph-2', name: 'Clock House', category: 'Pharmacy Racks', categorySlug: 'pharmacy-racks', description: 'Specialty display unit', image: '/images/gallery/pharmacy-racks/IMG20220121101906.jpg' },
            { id: 'ph-3', name: 'Photo Frame Rack', category: 'Pharmacy Racks', categorySlug: 'pharmacy-racks', description: 'Photo frame display system', image: '/images/gallery/pharmacy-racks/IMG20220121101917.jpg' },
        ]
    },
    {
        name: 'Fancy Store Racks',
        slug: 'fancy-store-racks',
        description: 'Attractive multi-display racks for fancy stores and gift shops.',
        image: '/images/fancy-store-rack.png',
        products: [
            { id: 'fs-1', name: 'Fancy Rack', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Multi-display fancy store rack', image: '/images/gallery/fancy-store-racks/IMG-20240406-WA0003.jpg' },
            { id: 'fs-2', name: 'Stationery Rack', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Stationery display system', image: '/images/gallery/fancy-store-racks/IMG20220623111501.jpg' },
            { id: 'fs-3', name: 'Display Counter', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Front display counter', image: '/images/gallery/fancy-store-racks/IMG20230528111134.jpg' },
            { id: 'fs-4', name: 'Bag Rack', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Bag display rack', image: '/images/gallery/pharmacy-racks/IMG20230528111627.jpg' },
            { id: 'fs-5', name: 'Chapplas Hanging Rack', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Footwear hanging display', image: '/images/gallery/pharmacy-racks/IMG20221206140151.jpg' },
        ]
    },
    {
        name: 'Garments Racks',
        slug: 'garments-racks',
        description: 'Stylish display solutions for clothing stores and boutiques.',
        image: '/images/garments-rack.png',
        products: [
            { id: 'gr-1', name: 'Metal Shelf Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Sturdy metal shelf display', image: '/images/gallery/garments-racks/IMG20210910165001.jpg' },
            { id: 'gr-2', name: 'Step Down Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Stepped display for visibility', image: '/images/gallery/garments-racks/IMG-20210407-WA0003.jpg' },
            { id: 'gr-3', name: 'Ladder Type Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Ladder-style display rack', image: '/images/gallery/garments-racks/IMG20211126130614.jpg' },
            { id: 'gr-4', name: 'Wooden Shelf Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Premium wooden display', image: '/images/gallery/garments-racks/IMG20221218134139.jpg' },
            { id: 'gr-5', name: 'Hanger Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Clothing hanger system', image: '/images/gallery/garments-racks/IMG20221218134158.jpg' },
            { id: 'gr-6', name: 'Glass Shelf Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Elegant glass shelf display', image: '/images/gallery/garments-racks/IMG20210910165209.jpg' },
            { id: 'gr-7', name: 'Four Way Hanger', category: 'Garments Racks', categorySlug: 'garments-racks', description: '4-way clothing hanger stand', image: '/images/gallery/garments-racks/IMG20221218134134.jpg' },
        ]
    },
    {
        name: 'Heavy Duty Racks',
        slug: 'heavy-duty-racks',
        description: 'Industrial-grade storage solutions for warehouses and heavy loads.',
        image: '/images/heavy-duty-rack.png',
        products: [
            { id: 'hd-1', name: 'Heavy Duty Storage Rack', category: 'Heavy Duty Racks', categorySlug: 'heavy-duty-racks', description: 'Standard heavy-duty storage', image: '/images/gallery/heavy-duty-racks/IMG-20211221-WA0011.jpg' },
            { id: 'hd-2', name: 'Industrial Load Racks', category: 'Heavy Duty Racks', categorySlug: 'heavy-duty-racks', description: 'High-capacity industrial racks', image: '/images/gallery/heavy-duty-racks/IMG-20211230-WA0005.jpg' },
            { id: 'hd-3', name: 'Warehouse Storage Racks', category: 'Heavy Duty Racks', categorySlug: 'heavy-duty-racks', description: 'Complete warehouse solutions', image: '/images/gallery/heavy-duty-racks/IMG-20240220-WA0007.jpg' },
        ]
    },
    {
        name: 'Accessories',
        slug: 'accessories',
        description: 'Essential retail accessories including counters, trolleys, and bins.',
        image: '/images/accessories-rack.png',
        products: [
            { id: 'ac-1', name: 'Cash Counter', category: 'Accessories', categorySlug: 'accessories', description: 'Professional cash counter', image: '/images/accessories-rack.png' },
            { id: 'ac-2', name: 'Front Counter', category: 'Accessories', categorySlug: 'accessories', description: 'Reception and billing counter', image: '/images/pharmacy-rack.png' },
            { id: 'ac-3', name: 'Trolley', category: 'Accessories', categorySlug: 'accessories', description: 'Shopping trolley', image: '/images/supermarket-rack.png' },
            { id: 'ac-4', name: 'Dumb Bin', category: 'Accessories', categorySlug: 'accessories', description: 'Promotional dump bin', image: '/images/snacks-rack.png' },
            { id: 'ac-5', name: 'Wheel Basket', category: 'Accessories', categorySlug: 'accessories', description: 'Rolling shopping basket', image: '/images/center-rack.png' },
            { id: 'ac-6', name: 'Pickup Basket', category: 'Accessories', categorySlug: 'accessories', description: 'Hand-carry shopping basket', image: '/images/corner-rack.png' },
            { id: 'ac-7', name: 'Impulse Bin', category: 'Accessories', categorySlug: 'accessories', description: 'Checkout impulse display', image: '/images/masala-rack.png' },
            { id: 'ac-8', name: 'Alligator Bin', category: 'Accessories', categorySlug: 'accessories', description: 'Large promotional bin', image: '/images/oil-rack.png' },
            { id: 'ac-9', name: 'Square Broom Stand', category: 'Accessories', categorySlug: 'accessories', description: 'Square broom display stand', image: '/images/hook-rack.png' },
            { id: 'ac-10', name: 'Broom Stand', category: 'Accessories', categorySlug: 'accessories', description: 'Standard broom display', image: '/images/wall-rack-mesh.png' },
        ]
    },
];

export const getCategoryBySlug = (slug: string): ProductCategory | undefined => {
    return productCategories.find(c => c.slug === slug);
};

export const getAllCategorySlugs = (): string[] => {
    return productCategories.map(c => c.slug);
};

export const getAllProducts = (): Product[] => {
    return productCategories.flatMap(c => c.products);
};

// Default product details based on category
export const getProductDetails = (product: Product) => {
    const categoryDefaults: Record<string, { material: string; quality: string; sizes: string[]; specifications: string[] }> = {
        'supermarket-racks': {
            material: 'High-Grade Mild Steel (MS) with Powder Coating',
            quality: 'Premium Industrial Grade - ISO 9001:2015 Certified',
            sizes: ['3ft x 1.5ft x 5ft', '4ft x 1.5ft x 6ft', '5ft x 2ft x 7ft', 'Custom sizes available'],
            specifications: ['Load capacity: 100-150 kg per shelf', 'Adjustable shelf heights', 'Rust-resistant powder coating', 'Easy assembly design'],
        },
        'hyper-store-racks': {
            material: 'Heavy-Duty Mild Steel with Epoxy Powder Coating',
            quality: 'Industrial Heavy-Duty Grade - Built for High Traffic',
            sizes: ['4ft x 2ft x 6ft', '5ft x 2ft x 7ft', '6ft x 2.5ft x 8ft', 'Custom sizes available'],
            specifications: ['Load capacity: 150-200 kg per shelf', 'Double-sided display option', 'Anti-corrosion treatment', 'Modular design'],
        },
        'fruit-vegetable-racks': {
            material: 'Food-Grade Stainless Steel / MS with Food-Safe Coating',
            quality: 'Food-Safe Grade - Hygienic & Easy to Clean',
            sizes: ['3ft x 2ft x 4ft', '4ft x 2.5ft x 5ft', '5ft x 3ft x 5ft', 'Custom sizes available'],
            specifications: ['Ventilated design for freshness', 'Tilted display shelves', 'Easy drainage system', 'Mirror/SS tray options'],
        },
        'electronic-racks': {
            material: 'Premium Mild Steel with Glass/Acrylic Panels',
            quality: 'Showroom Grade - Elegant & Sturdy',
            sizes: ['3ft x 1.5ft x 5ft', '4ft x 2ft x 6ft', '5ft x 2ft x 7ft', 'Custom sizes available'],
            specifications: ['Tempered glass shelves option', 'Cable management system', 'LED lighting compatible', 'Anti-static coating'],
        },
        'pharmacy-racks': {
            material: 'Mild Steel with Anti-Bacterial Powder Coating',
            quality: 'Medical-Grade Finish - Clean & Professional',
            sizes: ['2ft x 1ft x 5ft', '3ft x 1.5ft x 6ft', '4ft x 1.5ft x 6ft', 'Custom sizes available'],
            specifications: ['Label strip holders', 'Adjustable compartments', 'Easy-clean surface', 'Compact design'],
        },
        'fancy-store-racks': {
            material: 'Metal Frame with Wooden/Glass Accents',
            quality: 'Retail Display Grade - Attractive & Modern',
            sizes: ['2ft x 1.5ft x 5ft', '3ft x 2ft x 6ft', '4ft x 2ft x 6ft', 'Custom sizes available'],
            specifications: ['Multiple display options', 'Contemporary design', 'Hook attachments available', 'Mix & match configurations'],
        },
        'garments-racks': {
            material: 'Chrome-Plated Steel / Wooden Finish Options',
            quality: 'Boutique Grade - Stylish & Durable',
            sizes: ['3ft x 1.5ft x 5ft', '4ft x 2ft x 6ft', '5ft x 2ft x 7ft', 'Custom sizes available'],
            specifications: ['Multiple hanging levels', 'Hanger bar included', 'Shelf + hanging combo options', 'Easy to relocate'],
        },
        'heavy-duty-racks': {
            material: 'Heavy Gauge Mild Steel with Industrial Coating',
            quality: 'Warehouse Industrial Grade - Maximum Strength',
            sizes: ['4ft x 2ft x 8ft', '5ft x 2.5ft x 10ft', '6ft x 3ft x 12ft', 'Custom sizes available'],
            specifications: ['Load capacity: 500-1000 kg per level', 'Pallet racking compatible', 'Forklift accessible', 'Seismic rated design'],
        },
        'accessories': {
            material: 'Mild Steel / Plastic / Chrome-Plated Steel',
            quality: 'Commercial Grade - Practical & Reliable',
            sizes: ['Various standard sizes', 'Custom options available'],
            specifications: ['Complementary to rack systems', 'High durability', 'Easy maintenance', 'Multiple color options'],
        },
    };

    const defaults = categoryDefaults[product.categorySlug] || categoryDefaults['supermarket-racks'];

    return {
        material: product.material || defaults.material,
        quality: product.quality || defaults.quality,
        sizes: product.sizes || defaults.sizes,
        specifications: product.specifications || defaults.specifications,
    };
};
