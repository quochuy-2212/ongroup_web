'use client';
import Button from '@/components/Button/Button';
import ImageTag from '@/components/ImageTag/ImageTag';
import Modal from '@/components/Modal/Modal';
import Title from '@/components/Title';
import { member_company_data } from '@/data/member-company';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiOutlineInformationCircle, HiOutlineLocationMarker } from 'react-icons/hi';

interface ISocial {
    src: string;
    href: string;
}
const MemberCompanyPage = () => {
    const social: ISocial[] = [
        {
            src: '/images/facebook.png',
            href: '',
        },
        {
            src: '/images/instagram.png',
            href: '',
        },
        {
            src: '/images/tiktok.png',
            href: '',
        },
        {
            src: '/images/email.png',
            href: '',
        },
        {
            src: '/images/youtube.png',
            href: '',
        },
    ];

    const [open, setOpen] = useState<boolean>(false);
    const [memberIndex, setMemberIndex] = useState<number>(0);
    useEffect(() => {
        const className = 'menu-sm-open';
        const bodyClassList = document.body.classList;

        if (open && !bodyClassList.contains(className)) {
            bodyClassList.add(className);
        } else if (!open && bodyClassList.contains(className)) {
            bodyClassList.remove(className);
        }
        return () => {
            bodyClassList.remove(className);
        };
    }, [open]);

    const handleOpenModal = (index: number) => {
        setMemberIndex(index);
        setOpen(true);
    };
    const handleCloseModal = () => {
        setOpen(false);
    };
    return (
        <div className="container m-auto">
            <Title
                title="công ty thành viên"
                sub_title="Tập đoàn On Group hoạt động đa dạng với 08 thương hiệu Công ty thành viên, lần lượt là …. Tham gia vào 6 lĩnh vực kinh doanh chủ đạo bao gồm Truyền thông, Đào tạo, Bất động sản, FnB, Tài chính và Truyền thông."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-16">
                {member_company_data?.map((item_member, index) => (
                    <div
                        onClick={() => handleOpenModal(index)}
                        key={item_member.logo}
                        className="p-2 relative cursor-pointer group "
                    >
                        <div className="overflow-hidden rounded-sm">
                            <ImageTag
                                src={item_member.image}
                                alt="member-company"
                                className="hover:scale-105 transition-transform duration-500 group-hover:blur-sm"
                            />
                        </div>
                        <ImageTag
                            src={item_member.logo}
                            alt="member-company"
                            className="object-contain h-12 w-1/4 absolute bottom-3 left-3 bg-white p-2 rounded-md"
                        />
                        <div className="invisible group-hover:visible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--color-primary)]">
                            <HiOutlineInformationCircle size={64} />
                        </div>
                    </div>
                ))}
            </div>
            <Modal open={open} onClose={handleCloseModal}>
                <div className="space-y-5 p-4 grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <ImageTag
                            src={member_company_data[memberIndex]?.image}
                            alt="member-company"
                            width={352}
                            height={206}
                            className=" group-hover:blur-sm w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-1 space-y-5">
                        <ImageTag
                            src={member_company_data[memberIndex]?.logo}
                            alt="member-company"
                            className=" group-hover:blur-sm w-1/2"
                        />

                        <p className="leading-6">{member_company_data[memberIndex]?.text}</p>

                        <div className="flex flex-col xl:flex-row gap-5  xl:items-center">
                            <p>Theo dõi On Media tại</p>
                            <ul className="flex gap-5 w-4/5 md:w-3/5 xl:w-2/5">
                                {social?.map((item) => (
                                    <li key={item.src} className="">
                                        <Link href={item.href}>
                                            <ImageTag src={item.src} alt="social" className="w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button type="primary" className="flex gap-2 w-full xl:w-1/2 justify-center items-center">
                            <HiOutlineLocationMarker />
                            <span>Hệ thống chi nhánh</span>
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default MemberCompanyPage;
