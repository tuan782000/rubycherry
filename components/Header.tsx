import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Khóa cuộn trang khi menu mobile mở
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* HEADER */}
            <header
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
                    isScrolled
                        ? 'bg-white/90 backdrop-blur-md shadow-md py-4'
                        : 'bg-transparent py-6'
                }`}
            >
                <div className='container mx-auto px-6 md:px-12 flex items-center justify-between'>
                    {/* Logo */}
                    <a href='#home' className='flex items-center gap-2 z-[110]'>
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                isScrolled
                                    ? 'bg-red-600 text-white'
                                    : 'bg-white text-red-600'
                            }`}
                        >
                            <ShoppingBag size={20} />
                        </div>
                        <span
                            className={`text-2xl font-bold tracking-tighter ${
                                isScrolled || isMobileMenuOpen
                                    ? 'text-stone-900'
                                    : 'text-white'
                            }`}
                        >
                            RUBY
                            <span className='font-light opacity-70'>
                                CHERRY
                            </span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className='hidden lg:flex items-center gap-10'>
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                                    isScrolled
                                        ? 'text-stone-600 hover:text-red-600'
                                        : 'text-white/90 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95 ${
                                isScrolled
                                    ? 'bg-red-600 text-white hover:bg-red-700'
                                    : 'bg-white text-red-600 hover:bg-stone-100'
                            }`}
                        >
                            MUA NGAY
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden z-[110] p-2 transition-colors ${
                            isMobileMenuOpen || isScrolled
                                ? 'text-stone-900'
                                : 'text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY */}
            <div
                className={`fixed inset-0 z-[105] bg-white transition-all duration-500 ease-in-out lg:hidden ${
                    isMobileMenuOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-full pointer-events-none'
                }`}
            >
                {/* CLOSE BUTTON (GÓC PHẢI) */}
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='absolute top-6 right-6 z-[120] w-12 h-12 bg-stone-100 hover:bg-red-600 hover:text-white rounded-full flex items-center justify-center transition-all shadow-md group'
                    aria-label='Close menu'
                >
                    <X
                        size={24}
                        className='group-hover:rotate-90 transition-transform'
                    />
                </button>

                {/* MENU CONTENT */}
                <div className='flex flex-col h-full items-center justify-center gap-8'>
                    {NAV_LINKS.map((link, idx) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='text-3xl font-serif font-bold text-stone-900 hover:text-red-600 transition-colors'
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {link.label}
                        </a>
                    ))}

                    <button className='mt-8 bg-red-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl'>
                        LIÊN HỆ NGAY
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
