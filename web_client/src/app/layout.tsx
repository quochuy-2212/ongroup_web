import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/global_style/globals.scss';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'On Group',
    description:
        'Tập đoàn Ongroup là công ty hoạt động đa lĩnh vực thành lập năm 2016. Với sứ mệnh nâng tầm doanh nghiệp Việt, chú trọng kết hợp Công Nghệ và Digital Marketing áp dụng vào mọi ngành nghề để phát triển hệ sinh thái. Hỗ trợ tất cả các Start-up từ khâu đào tạo nhân sự cho đến quy trình xây dựng và phát triển, song song với sự phát triển của cả tập đoàn.',
    openGraph: {
        title: 'On Group',
        description:
            'Tập đoàn Ongroup là công ty hoạt động đa lĩnh vực thành lập năm 2016. Với sứ mệnh nâng tầm doanh nghiệp Việt, chú trọng kết hợp Công Nghệ và Digital Marketing áp dụng vào mọi ngành nghề để phát triển hệ sinh thái. Hỗ trợ tất cả các Start-up từ khâu đào tạo nhân sự cho đến quy trình xây dựng và phát triển, song song với sự phát triển của cả tập đoàn.',
        url: 'https://ongroup-web.vercel.app/', // Thay bằng URL của trang
        type: 'website',
        images: [
            {
                url: 'https://ongroup-web.vercel.app/images/ongroupf.png',
                width: 1080,
                height: 720,
                alt: 'Tập đoàn On Group',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
