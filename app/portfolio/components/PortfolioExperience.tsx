import { resumeData } from "@/app/data/resumeData";
import { getTotalCareerPeriod } from "@/app/lib/textUtils";

export function PortfolioExperience() {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg text-slate-900">경력</h3>
        <span className="text-sm text-slate-600">
          {getTotalCareerPeriod(
            resumeData.experiences.map((exp) => exp.period)
          )}
        </span>
      </div>
      <div className="space-y-3 text-sm">
        {resumeData.experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start gap-2">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900">{exp.company}</p>
                <p className="text-slate-600 text-xs">
                  {exp.title}
                  {exp.location && ` | ${exp.location}`}
                </p>
              </div>
              <span className="text-xs text-slate-500 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
