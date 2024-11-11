'use client';

import Button from '@/components/Button/Button';
import ImageTag from '@/components/ImageTag/ImageTag';
import SlickSlider from '@/components/SlickSlider/SlickSlider';
import Title from '@/components/Title/Title';
import { member_company_data } from '@/data/member-company';

import useScrollPosition from '@/hooks/useScrollPosition';
import { useSizeComponentStore } from '@/zustand/useSizeComponentStore';
import React, { useEffect, useRef } from 'react';

const CompanyNumber = ({ keyName }: { keyName: string }) => {
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
    const { scrollY } = useScrollPosition();
    const { getSize } = useSizeComponentStore();
    const sizeAieldActive = getSize(keyNameFieldActive);
    const currentSizeHeight = sizeAieldActive?.height || 100;
    return (
        <div
            ref={elementRef}
            className={`transition-all duration-700 ${
                scrollY > currentSizeHeight ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            } space-y-5 pt-16 container m-auto `}
        >
            <Title
                title="Công ty thành viên"
                sub_title=" Tập đoàn On Group hoạt động đa dạng với 08 thương hiệu Công ty thành viên, lần lượt là …. Tham gia
                    vào 6 lĩnh vực kinh doanh chủ đạo bao gồm Truyền thông, Đào tạo, Bất động sản, FnB, Tài chính và
                    Truyền thông."
            />

            <div className="">
                <SlickSlider slidesToScroll={4} slidesToShow={4} speed={1000} arrows={false} dots={false}>
                    {member_company_data?.map((item_member) => (
                        <div key={item_member.logo} className="p-2 relative cursor-pointer">
                            <div className="overflow-hidden rounded-sm">
                                <ImageTag
                                    src={item_member.image}
                                    alt="member-company"
                                    className="hover:scale-125 transition-transform duration-500"
                                />
                            </div>
                            <ImageTag
                                src={item_member.logo}
                                alt="member-company"
                                className="object-contain h-12 w-1/4 absolute bottom-3 left-3 bg-white p-2 rounded-md"
                            />
                        </div>
                    ))}
                </SlickSlider>
            </div>
            <div className="text-center">
                <Button href="/cong-ty-thanh-vien" type="transparent">
                    Xem thêm
                </Button>
            </div>
        </div>
    );
};

export default CompanyNumber;
