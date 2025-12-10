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
                {project.screenshots.map((screenshot, i) => {
                  // Priority for first 8 images (first 2 projects with 4 images each)
                  const isPriority = index < 2 && i < 4;

                  return (
                    <div
                      key={`portfolio_project_screenshot_${i}`}
                      className="relative"
                    >
                      <div className="aspect-[9/16] overflow-hidden">
                        <Image
                          src={screenshot}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 200px"
                          quality={75}
                          priority={isPriority}
                          loading={isPriority ? undefined : "lazy"}
                        />
                      </div>
                      <p className="text-xs text-center text-muted-foreground mt-1 leading-relaxed">
                        스크린샷 {i + 1}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
            {/* 업무 상세 */}
            <div className="mb-8">
              <h4 className="text-md font-bold mb-2">업무 상세</h4>
              <ul className="space-y-1">
                {project.description.map((item, i) => (
                  <li
                    key={`portfolio_project_description_${i}`}
                    className="flex items-start gap-2 text-[15px] text-muted-foreground  leading-relaxed"
                  >
                    <span className="text-slate-900 mt-0.5">•</span>
                    <span>{parseText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 문제 정의 */}
            {project.issues && project.issues.length > 0 && (
              <div className="mb-8">
                <h4 className="text-md font-bold mb-2">문제 정의</h4>
                <ul className="space-y-1">
                  {project.issues.map((issue, i) => (
                    <li
                      key={`portfolio_project_issue_${i}`}
                      className="flex items-start gap-2 text-[15px] leading-relaxed text-muted-foreground"
                    >
                      <span className="text-slate-900 mt-0.5">•</span>
                      <span>{parseText(issue)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 기술 구현 및 해결 */}
            {project.technicalDetails &&
              project.technicalDetails.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-md font-bold mb-2">기술 구현 및 해결</h4>
                  <ul className="space-y-1">
                    {project.technicalDetails.map((detail, i) => (
                      <li
                        key={`portfolio_project_technicalDetail_${i}`}
                        className="space-y-1"
                      >
                        <div className="flex items-start gap-2 text-[15px] font-medium text-muted-foreground leading-relaxed">
                          <span className="text-slate-900 mt-0.5">•</span>
                          <span>{detail.title}</span>
                        </div>
                        {detail.points && detail.points.length > 0 && (
                          <ul className="space-y-1 ml-4">
                            {detail.points.map((point, j) => (
                              <li
                                key={`portfolio_project_technicalDetail_sub_${j}`}
                                className="flex items-start gap-2 text-[15px] text-muted-foreground leading-relaxed"
                              >
                                <span className="text-slate-900 mt-0.5">•</span>
                                <span>{parseText(point)}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* 결과 및 개선점 */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-8">
                <h4 className="text-md font-bold mb-2">결과 및 개선점</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li
                      key={`portfolio_project_achievement_${i}`}
                      className="flex items-start gap-2 text-[15px] leading-relaxed text-muted-foreground "
                    >
                      <span className="text-slate-900 mt-0.5">•</span>
                      <span>{parseText(achievement)}</span>
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
