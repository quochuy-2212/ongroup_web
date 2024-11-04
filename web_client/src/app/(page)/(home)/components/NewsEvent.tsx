'use client';
import ImageTag from '@/components/ImageTag/ImageTag';
import { posts_coop_sponsor_data } from '@/data/posts-coop-sponsor';
import { posts_info_press_data } from '@/data/posts-info-press';
import { posts_member_company_data } from '@/data/posts-member-company';
import { posts_ongroup_data } from '@/data/posts-ongroup';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import '../styles/style_field_active.scss';

const NewsEvent = () => {
    const [tagCurrent, setTagCurrent] = useState<number>(1);

    const postsData = [
        posts_member_company_data.slice(0, 5),
        posts_ongroup_data.slice(0, 5),
        posts_info_press_data.slice(0, 5),
        posts_coop_sponsor_data.slice(0, 5),
    ];

    return (
        <div className="container m-auto pt-16 overflow-hidden space-y-5">
            <h2 className="text-3xl text-[var(--color-primary)] uppercase font-black">tin tức & sự kiện</h2>
            <ul className="flex gap-10 mb-4 border-b-2 border-[var(--color-primary)] border-solid py-4">
                {['Công ty thành viên', 'On Group', 'Thông tin báo chí', 'Hợp tác - Tài trợ'].map((label, index) => (
                    <li
                        key={index}
                        onClick={() => setTagCurrent(index + 1)}
                        className={`cursor-pointer hover:text-[var(--color-primary)] ${
                            tagCurrent === index + 1 ? 'text-[var(--color-primary)] font-bold ' : ''
                        }`}
                    >
                        {label}
                    </li>
                ))}
            </ul>

            {/* Slider container */}
            <div
                className=" flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${(tagCurrent - 1) * 80}vw)`,
                    width: `${postsData.length * 80}vw`,
                }}
            >
                {postsData.map((posts, idx) => (
                    <div key={idx} className="flex flex-col gap-5">
                        <div key={posts[0].id} className="w-full flex gap-5 px-4">
                            <Link href="/" className="overflow-hidden rounded-md w-full">
                                <ImageTag
                                    src={posts[0].image}
                                    alt="img-post"
                                    height={600}
                                    width={900}
                                    className=" hover:scale-125 transition-all duration-500"
                                />
                            </Link>
                            <div className="flex flex-col gap-5">
                                <Link href="/" className="line-clamp-2 font-bold text-2xl">
                                    {posts[0].title}
                                </Link>
                                <p className="flex gap-2 items-center text-[var(--text-color-date)] opacity-80">
                                    <FaRegClock />
                                    <span> {posts[0].date}</span>
                                </p>
                                <p className="line-clamp-3 text-[var(--text-color-subtext)]">{posts[0].sub_title}</p>
                                <Link
                                    href="/"
                                    className="w-1/5 p-2 text-center text-white rounded-md font-bold bg-[var(--color-primary)] 
                                    hover:border-2 border-[var(--color-primary)] border-solid hover:bg-white hover:text-[var(--color-primary)]"
                                >
                                    Xem chi tiết
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-5 w-full p-4">
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    className="group relative overflow-hidden space-y-2 shadow-lg rounded-md cursor-pointer "
                                >
                                    <div className="background-effect-news"></div>
                                    <Link href="/" className="relative">
                                        <ImageTag src={post.image} alt="img-post" className="rounded-t-md" />
                                    </Link>

                                    <div className="relative p-2 rounded-b-md space-y-2 z-10">
                                        <Link
                                            href="/"
                                            className="group-hover:text-white line-clamp-2 font-bold text-base"
                                        >
                                            {post.title}
                                        </Link>
                                        <p className="flex gap-2 items-center text-[var(--text-color-date)] text-sm opacity-80">
                                            <FaRegClock />
                                            <span> {post.date}</span>
                                        </p>
                                        <p className="group-hover:text-white line-clamp-3 text-[var(--text-color-subtext)] text-base transition-all duration-700">
                                            {post.sub_title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pb-4 px-4 text-right">
                            <Link
                                href="/"
                                className="w-1/5 p-2 text-center text-white rounded-md font-bold bg-[var(--color-primary)] 
                                    hover:border-2 border-[var(--color-primary)] border-solid hover:bg-white hover:text-[var(--color-primary)]"
                            >
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsEvent;
