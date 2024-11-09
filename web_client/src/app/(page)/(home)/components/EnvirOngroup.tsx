'use client';
import ImageTag from '@/components/ImageTag/ImageTag';
import SlickSlider from '@/components/SlickSlider/SlickSlider';
import Title from '@/components/Title/Title';
import { enviro_ongroup_data } from '@/data/enviro-ongroup';
import useScrollPosition from '@/hooks/useScrollPosition';
import { useSizeComponentStore } from '@/zustand/useSizeComponentStore';
import React, { useRef } from 'react';

const EnvirOngroup = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    // Get Size
    const keyNameFieldActive = 'FieldActive';
    const keyNameCompanyNumber = 'CompanyNumber';
    const keyNameNewsEvent = 'NewsEvent';
    const { scrollY } = useScrollPosition();
    const { getSize } = useSizeComponentStore();
    const sizeFieldActive = getSize(keyNameFieldActive);
    const sizeCompanyNumber = getSize(keyNameCompanyNumber);
    const sizeNewsEvent = getSize(keyNameNewsEvent);
    const currentSizeHeight =
        (sizeFieldActive?.height ?? 0) + (sizeCompanyNumber?.height ?? 0) + (sizeNewsEvent?.height ?? 0) || 100;

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-500 ${
                scrollY > currentSizeHeight ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            }pt-16`}
        >
            <Title title=" Môi trường tại On group" />

            <div className="mt-8">
                <SlickSlider slidesToScroll={2} slidesToShow={2} speed={1000} dots={false} arrows={false}>
                    {enviro_ongroup_data?.map((item) => (
                        <div key={item} className="outline-none overflow-hidden w-full h-[400px] p-2 rounded-md">
                            <ImageTag
                                src={item}
                                alt="envir-ongroup"
                                className="w-full h-full xl:hover:scale-105 transition-transform duration-500 object-cover rounded-md"
                                width={1276}
                                height={956}
                            />
                        </div>
                    ))}
                </SlickSlider>
            </div>
        </div>
    );
};

export default EnvirOngroup;
