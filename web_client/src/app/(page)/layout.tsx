import Banner from '@/layout/Banner/Banner';

export default function LayoutPage({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Banner />
            <main className="px-2 xl:px-0">{children}</main>
        </>
    );
}
