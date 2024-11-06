'use client';
import React from 'react';
import IntroCompany from '@/layout/IntroCompany/IntroCompany';

import Header from '@/layout/Header/Header';
import useWindowSize from '@/hooks/useWindowSize';

const Banner = () => {
    const { width } = useWindowSize();
    return (
        <>
            {width <= 768 && <Header />}
            <div
                className={`w-full ${width <= 768 ? 'pt-[400px]' : 'pt-[600px]'} relative
                            bg-[url('https://ongroup.com.vn/wp-content/uploads/2024/03/adobestock_308909064-1-1-%E2%80%93-Da-sua.png')] 
                            bg-no-repeat bg-cover bg-center`}
            >
                <Header />
                <IntroCompany />
            </div>
        </>
    );
};

export default Banner;
