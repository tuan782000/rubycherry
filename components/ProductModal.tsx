import React, { useEffect } from 'react';
import { X, ShoppingCart, MapPin, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    useEffect(() => {
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, []);

    return (
        <div className='fixed inset-0 z-[200] bg-black/40 flex items-center justify-center px-4'>
            {/* Modal */}
            <div
                className='
                    relative
                    w-full
                    max-w-6xl
                    h-[90vh]
                    md:h-[80vh]
                    bg-white
                    rounded-2xl md:rounded-3xl
                    overflow-hidden
                    flex flex-col md:flex-row
                    shadow-2xl
                    animate-in slide-in-from-bottom duration-500
                '
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className='
                        absolute top-4 right-4 md:top-6 md:right-6 z-10
                        w-10 h-10 md:w-12 md:h-12
                        bg-stone-100 hover:bg-red-600 hover:text-white
                        rounded-full flex items-center justify-center
                        transition-all shadow-md group
                    '
                    aria-label='Close modal'
                >
                    <X
                        size={20}
                        className='md:size-6 group-hover:rotate-90 transition-transform'
                    />
                </button>

                {/* Image */}
                <div
                    className='
                        w-full
                        md:flex-[0.55]
                        aspect-video md:aspect-auto
                        md:h-full
                        overflow-hidden
                    '
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className='w-full h-full object-cover object-center'
                    />
                </div>

                {/* Content */}
                <div
                    className='
                        w-full
                        md:flex-[0.45]
                        h-full
                        overflow-y-auto
                        px-6 py-10
                        md:px-10 md:py-16
                        lg:px-14 lg:py-20
                        flex
                    '
                >
                    <div className='w-full max-w-md lg:max-w-lg mx-auto my-auto'>
                        {/* Premium */}
                        <div className='flex items-center gap-3 mb-4'>
                            <span className='block w-8 h-px bg-red-600/60' />
                            <span className='text-xs tracking-[0.3em] uppercase text-stone-500 font-medium'>
                                Premium Selection
                            </span>
                        </div>

                        <h2
                            className='
                                text-3xl
                                md:text-4xl
                                lg:text-6xl
                                font-serif
                                mb-4 md:mb-6
                                text-stone-900
                                leading-tight
                            '
                        >
                            {product.name}
                        </h2>

                        <p className='text-2xl md:text-3xl font-bold text-red-600 mb-6'>
                            {product.price}
                        </p>

                        <p className='text-stone-500 text-base md:text-lg leading-relaxed mb-8 italic'>
                            “{product.description}”
                        </p>

                        <div className='grid grid-cols-2 gap-6 mb-8'>
                            <div>
                                <h4 className='text-xs uppercase tracking-widest text-stone-400 font-bold mb-1'>
                                    Xuất xứ
                                </h4>
                                <p className='flex items-center gap-2 text-stone-800 font-semibold'>
                                    <MapPin
                                        size={16}
                                        className='text-red-600'
                                    />
                                    {product.origin}
                                </p>
                            </div>

                            <div>
                                <h4 className='text-xs uppercase tracking-widest text-stone-400 font-bold mb-1'>
                                    Mùa vụ
                                </h4>
                                <p className='text-stone-800 font-semibold'>
                                    {product.season}
                                </p>
                            </div>
                        </div>

                        <ul className='space-y-2 mb-10'>
                            {[
                                'Giao hàng nhanh 24h',
                                'Đóng gói quà tặng sang trọng',
                                'Kiểm tra hàng trước khi thanh toán'
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className='flex items-center gap-3 text-stone-600'
                                >
                                    <CheckCircle2
                                        size={16}
                                        className='text-green-500'
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className='flex flex-col lg:flex-row gap-4'>
                            <button
                                className='
                                    flex-1
                                    bg-red-600 text-white
                                    py-4 lg:py-5
                                    rounded-full
                                    font-bold text-base lg:text-lg
                                    hover:bg-red-700
                                    transition-all
                                    flex items-center justify-center gap-3
                                    shadow-xl active:scale-95
                                '
                            >
                                <ShoppingCart size={18} />
                                Liên hệ ngay
                            </button>

                            <button
                                onClick={onClose}
                                className='
                                    flex-1
                                    border-2 border-stone-200
                                    py-4 lg:py-5
                                    rounded-full
                                    font-bold text-base lg:text-lg
                                    hover:bg-stone-50
                                    transition-all active:scale-95
                                '
                            >
                                Quay lại
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
