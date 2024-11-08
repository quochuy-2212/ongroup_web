import { IMenu } from '@/interface/data-interface';
import { ConvertSlug } from '@/util/ConvertSlug';

export const menu_data: IMenu[] = [
    {
        text: 'Về chúng tôi',
        get href() {
            return ConvertSlug(this.text);
        },
        menu_sub: [
            {
                text: 'On Group',
                get href() {
                    return ConvertSlug(this.text);
                },
                menu_sub: [],
            },
            {
                text: 'Ban Lãnh Đạo',
                get href() {
                    return ConvertSlug(this.text);
                },
                menu_sub: [],
            },
        ],
    },
    {
        text: 'Công ty thành viên',
        get href() {
            return ConvertSlug(this.text);
        },
        menu_sub: [],
    },
    {
        text: 'Phát triển bền vững',
        get href() {
            return ConvertSlug(this.text);
        },
        menu_sub: [
            {
                text: 'Văn hóa doanh nghiệp',
                get href() {
                    return ConvertSlug(this.text);
                },
                menu_sub: [],
            },
            {
                text: 'Chiến lược nhân sự',
                get href() {
                    return ConvertSlug(this.text);
                },
                menu_sub: [],
            },
            {
                text: 'Cộng đồng & Xã hội',
                get href() {
                    return ConvertSlug(this.text);
                },
                menu_sub: [],
            },
        ],
    },
    {
        text: 'Tin tức - Sự kiện',
        get href() {
            return ConvertSlug(this.text);
        },
        menu_sub: [
            {
                text: 'Công ty thành viên',
                get href() {
                    return `/tin-tuc-su-kien/${ConvertSlug(this.text)}`;
                },
                menu_sub: [],
            },
            {
                text: 'Hợp tác - Tài trợ',
                get href() {
                    return `/tin-tuc-su-kien/${ConvertSlug(this.text)}`;
                },
                menu_sub: [],
            },
            {
                text: 'On Group',
                get href() {
                    return `/tin-tuc-su-kien/${ConvertSlug(this.text)}`;
                },
                menu_sub: [],
            },
            {
                text: 'Thông tin báo chí',
                get href() {
                    return `/tin-tuc-su-kien/${ConvertSlug(this.text)}`;
                },
                menu_sub: [],
            },
            {
                text: 'Tuyển dụng',
                get href() {
                    return ConvertSlug(this.text);
                },
                menu_sub: [],
            },
        ],
    },
    {
        text: 'Liên hệ',
        get href() {
            return ConvertSlug(this.text);
        },
        menu_sub: [],
    },
];
