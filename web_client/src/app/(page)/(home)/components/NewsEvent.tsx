'use client';
import { posts_coop_sponsor_data } from '@/data/posts-coop-sponsor';
import { posts_info_press_data } from '@/data/posts-info-press';
import { posts_member_company_data } from '@/data/posts-member-company';
import { posts_ongroup_data } from '@/data/posts-ongroup';
import React, { useState } from 'react';
import '../styles/style_field_active.scss';
import Button from '@/components/Button/Button';
import useWindowSize from '@/hooks/useWindowSize';
import SlickSlider from '@/components/SlickSlider/SlickSlider';
import Post from '@/components/Post/Post';
import Title from '@/components/Title';

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
                                    <Post key={post.id} data_post={post} />
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
                            <Post key={post.id} data_post={post} />
                        ))}
                    </SlickSlider>
                </div>
            )}
            {/* End Slider post mobile + tablet*/}
        </div>
    );
};

export default NewsEvent;
