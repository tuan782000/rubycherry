import React from 'react';
import { Truck, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

const FEATURES = [
    {
        icon: <Truck size={32} />,
        title: 'Giao Hàng Tốc Hành',
        desc: 'Hệ thống vận chuyển lạnh chuyên nghiệp, đảm bảo cherry tươi nguyên như vừa hái.'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Nguồn Gốc Rõ Ràng',
        desc: 'Được trồng từ các nông trại Úc đảm bảo theo tiêu chuẩn của Úc, Đầy đủ giấy tờ chứng nhận nhập khẩu.'
    },
    {
        icon: <HeartPulse size={32} />,
        title: 'An Toàn Sức Khỏe',
        desc: 'Không hóa chất bảo quản, giàu chất chống oxy hóa giúp cải thiện giấc ngủ và tim mạch.'
    },
    {
        icon: <Sparkles size={32} />,
        title: 'Lựa Chọn Tinh Tế',
        desc: 'Từng trái cherry được kiểm tra bằng tay để đảm bảo kích thước đồng nhất và không tì vết.'
    }
];

const WhyChooseUs: React.FC = () => {
    return (
        <div className='py-24 bg-stone-50 overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row items-center gap-16'>
                    {/* Text Content */}
                    <div className='w-full lg:w-1/2'>
                        <span className='text-red-600 font-bold tracking-widest uppercase text-sm'>
                            Vì sao chọn RubyCherry?
                        </span>
                        <h2 className='text-4xl md:text-6xl font-serif mt-2 mb-8 leading-tight'>
                            Cam kết chất lượng đến từng trái quả
                        </h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {FEATURES.map((item, idx) => (
                                <div
                                    key={idx}
                                    className='group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all'
                                >
                                    <div className='text-red-600 mb-4 group-hover:scale-110 transition-transform origin-left'>
                                        {item.icon}
                                    </div>
                                    <h3 className='text-lg font-bold mb-2 text-stone-800'>
                                        {item.title}
                                    </h3>
                                    <p className='text-stone-500 text-sm leading-relaxed'>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Images */}
                    <div className='w-full lg:w-1/2 relative h-[500px]'>
                        <div className='absolute top-0 right-0 w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-2xl z-10'>
                            <img
                                src='https://images.unsplash.com/photo-1611096265583-5d745206f2a0?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt='Cherry Background'
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='absolute bottom-0 left-0 w-1/2 h-[250px] bg-red-600 rounded-3xl p-8 flex flex-col justify-end text-white z-20 shadow-xl'>
                            <p className='text-5xl font-serif font-bold mb-2'>
                                99%
                            </p>
                            <p className='text-sm font-light leading-snug'>
                                Khách hàng hài lòng với độ tươi và vị ngọt của
                                chúng tôi.
                            </p>
                        </div>
                        {/* Geometric accents */}
                        <div className='absolute top-1/2 left-1/4 w-32 h-32 bg-stone-200 rounded-full mix-blend-multiply opacity-50 blur-xl'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
