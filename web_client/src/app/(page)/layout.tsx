'use client';

import useScrollPosition from '@/hooks/useScrollPosition';
import Header from '@/layout/Header/Header';

export default function LayoutPage({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { scrollY } = useScrollPosition();
    return (
        <>
            {scrollY > 900 && <Header />}
            <main className="px-2 xl:px-0">{children}</main>
        </>
    );
}
