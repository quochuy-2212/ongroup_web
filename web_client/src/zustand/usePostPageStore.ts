import { posts_all_data } from '@/data/posts-all';
import { create } from 'zustand';

interface IPostPage {
    postsPerPage: number;
    totalPages: number;
    currentPage: number;
    setCurrentPage: (value: number) => void;
    setTotalPages: (value: number) => void;
}
const postsPerPageDefault: number = 10;

const usePostPageStore = create<IPostPage>((set) => ({
    postsPerPage: postsPerPageDefault,
    totalPages: Math.ceil(posts_all_data.length / postsPerPageDefault),
    currentPage: 1,
    setCurrentPage: (value) => set({ currentPage: value }),
    setTotalPages: (value) => set({ totalPages: value }),
}));

export default usePostPageStore;
