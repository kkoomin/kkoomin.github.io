export interface ContactInfo {
  email: string;
  phone: string;
  website?: string;
  linkedin?: string;
  github?: string;
  location?: string;
  portfolio?: string;
}
export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  period: string;
  achievements: string[];
}

export interface ProjectLinkMap {
  demo?: string;
  github?: string;
}

export interface ProjectItem {
  name: string;
  description: string[];
  tech: string[];
  links?: ProjectLinkMap;
  period: string;
  company: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  graduated: string;
}
export interface CertificationItem {
  title: string;
  description: string;
}
export interface OtherExperienceItem {
  title: string;
  period: string;
  location?: string;
  description: string[];
}

export interface ResumeData {
  name: string;
  role: string;
  contact: ContactInfo;
  summary: string[];
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  otherExperiences: OtherExperienceItem[];
}
