import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {Product} from './types';

import {SERVER_PORT} from '@env';

export const client = new ApolloClient({
  uri: `http://localhost:${SERVER_PORT}/graphql`,
  cache: new InMemoryCache(),
});

export const getProducts = () =>
  client.query<{allProducts: Product[]}>({
    query: gql(`
      query products {
        allProducts {
            id
            title
            description
            price
            image
            discount
            tags
        }
      }
    `),
  });

export const getProduct = (id: number) =>
  client.query<Product>({
    query: gql(`
      query Products($id: ID!) {
        Products(id: $id) {
          id
          title
          description
          price
          image
          discount
          tags
        }
      }
    `),
    variables: {id},
  });
