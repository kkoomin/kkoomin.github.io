import { Calendar, MapPin, SquareUserRound } from "lucide-react";
import { resumeData } from "../../data/resumeData";
import { getTotalCareerPeriod } from "@/app/lib/textUtils";

export function Experience() {
  const experiences = resumeData.experiences;

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-6 print:mb-0 print:shadow-none print:rounded-none">
      <div className="flex w-full justify-between mb-6 pb-2 border-b border-border">
        <h2 className="text-lg font-bold">경력</h2>
        <div className="text-md text-muted-foreground flex items-center">
          {getTotalCareerPeriod(experiences.map((e) => e.period))}
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-border last:pb-0 print:break-inside-avoid"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary print:bg-black print:border-2 print:border-black"></div>

            <div className="mb-3">
              <h3 className="mb-1 font-bold">{exp.company}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <SquareUserRound className="w-4 h-4" />
                  <span className="text-sm">{exp.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>
            </div>

            {/* <ul className="space-y-2"> */}
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li
                  key={`${i}_${Math.random()}`}
                  className="text-muted-foreground text-sm leading-relaxed flex"
                >
                  <span className="mr-2 text-primary">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
