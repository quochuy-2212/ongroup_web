'use client';
import { menu_data } from '@/data/menu';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaAngleDown, FaAngleUp, FaPlus } from 'react-icons/fa';
import useMenuStore from '@/zustand/useMenuStore';

const Menu = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const { isMenuOpen, toggleMenu } = useMenuStore();

    const handleClickMenu = (id: string) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };
    return (
        <div
            className={`${
                isMenuOpen ? 'visible opacity-100  ' : 'invisible opacity-0 '
            } absolute top-0 left-0 z-50 h-screen bg-black
             transition-all duration-500 w-full pr-4 flex items-center justify-between`}
        >
            <AiOutlineClose
                size={40}
                className="absolute top-4 left-4 hover:rotate-180 font-bold text-white hover:text-red-600 cursor-pointer transition-all duration-500"
                onClick={() => toggleMenu()}
            />
            <ul className="w-full flex flex-col justify-center items-start gap-y-10 flex-wrap px-28">
                {menu_data?.map((header_item) => (
                    <li
                        key={header_item.href}
                        className="text-lg text-[var(--text-color-secondary)] 
                                    transition-all duration-300
                                    w-full"
                    >
                        <div className="w-full flex items-center gap-2 relative">
                            <div className="w-full space-y-3">
                                <p className="w-full flex gap-2 items-center ">
                                    <Link
                                        href={header_item.href}
                                        className={`w-full border-l-2 hover:border-l-0 hover:border-b-2 border-solid border-[var(--color-primary)] font-black p-3
                                            ${activeId === header_item.href ? 'text-red-600' : ''}`}
                                    >
                                        {header_item.text}
                                    </Link>

                                    {header_item.menu_sub.length != 0 &&
                                        (activeId === header_item.href ? (
                                            <FaAngleUp
                                                data-id={header_item.href}
                                                onClick={() => handleClickMenu(header_item.href)}
                                                size={36}
                                                className="hover:rotate-[360deg] font-bold text-white hover:text-red-600 cursor-pointer transition-all duration-700"
                                            />
                                        ) : (
                                            <FaAngleDown
                                                data-id={header_item.href}
                                                onClick={() => handleClickMenu(header_item.href)}
                                                size={36}
                                                className="hover:rotate-[360deg] font-bold text-white hover:text-red-600 cursor-pointer transition-all duration-700"
                                            />
                                        ))}
                                </p>
                                <div
                                    className={`overflow-hidden flex flex-col px-5 gap-3 transition-all duration-700 ${
                                        activeId !== header_item.href ? 'max-h-0' : 'max-h-[1000px] '
                                    } `}
                                >
                                    {header_item?.menu_sub.map((menuItem) => (
                                        <Link
                                            key={menuItem.href}
                                            href={menuItem.href}
                                            className="hover:text-[var(--color-primary)] flex gap-3 items-center"
                                        >
                                            <FaPlus size={12} />
                                            {menuItem.text}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
