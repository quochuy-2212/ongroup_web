import React from 'react';

interface IProps {
    title: string;
    sub_title?: string;
}

const Title: React.FC<IProps> = ({ title, sub_title }) => {
    return (
        <div className="text-center flex flex-col gap-5">
            <h2 className="text-center text-2xl xl:text-3xl text-[var(--color-primary)] uppercase font-black">
                {title}
            </h2>
            {sub_title && <p className="text-base xl:text:lg xl:px-24 ">{sub_title}</p>}
        </div>
    );
};

export default Title;
