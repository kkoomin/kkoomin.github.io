import { resumeData } from "@/app/data/resumeData";

export function PortfolioSkills() {
  return (
    <section className="mb-10">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        기술 스택
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resumeData.skills.map((category, index) => (
          <div key={index}>
            <h4 className="text-md font-bold mb-2 text-muted-foreground leading-relaxed">
              {category.category}
            </h4>
            <p className="text-[15px] text-muted-foreground  leading-relaxed">
              {category.skills.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
