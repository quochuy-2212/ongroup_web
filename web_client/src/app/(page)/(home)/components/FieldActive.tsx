import ImageTag from '@/components/ImageTag/ImageTag';
import SlickSlider from '@/components/SlickSlider/SlickSlider';
import { field_active_data } from '@/data/field-active';
import React from 'react';
import '../styles/style_field_active.scss';

const FieldActive = () => {
    return (
        <div className="container m-auto py-16">
            <div className="text-center space-y-5">
                <h2 className="text-3xl text-[var(--color-primary)] uppercase font-black">lĩnh vực hoạt động</h2>
                <p className="px-24">
                    Với thể mạnh là Công Nghệ và Marketing, Ongroup đã phát triển hệ sinh thái đa lĩnh vực, thực tế áp
                    dụng hiệu quả và giúp hàng trăm doanh nghiệp quay trở lại thương trường với chiến lược hiệu quả, quy
                    trình tinh gọn nhờ có sự cộng hưởng trong môi trường hệ sinh thái.
                </p>
            </div>
            <div className="pt-5">
                <SlickSlider slidesToScroll={3} slidesToShow={3} speed={500} dots={true}>
                    {field_active_data?.map((field_item) => (
                        <div key={field_item.title} className="p-4 ">
                            <div className="group relative overflow-hidden space-y-3 p-4 hover:shadow-lg rounded-md">
                                {/* Background Effect */}
                                <div className="background-effect"></div>

                                {/* Content */}
                                <div className="relative z-10 space-y-3">
                                    <ImageTag src={field_item.icon} alt="icon-field-active" className="w-[13%]" />
                                    <h2 className="text-[var(--color-primary)] text-2xl font-bold group-hover:text-white">
                                        {field_item.title}
                                    </h2>
                                    <p className="text-justify text-base font-semibold leading-8 min-h-[180px] group-hover:text-white">
                                        {field_item.text}
                                    </p>
                                </div>
                                <div className="relative z-10 overflow-hidden rounded-md">
                                    <ImageTag
                                        src={field_item.image}
                                        alt="img-field-active"
                                        className="group-hover:scale-125 transition-transform duration-700"
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