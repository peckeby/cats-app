import React from "react";
import type { Metadata } from "next";
import { Comfortaa, Inter, Seymour_One } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

const seymourOne = Seymour_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-seymour",
});

const comfortaa = Comfortaa({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  title: "Cats app",
  description: "An app that tell you everything about cats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${inter.className} ${seymourOne.variable} ${comfortaa.variable}`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
