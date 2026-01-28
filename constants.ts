import { Product, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
    { label: 'Sản phẩm', href: '#products' },
    { label: 'Tại sao chọn chúng tôi', href: '#why-us' },
    { label: 'Liên hệ', href: '#contact' }
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Cherry Đỏ Mỹ (Bing)',
        scientificName: 'Prunus avium L.',
        price: '450,000đ / kg',
        description:
            'Giống cherry đỏ đậm phổ biến nhất thế giới với hương vị ngọt ngào, mọng nước và giòn tan. Được thu hoạch tại vùng California đầy nắng.',
        origin: 'Washington, USA',
        season: 'Tháng 5 - Tháng 8',
        image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=800&auto=format&fit=crop',
        nutrition: {
            calories: '63 kcal',
            vitaminC: '12%',
            potassium: '5%'
        }
    },

    {
        id: 3,
        name: 'Cherry Đen New Zealand',
        scientificName: 'Prunus avium "Lapins"',
        price: '550,000đ / kg',
        description:
            'Những trái cherry đen thẫm, kích thước lớn vượt trội. Trái cứng, giòn, hậu vị ngọt sâu lắng đặc trưng của vùng khí hậu ôn đới New Zealand.',
        origin: 'Central Otago, NZ',
        season: 'Tháng 12 - Tháng 2',
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=800&auto=format&fit=crop',
        nutrition: {
            calories: '65 kcal',
            vitaminC: '10%',
            potassium: '5%'
        }
    }
];

export const MARQUEE_TEXTS = [
    'CHERRY NHẬP KHẨU 100%',
    'TƯƠI NGON TRONG NGÀY',
    'GIÁ TỐT NHẤT THỊ TRƯỜNG',
    'FREE SHIP NỘI THÀNH',
    'CHERRY ĐỎ MỸ',
    'CHERRY VÀNG RAINIER',
    'GIAO HÀNG TỐC HÀNH',
    'ĐÓNG GÓI SANG TRỌNG'
];
