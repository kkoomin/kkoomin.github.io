import { Mail, Phone, Linkedin, Globe, Palette } from "lucide-react";
import { resumeData } from "@/app/data/resumeData";

export function PortfolioHeader() {
  return (
    <header className="mb-10 print:mb-15">
      <div className="text-2xl font-bold text-slate-900 mb-8">
        상세 경력 기술서
      </div>
      {/* Name and Role */}
      <div className="flex flex-col mb-5 gap-3">
        <div className="flex gap-4">
          <h1 className="font-bold text-3xl">{resumeData.name}</h1>
          <p className="flex items-end text-muted-foreground">
            {resumeData.name_en}
          </p>
        </div>
        <div>
          <p className="flex items-end font-bold text-muted-foreground">
            {resumeData.role}
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div className="flex items-center gap-2 text-muted-foreground ">
          <Mail className="w-4 h-4" />
          <span className="text-sm">{resumeData.contact.email}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground ">
          <Phone className="w-4 h-4" />
          <span className="text-sm">{resumeData.contact.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground ">
          <Linkedin className="w-4 h-4" />
          <span className="text-sm">{resumeData.contact.linkedin}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground ">
          <Globe className="w-4 h-4" />
          <span className="text-sm">{resumeData.contact.blog}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground ">
          <Palette className="w-4 h-4" />
          <span className="text-sm">{resumeData.contact.website}</span>
        </div>
        {/* <div className="flex items-center gap-2 text-muted-foreground">
              <Github className="w-4 h-4" />
              <span className="text-sm">{resumeData.contact.github}</span>
            </div> */}
      </div>
    </header>
  );
}
