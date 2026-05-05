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
  description:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
  metadataBase: new URL("https://undangan-devi-yandi.vercel.app"),
  openGraph: {
    title: "Undangan Pernikahan Devi & Yandi",
    description:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
    url: "https://undangan-devi-yandi.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://undangan-devi-yandi.vercel.app/asset/cover-utama.png",
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Devi & Yandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan Devi & Yandi",
    description:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
    images: [
      "https://undangan-devi-yandi.vercel.app/asset/cover-utama.png",
    ],
  },
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
