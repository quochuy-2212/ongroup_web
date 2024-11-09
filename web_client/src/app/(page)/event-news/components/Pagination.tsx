'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { data_pathName } from '../data/typeNews';
import usePostPageStore from '@/zustand/usePostPageStore';

const Pagination = () => {
    const { currentPage, totalPages, setCurrentPage } = usePostPageStore();

    const typeNewsParams = useParams<{ typeNews: string; pagination: string }>();

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
        setCurrentPage(Number(typeNewsParams.pagination) || 1);
    }, []);
    return (
        <div className="flex gap-5 justify-center font-black">
            <Link
                href={`${data_pathName[index_data]}/page/${currentPage - 1}`}
                className={`${
                    currentPage == 1 ? 'hidden' : 'flex'
                } text-[var(--color-primary)] p-2 rounded-full w-8 h-8 justify-center items-center hover:animate-pulse`}
            >
                <HiChevronDoubleLeft />
            </Link>
            <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1)
                    .filter((page) => {
                        const maxPages = 5;
                        const half = Math.floor(maxPages / 2);

                        if (currentPage <= half) {
                            return page <= maxPages;
                        } else if (currentPage > totalPages - half) {
                            return page > totalPages - maxPages;
                        } else {
                            return page >= currentPage - half && page <= currentPage + half;
                        }
                    })
                    .map((page) => (
                        <Link
                            onClick={() => setCurrentPage(page)}
                            href={`${data_pathName[index_data]}/page/${page}`}
                            key={page}
                            className={`${
                                page === currentPage
                                    ? 'border-b-2 border-solid border-[var(--color-primary)]'
                                    : 'hover:animate-pulse'
                            } bg-white text-[var(--color-primary)] w-8 h-8 flex justify-center items-center `}
                        >
                            {page}
                        </Link>
                    ))}
            </div>

            <Link
                href={`${data_pathName[index_data]}/page/${currentPage + 1}`}
                className={`${
                    currentPage == totalPages ? 'hidden' : 'flex'
                } text-[var(--color-primary)] p-2 rounded-full w-8 h-8 justify-center items-center hover:animate-pulse`}
            >
                <HiChevronDoubleRight />
            </Link>
        </div>
    );
};

export default Pagination;
