import { IconExperience, IconLocation, IconMoney } from '@/components/Icon/Icon';
import Link from 'next/link';
import React from 'react';
import IconText from './IconText';

const LocationRecruitment = () => {
    return (
        <div className="bg-blue-200 p-4 space-y-5 rounded-lg">
            <h2 className="font-black md:font-bold text-base md:text-xl border-b-2 border-solid border-[var(--color-primary)] pb-2">
                Nhân Viên Quay Phim (Media Executive)
            </h2>
            <div className="flex gap-5 md:gap-10 xl:gap-32 flex-wrap">
                <IconText icon={<IconMoney />} title="Mức lương" info="10 - 15 triệu" />
                <IconText icon={<IconLocation />} title="Địa điểm" info="Hồ Chí Minh" />
                <IconText icon={<IconExperience />} title="Kinh nghiệm" info="Dưới 1 năm" />
            </div>
            <div>
                <span className="p-2 bg-white rounded-md">Hạn nộp hồ sơ: 30/03/2024</span>
            </div>
            <div className="w-full">
                <Link
                    href=""
                    className=" button block w-full p-2 bg-gradient text-white text-center font-bold rounded-md bg-red-200"
                >
                    Ứng tuyển ngay
                </Link>
            </div>
        </div>
    );
};

export default LocationRecruitment;
