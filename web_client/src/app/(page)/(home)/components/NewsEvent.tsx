'use client';
import { posts_coop_sponsor_data } from '@/data/posts-coop-sponsor';
import { posts_info_press_data } from '@/data/posts-info-press';
import { posts_member_company_data } from '@/data/posts-member-company';
import { posts_ongroup_data } from '@/data/posts-ongroup';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button/Button';
import SlickSlider from '@/components/SlickSlider/SlickSlider';
import Post from '@/components/Post/Post';
import Title from '@/components/Title/Title';
import useScrollPosition from '@/hooks/useScrollPosition';
import { useSizeComponentStore } from '@/zustand/useSizeComponentStore';

const NewsEvent = ({ keyName }: { keyName: string }) => {
    const [tagCurrent, setTagCurrent] = useState<number>(1);
    const postsData = [posts_member_company_data, posts_ongroup_data, posts_info_press_data, posts_coop_sponsor_data];

    // Set Size
    const elementRef = useRef<HTMLDivElement>(null);
    const { setSize: setSizeInStore } = useSizeComponentStore();
    useEffect(() => {
        if (elementRef.current) {
            const width = elementRef.current.offsetWidth;
            const height = elementRef.current.offsetHeight;
            setSizeInStore(keyName, { width, height });
        }
        const handleResize = () => {
            if (elementRef.current) {
                const width = elementRef.current.offsetWidth;
                const height = elementRef.current.offsetHeight;
                setSizeInStore(keyName, { width, height });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Get Size
    const keyNameFieldActive = 'FieldActive';
    const keyNameCompanyNumber = 'CompanyNumber';
    const { scrollY } = useScrollPosition();
    const { getSize } = useSizeComponentStore();
    const sizeFieldActive = getSize(keyNameFieldActive);
    const sizeCompanyNumber = getSize(keyNameCompanyNumber);
    const currentSizeHeight = (sizeFieldActive?.height ?? 0) + (sizeCompanyNumber?.height ?? 0) || 100;

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-700 overflow-hidden ${
                scrollY > currentSizeHeight ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            } container m-auto pt-16 overflow-hidden space-y-5 pb-8`}
        >
            <Title title="tin tức & sự kiện" />
            <Button href="/tin-tuc-su-kien" type="transparent" className="flex xl:hidden items-center justify-center">
                Xem thêm
            </Button>
            <div className="xl:flex xl:justify-between xl:items-center border-b-2 border-[var(--color-primary)] border-solid">
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
                <Button
                    href="/tin-tuc-su-kien"
                    type="transparent"
                    className="xl:flex hidden items-center justify-center"
                >
                    Xem thêm
                </Button>
            </div>

            <div className="w-full">
                {postsData.map((posts, idx) => (
                    <div
                        key={idx}
                        className={`${
                            tagCurrent == idx + 1 ? ' scale-100 h-auto opacity-100' : 'h-0 scale-0 opacity-0'
                        } transition-all duration-700 flex flex-col gap-5 w-full`}
                    >
                        <SlickSlider slidesToScroll={4} slidesToShow={4} speed={1000} arrows={false} dots={false}>
                            {posts.map((post) => (
                                <div key={post.id} className="p-5">
                                    <Post key={post.id} data_post={post} />
                                </div>
                            ))}
                        </SlickSlider>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsEvent;
