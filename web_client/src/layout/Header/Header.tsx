'use client';

import { header_data } from '@/data/header';
import Link from 'next/link';
import React from 'react';
import './header_style.scss';
import { FaAngleDown } from 'react-icons/fa';
import Search from './Search';
import useScrollPosition from '@/hooks/useScrollPosition';

const Header = () => {
    const { scrollY } = useScrollPosition();
    return (
        <div
            className={`${
                scrollY > 900 && 'bg-[var(--color-primary)]'
            } transition-all duration-500 sticky top-0 left-0 w-full pr-4 flex items-center justify-between`}
        >
            <ul className="flex justify-center items-center gap-y-2 flex-wrap gap-10">
                {header_data?.map((header_item) => (
                    <li
                        key={header_item.href}
                        className="text-lg text-[var(--text-color-secondary)]
                                    transition-all duration-300"
                    >
                        {header_item?.menu ? (
                            <div className="w-full flex items-center gap-2 relative">
                                <div className="header-link-menu">
                                    <Link href={header_item.href} className="header-link flex gap-2 items-center p-3 ">
                                        <span className="font-semibold"> {header_item.text} </span>
                                        <FaAngleDown size={16} color="#7b9ac4" />
                                    </Link>
                                    <span className="header-box-menu ">
                                        {header_item?.menu.map((menuItem) => (
                                            <Link
                                                key={menuItem.href}
                                                href={menuItem.href}
                                                className="header-box-menu-link"
                                            >
                                                {menuItem.text}
                                            </Link>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <Link href={header_item.href} className="header-link font-semibold p-3">
                                {header_item.text}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
            <Search />
        </div>
    );
};

export default Header;
