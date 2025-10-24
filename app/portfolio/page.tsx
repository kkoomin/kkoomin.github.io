import { PortfolioHeader } from "./components/PortfolioHeader";
import { PortfolioSummary } from "./components/PortfolioSummary";
import { PortfolioExperience } from "./components/PortfolioExperience";
import { PortfolioProjects } from "./components/PortfolioProjects";
import { PortfolioSkills } from "./components/PortfolioSkills";
import { BackButton } from "../ui/BackButton";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 print:bg-white print:py-0">
      <BackButton />
      <div className="max-w-5xl mx-auto bg-white shadow-lg print:shadow-none px-12 py-10">
        <PortfolioHeader />
        <div className="flex space-between md:grid md:grid-cols-2 gap-6 mb-8">
          <PortfolioSummary />
          <PortfolioExperience />
        </div>
        <PortfolioProjects />
        <PortfolioSkills />
      </div>
    </div>
  );
}
