// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 👈 ye add karna hai
  images: {
    unoptimized: true, // agar Next/Image use kar rahe ho
  
  },
};

module.exports = nextConfig;
