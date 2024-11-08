'use client';

import Post from '@/components/Post/Post';
import { posts_all_data } from '@/data/posts-all';
import useWindowSize from '@/hooks/useWindowSize';

import React from 'react';

const PostNew = () => {
    const { width } = useWindowSize();
    return (
        <div>
            <h2 className="pb-2 mb-4 text-2xl xl:text-2xl text-[var(--color-primary)] font-bold border-b-2 border-solid border-[var(--color-primary)]">
                Bài viết mới nhất
            </h2>
            <div className="grid grid-cols-2 xl:grid-cols-5 gap-5">
                {posts_all_data?.slice(0, width < 768 ? 2 : width < 1023 ? 4 : 5).map((post) => (
                    <div key={post.id} className="col-span-1">
                        <Post key={post.id} data_post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostNew;
