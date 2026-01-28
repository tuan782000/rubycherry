
import React from 'react';
import { MARQUEE_TEXTS } from '../constants';
import { Star } from 'lucide-react';

const Marquee: React.FC = () => {
  return (
    <div className="bg-red-600 py-6 overflow-hidden border-y border-red-700">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Double the array for seamless looping */}
        {[...MARQUEE_TEXTS, ...MARQUEE_TEXTS].map((text, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-white text-2xl font-bold uppercase tracking-wider">{text}</span>
            <Star className="ml-8 text-red-300 fill-current" size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
