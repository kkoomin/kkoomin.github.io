import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { resumeData } from "@/app/data/resumeData";

export function PortfolioHeader() {
  return (
    <header className="mb-10 print:mb-15">
      <div className="text-2xl font-bold text-slate-900 mb-8">
        상세 경력 기술서
      </div>
      {/* Name and Role */}
      <div className="mb-3">
        <div className="flex gap-4">
          <h1 className="font-bold text-2xl">{resumeData.name}</h1>
          <p className="flex items-end text-muted-foreground">
            {resumeData.name_en}
          </p>
        </div>
        <p className="text-md text-slate-700 mt-1 leading-relaxed">
          {resumeData.role}
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600 leading-relaxed">
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
    </header>
  );
}
