import Button from '@/components/Button/Button';
import ImageTag from '@/components/ImageTag/ImageTag';
import SlickSlider from '@/components/SlickSlider/SlickSlider';
import Title from '@/components/Title/Title';
import { member_company_data } from '@/data/member-company';
import React from 'react';

const CompanyNumber = () => {
    return (
        <div className="space-y-5 pt-16 container m-auto">
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
