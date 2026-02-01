'use client';

import { useState } from 'react';
import { Product } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';

interface ProductGridWithModalProps {
    products: Product[];
}

export function ProductGridWithModal({ products }: ProductGridWithModalProps) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDetailsClick = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProduct(null), 300); // Clear after animation
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        onDetailsClick={handleDetailsClick}
                    />
                ))}
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}
