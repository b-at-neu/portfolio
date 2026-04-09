import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components";

export const metadata: Metadata = {
  title: "winkler.dev",
  description: "winkler.dev — personal site and portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
