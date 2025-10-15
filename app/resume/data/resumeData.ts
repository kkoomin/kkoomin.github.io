import type { ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "구민하",
  role: "프론트엔드 개발자",
  contact: {
    email: "minha.koo.9@gmail.com",
    phone: "+82 1071395028",
    website: "velog.io/@kkoom",
    linkedin: "linkedin.com/in/minha-koo",
    github: "github.com/kkoomin",
    portfolio: "minha-koo.notion.site/portfolio",
  },
  summary: [
    "**이커머스 플랫폼 모바일 앱·웹앱 및 PC 웹** 신규 개발과 유지보수 경험",
    "**B2B 솔루션 어드민** 설계 및 운영",
    "Vue · Angular 기반 서비스 → **Next.js · React 기반으로 마이그레이션**",
    "레거시 코드 개선 및 **추상화, 성능 최적화 경험**",
    "런던 현지 코딩 교육과정 수료, **영문 기술 커뮤니케이션 및 협업 능력** 보유",
    " **AI 기반 코드 생성 및 최적화 경험**, 개발 효율성과 생산성 향상",
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      skills: [
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Nuxt",
        "Vue.js",
        "React Native",
        "Angular",
      ],
    },
    {
      category: "Libraries",
      skills: [
        "React",
        "Zustand",
        "TanStack Query",
        "Vuex",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
    },
    // {
    //   category: "Tools & Technologies",
    //   skills: ["Git", "Webpack", "Vite", "Figma", "Storybook"],
    // },
    // {
    //   category: "Concepts",
    //   skills: [
    //     "Responsive Design",
    //     "Accessibility (WCAG)",
    //     "Performance Optimization",
    //     "UI/UX Design",
    //     "Agile/Scrum",
    //   ],
    // },
  ],
  experiences: [
    {
      title: "프론트엔드 개발자 • 프론트엔드 팀(플랫폼 파트)",
      company: "(주)에스엘디티",
      location: "Seoul, South Korea",
      period: "2023.02 - 2024.05",
      achievements: [
        "무신사 솔드아웃 APP 내 웹앱 영역 기능 고도화 및 운영 경험",
        "상품 판매 · 결제 페이지를 Vue에서 Next.js로 마이그레이션 진행",
        "중고 상품 거래 서비스 신규 개발 및 구조 리팩토링 개발",
        "무신사 솔드아웃 PC 웹, 어드민 페이지의 기능 추가 및 운영을 맡아 기존 시스템을 강화",
      ],
    },
    {
      title: "프론트엔드 개발자 • 솔루션개발팀",
      company: "(주)루나소프트",
      location: "Seoul, South Korea",
      period: "2020.09 - 2023.01",
      achievements: [
        "글로벌 상담센터 TF 참여, 일본 시장 타겟 i18n 기반 구조 설계",
        "광고 관리 신규 어드민 시스템 프론트엔드 구축 및 운영",
        "Vue · Angular 기반 코드를 React로 마이그레이션하며 성능 최적화 및 안정적 운영 지원",
        "인스타그램 챗봇 빌더, 스마트 배송조회 서비스 등 커머스 연계 기능 개발 및 고도화",
      ],
    },
    {
      title: "LQA Game Tester with Korean • Localization QA department",
      company: "Testronic",
      location: "London, United Kingdom",
      period: "2018.07 - 2018.09",
      achievements: [
        "한국어로 번역된 게임 텍스트의 번역 오류, 맞춤법, 모호한 표현을 검수 및 교정",
        "게임 텍스트 UI 전반에 걸친 스타일을 검증하여 게임의 현지화 품질 향상에 기여",
        "PlayStation, Xbox, 모바일 등 다양한 플랫폼에서 로컬라이제이션 QA 테스트 수행",
        "Shadow of the Tomb Raider(2018), Monster Hunter: World(2018) 등의 게임 타이틀 QA에 참여",
      ],
    },
  ],
  projects: [
    {
      name: "무신사 솔드아웃 APP 중고 상품 거래 서비스 개발",
      description: [
        "공통 컴포넌트 작업 시 React Hook Form을 도입하여 등록 관련 컴포넌트 재사용성 증가",
        "입력 상태값 관리 및 유효성 검사 로직을 통일하여 개발 생산성을 올리고 유지 보수가 용이하도록 개발",
        "판매하기 기능을 고도화하며 임시저장과 페이지 이탈 시나리오를 반영, 이탈 시 커스텀 컨펌 팝업을 추가",
        "Zustand 스토어 구조를 리팩토링하여 중복 및 미사용 데이터를 정리하고 불필요한 hook을 제거, 상태 관리 구조를 단순화",
        "렌더링 및 데이터 호출 로직을 점검하고 함수 호출 패턴을 개선해 코드 가독성 향상 및 전반적인 성능 최적화",
      ],
      tech: ["TypeScript", "Next.js", "Zustand", "TanStack Query"],
      period: "2024.02 - 2024.03, 2023.08 - 2023.10",
      company: "(주)에스엘디티",
    },
    {
      name: "무신사 솔드아웃 APP 판매 / 결제 페이지 개발 및 마이그레이션",
      description: [
        "기존 Nuxt · Vue2 기반의 판매 및 결제 페이지를 Next.js로 마이그레이션",
        "React Query 적용으로 서버 상태와 캐싱을 최적화, 불필요한 API 호출 감소 및 페이지 성능 개선",
        "판매 및 결제 관련 레거시 로직을 정리하고, 판매가 계산식을 최적화하여 안정성 강화",
        "판매제안가 그래프 영역을 CSS만으로 구현, 라이브러리 의존성을 줄여 코드 경량화 및 유지보수성 향상",
        "사용자 트래킹을 위한 Google Analytics(GA) 태그 추가",
      ],
      tech: ["TypeScript", "Next.js", "Zustand", "TanStack Query"],
      period: "2023.11 - 2024.01",
      company: "(주)에스엘디티",
    },
    {
      name: "무신사 솔드아웃 APP 내 상품 상세 WebView 기능 추가 개발",
      description: [
        "상품 상세 페이지 스냅 이미지 노출 영역 구현, WebP 포맷과 Next.js 태그 활용으로 이미지 로딩 속도 최적화",
        "Intersection Observer API를 활용하여 팝업 노출 타이밍을 개선, 불필요한 렌더링을 줄임",
        "Framer API를 이용하여 쿠폰 리스트에 무한 스크롤 기능 추가",
        "WebView 영역과 APP 네이티브 영역 간의 연동을 진행, 앱과 웹페이지 간의 원활한 데이터 교환을 지원",
      ],
      tech: ["TypeScript", "Nuxt", "Vue.js"],
      period: "2023.06 - 2023.07",
      company: "(주)에스엘디티",
    },
    {
      name: "기타 무신사 솔드아웃 서비스 및 내부 어드민 운영 건 개발 및 유지보수",
      description: [
        "넥슨플레이, 슈프라이즈 등 외부 업체 제휴 이벤트 페이지 제작",
        "드롭, 블랙박스 등 기존 솔드아웃 서비스 기능 고도화 등",
        "사내 어드민 운영 이슈 및 유지보수 개발",
      ],
      tech: ["TypeScript", "Next.js", "Nuxt", "Vue.js", "Vuex"],
      period: "2023.05 - 2023.06",
      company: "(주)에스엘디티",
    },
    {
      name: "글로벌 TF 프로젝트 프론트엔드 초기 개발",
      description: [
        "일본 시장 타겟 글로벌 상담센터 TF 참여, i18n 구조 설계 고려한 초기 기획 버전 셋업 담당",
        "챗봇 프론트엔드 팀과의 디자인 가이드 통일을 위해 퍼블리셔, 디자이너와 협업하여 스타일 적용",
      ],
      tech: ["React", "Framer Motion", "Zustand", "Vite"],
      period: "2022.09 - 2023.01",
      company: "(주)루나소프트",
    },
    {
      name: "루나소프트 광고 관리 어드민 신규 개발 및 마이그레이션",
      description: [
        "광고 어드민 프론트엔드 신규 설계 및 개발 (초기 개발 스택 Angular10, TypeScript)",
        "광고 채널 · 지면 관리, 관리자 권한 관리 등 주요 기능 및 핵심 워크플로우 개발",
        "Google Charts API 기반 광고 · 채널 통계 대시보드 구축 (일별 현황, 그룹별 클릭/조회수, 채널별 통계)",
        "사내 기술 스택 통일을 위해 Angular 프로젝트를 React + Redux Toolkit으로 리빌딩",
        "React 기반으로 프로젝트 재설계, 상태 관리 최적화 및 유지보수성 강화",
      ],
      tech: ["TypeScript", "React", "Redux Toolkit", "Angular", "RxJS"],
      period: "2020.10 - 2022.09",
      company: "(주)루나소프트",
    },
    {
      name: "리로드(Re:Load) - 이커머스 마케팅 솔루션 어드민 시스템 개편",
      description: [
        "기존 어드민에 산재되어 있던 리로드 서비스 관리 기능을 단일 페이지로 통합",
        "React Query 도입으로 서버 상태를 분리하고 재사용성 강화 및 캐시 기반 성능 최적화",
        "서비스 관리 페이지 신규 설계 및 세팅, 배치관리, 운영관리 등의 기능 개발",
        "페이지 전 영역 퍼블리싱 및 BEM 기반 SCSS 커스텀 스타일링 작업",
      ],
      tech: ["TypeScript", "React", "Redux Toolkit"],
      period: "2020.10 - 2022.09",
      company: "(주)루나소프트",
    },
    {
      name: "인스타그램 챗봇 빌더(StarBuilder) 개발",
      description: [
        "인스타그램 멘션 자동응답(Story Mention) 챗봇 페이지 기능 개발",
        "인스타그램 챗봇 등록 및 수정을 위한 단계별 시나리오 빌더 UI를 개발",
        "QA 건 처리 및 담당 페이지 외의 공통 컴포넌트 이슈 해결",
      ],
      tech: ["TypeScript", "React"],
      period: "2021.10 - 2021.12",
      company: "(주)루나소프트",
    },
    {
      name: "스마트 배송조회 서비스 고도화",
      description: [
        "스마트 배송조회 페이지 레이아웃 개편 작업",
        "ADON 광고 배너 관련 ChannelAPI 연동 작업",
        "카페24 알림톡 연동을 위한 API 별도 생성에 따른 프론트 기능 변경 작업 (2022.12)",
      ],
      tech: ["Vue.js"],
      period: "2020.09 - 2020.12",
      company: "(주)루나소프트",
    },
    {
      name: "카카오 비즈메시지 관련 프로젝트 유지 보수",
      description: [
        "카카오 비즈메시지 템플릿 등록 및 발송 관련 QA 이슈 분석 및 개발 진행",
        "Vue.js 기반의 페이지 레이아웃 및 디자인 변경 요구사항 관련 퍼블리싱 작업",
        "카카오 Biz Message 상담톡 API 국문 documentation을 영문으로 번역 작업 (2021.03)",
      ],
      tech: ["Vue.js"],
      period: "2020.09 - 2020.10",
      company: "(주)루나소프트",
    },
  ],
  education: [
    {
      degree: "Software Engineering Course",
      school: "FlatIron School London ",
      graduated: "2019.04 수료",
    },
    {
      degree: "국어국문학과, 경영학과",
      school: "이화여자대학교",
      graduated: "2017.08 졸업",
    },
  ],
  certifications: [
    {
      title: "정보처리기사",
      description: "20202070195S | 한국산업인력공단 | 2020.08 취득",
    },
    {
      title: "외국어",
      description: "영어(업무상 소통 가능), 일본어(일상 회화 가능)",
    },
  ],
  otherExperiences: [
    {
      title: "Open Food Network UK Hackathon",
      period: "2019.05",
      location: "London, United Kingdom",
      description: [
        "AngularJS · Ruby on Rails 기반 오픈소스 프로젝트 GitHub 이슈 목록 디버깅",
        "어드민 페이지 언어 변경 시 특정 문구들이 번역되지 않는 문제 분석 및 해결",
      ],
    },
    {
      title: "영국 워킹 홀리데이(YMS)",
      period: "2017.08 - 2019.08",
      location: "London, United Kingdom",
      description: [
        "게임 및 미디어 QA 솔루션 회사 Testronic에서 LQA Game Tester로 근무",
        "Flatiron School London에서 Software Engineering course 수료",
        "London Leceister Square LEGO Flagship Store에서 Sales Associate로 근무",
      ],
    },
  ],
};
