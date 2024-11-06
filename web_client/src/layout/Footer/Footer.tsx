'use client';

import Button from '@/components/Button/Button';
import ImageTag from '@/components/ImageTag/ImageTag';
import { intro_company_data } from '@/data/intro-company';
import Link from 'next/link';
import React from 'react';
import { HiMail, HiOutlineLocationMarker, HiOutlineMail, HiPhoneOutgoing } from 'react-icons/hi';

interface ISocial {
    src: string;
    href: string;
}

const Footer = () => {
    const social: ISocial[] = [
        {
            src: '/images/facebook.png',
            href: '',
        },
        {
            src: '/images/instagram.png',
            href: '',
        },
        {
            src: '/images/tiktok.png',
            href: '',
        },
        {
            src: '/images/email.png',
            href: '',
        },
        {
            src: '/images/youtube.png',
            href: '',
        },
    ];
    return (
        <div className="mt-16 bg-white border-t-2 border-solid border-[var(--color-primary)]">
            <div className="container m-auto py-8 space-y-5 px-4 xl:px-0">
                <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-2 xl:col-span-1 space-y-3">
                        <div className="w-1/2">
                            <ImageTag src={intro_company_data?.logo} alt="logo-company" />
                        </div>
                        <p className="text-black text-justify leading-8">
                            Với mong muốn đem đến cho thị trường dịch vụ Làm đẹp - Y tế - Giáo dục tốt nhất, DN OROUP
                            theo đuổi sứ mệnh Phụng Sự Từ Tâm, sẵn sàng tạo dựng những giá trị tiên phong để cống hiến
                            cho Việt Nam ngày càng phát triển thịnh vượng.
                        </p>
                    </div>
                    <div className="col-span-2 xl:col-span-1 space-y-3">
                        <h3 className="text-lg">Để lại thông tin liên lạc</h3>
                        <div className="flex gap-2 items-center w-full">
                            <div className="flex w-3/4 gap-2 items-center bg-white border-2 border-solid border-gray-300 p-2 rounded-md">
                                <HiOutlineMail size={24} className="text-gray-300" />
                                <input type="email" placeholder="Nhập email của bạn" className="w-full outline-none" />
                            </div>
                            <div>
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        console.log('click');
                                    }}
                                >
                                    Đăng ký
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="text-lg ">Theo dõi chúng tôi tại</p>
                            <ul className="flex gap-5 w-4/5 md:w-3/5 xl:w-2/5">
                                {social?.map((item) => (
                                    <li key={item.src} className="">
                                        <Link href={item.href}>
                                            <ImageTag src={item.src} alt="social" className="w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 space-y-5">
                    <div className="col-span-12 xl:col-span-12 flex gap-2 items-center">
                        <div className="bg-[var(--color-primary)] text-white rounded-full p-1">
                            <HiOutlineLocationMarker />
                        </div>

                        <p className="text-[var(--color-primary)]">
                            Địa chỉ: Van Phuc City - 2th Floor, 45 Dinh Thi Thi Street, Hiep Binh Phuoc Dist., HCM,
                            Vietnam.
                        </p>
                    </div>

                    <div className="col-span-12 md:col-span-6 xl:col-span-4 flex gap-2">
                        <div className="bg-[var(--color-primary)] text-white rounded-full p-1">
                            <HiPhoneOutgoing />
                        </div>

                        <p className="text-[var(--color-primary)]">
                            Hotline: <Link href="tel:0962.997.999">0962.997.999</Link>
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6 xl:col-span-4 flex gap-2 ">
                        <div className="bg-[var(--color-primary)] text-white rounded-full p-1">
                            <HiMail />
                        </div>
                        <p className="text-[var(--color-primary)]">
                            Email: <Link href="mail:support@ongroup.com.vn">support@ongroup.com.vn</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4 text-center text-white bg-[var(--color-primary)]">
                <p>Copyright © 2024, ONGROUP JSC. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
