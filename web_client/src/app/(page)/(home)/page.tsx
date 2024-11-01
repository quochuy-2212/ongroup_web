import ImageTag from '@/components/ImageTag/ImageTag';
import { intro_company_data } from '@/data/intro-company';
import IntroCompany from './components/IntroCompany';
import Header from '@/layout/Header/Header';

export default function Home() {
    return (
        <div className="h-[2000px]">
            <div
                className="w-full h-screen
                            bg-[url('https://ongroup.com.vn/wp-content/uploads/2024/03/adobestock_308909064-1-1-%E2%80%93-Da-sua.png')] bg-no-repeat bg-cover"
            >
                <div className="pt-5 pl-5 flex gap-5 items-center">
                    {/* <ImageTag
                        src={intro_company_data.logo}
                        alt="logo-company"
                        className="bg-white p-4 w-64 rounded-2xl"
                    /> */}
                    <Header />
                </div>
                <IntroCompany />
            </div>
        </div>
    );
}
