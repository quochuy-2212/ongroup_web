import ImageTag from '@/components/ImageTag/ImageTag';
import Link from 'next/link';
import React from 'react';
import IconText from './IconText';
import { IconMoney } from '@/components/Icon/Icon';

const BoxRecruiment = () => {
    return (
        <div className="grid grid-cols-8 gap-5 bg-gray-100 p-4 rounded-md">
            <div className="col-span-8 md:col-span-3 xl:col-span-1 mx-auto rounded-md overflow-hidden">
                <ImageTag
                    src="https://ongroup.com.vn/wp-content/uploads/2024/03/quay-dung.png"
                    alt="img"
                    className=""
                />
            </div>
            <div className="col-span-8 md:col-span-5 xl:col-span-6 space-y-3">
                <p className="font-bold text-base">Nhân Viên Quay Phim (Media Executive)</p>
                <p className="font-semibold text-sm flex gap-2">
                    <span>Tuyển dụng:</span>
                    <span className="text-red-600">Onmedia</span>
                </p>
                <div className="flex items-center flex-wrap xl:flex-nowrap gap-5 text-[var(--color-primary)]">
                    <p className="border-0 bg-white border-solid border-[var(--color-primary)] p-2 rounded-md font-semibold text-sm">
                        Hồ Chí Minh
                    </p>
                    <p className="border-0 bg-white border-solid border-[var(--color-primary)] p-2 rounded-md font-semibold text-sm">
                        Còn <span className="text-black font-bold">30</span> ngày để ứng tuyển
                    </p>
                    <p className="border-0 bg-white border-solid border-[var(--color-primary)] p-2 rounded-md font-semibold text-sm">
                        Cập nhật Tháng ba 23, 2024
                    </p>
                </div>
                <div className="hidden md:block xl:hidden">
                    <IconText icon={<IconMoney />} title="Mức lương" info="10 - 15 triệu" />
                </div>
            </div>
            <div className="col-span-8 xl:col-span-1 space-y-5">
                <div className="block md:hidden">
                    <IconText icon={<IconMoney />} title="Mức lương" info="10 - 15 triệu" />
                </div>
                <p className="hidden xl:block text-center text-[var(--color-primary)] font-medium">10 - 15 triệu</p>
                <Link
                    href="/tuyen-dung/nhan-vien-quay-phim-media-executive"
                    className="block w-full text-center button p-2 text-white text-sm rounded-md hover:font-bold"
                >
                    Ứng tuyển
                </Link>
            </div>
        </div>
    );
};

export default BoxRecruiment;
