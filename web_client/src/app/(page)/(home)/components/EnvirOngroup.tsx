import ImageTag from '@/components/ImageTag/ImageTag';
import SlickSlider from '@/components/SlickSlider/SlickSlider';
import { enviro_ongroup_data } from '@/data/enviro-ongroup';
import React from 'react';
import Title from './Title';

const EnvirOngroup = () => {
    return (
        <div className="pt-16">
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
