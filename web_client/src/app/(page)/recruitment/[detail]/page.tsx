import React from 'react';
import LocationRecruitment from './components/LocationRecruitment';
import InfoGlobal from './components/InfoGlobal';
import DetailRecruitment from './components/DetailRecruitment';

const DetailReCruitmentPage = () => {
    return (
        <div className="container m-auto">
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-3 xl:col-span-2 space-y-10 order-2 xl:order-1">
                    <LocationRecruitment />
                    <DetailRecruitment />
                </div>
                <div className="col-span-3 order-1 xl:order-2 xl:col-span-1 bg-[#ecf4fa]">
                    <InfoGlobal />
                </div>
            </div>
        </div>
    );
};

export default DetailReCruitmentPage;
