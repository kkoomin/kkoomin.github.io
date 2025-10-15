import { Mail, Phone, Globe, Github, Linkedin } from "lucide-react";
import { resumeData } from "@/app/data/resumeData";
import { parseBold } from "@/app/lib/textUtils";

export function PortfolioHeader() {
  return (
    <header className="mb-8">
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            경력 기술서
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-slate-800">
              {resumeData.name}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-base text-slate-800">{resumeData.role}</span>
          </div>
        </div>
        {/* <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {resumeData.name}
          </h1>
          <p className="text-lg text-slate-600 mb-1">{resumeData.role}</p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
          <div className="space-y-1 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{resumeData.contact.email}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{resumeData.contact.phone}</span>
            </p>
            {resumeData.contact.github && (
              <p className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>{resumeData.contact.github}</span>
              </p>
            )}
            {resumeData.contact.linkedin && (
              <p className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>{resumeData.contact.linkedin}</span>
              </p>
            )}
            {resumeData.contact.website && (
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>{resumeData.contact.website}</span>
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-2">Summary</h3>
          <div className="text-sm text-slate-600 leading-relaxed space-y-1">
            {resumeData.summary.map((item, index) => (
              <p key={index}>{parseBold(item)}</p>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
