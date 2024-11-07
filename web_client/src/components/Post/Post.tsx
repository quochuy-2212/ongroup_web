import { IPosts } from '@/interface/data-interface';
import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import ImageTag from '../ImageTag/ImageTag';
import Link from 'next/link';

interface IProp {
    data_post: IPosts;
}

const Post: React.FC<IProp> = ({ data_post }) => {
    return (
        <div className="group relative overflow-hidden space-y-2 shadow-lg rounded-md cursor-pointer p-4 xl:p-0">
            <div className="background-effect-news"></div>
            <Link href="/" className="relative">
                <ImageTag src={data_post.image} alt="img-post" className="rounded-md xl:rounded-b-none" />
            </Link>

            <div className="relative px-8 pb-8 pt-4 rounded-b-md space-y-5 z-10">
                <Link href="/" className="xl:group-hover:text-white leading-8 line-clamp-2 font-bold text-base">
                    {data_post.title}
                </Link>
                <p className="flex gap-2 items-center text-[var(--text-color-date)] text-sm opacity-80">
                    <FaRegClock />
                    <span> {data_post.date}</span>
                </p>
                <p className="xl:group-hover:text-white leading-8 line-clamp-3 text-[var(--text-color-subtext)] text-base transition-all duration-700">
                    {data_post.sub_title}
                </p>
            </div>
        </div>
    );
};

export default Post;
