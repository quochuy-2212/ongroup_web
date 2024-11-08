'use client';
import { menu_data } from '@/data/menu';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaAngleDown, FaAngleUp, FaPlus } from 'react-icons/fa';
import useMenuStore from '@/zustand/useMenuStore';
import Search from '../Search/Search';
import useScrollPosition from '@/hooks/useScrollPosition';
import useWindowSize from '@/hooks/useWindowSize';

const Menu = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const { isMenuOpen, toggleMenu } = useMenuStore();
    const { scrollY } = useScrollPosition();
    const { width } = useWindowSize();

    useEffect(() => {
        const className = 'menu-sm-open';
        const bodyClassList = document.body.classList;

        if (isMenuOpen && !bodyClassList.contains(className)) {
            bodyClassList.add(className);
        } else if (!isMenuOpen && bodyClassList.contains(className)) {
            bodyClassList.remove(className);
        }

        // Cleanup khi component unmount
        return () => {
            bodyClassList.remove(className);
        };
    }, [isMenuOpen, width]);

    const handleClickMenu = (id: string) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    return (
        <>
            <div
                onClick={() => toggleMenu()}
                className={`${
                    isMenuOpen ? 'w-full' : 'w-0'
                } bg-black/60 h-screen fixed top-0 left-0 z-30 transition-all duration-500`}
            ></div>
            <div
                className={`${
                    isMenuOpen ? 'opacity-100' : '-translate-x-full opacity-0'
                } fixed top-0 left-0 z-40 h-full xl:h-screen bg-white shadow-2xl transition-all duration-500 
                border-r-4 border-solid border-[var(--color-primary)]  w-full xl:w-1/4 pr-4 flex flex-col justify-start gap-16 overflow-y-auto`}
            >
                <div className="flex justify-between p-4">
                    <AiOutlineClose
                        size={40}
                        className=" hover:rotate-180 font-bold z-50 hover:text-red-600 text-[var(--color-primary)] cursor-pointer transition-transform duration-500"
                        onClick={() => toggleMenu()}
                    />
                    {scrollY > 600 && width >= 1023 && <Search />}
                </div>
                <ul className="w-full flex flex-col justify-center items-start gap-y-10 xl:gap-y-10 flex-wrap px-4">
                    {menu_data?.map((header_item) => (
                        <li key={header_item.href} className="text-lg text-[var(--text-color-secondary)] w-full">
                            <div className="w-full flex items-center gap-2 relative">
                                <div className="w-full space-y-3">
                                    <p className="w-full flex gap-2 items-center">
                                        <Link
                                            onClick={() => toggleMenu()}
                                            href={header_item.href}
                                            className={`w-full border-l-4 hover:border-l-0 hover:border-b-2 border-solid border-[var(--color-primary)] text-[var(--color-primary)] font-black p-3 transition-colors duration-300
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
                                                        className="hover:rotate-[360deg] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-pointer transition-transform duration-300"
                                                    />
                                                ) : (
                                                    <FaAngleDown
                                                        data-id={header_item.href}
                                                        onClick={() => handleClickMenu(header_item.href)}
                                                        size={36}
                                                        className="hover:rotate-[360deg] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-pointer transition-transform duration-300"
                                                    />
                                                )}
                                            </>
                                        )}
                                    </p>
                                    <div
                                        className={`overflow-hidden flex flex-col px-5 gap-9 xl:gap-3 transition-all duration-500 ease-in-out ${
                                            activeId === header_item.href ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        {header_item?.menu_sub.map((menuItem) => (
                                            <Link
                                                onClick={() => toggleMenu()}
                                                key={menuItem.href}
                                                href={menuItem.href}
                                                className="hover:text-[var(--color-primary)] text-black flex gap-3 items-center"
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
        </>
    );
};

export default Menu;
