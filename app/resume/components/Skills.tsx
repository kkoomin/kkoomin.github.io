import { Badge } from "../../ui/Badge";
import { resumeData } from "../../data/resumeData";

export function Skills() {
  const skillCategories = resumeData.skills;

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-6 print:mb-0 print:shadow-none print:rounded-none print:p-6">
      <h2 className="text-lg mb-6 pb-2 border-b border-border font-bold">
        기술 스택
      </h2>

      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h4 className="mb-3 text-base text-muted-foreground">
              {category.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 print:border print:border-border print:bg-transparent"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
