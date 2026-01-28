import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
    isVisible: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ isVisible }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-[90] w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform ${
                isVisible
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-20 opacity-0 scale-50 pointer-events-none'
            } hover:bg-red-700 hover:scale-110 active:scale-95`}
            aria-label='Về đầu trang'
        >
            <ArrowUp size={24} />
        </button>
    );
};

export default ScrollToTop;

// http://zalo.me/0778748901
