/* eslint-disable import/no-default-export */
if (!process.env.BUILDER_PUBLIC_KEY) {
   throw new Error('Missing env variable BUILDER_PUBLIC_KEY');
}

// Remove requiring algolia until algolia is implemented
// if (!process.env.ALGOLIA_APP_ID) {
//    throw new Error('Missing env variable ALGOLIA_APP_ID');
// }

// if (!process.env.ALGOLIA_SEARCH_API_KEY) {
//    throw new Error('Missing env variable SEARCH_API_KEY');
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   apiKey: process.env.BUILDER_PUBLIC_KEY,
   algoliaAppId: process.env.ALGOLIA_APP_ID || '',
   algoliaSearchApiKey: process.env.ALGOLIA_SEARCH_API_KEY || '',
};
