import { resumeData } from "@/app/data/resumeData";
import { getTotalCareerPeriod } from "@/app/lib/textUtils";

export function PortfolioExperience() {
  return (
    <section className="mb-10 print:mb-15">
      <div className="flex w-full justify-between mb-6 pb-2 border-b border-border">
        <h2 className="text-lg font-bold">경력</h2>
        <div className="text-md text-muted-foreground  flex items-center">
          {getTotalCareerPeriod(resumeData.experiences.map((e) => e.period))}
        </div>
      </div>
      <div className="space-y-3 text-[15px] leading-relaxed">
        {resumeData.experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start gap-2">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 leading-relaxed">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {exp.title}
                  {exp.location && ` | ${exp.location}`}
                </p>
              </div>
              <span className="text-[15px] text-muted-foreground whitespace-nowrap leading-relaxed">
                {exp.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
