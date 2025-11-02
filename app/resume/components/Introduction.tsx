import { resumeData } from "../../data/resumeData";
import { parseBold } from "../../lib/textUtils";

export function Introduction() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-6 print:mb-2 print:shadow-none print:rounded-none">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        자기소개
      </h2>
      <ul>
        {resumeData.introduction.map((introduction, i) => (
          <li
            key={i}
            className="text-muted-foreground  text-[15px] leading-relaxed flex mb-0.5"
          >
            <span className="mr-2 text-primary">•</span>
            <span>{parseBold(introduction)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
