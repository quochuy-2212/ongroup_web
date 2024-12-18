'use client';
import ImageTag from '@/components/ImageTag/ImageTag';
import SlickSlider from '@/components/SlickSlider/SlickSlider';
import { field_active_data } from '@/data/field-active';
import React, { useEffect, useRef } from 'react';
import Title from '@/components/Title/Title';
import { useSizeComponentStore } from '@/zustand/useSizeComponentStore';

const FieldActive = ({ keyName }: { keyName: string }) => {
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

    return (
        <div ref={elementRef} className={` container m-auto `}>
            <Title
                title=" lĩnh vực hoạt động"
                sub_title=" Với thể mạnh là Công Nghệ và Marketing, Ongroup đã phát triển hệ sinh thái đa lĩnh vực, thực tế áp
                    dụng hiệu quả và giúp hàng trăm doanh nghiệp quay trở lại thương trường với chiến lược hiệu quả, quy
                    trình tinh gọn nhờ có sự cộng hưởng trong môi trường hệ sinh thái."
            />

            <div className="pt-5">
                <SlickSlider slidesToScroll={3} slidesToShow={3} speed={1000} dots={true} arrows={false}>
                    {field_active_data?.map((field_item) => (
                        <div key={field_item.title} className="p-4 cursor-pointer">
                            <div
                                className={`group relative overflow-hidden space-y-3 p-4 xl:hover:shadow-lg rounded-md`}
                            >
                                {/* Background Effect */}
                                <div className="background-effect"></div>

                                {/* Content */}
                                <div className="relative z-10 space-y-3 ">
                                    <div className="w-full flex justify-center xl:justify-start">
                                        <ImageTag src={field_item.icon} alt="icon-field-active" className="w-[13%] " />
                                    </div>
                                    <h2 className="text-[var(--color-primary)] text-2xl font-bold xl:group-hover:text-white text-center xl:text-left">
                                        {field_item.title}
                                    </h2>
                                    <p className="text-justify text-base font-semibold leading-8 min-h-[180px] xl:min-h-[180px] xl:group-hover:text-white">
                                        {field_item.text}
                                    </p>
                                </div>
                                <div className="relative z-10 overflow-hidden rounded-md flex justify-center">
                                    <ImageTag
                                        src={field_item.image}
                                        alt="img-field-active"
                                        width={352}
                                        height={206}
                                        className="group-hover:scale-125 transition-transform duration-700 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </SlickSlider>
            </div>
        </div>
    );
};

export default FieldActive;
