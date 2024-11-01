import ImageTag from '@/components/ImageTag/ImageTag';
import { intro_company_data } from '@/data/intro-company';

const IntroCompany = () => {
    return (
        <div>
            <div className="container m-auto mt-16 w-full h-auto text-center p-10 space-y-5 ">
                {/* <h2 className="uppercase text-5xl font-extrabold text-[var(--color-primary)]">
                    {intro_company_data.name}
                </h2> */}

                <p className="text-[var(--text-color-secondary)] text-xl leading-10">
                    {intro_company_data.description}
                </p>
                <div className="flex justify-center">
                    <ImageTag
                        src={intro_company_data.logo}
                        alt="logo-company"
                        className="bg-white p-4 w-64 rounded-2xl"
                    />
                </div>
                {/* <div className="flex gap-10 justify-center">
                    <button className="min-w-48 text-white font-bold bg-[var(--color-primary)] px-5 py-2 rounded-md">
                        Về chúng tôi
                    </button>
                    <button className="min-w-48 text-white font-bold bg-[var(--color-primary)] px-5 py-2 rounded-md">
                        Liên hệ
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default IntroCompany;
