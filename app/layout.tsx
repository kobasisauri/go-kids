import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dizme - Creative Designer Portfolio",
  description:
    "I'm a creative designer based in New York, and I'm very passionate and dedicated to my work. Professional web developer with 20 years of experience.",
  keywords:
    "web design, ui/ux design, creative designer, portfolio, freelancer",
  authors: [{ name: "James Smith" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
