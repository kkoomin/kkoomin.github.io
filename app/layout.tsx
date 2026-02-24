import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "구민하 | Frontend Developer",
  description:
    "React와 Next.js를 주력으로 개발하는 프론트엔드 개발자 구민하입니다",
  keywords: ["Frontend Developer", "React", "Next.js", "Portfolio", "구민하"],
  authors: [{ name: "구민하", url: "https://kkoomin.github.io" }],
  creator: "구민하",
  metadataBase: new URL("https://kkoomin.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
