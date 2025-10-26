import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { resumeData } from "@/app/data/resumeData";

export function PortfolioHeader() {
  return (
    <header className="mb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          상세 경력 기술서
        </h1>
        <div className="mb-3">
          <p className="text-xl font-bold text-slate-900">{resumeData.name}</p>
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
              {resumeData.contact.website}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
