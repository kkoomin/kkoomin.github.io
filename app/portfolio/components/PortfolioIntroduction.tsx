import { resumeData } from "@/app/data/resumeData";
import { parseText } from "@/app/lib/textUtils";

export function PortfolioIntroduction() {
  return (
    <section className="mb-10 print:mb-15">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        {/* 경력 기술서 내 자기소개 */}
      </h2>
      <ul className="space-y-2">
        {resumeData.introduction.map((introduction, i) => (
          <li
            key={i}
            className="text-muted-foreground text-[15px] leading-relaxed flex"
          >
            <span className="mr-2 text-primary">•</span>
            <span>{parseText(introduction)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
