import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useEffect, useState } from "react";
import {
  Highlight,
  PoweredBy,
  useHits,
  UseHitsProps,
} from "react-instantsearch-hooks-web";
const CustomHits = (props: UseHitsProps) => {
  const { hits, results } = useHits(props);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    results?.query == "" ? setShowResult(false) : setShowResult(true);
  }, [results?.query]);
  return (
    <StyledHits isShow={showResult}>
      <StyledBox>
        <StyledResultsTitle>
          Showing {hits.length} results for &quot;
          <strong>{results?.query}</strong>
          &quot;
        </StyledResultsTitle>
        <StyledList>
          <List>
            {hits.map((hit) => {
              return (
                <a
                  key={hit.objectID}
                  href={hit.href as string}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledListItem disablePadding>
                    <StyledListItemButton>
                      <StyledHitTittle>
                        <Highlight attribute="title" hit={hit} />
                      </StyledHitTittle>
                      <StyledHitContent>
                        <Highlight attribute="description" hit={hit} />
                      </StyledHitContent>
                      <StyledHitContent>
                        authors:&nbsp;
                        <Highlight attribute="authors" hit={hit} />
                      </StyledHitContent>
                    </StyledListItemButton>
                  </StyledListItem>
                </a>
              );
            })}
          </List>
        </StyledList>
        <StyledAlgoliaLogo>
          <PoweredBy />
        </StyledAlgoliaLogo>
      </StyledBox>
    </StyledHits>
  );
};

export default CustomHits;

interface isShow {
  isShow: boolean;
}
const StyledHits = styled.div<isShow>`
  display: ${(props) => (props.isShow ? "flex" : "none")};
  width: 100%;
  max-height: 600px;
  background-color: white;
  border: 1px solid;
  position: absolute;
  border-color: #bbbfc4;
  border-radius: 6px;
  opacity: 1;
  z-index: 100;
  margin-top: 48px;
  box-shadow: 0 6px 18px 0 #bbbfc4;
`;
const StyledList = styled.div`
  width: 100%;
  max-height: 380px;
  padding: 0;
  overflow-y: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
const StyledBox = styled(Box)({
  width: "100%",
  bgcolor: "background.paper",
  borderRadius: "6px",
});
const StyledListItem = styled(ListItem)({
  padding: "0 8px",
});
const StyledListItemButton = styled(ListItemButton)({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  borderRadius: "6px",
  padding: "8px",
  justifyContent: "start",
});
const StyledHitTittle = styled.h3`
  width: 100%;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`;

const StyledHitContent = styled.p`
  width: 100%;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.8;
  font-size: 12px;
`;

const StyledAlgoliaLogo = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 16px;
  font-size: 10px;
  justify-content: end;
  background-color: #f5f6f7;
  border-radius: 6px;
`;
const StyledResultsTitle = styled.em`
  display: flex;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  font-size: 14px;
  opacity: 0.8;
  strong {
    opacity: 1;
  }
`;
