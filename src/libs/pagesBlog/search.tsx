import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/satellite.css";
import { useRouter } from "next/router";
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-hooks-web";

const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string;

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY as string
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
    <InstantSearch searchClient={searchClient as any} indexName={INDEX_NAME}>
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
