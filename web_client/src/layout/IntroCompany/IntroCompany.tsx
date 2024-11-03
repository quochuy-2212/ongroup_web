import ImageTag from '@/components/ImageTag/ImageTag';
import { intro_company_data } from '@/data/intro-company';

const IntroCompany = () => {
    return (
        <div className="w-full h-auto text-center space-y-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
            <p className="text-[var(--text-color-secondary)] text-xl leading-[80px]">
                {intro_company_data.description}
            </p>
            <div className="flex justify-center">
                <ImageTag src={intro_company_data.logo} alt="logo-company" className="bg-white p-4 w-64 rounded-2xl" />
            </div>
            <div className="flex gap-10 justify-center">
                <button className="min-w-48 text-[var(--color-primary)] font-bold bg-white px-5 py-2 rounded-md">
                    Về chúng tôi
                </button>
            </div>
        </div>
    );
};

export default IntroCompany;
