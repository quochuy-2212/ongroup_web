'use client';

import Post from '@/components/Post/Post';
import usePostPage from '@/zustand/usePostPage';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { data_pathName, typeDataPosts, typeNewsTitle } from '../data/typeNews';
import Link from 'next/link';

const PostAll = () => {
    const { currentPage, postsPerPage, totalPages, setTotalPages } = usePostPage();

    const typeNewsParams = useParams<{ typeNews: string; pagination: string }>();
    console.log(typeNewsParams.typeNews);
    console.log(typeNewsParams.pagination);
    let index_data = 0;
    switch (typeNewsParams.typeNews) {
        case undefined:
            index_data = 0;
            break;
        case 'cong-ty-thanh-vien':
            index_data = 1;
            break;
        case 'hop-tac-tai-tro':
            index_data = 2;
            break;
        case 'on-group':
            index_data = 3;
            break;
        case 'thong-tin-bao-chi':
            index_data = 4;
            break;
        default:
            break;
    }

    useEffect(() => {
        setTotalPages(Math.ceil(typeDataPosts[index_data].length / postsPerPage));
    }, []);
    return (
        <div className="space-y-5">
            <div className="pb-4 xl:pb-0 border-b-2 border-solid border-[var(--color-primary)] flex flex-col xl:flex-row justify-between items-center">
                <h2 className="pb-2 mb-4 text-2xl xl:text-2xl text-[var(--color-primary)] font-bold ">
                    {typeNewsTitle[index_data]}
                </h2>
                <ul className="flex items-center flex-wrap justify-center gap-10 ">
                    {typeNewsTitle?.map(
                        (item, index) =>
                            index !== index_data && (
                                <li key={index}>
                                    <Link href={data_pathName[index]} className="hover:text-[var(--color-primary)]">
                                        {item}
                                    </Link>
                                </li>
                            ),
                    )}
                </ul>
            </div>
            {currentPage > totalPages ? (
                <p className="text-center font-semibold">Không có bài viết nào</p>
            ) : (
                <>
                    <div className="grid grid-cols-2 xl:grid-cols-5 gap-5">
                        {typeDataPosts[index_data]
                            ?.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
                            .map((post) => (
                                <div key={post.id} className="col-span-1">
                                    <Post key={post.id} data_post={post} />
                                </div>
                            ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default PostAll;
