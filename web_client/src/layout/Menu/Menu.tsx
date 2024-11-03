'use client';
import { menu_data } from '@/data/menu';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaAngleDown, FaAngleUp, FaPlus } from 'react-icons/fa';
import useMenuStore from '@/zustand/useMenuStore';
import Search from '../Search/Search';
import useScrollPosition from '@/hooks/useScrollPosition';

const Menu = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const { isMenuOpen, toggleMenu } = useMenuStore();
    const { scrollY } = useScrollPosition();

    const handleClickMenu = (id: string) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div
            className={`${
                isMenuOpen ? 'opacity-100' : '-translate-x-full opacity-0'
            } fixed top-0 left-0 z-50 h-screen bg-black/90 transition-all duration-500 w-1/4 pr-4 flex flex-col gap-16`}
        >
            <div className="flex justify-between p-4">
                <AiOutlineClose
                    size={40}
                    className=" hover:rotate-180 font-bold text-white hover:text-[var(--color-primary)] cursor-pointer transition-transform duration-500"
                    onClick={() => toggleMenu()}
                />
                {scrollY > 600 && <Search />}
            </div>
            <ul className="w-full flex flex-col justify-center items-start gap-y-10 flex-wrap px-4">
                {menu_data?.map((header_item) => (
                    <li key={header_item.href} className="text-lg text-[var(--text-color-secondary)] w-full">
                        <div className="w-full flex items-center gap-2 relative">
                            <div className="w-full space-y-3">
                                <p className="w-full flex gap-2 items-center">
                                    <Link
                                        href={header_item.href}
                                        className={`w-full border-l-4 hover:border-l-0 hover:border-b-2 border-solid border-[var(--color-primary)] font-black p-3 transition-colors duration-300
                                            ${activeId === header_item.href ? 'text-[var(--color-primary)]' : ''}`}
                                    >
                                        {header_item.text}
                                    </Link>

                                    {header_item.menu_sub.length !== 0 && (
                                        <>
                                            {activeId === header_item.href ? (
                                                <FaAngleUp
                                                    data-id={header_item.href}
                                                    onClick={() => handleClickMenu(header_item.href)}
                                                    size={36}
                                                    className="hover:rotate-[360deg] font-bold text-white hover:text-[var(--color-primary)] cursor-pointer transition-transform duration-300"
                                                />
                                            ) : (
                                                <FaAngleDown
                                                    data-id={header_item.href}
                                                    onClick={() => handleClickMenu(header_item.href)}
                                                    size={36}
                                                    className="hover:rotate-[360deg] font-bold text-white hover:text-[var(--color-primary)] cursor-pointer transition-transform duration-300"
                                                />
                                            )}
                                        </>
                                    )}
                                </p>
                                <div
                                    className={`overflow-hidden flex flex-col px-5 gap-3 transition-all duration-500 ease-in-out ${
                                        activeId === header_item.href ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
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
