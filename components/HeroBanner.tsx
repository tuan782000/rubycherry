import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const SLIDES = [
    {
        image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=1920&auto=format&fit=crop',
        title: 'Tinh Hoa Từ Những Trái Cherry Đỏ',
        subtitle:
            'Vị ngọt thanh khiết, mọng nước và giàu dinh dưỡng được nhập khẩu trực tiếp từ những trang trại uy tín nhất.'
    },
    {
        image: 'https://images.unsplash.com/photo-1520236060906-9c5ed525b025?q=80&w=1920&auto=format&fit=crop',
        title: 'Cherry Vàng Rainier – Vị Ngọt Hoàng Gia',
        subtitle:
            'Món quà thiên nhiên quý hiếm với vẻ ngoài kiêu sa và hương vị không thể lẫn lộn.'
    },
    {
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1920&auto=format&fit=crop',
        title: 'Món Quà Sức Khỏe Cho Gia Đình',
        subtitle:
            'Bổ sung vitamin, chống lão hóa và mang lại năng lượng tích cực cho mỗi ngày của bạn.'
    }
];

const HeroBanner: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () =>
        setCurrent(prev => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    const prevSlide = () =>
        setCurrent(prev => (prev === 0 ? SLIDES.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='relative h-[90vh] md:h-screen w-full overflow-hidden bg-red-50'>
            {SLIDES.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    {/* Background Image */}
                    <div
                        className='absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-100'
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            transform:
                                index === current ? 'scale(1.1)' : 'scale(1)'
                        }}
                    >
                        {/* Lớp phủ Gradient Đỏ Ruby thay cho Đen */}
                        <div className='absolute inset-0 bg-gradient-to-r from-red-950/80 via-red-900/30 to-transparent'></div>
                    </div>

                    {/* Content */}
                    <div className='relative z-20 h-full flex items-center container mx-auto px-4 md:px-12'>
                        <div
                            className={`max-w-2xl transition-all duration-1000 delay-300 transform ${
                                index === current
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-12 opacity-0'
                            }`}
                        >
                            <span className='inline-block text-red-400 font-bold tracking-[0.3em] uppercase mb-4'>
                                RubyCherry Boutique
                            </span>
                            <h1 className='text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6 drop-shadow-lg'>
                                {slide.title}
                            </h1>
                            <p className='text-lg md:text-xl text-red-50 mb-10 leading-relaxed font-light drop-shadow-sm'>
                                {slide.subtitle}
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <a
                                    href='#products'
                                    className='bg-white text-red-700 px-10 py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-all shadow-2xl hover:scale-105 active:scale-95 group'
                                >
                                    KHÁM PHÁ NGAY
                                    <ArrowRight
                                        className='transition-transform group-hover:translate-x-1'
                                        size={20}
                                    />
                                </a>
                                <a
                                    href='#why-us'
                                    className='border border-white/40 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all'
                                >
                                    TÌM HIỂU THÊM
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <div className='absolute bottom-12 right-4 md:right-12 z-30 hidden md:flex gap-4'>
                <button
                    onClick={prevSlide}
                    className='w-14 h-14 rounded-full border border-white/30 flex items-center justify-center bg-white text-red-700 transition-all backdrop-blur-sm'
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className='w-14 h-14 rounded-full border border-white/30 flex items-center justify-center bg-white text-red-700 transition-all backdrop-blur-sm'
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Slide Indicators */}
            <div className='absolute bottom-12 left-4 md:left-12 z-30 flex gap-3'>
                {SLIDES.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-white' : 'w-4 bg-white/30'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroBanner;
