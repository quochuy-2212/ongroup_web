import Button from '@/components/Button/Button';
import ImageTag from '@/components/ImageTag/ImageTag';
import { intro_company_data } from '@/data/intro-company';
import Link from 'next/link';
import { FaAngleDoubleDown } from 'react-icons/fa';

const IntroCompany = () => {
    const handleDownPage = () => {
        window.scrollTo({
            top: 600,
            behavior: 'smooth',
        });
    };
    return (
        <div className="w-full h-auto text-center space-y-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 pt-28">
            <p className="hidden md:block text-[var(--text-color-secondary)] text-xl md:leading-10 xl:leading-[80px]">
                {intro_company_data.description}
            </p>
            <Link href="/" className="flex justify-center">
                <ImageTag
                    src={intro_company_data.logo}
                    alt="logo-company"
                    width={384}
                    height={107}
                    className="bg-white p-4 w-64 rounded-2xl"
                />
            </Link>
            <div className="flex gap-10 justify-center">
                <Button href="" type="primary" className="min-w-48 border-none">
                    Về chúng tôi
                </Button>
            </div>
            <div className="text-center p-4">
                <button onClick={handleDownPage} className="text-white animate-bounce">
                    <FaAngleDoubleDown size={32} />
                </button>
            </div>
        </div>
    );
};

export default IntroCompany;
