import Head from "next/head";
import { Router, withRouter } from "next/router";
import { TFunction, useTranslation } from "react-i18next";

export interface HeadProps {
  children?: React.ReactNode;
}

function generateTitle(t: TFunction, path: string) {
  switch (path) {
    case "/about-us":
      return `${t("AboutUs")} | AFFiNE - All In One Workos`;
    case "/blog":
      return `${t("Blog")} | AFFiNE - All In One Workos`;
    default:
      // Default to the homepage
      return "AFFiNE - All In One Workos";
  }
}

/**
 * This component is used to generate the metadata for the page.
 * Will NOT be used for blog post pages.
 */
export const AffineHead = withRouter(
  ({ children, router }: HeadProps & { router: Router }) => {
    const { t } = useTranslation();
    const title = generateTitle(t, router.pathname);
    const isBlogPost = router.pathname.startsWith("/blog/");

    if (isBlogPost) {
      return null;
    }

    return (
      <Head>
        <title key="page-title">{title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://affine.pro/" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="There can be more than Notion and Miro. AFFiNE is a next-gen knowledge base that brings planning, sorting and creating all together."
        />
        <meta name="twitter:site" content="@AffineOfficial" />
        <meta name="twitter:image" content="https://affine.pro/og.jpeg" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="AFFiNE" />
        <meta property="og:url" content="https://affine.pro/" />
        <meta property="og:image" content="https://affine.pro/og.jpeg" />
        <meta
          property="og:description"
          content="There can be more than Notion and Miro. AFFiNE is a next-gen knowledge base that brings planning, sorting and creating all together."
        />
        {children}
      </Head>
    );
  }
);
