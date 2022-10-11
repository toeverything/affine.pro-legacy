// See https://nextjs.org/docs/advanced-features/using-mdx
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
  "@mui/icons-material", // If @mui/icons-material is being used
]);

/** @type {import('next').NextConfig} */
const nextConfig = withMDX(
  withTM({
    pageExtensions: ["jsx", "js", "ts", "tsx", "md", "mdx"],
    trailingSlash: true,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    swcMinify: true,
    images: {
      unoptimized: true,
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@mui/styled-engine": "@mui/styled-engine-sc",
      };
      return config;
    },
  })
);

module.exports = nextConfig;
