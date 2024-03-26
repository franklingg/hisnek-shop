import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {Product} from './types';
import {signIn} from 'aws-amplify/auth';
import {generateClient} from 'aws-amplify/api';
import {getUrl} from 'aws-amplify/storage';
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

export const getProducts = async () => {
  const {data} = await awsClient.graphql({
    query: listProducts,
    authMode: 'apiKey',
  });
  const products = await Promise.all(
    data.listProducts.items.map(async (i: Product) => {
      const storageUrl = (
        await getUrl({
          key: i.image,
          options: {
            accessLevel: 'guest',
          },
        })
      ).url;
      i.image = storageUrl.toJSON();
      i.remote = true;
      return i;
    }),
  );
  return products;
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
