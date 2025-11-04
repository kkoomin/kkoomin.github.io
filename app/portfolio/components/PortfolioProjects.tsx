import Image from "next/image";
import { Badge } from "@/app/ui/Badge";
import { portfolioProjects } from "@/app/data/projectData";
import { parseText } from "@/app/lib/textUtils";

export function PortfolioProjects() {
  return (
    <section className="mb-10 print:mb-15">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        프로젝트
      </h2>

      <div className="space-y-8">
        {portfolioProjects.map((project, index) => (
          <div key={index} className="border-b border-border last:border-0">
            <div className="mb-8">
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
              <div className="grid grid-cols-4 gap-2 mb-8">
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
            <div className="mb-8">
              <h4 className="text-md font-bold mb-2">업무 상세</h4>
              <ul className="space-y-1">
                {project.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[15px] text-muted-foreground  leading-relaxed"
                  >
                    <span className="text-slate-900 mt-0.5">•</span>
                    <span>{parseText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 주요 성과 */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-8">
                <h4 className="text-md font-bold mb-2">주요 성과</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[15px] leading-relaxed text-muted-foreground "
                    >
                      <span className="text-slate-900 mt-0.5">•</span>
                      <span>{parseText(achievement)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 기술 세부 사항 */}
            {project.technicalDetails &&
              project.technicalDetails.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-md font-bold mb-2">기술 세부 사항</h4>
                  <ul className="space-y-3">
                    {project.technicalDetails.map((detail, i) => (
                      <li key={i} className="space-y-1">
                        <div className="flex items-start gap-2 text-[15px] font-medium text-muted-foreground  leading-relaxed">
                          <span className="text-slate-900 mt-0.5">•</span>
                          <span className="font-bold">{detail.title}</span>
                        </div>
                        <ul className="space-y-1 ml-4">
                          {detail.points.map((point, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-[15px] text-muted-foreground  leading-relaxed"
                            >
                              <span className="text-slate-900 mt-0.5">•</span>
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
