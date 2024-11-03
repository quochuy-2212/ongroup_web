import useScrollPosition from '@/hooks/useScrollPosition';
import Menu from '@/layout/Menu/Menu';
import Search from '@/layout/Search/Search';
import useMenuStore from '@/zustand/useMenuStore';
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const { scrollY } = useScrollPosition();

    const { toggleMenu } = useMenuStore();
    return (
        <div className="w-full flex justify-between items-center absolute top-0 right-0 p-4">
            <FaBars color="white" size={30} onClick={() => toggleMenu()} className="cursor-pointer " />
            {scrollY > 600 && (
                <FaBars
                    size={30}
                    onClick={() => toggleMenu()}
                    className="cursor-pointer fixed top-5 left-5 text-[var(--color-primary)]"
                />
            )}
            <Search />
            <Menu />
        </div>
    );
};

export default Header;
