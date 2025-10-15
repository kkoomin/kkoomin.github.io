import { resumeData } from "@/app/data/resumeData";

export function PortfolioSkills() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 pb-2 font-bold text-lg border-b border-slate-300">
        기술 스택
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resumeData.skills.map((category, index) => (
          <div key={index}>
            <h4 className="text-sm mb-2 text-muted-foreground">
              {category.category}
            </h4>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {category.skills.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
