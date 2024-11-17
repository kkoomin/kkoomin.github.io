import Link from "next/link";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import { LinkedInIcon, NotionIcon } from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative min-h-screen p-8">
      <div className="blur h-24"></div>
      <main className={`container max-w-screen-sm mx-auto text-gray-600`}>
        <div>
          {/* Name */}
          <h1 className="text-lg mb-4 font-bold text-black">Minha Koo</h1>

          {/* Short Summary */}
          <div className="flex flex-col gap-2 mb-8">
            <div>
              Frontend developer with 4 years of experience working in Seoul,
              South Korea, after completing my software engineering studies in
              London in 2019
            </div>
            <div>
              Worked in{" "}
              <Link href="https://apps.apple.com/app/soldout-%EC%86%94%EB%93%9C%EC%95%84%EC%9B%83/id1515428637">
                <span className="external-link">Soldout</span>
              </Link>
              , South Korea
            </div>
          </div>

          {/* Contacts */}
          <div className="mb-8">
            <div className="font-bold text-black">Contacts</div>
            <div className="flex gap-2">
              <div className="">minha.koo.9@gmail.com</div>
              <Link
                className="bg-selected"
                href="https://www.linkedin.com/in/minha-koo/"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://minha-koo.notion.site/resume-kor"
                className="flex bg-selected"
              >
                <NotionIcon />
                <span className="text-xs place-content-end ml-[5px]">
                  CV(Korean)
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Contents */}
        <section className="flex">
          <div className="basis-1/2 flex-col gap-7">
            <div className="text-black font-bold">About</div>
            <Link className="internal-link" href="/about">
              more about me
            </Link>
          </div>
          <div className="basis-1/2 flex-col gap-7">
            <div className="text-black font-bold">
              Note
              {/* <Link href="/note">Note</Link> */}
            </div>
            <div>no contents</div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
