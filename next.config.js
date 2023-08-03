/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
  @import "./src/styles/scss/variables/colors.scss";
  @import "./src/styles/scss/variables/spacing.scss";
  @import "./src/styles/scss/mixins.scss";
  `,
  },
};

module.exports = nextConfig;
