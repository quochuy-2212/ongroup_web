import Link from 'next/link';
import React from 'react';

interface IProp {
    children: React.ReactNode | string;
    type: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<IProp> = ({ children, type = false, href = '', className = '', onClick }) => {
    const outline = `border-2
        bg-[var(--color-primary)] hover:bg-white 
        text-white hover:text-[var(--color-primary)]  font-bold`;
    const transparent = 'text-[var(--color-primary)] italic hover:font-bold underline';
    const primary = `hover:bg-white bg-[var(--color-primary)]
    hover:text-[var(--color-primary)] text-white font-bold border-2`;

    const classCustom = type == 'outline' ? outline : type == 'transparent' ? transparent : primary;

    return (
        <>
            {onClick ? (
                <button
                    onClick={onClick}
                    className={`p-2 text-center rounded-md border-[var(--color-primary)] border-solid transition-all duration-500 ${classCustom} ${className}`}
                >
                    {children}
                </button>
            ) : (
                <Link
                    href={href}
                    className={`p-2 text-center rounded-md border-[var(--color-primary)] border-solid transition-all duration-500 ${classCustom} ${className}`}
                >
                    {children}
                </Link>
            )}
        </>
    );
};

export default Button;
