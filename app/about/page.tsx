import { ArrowUpLeft } from "@/components/icons";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative">
      <div className="absolute -left-20 max-sm:-top-10 max-sm:-left-2 flex gap-2">
        <ArrowUpLeft />
        <Link href="/">Index</Link>
      </div>
      <div className="flex flex-col gap-4">
        {/* Name */}
        <h1 className="text-[1.2rem]">Minha Koo</h1>

        {/* Experience */}
        <article>
          <h2>Experience</h2>
          <div className="mb-3">
            <div>Frontend Developer</div>
            <div className="text-sm">
              SLDT, Seoul, Republic of Korea | Feb 2023 - May 2024
            </div>
          </div>
          <div className="mb-3">
            <div>Frontend Developer</div>
            <div className="text-sm">
              Lunasoft, Seoul, Republic of Korea | Sep 2020 - Jan 2023
            </div>
          </div>
          <div className="mb-3">
            <div>Localisation QA Game Tester</div>
            <div className="text-sm">
              Testronic, London, UK | Jul 2018 - Sep 2018
            </div>
          </div>
        </article>

        {/* Skills */}
        <article>
          <h2>Skills</h2>
          <div>
            <div className="mb-3">
              Next.js, TypeScript(JavaScript), React, Angular, Vue.js
            </div>
            <div className="mb-3">
              Zustand, Redux, Redux toolkit, TanStack Query(React Query), React
              Router, Tailwind, SCSS, Jest, React Native, etc.
            </div>
            <div className="mb-3">Node.js, Ruby on Rails</div>
          </div>
        </article>

        {/* Education */}
        <article>
          <h2>Education</h2>
          <div>
            <div className="mb-3">
              <div>Flatiron School</div>
              <div className="text-sm">
                London, UK | Software Engineering Course
              </div>
            </div>
            <div className="mb-3">
              <div>Ewha Womans University</div>
              <div className="text-sm">Seoul, Republic of Korea</div>
              <div className="text-sm">
                Korean Language and Literature, Business Administration and
                Management
              </div>
            </div>
          </div>
        </article>

        {/* Other Interests */}
        <article>
          <h2>Other Interests</h2>
          <div className="flex flex-col">
            <span>
              Enjoy swimming, hiking, ballet and exploring other interesting
              workouts!
            </span>
            <span>I play piano and cello with a love for classical music.</span>
            <span>
              Enthusiastic gamer. (Still on a mission to save the Kingdom of
              Hyrule and Princess Zelda!)
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
