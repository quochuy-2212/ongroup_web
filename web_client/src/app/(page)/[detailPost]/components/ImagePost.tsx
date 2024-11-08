import ImageTag from '@/components/ImageTag/ImageTag';
import React from 'react';

interface IProp {
    src: string;
    caption?: string;
}

const ImagePost: React.FC<IProp> = ({ src, caption }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <ImageTag src={src} alt="img-post" className="w-full xl:w-2/3 rounded-md" />
            <p className="text-[var(--text-color-subtext)] text-sm text-center">{caption}</p>
        </div>
    );
};

export default ImagePost;
