import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TullochStudio",
  description: "My portfolio site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
