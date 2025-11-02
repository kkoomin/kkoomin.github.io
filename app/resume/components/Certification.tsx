import { Calendar, Award, CircleEllipsis } from "lucide-react";
import { resumeData } from "../../data/resumeData";

export function Certification() {
  const certifications = resumeData.certifications;
  const otherExperiences = resumeData.otherExperiences;
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 print:mb-2 print:shadow-none print:rounded-none print:p-6">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        자격증 및 기타 이력
      </h2>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center print:w-10 print:h-10">
              <Award className="w-6 h-6 text-primary print:w-5 print:h-5" />
            </div>
          </div>
          <div>
            <ul className="space-y-1">
              {certifications.map((cert, index) => (
                <div className="mb-4" key={index}>
                  <h3 className="mb-1 font-bold">{cert.title}</h3>
                  <p className="text-muted-foreground print:text-slate-700 text-[15px]">
                    {cert.description}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center print:w-10 print:h-10">
              <CircleEllipsis className="w-6 h-6 text-primary print:w-5 print:h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-lg mb-2 hidden">기타 이력</h3>
            <ul className="space-y-1">
              {otherExperiences.map((exp, index) => (
                <div className="mb-4" key={index}>
                  <h3 className="mb-1 font-bold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground print:text-slate-700 text-[15px]">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground print:text-slate-700 text-[15px] leading-relaxed flex"
                      >
                        <span className="mr-2 text-primary">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
