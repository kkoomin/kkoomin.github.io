import type { Metadata } from "next";
import "../styles/globals.css";
// import { Inter } from "next/font/google";
// import Footer from "../components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Minha Koo",
    template: "%s | Minha Koo",
  },
  description: "Frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen`}>
        <div className="blur h-24"></div>
        <main
          className={`container  p-8 max-w-screen-sm mx-auto text-gray-600`}
        >
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
