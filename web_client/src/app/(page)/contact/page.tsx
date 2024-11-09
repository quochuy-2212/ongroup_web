import Button from '@/components/Button/Button';
import ImageTag from '@/components/ImageTag/ImageTag';
import Link from 'next/link';
import React from 'react';
import { HiOutlineAnnotation, HiOutlineLocationMarker, HiOutlineUser, HiPhone } from 'react-icons/hi';
interface ISocial {
    src: string;
    href: string;
}

const ContactPage = () => {
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
        <div className="container m-auto space-y-20">
            <div className="flex flex-col xl:flex-row justify-center gap-10 items-center">
                <ImageTag
                    src="https://ongroup.com.vn/wp-content/uploads/2024/03/Chung-toi-co-the-giup-gi-cho-ban.jpg"
                    alt="img-contact"
                    className="rounded-full w-full xl:w-[500px] h-[500px] object-cover xl:hover:scale-110 transition-transform duration-500"
                />
                <div className=" p-2 rounded-md space-y-10">
                    <h2 className="text-3xl xl:text-5xl text-center font-black text-[var(--color-primary)]">
                        Chúng tôi có thể giúp gì cho bạn
                    </h2>
                    <div className="space-y-10">
                        <div className=" space-y-3 ">
                            <p className="text-xl font-semibold">Truyền thông</p>
                            <p>
                                Nếu bạn đang làm việc ở cơ quan truyền thông và muốn liên hệ với chúng tôi, vui lòng gửi
                                qua email
                            </p>
                            <p className="font-black">support@ongroup.com.vn</p>
                        </div>
                        <div className=" space-y-3 text-right">
                            <p className="text-xl font-semibold">Cơ hội việc làm</p>
                            <p>
                                Nếu bạn đang làm việc ở cơ quan truyền thông và muốn liên hệ với chúng tôi, vui lòng gửi
                                qua email
                            </p>
                            <p className="font-black">support@ongroup.com.vn</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-3xl xl:text-5xl text-center xl:text-left font-black text-[var(--color-primary)] pb-8">
                    Liên hệ chúng tôi qua
                </h2>
                <div className="grid grid-cols-3 ">
                    <div className="col-span-3 xl:col-span-1 space-y-10 pb-4 xl:pb-0">
                        <p className="text-xl font-bold text-center xl:text-left">
                            Hệ thống văn phòng chi nhánh toàn quốc
                        </p>
                        <div className="space-y-5 ">
                            <p className="flex gap-2 items-center font-semibold text-[var(--color-primary)]">
                                <HiOutlineLocationMarker /> <span>Văn phòng Hồ Chí Minh</span>
                            </p>
                            <p className="text-red-500 underline">
                                Số 45 Đinh Thị Thi, Hiệp Bình Phước, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh, Việt Nam
                                (KDT Vạn Phúc).
                            </p>
                        </div>
                        <div className="space-y-5">
                            <p className="flex gap-2 items-center font-semibold text-[var(--color-primary)]">
                                <HiOutlineLocationMarker /> <span>Văn phòng Hà Nội</span>
                            </p>
                            <p>Số 15 Ngõ 11, Duy Tân, Cầu Giấy, Hà Nội.</p>
                        </div>
                        <div className="space-y-5">
                            <p className="flex gap-2 items-center font-semibold text-[var(--color-primary)]">
                                <HiOutlineLocationMarker /> <span>Chi nhánh Buôn Ma Thuột</span>
                            </p>
                            <p>08 Kpa Púi, P. Tân An, TP. BMT.</p>
                        </div>
                    </div>
                    <div className="col-span-3 xl:col-span-2 w-full rounded-md overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7837.099147545006!2d106.71238700000002!3d10.845741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752871d29df0f5%3A0xf72f2b2eb944c32!2zNDUgxJAuIMSQaW5oIFRo4buLIFRoaSwgS2h1IMSRw7QgVGjhu4sgVuG6oW4gUGjDumMsIFRo4bunIMSQ4bupYywgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1731101516947!5m2!1svi!2sus"
                            width="100%"
                            height="450"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 pt-8 gap-10">
                <div className="col-span-2 xl:col-span-1 order-2 xl:order-1 flex justify-center">
                    <ImageTag
                        src="https://ongroup.com.vn/wp-content/uploads/2024/03/n1DO6YLh-Frame-4.png"
                        alt="img-contact"
                        className="rounded-full w-[500px] h-[500px] object-cover hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="col-span-2 xl:col-span-1 order-1 xl:order-2 space-y-7">
                    <h2 className="text-3xl text-center xl:text-right xl:text-5xl font-black text-[var(--color-primary)]">
                        Kết nối với chúng tôi
                    </h2>
                    <p>Gửi tin nhắn cho chúng tôi để được giải đáp mọi thắc mắc về sản phẩm và dịch vụ của DN GROUP</p>
                    <div className="border-2 border-solid border-[var(--color-primary)] flex items-center gap-2 p-2 rounded-md overflow-hidden cursor-pointer">
                        <HiOutlineUser />
                        <input
                            placeholder="Nhập tên của bạn"
                            className="bg-transparent text-sm outline-none  w-full cursor-pointer"
                        />
                    </div>
                    <div className="border-2 border-solid border-[var(--color-primary)] flex items-center gap-2 p-2 rounded-md overflow-hidden cursor-pointer">
                        <HiPhone />
                        <input
                            placeholder="Nhập tên của bạn"
                            className="bg-transparent text-sm outline-none  w-full cursor-pointer"
                        />
                    </div>
                    <div className="border-2 border-solid border-[var(--color-primary)] flex items-start gap-2 p-2 rounded-md overflow-hidden cursor-pointer">
                        <HiOutlineAnnotation />

                        <textarea
                            placeholder="Nhập tên của bạn"
                            className="bg-transparent text-sm outline-none  w-full h-20 cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between w-full gap-5">
                        <div className="flex flex-col xl:flex-row gap-5 items-center order-2 xl:order-1">
                            <p className="text-lg ">Theo dõi chúng tôi tại</p>
                            <ul className="flex  gap-5 w-4/5 md:w-3/5 xl:w-2/5">
                                {social?.map((item) => (
                                    <li key={item.src} className="">
                                        <Link href={item.href}>
                                            <ImageTag src={item.src} alt="social" className="w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button type="primary" className="min-w-24 order-1 xl:order-2">
                            Gửi
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
