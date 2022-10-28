import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/satellite.css";
import { useRouter } from "next/router";
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-hooks-web";
const algoliaClient = algoliasearch(
  "C06ESJJU5I",
  "b3347fab2ccb4f1d3c81eef3bf3de6d4"
);
const searchClient = {
  ...algoliaClient,
  search(requests: any) {
    if (requests.every(({ params }: any) => !params.query)) {
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

const Hit = ({ hit }: any) => {
  const router = useRouter();
  return (
    <div style={{ cursor: "pointer" }} onClick={() => router.push(hit.href)}>
      <h3>
        <Highlight attribute="title" hit={hit} highlightedTagName="em" />
      </h3>

      <p>
        <Highlight attribute="description" hit={hit} highlightedTagName="em" />
      </p>
    </div>
  );
};

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient as any} indexName="test_blog">
      <SearchBox
        translations={{
          submitButtonTitle: "Submit your search query.",
          resetButtonTitle: "Clear your search query.",
        }}
        placeholder="Search here..."
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}
