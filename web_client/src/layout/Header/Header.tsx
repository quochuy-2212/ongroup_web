import Menu from '@/components/Menu/Menu';
import Search from '@/components/Search/Search';
import useMenuStore from '@/zustand/useMenuStore';
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const { toggleMenu } = useMenuStore();
    return (
        <div className="w-full flex justify-between items-center absolute top-0 left-0 p-4">
            <FaBars color="white" size={30} onClick={() => toggleMenu()} className="cursor-pointer" />
            <Search />
            <Menu />
        </div>
    );
};

export default Header;
