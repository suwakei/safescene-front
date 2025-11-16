import { Metadata } from 'next';
import React from 'react';
import { ApolloWrapper } from '@/providers/apollo-provider';
import { Header } from '@/components/layout/header/Header';

export const metadata: Metadata = {
  title: 'Safe Scene',
  description: 'Safe Scene',
};

export default function UserRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloWrapper>
      <Header />
      <main className="pt-16">{children}</main>
    </ApolloWrapper>
  );
}
