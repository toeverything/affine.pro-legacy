import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import type { SearchClient } from "algoliasearch";
import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/satellite.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Highlight,
  Hits,
  InstantSearch,
  PoweredBy,
  SearchBox,
} from "react-instantsearch-hooks-web";

type HitComponent = Parameters<
  typeof Hits<Record<string, any>>
>[0]["hitComponent"];

const INDEX_NAME =
  (process.env.MODE === "test" ? "test_" : "prod_") +
  process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY as string
);

const searchClient: SearchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params?.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: false,
          query: "",
          params: "",
        })),
      });
    }
    return algoliaClient.search(requests);
  },
};

const Hit: HitComponent = ({ hit }) => {
  const router = useRouter();

  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={() => router.push(hit.href)}>
        <h3>
          <Highlight attribute="title" hit={hit} highlightedTagName="em" />
        </h3>
        <p>authors: {hit.authors.join(" , ")}</p>
        <p></p>
      </div>
    </div>
  );
};
interface PageProps {
  showSearchBar?: boolean;
}

const SmallSearch = (props: PageProps) => {
  const [search, setSearch] = useState(false);
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = search ? "hidden" : "visible";
  }, [router.asPath, search]);
  return (
    <StyledContainer isShow={props.showSearchBar}>
      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
        onClick={() => setSearch(true)}
      >
        <SearchIcon />
      </IconButton>
      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
        <StyledAlgolia isSearch={search}>
          <StyledSearch>
            <StyledSearchBox>
              <SearchBox
                translations={{
                  submitButtonTitle: "Submit your search query.",
                  resetButtonTitle: "Clear your search query.",
                }}
                placeholder="Search here..."
              />
            </StyledSearchBox>
            <StyledButton>
              <Button onClick={() => setSearch(false)}>Cancel</Button>
            </StyledButton>
          </StyledSearch>
          <StyledHits>
            <Hits hitComponent={Hit} />
          </StyledHits>
          <StyledAlgoliaLogo>
            <PoweredBy />
          </StyledAlgoliaLogo>
        </StyledAlgolia>
      </InstantSearch>
    </StyledContainer>
  );
};

export default SmallSearch;

type isShow = {
  isShow: boolean | undefined;
};
type isSearch = {
  isSearch: boolean;
};
const StyledContainer = styled.div<isShow>`
  display: ${(props) => (props.isShow ? "flex" : "none")};
`;
const StyledAlgolia = styled.div<isSearch>`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  position: absolute;
  display: ${(props) => (props.isSearch ? "flex" : "none")};
  left: 0;
  transition: 0.2s ease-in;
  background-color: white;
  z-index: 100;
`;

const StyledSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const StyledSearchBox = styled.div`
  width: 85%;
  padding: 16px;
  padding-right: 0;
`;
const StyledButton = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const StyledHits = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  overflow-y: scroll;
  z-index: 100;
  margin-top: 10vh;
`;
const StyledAlgoliaLogo = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`;
