import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Devi & Yandi",
  description: "Kami mengundang Anda untuk merayakan pernikahan Devi Apriliyanti Safara & Yandi Hidayat pada 24 Mei 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${cormorant.variable} ${greatVibes.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
