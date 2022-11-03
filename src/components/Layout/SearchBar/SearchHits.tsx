import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useRouter } from "next/router";
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
  const router = useRouter();
  useEffect(() => {
    results?.query == "" ? setShowResult(false) : setShowResult(true);
  }, [results?.query]);

  return (
    <StyledHits isShow={showResult}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: "6px",
        }}
      >
        <StyledResultsTitle>
          Showing {hits.length} results for &quot;
          <strong>{results?.query}</strong>
          &quot;
        </StyledResultsTitle>
        <StyledList>
          <List>
            {hits.map((hit) => {
              return (
                <ListItem
                  disablePadding
                  key={hit.objectID}
                  onClick={() => router.push(hit.href!)}
                  sx={{
                    padding: "0 8px",
                  }}
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      borderRadius: "6px",
                      padding: "8px",
                      justifyContent: "start",
                    }}
                  >
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
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </StyledList>
        {hits.length == 0 ? (
          <StyledNoFound>
            <em>No results found. Maybe try different keywords.</em>
          </StyledNoFound>
        ) : null}
        <StyledAlgoliaLogo>
          <PoweredBy />
        </StyledAlgoliaLogo>
      </Box>
    </StyledHits>
  );
};

export default CustomHits;

type isShow = {
  isShow: boolean;
};
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
const StyledNoFound = styled.div`
  width: 100%;
  padding: 0 16px 16px 16px;
  opacity: 0.8;
  font-size: 14px;
`;
