import { PortfolioHeader } from "./components/PortfolioHeader";
import { PortfolioIntroduction } from "./components/PortfolioIntroduction";
import { PortfolioExperience } from "./components/PortfolioExperience";
import { PortfolioProjects } from "./components/PortfolioProjects";
import { PortfolioSkills } from "./components/PortfolioSkills";
import { BackButton } from "../ui/BackButton";
import { DetailedIntroduction } from "../resume/components/DetailedIntroduction";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 print:bg-white print:py-0">
      <BackButton />
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none px-12 py-10">
        <PortfolioHeader />
        {/* <PortfolioIntroduction /> */}
        <PortfolioExperience />
        <PortfolioSkills />
        <PortfolioProjects />
        {/* <DetailedIntroduction /> */}
      </div>
    </div>
  );
}
