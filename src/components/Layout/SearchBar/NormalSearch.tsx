import styled from "@emotion/styled";
import type { SearchClient } from "algoliasearch";
import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/satellite.css";
import { useRouter } from "next/router";
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-hooks-web";
import CustomHits from "./SearchHits";

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

export default function Search(props: PageProps) {
  return (
    <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
      <StyledAlgolia isShow={props.showSearchBar}>
        <StyledSearch>
          <SearchBox
            translations={{
              submitButtonTitle: "Submit your search query.",
              resetButtonTitle: "Clear your search query.",
            }}
            placeholder="Search here..."
          />
        </StyledSearch>
        <CustomHits {...Hit} />
      </StyledAlgolia>
    </InstantSearch>
  );
}
type isShow = {
  isShow: boolean | undefined;
};
const StyledAlgolia = styled.div<isShow>`
  width: 500px;
  flex-direction: column;
  position: relative;
  display: ${(props) => (props.isShow ? "flex" : "none")};
  margin-left: 16px;
  transition: 0.2s ease-in;
  @media (max-width: 1300px) {
    width: 450px;
  }
  @media (max-width: 1200px) {
    width: 350px;
  }
  @media (max-width: 1100px) {
    width: 250px;
  }
`;
const StyledSearch = styled.div`
  width: 100%;
  input[type="search"] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
    box-shadow: none;
    border-color: #bbbfc4;
    border-radius: 6px;
    transition: 0.2s ease-in;
    ::placeholder {
      opacity: 0.5;
    }
    :focus {
      border-color: #096bde;
    }
    :hover {
      border-color: #096bde;
    }
  }
`;
