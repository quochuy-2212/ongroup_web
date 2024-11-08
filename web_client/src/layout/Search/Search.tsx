'use client';
import ImageTag from '@/components/ImageTag/ImageTag';
import useWindowSize from '@/hooks/useWindowSize';
import React, { useRef, useState } from 'react';
import { FaCircleNotch, FaSearch } from 'react-icons/fa';

const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [isValue, setIsValue] = useState<boolean>(false);
    const { width } = useWindowSize();

    const handleChangeValue = () => {
        setLoading(inputRef?.current?.value === '' ? false : true);
        setIsValue(inputRef?.current?.value === '' ? false : true);
        handleShowResult();
    };
    const handleShowResult = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    const handleFocus = () => {
        setIsValue(inputRef?.current?.value === '' ? false : true);
    };
    const handleBlur = () => {
        setIsValue(false);
    };
    return (
        <div className="bg-[hsla(0,0%,100%,.2)] py-2 px-4 rounded-full flex items-center relative shadow-2xl ">
            <input
                ref={inputRef}
                placeholder="Tìm kiếm..."
                className={`bg-transparent  outline-none 
                    ${
                        scrollY > 600 && width >= 1023
                            ? 'text-[var(--color-primary)] '
                            : 'text-[var(--text-color-secondary)]'
                    }`}
                onChange={handleChangeValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {loading ? (
                <FaCircleNotch color="white" className=" animate-spin" />
            ) : (
                <FaSearch color="white" className="cursor-pointer" />
            )}

            <ul
                className={`overflow-hidden ${
                    !!isValue && !loading ? 'max-h-auto' : 'max-h-0 '
                } transition-all duration-1000 mt-2 w-full bg-white absolute top-full right-0 z-50 shadow-2xl`}
            >
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <li key={item} className="text-xs hover:bg-gray-300 p-2 cursor-pointer flex gap-4">
                        <div className="w-1/4 flex items-center justify-center">
                            <ImageTag
                                src="https://ongroup.com.vn/wp-content/uploads/2023/09/khai-truong-onlead-3-1.jpg"
                                alt="img-search"
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                        <p className="w-3/4"> Khai trương chi nhánh Hà Nội - cột mốc vàng son trong sự nghiệp Onlead</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
