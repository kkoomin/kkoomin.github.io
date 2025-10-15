import { GraduationCap } from "lucide-react";
import { resumeData } from "../../data/resumeData";

export function Education() {
  const education = resumeData.education;
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-6 print:mb-0 print:shadow-none print:rounded-none print:p-6">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        학력
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div className="flex gap-4" key={index}>
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center print:w-10 print:h-10">
                <GraduationCap className="w-6 h-6 text-primary print:w-5 print:h-5" />
              </div>
            </div>
            <div>
              <h3 className="mb-1 font-bold">{edu.school}</h3>
              <p className="text-muted-foreground text-sm mb-1">{edu.degree}</p>
              <p className="text-muted-foreground text-sm">{edu.graduated}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
