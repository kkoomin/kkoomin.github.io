import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div className="p-4">
      <div className="blur h-24"></div>
      <main
        className={`container max-w-screen-sm mx-auto bg-slate-400	${inter.variable} font-sans`}
      >
        <div>
          {/* Name */}
          <h1 className="text-lg mb-4">Minha Koo</h1>

          {/* Short Summary */}
          <div>
            frontend developer with 4 years of experience working in Seoul,
            South Korea, after completing my software engineering studies in
            London in 2019
          </div>
        </div>

        {/* Contents */}
        <div>About</div>
        <div>Note</div>
        <div>Blog</div>

        {/* Other Summary */}
      </main>
    </div>
  );
}
