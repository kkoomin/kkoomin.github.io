import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { resumeData } from "@/app/data/resumeData";
import { getTotalCareerPeriod, parseBold } from "@/app/lib/textUtils";

export function PortfolioHeader() {
  return (
    <header className="mb-8">
      {/* Title, Name, Role, and Contact Info */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">경력 기술서</h1>
        <div className="mb-3">
          <p className="text-2xl font-bold text-slate-900">{resumeData.name}</p>
          <p className="text-lg text-slate-700 mt-1">{resumeData.role}</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            {resumeData.contact.email}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4" />
            {resumeData.contact.phone}
          </span>
          {resumeData.contact.linkedin && (
            <span className="flex items-center gap-1.5">
              <Linkedin className="w-4 h-4" />
              {resumeData.contact.linkedin}
            </span>
          )}
          {resumeData.contact.blog && (
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4" />
              {resumeData.contact.blog}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Summary Section */}
        <div>
          <h3 className="font-bold text-lg text-slate-900 mb-3">핵심 역량</h3>
          <div className="text-sm text-slate-600 leading-relaxed space-y-1">
            {resumeData.summary.map((item, index) => (
              <p key={index}>{parseBold(item)}</p>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg text-slate-900">경력</h3>
            <span className="text-sm text-slate-600">
              {getTotalCareerPeriod(
                resumeData.experiences.map((exp) => exp.period)
              )}
            </span>
          </div>
          <div className="space-y-3 text-sm">
            {resumeData.experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900">
                      {exp.company}
                    </p>
                    <p className="text-slate-600 text-xs">
                      {exp.title}
                      {exp.location && ` | ${exp.location}`}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
