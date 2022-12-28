import Head from "next/head";
import { Router, withRouter } from "next/router";

export interface HeadProps {
  children?: React.ReactNode;
}

export const AffineHead = withRouter(
  ({ children, router }: HeadProps & { router: Router }) => (
    <Head>
      <meta charSet="utf-8" />
      <title>AFFiNE - All In One Workos</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://affine.pro/" />
      <meta
        name="twitter:title"
        content="AFFiNE：There can be more than Notion and Miro."
      />
      <meta
        name="twitter:description"
        content="There can be more than Notion and Miro. AFFiNE is a next-gen knowledge base that brings planning, sorting and creating all together."
      />
      <meta name="twitter:site" content="@AffineOfficial" />
      <meta name="twitter:image" content="https://affine.pro/og.jpeg" />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="AFFiNE：There can be more than Notion and Miro."
      />
      <meta
        property="og:site_name"
        content="AFFiNE：There can be more than Notion and Miro."
      />
      <meta property="og:url" content="https://affine.pro/" />
      <meta property="og:image" content="https://affine.pro/og.jpeg" />
      <meta
        property="og:description"
        content="There can be more than Notion and Miro. AFFiNE is a next-gen knowledge base that brings planning, sorting and creating all together."
      />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      {children}
    </Head>
  )
);
