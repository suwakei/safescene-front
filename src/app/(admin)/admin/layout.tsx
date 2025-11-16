import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Safe Scene Admin',
  description: 'Safe Scene Admin',
};

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>{children}</main>
  );
}