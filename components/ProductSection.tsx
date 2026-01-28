import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductModal from './ProductModal';
import { Eye, Plus } from 'lucide-react';

const ProductSection: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );

    return (
        <div className='py-24 bg-white'>
            <div className='container mx-auto px-4'>
                {/* Section Header */}
                <div className='text-center mb-16 max-w-2xl mx-auto'>
                    <span className='text-red-600 font-bold tracking-widest uppercase text-sm'>
                        Danh mục nổi bật
                    </span>
                    <h2 className='text-4xl md:text-5xl font-serif mt-2 mb-4'>
                        Trải Nghiệm Hương Vị Thượng Hạng
                    </h2>
                    <p className='text-stone-500 leading-relaxed'>
                        Chúng tôi tuyển chọn những giống Cherry tốt nhất từ khắp
                        các tiểu bang của Úc, đảm bảo độ tươi ngon vượt trội khi
                        đến tay khách hàng.
                    </p>
                </div>

                {/* Product Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {PRODUCTS.map(product => (
                        <div
                            key={product.id}
                            className='group bg-red-50/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] border border-red-100/50'
                        >
                            {/* Image Container */}
                            <div className='relative aspect-[4/5] overflow-hidden'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                />
                                {/* Lớp phủ Hover màu Đỏ nhẹ trong suốt */}
                                <div className='absolute inset-0 bg-red-600/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3'>
                                    <button
                                        onClick={() =>
                                            setSelectedProduct(product)
                                        }
                                        className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg'
                                        title='Xem chi tiết'
                                    >
                                        <Eye size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Info */}
                            <div className='p-6'>
                                <div className='flex justify-between items-start mb-2'>
                                    <h3 className='text-xl font-bold text-stone-800 group-hover:text-red-700 transition-colors'>
                                        {product.name}
                                    </h3>
                                </div>
                                <p className='text-stone-400 text-xs mb-4 italic'>
                                    {product.scientificName}
                                </p>
                                <div className='flex justify-between items-center'>
                                    <span className='text-red-600 font-bold text-xl'>
                                        {product.price}
                                    </span>
                                    <button
                                        onClick={() =>
                                            setSelectedProduct(product)
                                        }
                                        className='text-stone-600 font-semibold text-sm hover:text-red-600 transition-colors flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-sm border border-stone-100'
                                    >
                                        Chi tiết
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default ProductSection;
