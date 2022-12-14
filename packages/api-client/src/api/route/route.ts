import gql from 'graphql-tag';

/** GraphQL Query that fetches the resolver for received URL. */
export default gql`
  query route($url: String!) {
    route(url: $url) {
      type
       ... on ProductInterface {
        sku
      }
      ... on CategoryTree {
        uid
      }
      ... on CmsPage {
        identifier
      }
    }
  }
`;
