/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    MONGO_URI:
      "mongodb+srv://ecom:ecom@cluster0.ipe2rxy.mongodb.net/products?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
