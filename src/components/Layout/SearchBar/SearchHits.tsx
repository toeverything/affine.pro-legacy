import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Highlight,
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
        }}
      >
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
                    borderRadius: "6px",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  <StyledHitTittle>
                    <Highlight attribute="title" hit={hit} />
                  </StyledHitTittle>
                  <StyledHitContent>
                    <Highlight attribute="description" hit={hit} />
                  </StyledHitContent>
                  <StyledHitContent>
                    <Highlight attribute="authors" hit={hit} />
                  </StyledHitContent>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
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
  overflow-y: scroll;
  border-color: #bbbfc4;
  border-radius: 6px;
  opacity: 1;
  z-index: 100;
  margin-top: 48px;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
const StyledHitTittle = styled.h3`
  margin: 0;
`;
const StyledHitContent = styled.p`
  margin: 0;
`;
