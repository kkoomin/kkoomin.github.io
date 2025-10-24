import Image from "next/image";
import { Badge } from "@/app/ui/Badge";
import { portfolioProjects } from "@/app/data/projectData";

export function PortfolioProjects() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 pb-2 font-bold text-lg border-b border-slate-300">
        프로젝트
      </h2>

      <div className="space-y-8">
        {portfolioProjects.map((project, index) => (
          <div
            key={index}
            className="pb-8 border-b border-slate-200 last:border-0"
          >
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                <h3 className="text-base font-bold">{project.title}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap sm:ml-2">
                  {project.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {project.company}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="grid grid-cols-4 gap-4 mb-6">
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
                    <p className="text-xs text-center text-muted-foreground mt-1">
                      화면 {i + 1}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 업무 상세 */}
            <div className="mb-6">
              <h4 className="text-md font-semibold mb-2">업무 상세</h4>
              <ul className="space-y-1">
                {project.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="text-slate-900 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 주요 성과 */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-6">
                <h4 className="text-md font-semibold mb-2">주요 성과</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="text-slate-900 mt-0.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 기술 세부 사항 */}
            {project.technicalDetails &&
              project.technicalDetails.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-md font-semibold mb-2">기술 세부 사항</h4>
                  <ul className="space-y-3">
                    {project.technicalDetails.map((detail, i) => (
                      <li key={i} className="space-y-1">
                        <div className="flex items-start gap-2 text-sm font-medium text-foreground">
                          <span className="text-slate-900 mt-0.5">•</span>
                          <span>{detail.title}</span>
                        </div>
                        <ul className="space-y-1 ml-4">
                          {detail.points.map((point, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <span className="text-slate-900 mt-0.5">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Takeaways */}
          </div>
        ))}
      </div>
    </section>
  );
}
