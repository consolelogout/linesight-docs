import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import "fumadocs-ui/style.css";
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Github, GithubIcon } from 'lucide-react';;

const inter = Inter({
  subsets: ['latin'],
});


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
