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
import Button from '@/components/Button/Button';
import Title from './Title';
import useWindowSize from '@/hooks/useWindowSize';
import SlickSlider from '@/components/SlickSlider/SlickSlider';

const NewsEvent = () => {
    const [tagCurrent, setTagCurrent] = useState<number>(1);
    const { width } = useWindowSize();

    const postsData = [
        posts_member_company_data.slice(0, 5),
        posts_ongroup_data.slice(0, 5),
        posts_info_press_data.slice(0, 5),
        posts_coop_sponsor_data.slice(0, 5),
    ];

    return (
        <div className="container m-auto pt-16 overflow-hidden space-y-5">
            <Title title="tin tức & sự kiện" />
            <Button href="" type="transparent" className="flex items-center justify-center">
                Xem thêm
            </Button>
            <div className=" border-b-2 border-[var(--color-primary)] border-solid">
                <ul className="flex gap-4 xl:gap-10 py-4 flex-wrap md:justify-center xl:justify-start">
                    {['Công ty thành viên', 'On Group', 'Thông tin báo chí', 'Hợp tác - Tài trợ'].map(
                        (label, index) => (
                            <li
                                key={index}
                                onClick={() => setTagCurrent(index + 1)}
                                className={`cursor-pointer hover:text-[var(--color-primary)] ${
                                    tagCurrent === index + 1 ? 'text-[var(--color-primary)] font-bold ' : ''
                                }`}
                            >
                                {label}
                            </li>
                        ),
                    )}
                </ul>
            </div>

            {/* Begin Slider post desktop */}
            {width >= 1023 && (
                <div
                    className=" flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${(tagCurrent - 1) * 100}vw)`,
                        width: `${postsData.length * 100}vw`,
                    }}
                >
                    {postsData.map((posts, idx) => (
                        <div key={idx} className="flex flex-col gap-5">
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

                                        <div className="relative px-8 pb-8 pt-4 rounded-b-md space-y-5 z-10">
                                            <Link
                                                href="/"
                                                className="xl:group-hover:text-white leading-8 line-clamp-2 font-bold text-base"
                                            >
                                                {post.title}
                                            </Link>
                                            <p className="flex gap-2 items-center text-[var(--text-color-date)] text-sm opacity-80">
                                                <FaRegClock />
                                                <span> {post.date}</span>
                                            </p>
                                            <p className="group-hover:text-white leading-8 line-clamp-3 text-[var(--text-color-subtext)] text-base transition-all duration-700">
                                                {post.sub_title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* End Slider post desktop */}

            {/* Begin Slider post mobile + tablet */}
            {width < 1023 && (
                <div className="">
                    <SlickSlider slidesToScroll={5} slidesToShow={5} speed={1000} arrows={false} dots={false}>
                        {postsData[tagCurrent - 1].slice(0, 2).map((post) => (
                            <div
                                key={post.id}
                                className="  overflow-hidden space-x-2 shadow-lg rounded-md cursor-pointer p-4"
                            >
                                <Link href="/" className="">
                                    <ImageTag src={post.image} alt="img-post" className="rounded-t-md" />
                                </Link>

                                <div className=" px-8 pb-8 pt-4 rounded-b-md space-y-5 z-10">
                                    <Link href="/" className=" leading-8 line-clamp-2 font-bold text-base">
                                        {post.title}
                                    </Link>
                                    <p className="flex gap-2 items-center text-[var(--text-color-date)] text-sm opacity-80">
                                        <FaRegClock />
                                        <span> {post.date}</span>
                                    </p>
                                    <p className=" leading-8 line-clamp-3 text-[var(--text-color-subtext)] text-base transition-all duration-700">
                                        {post.sub_title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </SlickSlider>
                </div>
            )}
            {/* End Slider post mobile + tablet*/}
        </div>
    );
};

export default NewsEvent;
