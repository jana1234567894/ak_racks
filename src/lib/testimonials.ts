// Testimonials data - separated for server/client compatibility

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    location: string;
    content: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Rajesh Kumar',
        role: 'Owner, Kumar Supermarket',
        location: 'Chennai',
        content: 'AK Racks transformed our store completely. The quality of racks is excellent and the installation was done professionally. Our customers love the new look!',
        rating: 5,
    },
    {
        id: '2',
        name: 'Priya Venkatesh',
        role: 'Manager, Fresh Mart',
        location: 'Coimbatore',
        content: 'We ordered fruit and vegetable racks for our new branch. The team delivered on time and the racks look premium. Highly recommend!',
        rating: 5,
    },
    {
        id: '3',
        name: 'Mohammed Ismail',
        role: 'Director, City Pharmacy',
        location: 'Madurai',
        content: 'The pharmacy racks are sturdy and perfectly designed for medicine display. AK Racks provided excellent after-sales service too.',
        rating: 5,
    },
    {
        id: '4',
        name: 'Lakshmi Narayanan',
        role: 'Owner, LN Textiles',
        location: 'Salem',
        content: 'We got garment racks for our showroom. The design is modern and the build quality is top-notch. Great value for money!',
        rating: 5,
    },
    {
        id: '5',
        name: 'Senthil Murugan',
        role: 'Warehouse Manager, MM Logistics',
        location: 'Trichy',
        content: 'Heavy duty racks from AK Racks are the best investment we made. They handle our industrial loads perfectly. Professional service!',
        rating: 5,
    },
    {
        id: '6',
        name: 'Anitha Raj',
        role: 'Owner, AR Electronics',
        location: 'Tiruppur',
        content: 'The electronic display racks are exactly what we needed. Clear visibility and sturdy construction. Thank you AK Racks!',
        rating: 5,
    },
];
