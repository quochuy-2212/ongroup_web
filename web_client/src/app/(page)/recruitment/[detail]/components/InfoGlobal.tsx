import { IconExperience, IconGender, IconLevel, IconQuantity, IconTimeWork } from '@/components/Icon/Icon';
import React from 'react';
import IconText from './IconText';

const InfoGlobal = () => {
    return (
        <div className="bg-blue-200 h-full p-4 space-y-10 rounded-lg">
            <h2 className="font-bold text-xl border-b-2 border-solid border-[var(--color-primary)] pb-2">
                Thông tin chung
            </h2>
            <div className="grid grid-cols-2 gap-10">
                <div className="col-span-2 md:col-span-1 xl:col-span-2">
                    <IconText icon={<IconLevel />} title="Cấp bậc" info="Nhân viên" />
                </div>
                <div className="col-span-2 md:col-span-1 xl:col-span-2">
                    <IconText icon={<IconExperience />} title="Kinh nghiệm" info="Dưới 1 năm" />
                </div>
                <div className="col-span-2 md:col-span-1 xl:col-span-2">
                    <IconText icon={<IconQuantity />} title="Số lượng tuyển" info="3 người" />
                </div>
                <div className="col-span-2 md:col-span-1 xl:col-span-2">
                    <IconText icon={<IconTimeWork />} title="Hình thức làm việc" info="Toàn thời gian" />
                </div>
                <div className="col-span-2 md:col-span-1 xl:col-span-2">
                    <IconText icon={<IconGender />} title="Giới tính" info="Không yêu cầu" />
                </div>
            </div>
        </div>
    );
};

export default InfoGlobal;
