export interface ContactInfo {
  email: string;
  phone: string;
  blog?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  location?: string;
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
  name: string; // 이름
  role: string; // 역할
  contact: ContactInfo; // 연락처
  summary: string[]; // 핵심 역량
  skills: SkillCategory[]; // 기술 스택
  experiences: ExperienceItem[]; // 경력
  projects: ProjectItem[]; // 프로젝트
  education: EducationItem[]; // 학력
  certifications: CertificationItem[]; // 자격증
  otherExperiences: OtherExperienceItem[]; // 기타 경력
}

export interface ProjectData {
  name: string; // 프로젝트명
  description: string[]; // 프로젝트 설명
  tech: string[]; // 사용 기술
  links?: ProjectLinkMap; // 프로젝트 링크
  period: string; // 프로젝트 기간
  company: string; // 프로젝트 회사
  achievements: string[]; // 프로젝트 성과
  takeaways: string[]; // 프로젝트 배운점
  technicalDetails: string[]; // 프로젝트 기술 세부 사항
  screenshots: string[]; // 프로젝트 스크린샷 (public folder paths)
}
