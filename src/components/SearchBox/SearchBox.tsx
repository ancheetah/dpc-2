import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox as AlgoliaSearchBox } from 'react-instantsearch-dom';
import builderConfig from '@config/builder';
import type { SearchBoxProps } from '@components/SearchBox/_types';

// extract the algolia variables required to use the API
const { algoliaAppId, algoliaSearchApiKey } = builderConfig;
const searchClient = algoliasearch(algoliaAppId, algoliaSearchApiKey);

export const SearchBox = (props: SearchBoxProps) => {
   const { searchIndex } = props;
   return (
      <div>
         <InstantSearch searchClient={searchClient} indexName={searchIndex}>
            <AlgoliaSearchBox />
         </InstantSearch>
      </div>
   );
};
