import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "winkler.dev",
  description: "winkler.dev — personal site and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
