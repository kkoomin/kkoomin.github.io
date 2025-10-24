import { resumeData } from "@/app/data/resumeData";
import { parseBold } from "@/app/lib/textUtils";

export function PortfolioSummary() {
  return (
    <div className="grow">
      <h3 className="font-bold text-lg text-slate-900 mb-3">핵심 역량</h3>
      <ul className="text-sm text-slate-600 leading-relaxed space-y-0.3">
        {resumeData.summary.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-slate-900 mt-0.5">•</span>
            <span>{parseBold(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
