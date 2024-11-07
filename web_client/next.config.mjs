/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ongroup.com.vn'],
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
    ]
  }
};

export default nextConfig;
