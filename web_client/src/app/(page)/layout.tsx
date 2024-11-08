import ButtonToTop from '@/components/ButtonToTop/ButtonToTop';
import Banner from '@/layout/Banner/Banner';
import Footer from '@/layout/Footer/Footer';
import '@/global_style/style-posts.scss';

export default function LayoutPage({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Banner />
            <main className="px-2 xl:px-0 pt-16">{children}</main>
            <ButtonToTop />
            <Footer />
        </>
    );
}
