import { ExternalLink, Github, Calendar } from "lucide-react";
import { Badge } from "../../ui/Badge";
import { resumeData } from "../../data/resumeData";
import { parseBold } from "@/app/lib/textUtils";

export function Projects() {
  const projects = resumeData.projects;

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-6 print:mb-2 print:shadow-none print:rounded-none print:p-6">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        프로젝트
      </h2>

      <div>
        {projects.map((project, index) => (
          <div
            className="print:break-inside-avoid"
            key={`${index}_${Math.random()}`}
          >
            <div className="border border-border rounded-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-base">{project.name}</h3>
                <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground ">
                  {project.company}
                </div>
              </div>
              <div className="flex items-center justify-between mb-4 gap-4">
                {project.period && (
                  <div className="flex items-center gap-2 text-muted-foreground ">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.period}</span>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs print:border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <ul>
                {project.description.map((desc, i) => (
                  <li
                    key={`${i}_${Math.random()}`}
                    className="text-muted-foreground  text-[15px] leading-relaxed flex"
                  >
                    <span className="mr-2 text-primary">•</span>
                    <span>{parseBold(desc)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
