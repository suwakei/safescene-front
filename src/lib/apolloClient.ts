import { ApolloClient, InMemoryCache } from '@apollo/client';
import { environments } from '@/envs';
import { HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: environments.endpoint.graphql || 'http://localhost:3001/api/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});
