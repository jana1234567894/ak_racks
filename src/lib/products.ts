// AK Racks Complete Product Catalog

export interface Product {
    id: string;
    name: string;
    category: string;
    categorySlug: string;
    description: string;
    image: string;
    features?: string[];
}

export interface ProductCategory {
    name: string;
    slug: string;
    description: string;
    image: string;
    products: Product[];
}

export const availableColors = [
    'Red', 'Blue', 'Yellow', 'Pink', 'Grey', 'Sky Blue',
    'Brown', 'Orange', 'Light Green', 'Green', 'White', 'Cream'
];

export const productCategories: ProductCategory[] = [
    {
        name: 'Supermarket Racks',
        slug: 'supermarket-racks',
        description: 'Premium display racks designed for supermarkets with maximum visibility and easy customer access.',
        image: '/images/supermarket-rack.png',
        products: [
            { id: 'sm-1', name: 'Corner Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Space-efficient corner display solution', image: '/images/corner-rack.png' },
            { id: 'sm-2', name: 'Wall Channel Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Wall-mounted channel rack system', image: '/images/wall-channel-rack.png' },
            { id: 'sm-3', name: 'Reverse Corner Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Reverse corner optimization rack', image: '/images/supermarket-rack.png' },
            { id: 'sm-4', name: 'Wall Rack (Aluminium Stopper)', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Wall rack with aluminium stoppers', image: '/images/wall-rack-mesh.png' },
            { id: 'sm-5', name: 'Center Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Double-sided center aisle rack', image: '/images/center-rack.png' },
            { id: 'sm-6', name: 'Hook Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Versatile hook display system', image: '/images/hook-rack.png' },
            { id: 'sm-7', name: 'Masala Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Specialized rack for spices and masalas', image: '/images/masala-rack.png' },
            { id: 'sm-8', name: 'Oil Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Heavy-duty rack for oil bottles', image: '/images/oil-rack.png' },
            { id: 'sm-9', name: 'Snacks Rack', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Eye-level snacks display rack', image: '/images/snacks-rack.png' },
            { id: 'sm-10', name: 'Wall Rack (Aluminium Mesh Stopper)', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Wall rack with mesh stoppers', image: '/images/department-racks.png' },
            { id: 'sm-11', name: 'Wall Rack (High Rise Aluminium Stopper)', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'High-rise wall display rack', image: '/images/hyper-store-rack.png' },
            { id: 'sm-12', name: 'Wall Rack (Data Strip)', category: 'Supermarket Racks', categorySlug: 'supermarket-racks', description: 'Wall rack with data strip for pricing', image: '/images/pharmacy-rack.png' },
        ]
    },
    {
        name: 'Hyper Store Racks',
        slug: 'hyper-store-racks',
        description: 'Large-format display and storage solutions for hyper stores and large retail spaces.',
        image: '/images/hyper-store-rack.png',
        products: [
            { id: 'hs-1', name: 'Single Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Single-sided storage solution', image: '/images/hyper-store-rack.png' },
            { id: 'hs-2', name: 'Wall Hyper Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Wall-mounted hyper storage', image: '/images/wall-rack-mesh.png' },
            { id: 'hs-3', name: 'Display Glass Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Premium glass display rack', image: '/images/fancy-store-rack.png' },
            { id: 'hs-4', name: 'Center Hyper Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Double-sided center rack', image: '/images/center-rack.png' },
            { id: 'hs-5', name: 'Multi Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Multi-tier storage system', image: '/images/heavy-duty-rack.png' },
            { id: 'hs-6', name: 'Display Storage Rack', category: 'Hyper Store Racks', categorySlug: 'hyper-store-racks', description: 'Combined display and storage', image: '/images/supermarket-rack.png' },
        ]
    },
    {
        name: 'Fruit & Vegetable Racks',
        slug: 'fruit-vegetable-racks',
        description: 'Specialized racks designed for fresh produce display with optimal ventilation and visibility.',
        image: '/images/fruit-vegetable-rack.png',
        products: [
            { id: 'fv-1', name: 'Frame & Plastic Tray Fruit & Vegetable Rack', category: 'Fruit & Vegetable Racks', categorySlug: 'fruit-vegetable-racks', description: 'Durable plastic tray system', image: '/images/fruit-vegetable-rack.png' },
            { id: 'fv-2', name: 'Mirror & SS Tray Fruit & Vegetable Rack', category: 'Fruit & Vegetable Racks', categorySlug: 'fruit-vegetable-racks', description: 'Premium stainless steel tray with mirror finish', image: '/images/vegetable-racks.png' },
        ]
    },
    {
        name: 'Electronic Racks',
        slug: 'electronic-racks',
        description: 'Sturdy display solutions for electronics, appliances, and tech products.',
        image: '/images/electronic-rack.png',
        products: [
            { id: 'er-1', name: 'Electronic Racks', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Standard electronic display rack', image: '/images/electronic-rack.png' },
            { id: 'er-2', name: 'Glass Racks', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Tempered glass display rack', image: '/images/fancy-store-rack.png' },
            { id: 'er-3', name: 'TV & AC & Water Heater Rack', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Heavy-duty appliance display', image: '/images/heavy-duty-rack.png' },
            { id: 'er-4', name: 'Bar Hanging Racks', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Hanging display system', image: '/images/hook-rack.png' },
            { id: 'er-5', name: 'Brand Display Board Rack', category: 'Electronic Racks', categorySlug: 'electronic-racks', description: 'Brand promotion display', image: '/images/wall-channel-rack.png' },
        ]
    },
    {
        name: 'Pharmacy Racks',
        slug: 'pharmacy-racks',
        description: 'Clean, organized display solutions for pharmacies and medical stores.',
        image: '/images/pharmacy-rack.png',
        products: [
            { id: 'ph-1', name: 'Pharmacy Rack', category: 'Pharmacy Racks', categorySlug: 'pharmacy-racks', description: 'Standard pharmacy display rack', image: '/images/pharmacy-rack.png' },
            { id: 'ph-2', name: 'Clock House', category: 'Pharmacy Racks', categorySlug: 'pharmacy-racks', description: 'Specialty display unit', image: '/images/masala-rack.png' },
            { id: 'ph-3', name: 'Photo Frame Rack', category: 'Pharmacy Racks', categorySlug: 'pharmacy-racks', description: 'Photo frame display system', image: '/images/wall-channel-rack.png' },
        ]
    },
    {
        name: 'Fancy Store Racks',
        slug: 'fancy-store-racks',
        description: 'Attractive multi-display racks for fancy stores and gift shops.',
        image: '/images/fancy-store-rack.png',
        products: [
            { id: 'fs-1', name: 'Fancy Rack', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Multi-display fancy store rack', image: '/images/fancy-store-rack.png' },
            { id: 'fs-2', name: 'Stationery Rack', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Stationery display system', image: '/images/masala-rack.png' },
            { id: 'fs-3', name: 'Display Counter', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Front display counter', image: '/images/accessories-rack.png' },
            { id: 'fs-4', name: 'Bag Rack', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Bag display rack', image: '/images/garments-rack.png' },
            { id: 'fs-5', name: 'Chapplas Hanging Rack', category: 'Fancy Store Racks', categorySlug: 'fancy-store-racks', description: 'Footwear hanging display', image: '/images/hook-rack.png' },
        ]
    },
    {
        name: 'Garments Racks',
        slug: 'garments-racks',
        description: 'Stylish display solutions for clothing stores and boutiques.',
        image: '/images/garments-rack.png',
        products: [
            { id: 'gr-1', name: 'Metal Shelf Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Sturdy metal shelf display', image: '/images/garments-rack.png' },
            { id: 'gr-2', name: 'Step Down Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Stepped display for visibility', image: '/images/wall-channel-rack.png' },
            { id: 'gr-3', name: 'Ladder Type Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Ladder-style display rack', image: '/images/hyper-store-rack.png' },
            { id: 'gr-4', name: 'Wooden Shelf Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Premium wooden display', image: '/images/fancy-store-rack.png' },
            { id: 'gr-5', name: 'Hanger Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Clothing hanger system', image: '/images/hook-rack.png' },
            { id: 'gr-6', name: 'Glass Shelf Rack', category: 'Garments Racks', categorySlug: 'garments-racks', description: 'Elegant glass shelf display', image: '/images/electronic-rack.png' },
            { id: 'gr-7', name: 'Four Way Hanger', category: 'Garments Racks', categorySlug: 'garments-racks', description: '4-way clothing hanger stand', image: '/images/center-rack.png' },
        ]
    },
    {
        name: 'Heavy Duty Racks',
        slug: 'heavy-duty-racks',
        description: 'Industrial-grade storage solutions for warehouses and heavy loads.',
        image: '/images/heavy-duty-rack.png',
        products: [
            { id: 'hd-1', name: 'Heavy Duty Storage Rack', category: 'Heavy Duty Racks', categorySlug: 'heavy-duty-racks', description: 'Standard heavy-duty storage', image: '/images/heavy-duty-rack.png' },
            { id: 'hd-2', name: 'Industrial Load Racks', category: 'Heavy Duty Racks', categorySlug: 'heavy-duty-racks', description: 'High-capacity industrial racks', image: '/images/oil-rack.png' },
            { id: 'hd-3', name: 'Warehouse Storage Racks', category: 'Heavy Duty Racks', categorySlug: 'heavy-duty-racks', description: 'Complete warehouse solutions', image: '/images/hyper-store-rack.png' },
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
