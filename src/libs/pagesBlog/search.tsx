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

type HitComponent = Parameters<
  typeof Hits<Record<string, string>>
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
    <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
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
