/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ongroup.com.vn', 'onlead.vn'],
  },

  async rewrites() {
    return [
      {
        source: '/ve-chung-toi',
        destination: '/about'
      },
      {
        source: '/ban-lanh-dao',
        destination: '/board-of-directors'
      },
      {
        source: '/cong-ty-thanh-vien',
        destination: '/member-company'
      },
      {
        source: '/phat-trien-ben-vung',
        destination: '/sustain-develop'
      },
      {
        source: '/van-hoa-doanh-nghiep',
        destination: '/company-culture'
      },
      {
        source: '/chien-luoc-nhan-su',
        destination: '/hr-strategy '
      },
      {
        source: '/cong-dong-xa-hoi',
        destination: '/social-impact'
      },
      {
        source: '/tuyen-dung',
        destination: '/recruitment'
      },
      {
        source: '/lien-he',
        destination: '/contact'
      },
      {
        source: '/tin-tuc-su-kien',
        destination: '/event-news'
      },
      {
        source: '/tin-tuc-su-kien/page/:paginationPage',
        destination: '/event-news/page/:paginationPage'
      },
      {
        source: '/tin-tuc-su-kien/:typeNews',
        destination: '/event-news/:typeNews'
      },
      {
        source: '/tin-tuc-su-kien/:typeNews/page/:paginationPage',
        destination: '/event-news/:typeNews/page/:paginationPage'
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/tin-tuc-su-kien/page/1',  // Chỉ áp dụng cho trang 1
        destination: '/tin-tuc-su-kien',    // Redirect đến /tin-tuc-su-kien
        permanent: true,                    // Chuyển hướng vĩnh viễn
      },
      {
        source: '/tin-tuc-su-kien/:typeNews/page/1',  // Chỉ áp dụng cho trang 1
        destination: '/tin-tuc-su-kien/:typeNews',    // Redirect đến /tin-tuc-su-kien
        permanent: true,                    // Chuyển hướng vĩnh viễn
      },

    ];
  },
};

export default nextConfig;
