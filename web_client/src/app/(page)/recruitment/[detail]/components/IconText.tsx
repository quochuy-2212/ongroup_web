import React from 'react';

interface IProp {
    icon: React.ReactNode;
    title: string;
    info: string;
}

const IconText: React.FC<IProp> = ({ icon, title, info }) => {
    return (
        <div className="flex items-center gap-4">
            <div className="bg-gradient p-2 flex justify-center items-center w-10 h-10 rounded-full">{icon}</div>
            <p className="flex flex-row xl:flex-col gap-2">
                <span>{title}</span>
                <span className="block md:hidden">:</span>
                <span className="font-bold">{info}</span>
            </p>
        </div>
    );
};

export default IconText;
