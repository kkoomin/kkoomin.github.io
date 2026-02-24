import { resumeData } from "../../data/resumeData";
import { parseText } from "../../lib/textUtils";

export function DetailedIntroduction() {
  if (!resumeData.detailedIntroduction) {
    return null;
  }

  return (
    <section className="mb-10 print:mb-8">
      <ul className="space-y-2 border-t border-border pt-10 print:pt-8">
        {resumeData.detailedIntroduction.map((introduction, i) => (
          <li
            key={i}
            className="text-muted-foreground text-[15px] leading-relaxed indent-2"
          >
            {parseText(introduction)}
          </li>
        ))}
      </ul>
    </section>
  );
}
