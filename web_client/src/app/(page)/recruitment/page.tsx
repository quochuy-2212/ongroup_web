import Button from '@/components/Button/Button';
import ImageTag from '@/components/ImageTag/ImageTag';
import React from 'react';
import { FaSearch, FaStarOfDavid } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import BoxRecruiment from './[detail]/components/BoxRecruiment';

const recruitmentPage = () => {
    const location: string[] = ['Tất cả địa điểm', 'Hà Nội', 'Hồ Chí Minh', 'Buôn Ma Thuột'];
    const experience: string[] = [
        'Tất cả kinh nghiệm',
        'Dưới 1 năm',
        '1 năm',
        '2 năm',
        '3 năm',
        '4 năm',
        '5 năm',
        'Trên 5 năm',
    ];
    const time: string[] = ['Tất cả hình thức', 'Toàn thời gian', 'Theo ca', 'Linh hoạt'];
    return (
        <div className="container m-auto space-y-10">
            <div className="grid grid-cols-10 gap-5 xl:gap-10 text-xs">
                <div className="col-span-10 md:col-span-5 xl:col-span-2 flex gap-4 items-center border-0 border-solid border-[var(--color-primary)] p-2 bg-white shadow-2xl rounded-md">
                    <FaSearch className="cursor-pointer font-bold" />
                    <input
                        placeholder="Nhập vị trí việc làm ..."
                        className="outline-none w-full h-full py-2 font-bold placeholder:text-black placeholder:font-bold"
                    />
                </div>
                <div className="col-span-10 md:col-span-5 xl:col-span-2 font-bold flex gap-2 items-center border-0 border-solid border-[var(--color-primary)] p-2 bg-white shadow-2xl rounded-md">
                    <HiOutlineLocationMarker />
                    <select className="outline-none w-full h-full p-2 cursor-pointer bg-white">
                        {location.map((item, idx) => (
                            <option value={item} key={idx}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-10 md:col-span-5 xl:col-span-2 font-bold flex gap-2 items-center border-0 border-solid border-[var(--color-primary)] p-2 bg-white shadow-2xl rounded-md">
                    <FaStarOfDavid />
                    <select className="outline-none w-full h-full p-2 cursor-pointer bg-white">
                        {experience.map((item, idx) => (
                            <option value={item} key={idx}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-10 md:col-span-5 xl:col-span-2 font-bold flex gap-2 items-center border-0 border-solid border-[var(--color-primary)] p-2 bg-white shadow-2xl rounded-md">
                    <FaSearch className="cursor-pointer" />

                    <select className="outline-none w-full h-full p-2 cursor-pointer bg-white">
                        {time.map((item, idx) => (
                            <option value={item} key={idx}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-10 md:col-span-5 xl:col-span-1 font-bold flex gap-2 items-center border-0 border-solid border-[var(--color-primary)] bg-white shadow-2xl rounded-md">
                    <Button type="primary" className="w-full h-full flex justify-center items-center shadow-2xl">
                        Tìm kiếm
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4 xl:col-span-3 space-y-5">
                    <BoxRecruiment />
                    <BoxRecruiment />
                </div>

                <div className="col-span-1 hidden xl:block">
                    <ImageTag
                        src="https://ongroup.com.vn/wp-content/uploads/2024/03/2694582-e1694431111963.jpg"
                        alt="img"
                    />
                </div>
            </div>
        </div>
    );
};

export default recruitmentPage;
