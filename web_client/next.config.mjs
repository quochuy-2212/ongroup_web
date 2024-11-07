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
    ]
  }
};

export default nextConfig;
