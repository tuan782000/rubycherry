import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Instagram,
    Facebook,
    Youtube
} from 'lucide-react';

const ContactFooter: React.FC = () => {
    return (
        <div className='bg-red-950 text-white pt-24 pb-12'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20'>
                    {/* Newsletter / CTA */}
                    <div>
                        <h2 className='text-4xl font-serif mb-6'>
                            Để nhận ưu đãi độc quyền
                        </h2>
                        <p className='text-red-100/70 mb-8 max-w-md leading-relaxed font-light'>
                            Hãy là những người đầu tiên liên hệ với chúng để
                            nhận ưu đãi về cherry mới nhất và có cơ hội nhận
                            voucher giảm giá 15% cho những đơn hàng đầu tiên.
                        </p>
                        {/* <form className='flex gap-2 max-w-md'>
                            <input
                                type='email'
                                placeholder='Địa chỉ email của bạn'
                                className='flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/40'
                            />
                            <button className='bg-white text-red-900 hover:bg-red-50 px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap shadow-lg'>
                                GỬI NGAY
                            </button>
                        </form> */}
                    </div>

                    {/* Contact Details */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div>
                            <h4 className='font-bold text-lg mb-6 uppercase tracking-widest text-red-400'>
                                Thông tin liên hệ
                            </h4>
                            <ul className='space-y-4'>
                                <li className='flex items-center gap-3 text-red-50/80'>
                                    <Phone size={18} className='text-red-400' />
                                    <span>+84 778748901</span>
                                </li>
                                <li className='flex items-center gap-3 text-red-50/80'>
                                    <Mail size={18} className='text-red-400' />
                                    <span>thaituan7820@gmail.com</span>
                                </li>
                                <li className='flex items-start gap-3 text-red-50/80'>
                                    <MapPin
                                        size={18}
                                        className='text-red-400 mt-1'
                                    />
                                    <span>
                                        123 Hương Lộ 2, Quận Bình Tân, TP. Hồ
                                        Chí Minh
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-bold text-lg mb-6 uppercase tracking-widest text-red-400'>
                                Kết nối xã hội
                            </h4>
                            <div className='flex gap-4'>
                                <a
                                    href='#'
                                    className='w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-red-900 transition-all border border-white/10'
                                >
                                    <Instagram size={24} />
                                </a>
                                <a
                                    href='#'
                                    className='w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-red-900 transition-all border border-white/10'
                                >
                                    <Facebook size={24} />
                                </a>
                                <a
                                    href='#'
                                    className='w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-red-900 transition-all border border-white/10'
                                >
                                    <Youtube size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFooter;
