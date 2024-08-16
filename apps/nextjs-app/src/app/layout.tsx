import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@giverve/ui";

import Providers from "./_providers";

import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giverve Starter kit",
  description: "Generated by Giverve Starter kit",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "dark min-h-screen bg-background font-sans text-foreground antialiased",
          inter.className,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
