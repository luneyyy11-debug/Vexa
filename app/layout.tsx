import "./css/style.css";

import localFont from "next/font/local";

import Header from "@/components/ui/header";

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Vexa | Ideas into momentum",
  description:
    "Vexa is an independent creative and growth studio helping ambitious businesses find their edge and move forward.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nacelle.variable} antialiased`}>
        <div className="site-shell">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
