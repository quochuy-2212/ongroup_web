'use client';

import useScrollPosition from '@/hooks/useScrollPosition';
import useWindowSize from '@/hooks/useWindowSize';
import Menu from '@/layout/Menu/Menu';
import Search from '@/layout/Search/Search';
import useMenuStore from '@/zustand/useMenuStore';
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const { scrollY } = useScrollPosition();
    const { width } = useWindowSize();

    const { toggleMenu } = useMenuStore();
    const handleClickMenu = () => {
        console.log('huy');
        toggleMenu();
    };
    return (
        <div className="w-full flex justify-between items-center fixed bg-[var(--color-primary)] xl:bg-transparent xl:absolute top-0 right-0 p-4 z-20">
            <FaBars color="white" size={30} onClick={handleClickMenu} className="cursor-pointer " />
            {width >= 1023 && scrollY >= 600 && (
                <FaBars
                    size={30}
                    onClick={handleClickMenu}
                    className="cursor-pointer fixed top-5 left-5 text-[var(--color-primary)] z-20"
                />
            )}
            <Search />
            <Menu />
        </div>
    );
};

export default Header;
