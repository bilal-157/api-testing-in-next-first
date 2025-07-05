/** @type {import('next').NextConfig} */
const nextConfig = {
    // You don't actually need this for API routes
    // But if you want to keep it:
    env: {
      CUSTOM_KEY: process.env.CUSTOM_KEY,
    },
  };
  
  export default nextConfig;