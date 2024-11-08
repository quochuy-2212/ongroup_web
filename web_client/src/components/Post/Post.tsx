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
        <div className="group relative overflow-hidden space-y-2 shadow-lg rounded-md cursor-pointer xl:p-0">
            <div className="background-effect-news"></div>
            <Link
                href="/khai-truong-chi-nhanh-ha-noi-cot-moc-vang-son-trong-su-nghiep-cua-onlead-10"
                className="relative"
            >
                <ImageTag
                    src={data_post.image}
                    alt="img-post"
                    className="rounded-md xl:rounded-b-none xl:group-hover:scale-105 transition-all duration-500"
                />
            </Link>
            <p className="absolute top-2 left-2 !mt-0 flex gap-2 items-center text-[var(--color-primary)] text-sm opacity-80">
                <FaRegClock />
                <span> {data_post.date}</span>
            </p>

            <div className="relative p-4 rounded-b-md space-y-2 z-10  !mt-0 ">
                <Link
                    href="/khai-truong-chi-nhanh-ha-noi-cot-moc-vang-son-trong-su-nghiep-cua-onlead-10"
                    className="xl:group-hover:text-white leading-8 line-clamp-2 font-bold text-base"
                >
                    {data_post.title}
                </Link>

                <p className="xl:group-hover:text-white leading-8 line-clamp-3 text-[var(--text-color-subtext)] text-base transition-all duration-700 cursor-text">
                    {data_post.sub_title}
                </p>
            </div>
        </div>
    );
};

export default Post;
