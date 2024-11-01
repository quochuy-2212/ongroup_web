import { IHeader } from '@/interface/data-interface';
import { ConvertSlug } from '@/util/ConvertSlug';

export const header_data: IHeader[] = [
    {
        text: 'Về chúng tôi',
        get href() {
            return ConvertSlug(this.text);
        },
        menu: [
            {
                text: 'On Group',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
            {
                text: 'Ban Lãnh Đạo',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
        ],
    },
    {
        text: 'Công ty thành viên',
        get href() {
            return ConvertSlug(this.text);
        },
    },
    {
        text: 'Phát triển bền vững',
        get href() {
            return ConvertSlug(this.text);
        },
        menu: [
            {
                text: 'Văn hóa doanh nghiệp',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
            {
                text: 'Chiến lược nhân sự',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
            {
                text: 'Cộng đồng & Xã hội',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
        ],
    },
    {
        text: 'Tin tức - Sự kiện',
        get href() {
            return ConvertSlug(this.text);
        },
        menu: [
            {
                text: 'Công ty thành viên',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
            {
                text: 'Hợp tác - Tài trợ',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
            {
                text: 'On Group',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
            {
                text: 'Thông tin báo chí',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
            {
                text: 'Tuyển dụng',
                get href() {
                    return ConvertSlug(this.text);
                },
            },
        ],
    },
    {
        text: 'Liên hệ',
        get href() {
            return ConvertSlug(this.text);
        },
    },
];
