import { PortfolioHeader } from "./components/PortfolioHeader";
import { PortfolioExperience } from "./components/PortfolioExperience";
import { PortfolioProjects } from "./components/PortfolioProjects";
import { PortfolioSkills } from "./components/PortfolioSkills";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 print:bg-white print:py-0">
      <div className="max-w-5xl mx-auto bg-white shadow-lg print:shadow-none px-12 py-10">
        <PortfolioHeader />
        <PortfolioExperience />
        <PortfolioProjects />
        <PortfolioSkills />
      </div>
    </div>
  );
}
