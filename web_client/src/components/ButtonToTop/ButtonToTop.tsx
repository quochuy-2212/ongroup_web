'use client';

import useScrollPosition from '@/hooks/useScrollPosition';
import React from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ButtonToTop = () => {
    const { scrollY } = useScrollPosition();
    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            {scrollY >= 600 && (
                <button
                    onClick={handleToTop}
                    className="rotate-hover fixed bottom-24 right-10 w-10 h-10 bg-[var(--color-primary)]  
        text-white flex justify-center items-center rounded-full
         transition-all duration-300 animate-bounce
         hover:bg-white hover:text-[var(--color-primary)] border-2 border-[var(--color-primary)] border-solid"
                >
                    <FaAngleUp size={24} />
                </button>
            )}
        </>
    );
};

export default ButtonToTop;
