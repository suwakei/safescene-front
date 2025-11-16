'use client';

import { ApolloProvider } from '@apollo/client/react';
import { client } from '@/lib/apolloClient';

type Props = {
  children: React.ReactNode;
};

export function ApolloWrapper({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
