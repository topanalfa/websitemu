import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx or app/page.tsx
export const metadata = {
  title: "Buatwebmu - Gak Pake Lama",
  description: "Buat Websitemu dengan mudah dan gak pake lama, bergaransi.",
  openGraph: {
    title: "Buatwebmu - Gak Pake Lama",
    description: "Buat Websitemu dengan mudah dan gak pake lama, bergaransi.",
    url: "https://buatwebmu.com",
    siteName: "Buatwebmu.com",
    images: [
      {
        url: "https://buatwebmu.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buatwebmu - Gak Pake Lama",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buatwebmu - Gak Pake Lama",
    description: "Buat Websitemu dengan mudah dan gak pake lama, bergaransi.",
    images: ["https://buatwebmu.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://buatwebmu.com/current-page" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Buatwebmu - Gak Pake Lama",
              "url": "https://buatwebmu.com",
              "logo": "https://buatwebmu.com/logo.png"
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
