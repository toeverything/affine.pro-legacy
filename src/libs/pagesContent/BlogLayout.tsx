import { Page } from "@/components/Layout/Page";
import styled from "styled-components";
import type { ContentFileMeta } from "../common/resolveContentFile";
import USER_MAP from "./user";

const LeftTitle = styled.h2`
  color: rgb(102, 112, 133);
  font-size: 16px;
`;
const SliderModule = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 32px;
`;
const LastSliderModule = styled(SliderModule)`
  border-bottom: none;
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
`;
const Header = styled.div`
  border-bottom: 1px solid #e4e7ec;
  background-color: #fcfcfd;
`;
const HeaderContent = styled.div`
  max-width: 1280px;
  padding: 128px 0;
  margin: 0 auto;
  h1 {
    width: 60%;
    margin-top: 0;
    font-size: 48px;
    line-height: 58px;
    margin-bottom: 1rem;
  }
  p {
    color: #4b32c3;
    font-size: 16px;
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
`;
export const BlogLayout = ({
  title,
  description,
  authors,
  tags,
  updated,
  created,
  html,
}: ContentFileMeta) => {
  return (
    <Page>
      <Header>
        <HeaderContent>
          {updated ? (
            <HeaderTime>{`Updated: ${new Date(
              updated
            ).toLocaleDateString()}`}</HeaderTime>
          ) : created ? (
            <HeaderTime>{`Created: ${new Date(
              created!
            ).toLocaleDateString()}`}</HeaderTime>
          ) : null}
          <h1>{title}</h1>
          <HeaderDec>{description}</HeaderDec>
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
                    {/* @ts-ignore */}
                    <img src={USER_MAP[item]?.avatar} alt="" />
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
              {tags?.map((tagName) => {
                return <Tag key={tagName}>{tagName}</Tag>;
              }) || "Empty"}
            </div>
          </SliderModule>
          <LastSliderModule>
            <LeftTitle>Share</LeftTitle>
          </LastSliderModule>
          <div></div>
        </Slider>
        <Content dangerouslySetInnerHTML={{ __html: html || "" }} />
      </Body>
    </Page>
  );
};
