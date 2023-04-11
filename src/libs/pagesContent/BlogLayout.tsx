import { Page } from "@/components/Layout/Page";
import styled from "@emotion/styled";
import Head from "next/head";
import type { ContentFileMeta } from "../common/resolveContentFile";
import USER_MAP from "./user";
const LeftTitle = styled.h2`
  color: rgb(102, 112, 133);
  font-size: 16px;
`;

const SliderModule = styled.div`
  padding-bottom: 32px;

  & + & {
    border-top: 1px solid #e4e7ec;
  }
`;

const Tag = styled.span`
  display: inline-block;
  background-color: rgb(249, 250, 251);
  border-radius: 16px;
  color: rgb(75, 50, 195);
  font-size: 12px;
  padding: 2px 10px;
  font-weight: 600;
  margin-right: 3px;
`;

const HeaderDec = styled.div`
  color: rgb(102, 112, 133);
  font-size: 20px;
`;

const HeaderTime = styled.div`
  color: #4b32c3;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 1rem;
`;

const Slider = styled.div`
  width: 25%;
  flex: none;
  padding-right: 25px;

  @media (max-width: 800px) {
    width: 100%;
    padding-right: 0;
  }
`;

const Header = styled.div`
  border-bottom: 1px solid #e4e7ec;
  background-color: #fcfcfd;
`;
const HeaderLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5;
  justify-content: center;
  @media (max-width: 1000px) {
    margin: 36px 0px;
  }
`;
const HeaderRightContent = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  align-items: center;
`;
const HeaderRightImage = styled.img`
  width: 100%;
  max-height: 100%;
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  padding: 128px 30px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  h1 {
    width: 100%;
    font-size: 48px;
    line-height: 58px;
    margin-bottom: 1rem;
  }
  p {
    color: #4b32c3;
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    padding: 52px 30px;

    h1 {
      font-size: 28px;
      line-height: 1.2;
    }
  }
`;

const Author = styled.div`
  display: flex;
  margin-bottom: 16px;
  img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: block;
    margin-right: 8px;
  }
  div{
    flex:1
    padding-left: 4px;
    .name{
      font-size:16px;
      font-weight:500;
    }
  }
`;

const Body = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 96px 30px;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const Content = styled.div`
  color: rgb(102, 112, 133);

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }
  a {
    word-wrap: break-word;
  }
  a:link {
    color: #5085f6cc;
  }
  a:visited {
    color: #4b32c3;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
  }
  pre {
    border: 1px solid #dee0e3;
    background: #f5f6f7;
    border-radius: 5px;
    line-height: 1.75;
    margin: 0 0 1.75em;
    max-width: 100%;
    overflow: auto;
    padding: 15px;
    white-space: pre;
    white-space: pre-wrap;
    word-break: break-all;
    code {
      border: none;
    }
  }
  code {
    border: 1px solid #d1d1d1;
    background: #f5f6f7;
    color: #555;
    margin: 0px 3px;
    padding: 1px 2px;
    border-radius: 5px;
  }
  iframe {
    max-width: 100%;
  }
`;

export const BlogLayout = ({
  title,
  description,
  cover,
  authors,
  tags,
  updated,
  created,
  html,
  slug,
}: ContentFileMeta) => {
  const metaTitle = title
    ? title + " | AFFiNE"
    : "Blog | AFFiNE - All In One KnowledgeOS"; // should always have a title
  const metaUrl = "https://affine.pro/" + slug;
  const metaDescription =
    description ??
    "There can be more than Notion and Miro. AFFiNE is a next-gen knowledge base that brings planning, sorting and creating all together.";
  const metaImage = cover ?? "https://affine.pro/og.jpeg";
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title key="page-title">{title}</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metaUrl} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:site" content="@AffineOfficial" />
        <meta name="twitter:image" content={metaImage} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:site_name" content="AFFiNE" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:description" content={metaDescription} />
      </Head>
      <Page showSearchBar={true}>
        <Header>
          <HeaderContent>
            <HeaderLeftContent>
              {updated ? (
                <HeaderTime>{`Updated: ${new Date(updated).toLocaleDateString(
                  "en-US"
                )}`}</HeaderTime>
              ) : created ? (
                <HeaderTime>{`Created: ${new Date(created!).toLocaleDateString(
                  "en-US"
                )}`}</HeaderTime>
              ) : null}
              <h1>{title}</h1>
              <HeaderDec>{description}</HeaderDec>
            </HeaderLeftContent>
            <HeaderRightContent>
              <HeaderRightImage src={cover as string} alt="post cover" />
            </HeaderRightContent>
          </HeaderContent>
        </Header>
        <Body>
          <Slider>
            <SliderModule>
              <LeftTitle>Contributors</LeftTitle>
              <div>
                {authors?.map((item: string) => {
                  return (
                    <Author key={item}>
                      <picture>
                        <img src={USER_MAP[item]?.avatar} alt="avatar" />
                      </picture>
                      <div>
                        <p className="name">{item}</p>
                        {/* <div className='dec'>{item}</div> */}
                      </div>
                    </Author>
                  );
                }) || "Someone"}
              </div>
            </SliderModule>
            <SliderModule>
              <LeftTitle>Tags</LeftTitle>
              <div>
                {tags?.map(tagName => {
                  return <Tag key={tagName}>{tagName}</Tag>;
                }) || "Empty"}
              </div>
            </SliderModule>
            {/* <LastSliderModule>
            <LeftTitle>Share</LeftTitle>
          </LastSliderModule> */}
            <div></div>
          </Slider>
          <Content dangerouslySetInnerHTML={{ __html: html || "" }} />
        </Body>
      </Page>
    </>
  );
};
