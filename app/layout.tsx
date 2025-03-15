import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { PathIndicator } from "./components/PathIndicator";
import "./globals.css";

export const metadata: Metadata = {
  title: "gard aanstad",
  description: "computer programmer :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} pb-16 md:pb-0`}>
        <div className="container max-w-[65ch] mx-auto px-4 py-4">
          <header className="prose prose-invert md:block">
            <PathIndicator />
          </header>
          
          <main className="prose prose-invert mt-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
