import Image from "next/image";
import { Badge } from "@/app/ui/Badge";
import { portfolioProjects } from "@/app/data/projectData";
import { parseText } from "@/app/lib/textUtils";

export function DetailedProjects() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-6 print:mb-2 print:shadow-none print:rounded-none print:p-6 print-break-before-page">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        상세 경력 기술서
      </h2>

      <div className="space-y-6 print:space-y-4">
        {portfolioProjects.map((project, index) => (
          <div
            key={index}
            className={`pb-8 border-b border-border last:border-0 print:break-inside-avoid ${
              index !== 0 ? "print:pt-8" : ""
            }`}
          >
            <div className="mb-6 print:mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                <h3 className="text-md font-bold">{project.title}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap sm:ml-2">
                  {project.period}
                </span>
              </div>
              <p className="text-[15px] text-muted-foreground mb-3 leading-relaxed">
                {project.company}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-sm print:bg-secondary print:border-transparent"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 프로젝트 스크린샷 */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="grid grid-cols-5 gap-2 mb-6 print:mb-4">
                {project.screenshots.map((screenshot, i) => (
                  <div key={i} className="relative">
                    <div className="aspect-[9/16] overflow-hidden">
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-1 leading-relaxed">
                      화면 {i + 1}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 업무 상세 */}
            <div className="mb-6 print:mb-4">
              <h4 className="text-md font-bold mb-2">업무 상세</h4>
              <ul className="space-y-1">
                {project.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-[15px] leading-relaxed flex"
                  >
                    <span className="mr-2 text-primary">•</span>
                    <span>{parseText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 주요 성과 */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-6 print:mb-4">
                <h4 className="text-md font-bold mb-2">주요 성과</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-[15px] leading-relaxed flex"
                    >
                      <span className="mr-2 text-primary">•</span>
                      <span>{parseText(achievement)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 기술 세부 사항 */}
            {project.technicalDetails &&
              project.technicalDetails.length > 0 && (
                <div className="mb-6 print:mb-4">
                  <h4 className="text-md font-bold mb-2">기술 세부 사항</h4>
                  <ul className="space-y-1">
                    {project.technicalDetails.map((detail, i) => (
                      <li key={i} className="space-y-1">
                        <div className="flex items-start gap-2 text-[15px] text-muted-foreground leading-relaxed">
                          <span className="mr-2 text-primary">•</span>
                          <span>{detail.title}</span>
                        </div>
                        <ul className="ml-4 space-y-1">
                          {detail.points.map((point, j) => (
                            <li
                              key={j}
                              className="text-muted-foreground text-[15px] leading-relaxed flex"
                            >
                              <span className="mr-2 text-primary">•</span>
                              <span>{parseText(point)}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        ))}
      </div>
    </section>
  );
}
