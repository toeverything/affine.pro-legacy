import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { useHits, UseHitsProps } from "react-instantsearch-hooks-web";

const CustomHits = (props: UseHitsProps) => {
  const { hits, results } = useHits(props);
  const [showResult, setShowResult] = useState(false);
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
        <Divider />

        <List>
          {hits.map((hit) => {
            return (
              <ListItem disablePadding key={hit.objectID}>
                <ListItemButton>
                  <ListItemText primary={hit.title} />
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
  background-color: white;
  border: 1px solid black;
  position: absolute;
  overflow-y: scroll;
  opacity: 1;
  z-index: 100;
  margin-top: 48px;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
const StyledHit = styled.div`
  display: flex;
  flex-direction: column;
`;
