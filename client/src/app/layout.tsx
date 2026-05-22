import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardWrapper from "@/app/dashboardWrapper";
import Script from "next/script"; /*for Dynatrace's RUM monitoring*/

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Inventory Management",
  description: "Dashboard to manage & monitor ecom inventory (stock)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script type="text/javascript" strategy="afterInteractive" src="https://js-cdn.dynatrace.com/jstag/18b1df4492a/bf63967rpf/ae4bd75cfbfeaa2a_complete.js" crossOrigin="anonymous"></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DashboardWrapper>
          {children}</DashboardWrapper>
      </body>
    </html>
  );
}
