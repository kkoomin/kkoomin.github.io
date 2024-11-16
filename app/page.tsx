import Link from "next/link";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import { LinkedInIcon, NotionIcon } from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="blur h-24"></div>
      <main className={`container max-w-screen-sm mx-auto`}>
        <div>
          {/* Name */}
          <h1 className="text-lg mb-4 font-bold">Minha Koo</h1>

          {/* Short Summary */}
          <div className="text-gray-600">
            Frontend developer with 4 years of experience working in Seoul,
            South Korea, after completing my software engineering studies in
            London in 2019
          </div>
        </div>

        {/* Contents */}
        <section className="flex flex-col">
          <div className="flex gap-7">
            <div>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div className="flex gap-7">
            <div>
              <Link href="/note">Note</Link>
            </div>
          </div>
        </section>

        {/* Other Summary */}
      </main>
      <Footer />
    </div>
  );
}
