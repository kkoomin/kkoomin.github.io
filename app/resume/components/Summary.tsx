import { resumeData } from "../data/resumeData";
import { parseBold } from "../../lib/textUtils";

export function Summary() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-6 print:mb-0 print:shadow-none print:rounded-none">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        핵심 역량
      </h2>

      {/* <p className="leading-relaxed text-muted-foreground"> */}
      <ul>
        {resumeData.summary.map((summary, i) => (
          <li
            key={i}
            className="text-muted-foreground text-sm leading-relaxed flex"
          >
            <span className="mr-2 text-primary">•</span>
            <span>{parseBold(summary)}</span>
          </li>
        ))}
      </ul>
      {/* </p> */}
    </section>
  );
}
