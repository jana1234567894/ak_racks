// SEO Configuration for AK Racks

export const siteConfig = {
    name: 'AK Racks',
    tagline: 'Next Step Display Solutions',
    description: 'Leading rack manufacturing and display solution company in Tamil Nadu. We offer supermarket racks, hyper store racks, fruit & vegetable racks, electronic racks, pharmacy racks, garments racks, and heavy-duty racks with complete design, manufacturing, supply, and installation services.',
    url: 'https://www.racksmadurai.com',
    phone: '+91 96778 66522',
    phoneClean: '919677866522',
    email: 'krishnan.rack@gmail.com',
    address: {
        street: 'No.2, SR Complex, Salai Road',
        area: 'Thillainagar',
        city: 'Trichy',
        state: 'Tamil Nadu',
        pincode: '620 018',
        country: 'India',
        full: 'No.2, SR Complex, Salai Road, Thillainagar, Trichy – 620 018, Tamil Nadu, India'
    },
    services: ['Consulting', 'Designing', 'Manufacturing', 'Supply', 'Installation with Service'],
    social: {
        whatsapp: 'https://wa.me/919677866522',
    },
    stats: {
        yearsExperience: 10,
        installations: 500,
        districts: 38,
        products: 50,
    }
};

export const generateDistrictMeta = (districtName: string) => ({
    title: `Display Rack Manufacturers in ${districtName} | Supermarket & Store Racks | AK Racks`,
    description: `Leading rack manufacturers in ${districtName}, Tamil Nadu. We supply supermarket racks, display racks, pharmacy racks, fruit & vegetable racks, garments racks, and heavy-duty racks with complete installation support. Contact AK Racks today!`,
    keywords: [
        `rack manufacturers in ${districtName}`,
        `supermarket racks ${districtName}`,
        `display racks ${districtName}`,
        `storage racks ${districtName}`,
        `pharmacy racks ${districtName}`,
        `vegetable racks ${districtName}`,
        `garments racks ${districtName}`,
        `heavy duty racks ${districtName}`,
        `retail racks Tamil Nadu`,
        'AK Racks',
    ],
});

export const generateCategoryMeta = (categoryName: string, categoryDescription: string) => ({
    title: `${categoryName} Manufacturers in Tamil Nadu | AK Racks`,
    description: `${categoryDescription} AK Racks offers premium quality ${categoryName.toLowerCase()} with complete design, manufacturing, supply, and installation services across Tamil Nadu. Get a quote today!`,
    keywords: [
        categoryName.toLowerCase(),
        `${categoryName.toLowerCase()} manufacturers`,
        `${categoryName.toLowerCase()} Tamil Nadu`,
        `${categoryName.toLowerCase()} Trichy`,
        'display racks',
        'retail solutions',
        'AK Racks',
    ],
});

export const generateDistrictContent = (districtName: string) => `
We are a leading rack manufacturing and supply company serving ${districtName}, Tamil Nadu.

Our products include:
• Supermarket Racks
• Hyper Store Racks  
• Fruit & Vegetable Racks
• Electronic Racks
• Pharmacy Racks
• Garments Racks
• Fancy Store Racks
• Heavy Duty Racks
• Retail Accessories

We offer complete solutions including consulting, design, manufacturing, supply, and installation across ${districtName} and nearby areas.

Available in 12+ colors: Red, Blue, Yellow, Pink, Grey, Sky Blue, Brown, Orange, Light Green, Green, White, and Cream.

Contact us today for the best display rack solutions in ${districtName}!
`;

export const structuredData = {
    organization: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.state,
            postalCode: siteConfig.address.pincode,
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '10.8059',
            longitude: '78.6897',
        },
        areaServed: {
            '@type': 'State',
            name: 'Tamil Nadu',
        },
        priceRange: '₹₹',
        openingHours: 'Mo-Sa 09:00-18:00',
        image: `${siteConfig.url}/images/hero.png`,
        sameAs: [],
    },
};
