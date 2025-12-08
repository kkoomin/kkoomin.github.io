export interface ContactInfo {
  email: string;
  phone: string;
  blog: string;
  website: string;
  linkedin: string;
  github: string;
  location?: string;
  linkedin_en: string;
}
export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  companyDescription?: string;
  location?: string;
  period: string;
  achievements: string[];
}

export interface ProjectItem {
  name: string;
  description: string[];
  summary?: string;
  tech: string[];
  period: string;
  company: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  graduated: string;
  others?: string[];
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

/* 
  이력서(Resume) 데이터 타입 
*/
export interface ResumeData {
  name: string; // 이름
  name_en: string; // 영문 이름
  role: string; // 역할
  contact: ContactInfo; // 연락처
  introduction: string[]; // 자기소개
  summary: string[]; // 핵심 역량
  skills: SkillCategory[]; // 기술 스택
  experiences: ExperienceItem[]; // 경력
  projects: ProjectItem[]; // 프로젝트
  education: EducationItem[]; // 학력
  certifications: CertificationItem[]; // 자격증
  otherExperiences: OtherExperienceItem[]; // 기타 경력
}

/* 
  프로젝트(Portfolio) 데이터 타입 
*/
export interface ProjectData {
  title: string; // 프로젝트명
  company: string; // 회사명
  period: string; // 프로젝트 기간 (YYYY.MM - YYYY.MM)
  description: string[]; // 업무 상세
  issues?: string[]; // 문제 정의
  technicalDetails: TechnicalDetail[]; // 기술 구현 및 해결
  achievements: string[]; // 결과 및 개선점
  tech: string[]; // 사용 기술
  screenshots?: string[]; // 스크린샷 경로 (public 폴더 기준)
}

interface TechnicalDetail {
  title: string; // 기술 세부 사항 타이틀
  points: string[]; // 기술 세부 사항 하위 bullet
}
