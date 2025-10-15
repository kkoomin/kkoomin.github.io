import { resumeData } from "@/app/data/resumeData";

export function PortfolioExperience() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 pb-2 font-bold text-lg border-b border-slate-300">
        경력
      </h2>

      <div className="space-y-6">
        {resumeData.experiences.map((exp, index) => (
          <div key={index} className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3>{exp.company}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.title}
                  {exp.location && ` • ${exp.location}`}
                </p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            {/* 
            <ul className="space-y-1.5">
              {exp.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <span className="text-slate-900 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </section>
  );
}
