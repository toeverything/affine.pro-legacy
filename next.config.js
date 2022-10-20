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
    reactStrictMode: true,
    swcMinify: true,
    images: {
      loader: "custom",
      imageSizes: [64, 128, 256, 384],
      deviceSizes: [640, 750, 828, 1080],
    },
    env: {
      nextImageExportOptimizer_imageFolderPath: "public",
      nextImageExportOptimizer_exportFolderPath: "out",
      nextImageExportOptimizer_quality: 75,
      nextImageExportOptimizer_storePicturesInWEBP: true,
      nextImageExportOptimizer_generateAndUseBlurImages: true,
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
      };
      return config;
    },
  })
);

module.exports = nextConfig;
