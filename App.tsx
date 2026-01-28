import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Marquee from './components/Marquee';
import ProductSection from './components/ProductSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactFooter from './components/ContactFooter';
import ScrollToTop from './components/ScrollToTop';
import ZaloButton from './components/ZaloButton';

const App: React.FC = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Ẩn ở section 1 (HeroBanner cao ~100vh), hiện từ section 2 trở đi
            if (window.scrollY > window.innerHeight * 0.8) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='relative overflow-x-hidden min-h-screen'>
            <Header />

            <main>
                <section id='home'>
                    <HeroBanner />
                </section>

                <Marquee />

                <section id='products'>
                    <ProductSection />
                </section>

                <section id='why-us'>
                    <WhyChooseUs />
                </section>

                <section id='contact'>
                    <ContactFooter />
                </section>
            </main>

            <footer className='py-8 bg-stone-100 text-center text-stone-500 text-sm border-t border-stone-200'>
                <p>
                    &copy; {new Date().getFullYear()} Cherry. All rights
                    reserved.
                </p>
                <p className='mt-2 tracking-widest font-medium uppercase text-[10px]'>
                    Premium Quality Guaranteed
                </p>
            </footer>
            <ZaloButton />
            <ScrollToTop isVisible={showScroll} />
        </div>
    );
};

export default App;
