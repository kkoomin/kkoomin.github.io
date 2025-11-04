import { resumeData } from "../../data/resumeData";
import { parseText } from "../../lib/textUtils";

export function Summary() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-6 print:mb-2 print:shadow-none print:rounded-none">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        핵심 역량
      </h2>
      <ul>
        {resumeData.summary.map((summary, i) => (
          <li
            key={i}
            className="text-muted-foreground  text-[15px] leading-relaxed flex mb-0.5"
          >
            <span className="mr-2 text-primary">•</span>
            <span>{parseText(summary)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
