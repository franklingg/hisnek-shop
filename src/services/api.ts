import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {Product} from './types';
import {signIn} from 'aws-amplify/auth';
import {generateClient} from 'aws-amplify/api';
import {SERVER_PORT, IP_ADDRESS} from '@env';
import {listProducts} from '~/graphql/queries';

export const localClient = new ApolloClient({
  uri: `http://${IP_ADDRESS || 'localhost'}:${SERVER_PORT}/graphql`,
  cache: new InMemoryCache(),
});

export const awsClient = generateClient();

export const getMockProducts = () =>
  localClient.query<{allProducts: Product[]}>({
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

export const getProducts = () => {
  return awsClient.graphql({query: listProducts});
};

export const login = async (username: string, password: string) => {
  try {
    await signIn({
      username: username,
      password,
      options: {
        authFlowType: 'USER_PASSWORD_AUTH',
      },
    });
  } catch (e) {
    console.error(e);
    return Promise.reject();
  }
};
