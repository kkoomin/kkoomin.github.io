import type { ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "구민하",
  name_en: "Minha Koo",
  role: "프론트엔드 개발자",
  contact: {
    email: "minha.koo.9@gmail.com",
    phone: "+82 10 7139 5028",
    blog: "velog.io/@kkoom",
    linkedin: "linkedin.com/in/minha-koo",
    github: "github.com/kkoomin",
    website: "kkoomin.github.io",
    linkedin_en: "www.linkedin.com/in/minha-koo/?locale=en_US",
  },
  introduction: [
    "무신사 솔드아웃에서 **B2C 웹과 앱 서비스를 개발하고 운영하며 이용자 중심의 문제 해결 경험**을 쌓았고, B2B 솔루션 기업 루나소프트에서 광고, 마케팅 어드민 신규 개발과 고도화를 주도했습니다.",
    "**기술 습득과 변화에 빠르게 적응**합니다. React, Vue, Angular 모두 실무에서 활용했으며, 기술 간 마이그레이션 경험이 있습니다.",
    "**주도적이고 효율적인 업무 환경을 지향**합니다. 비지니스 문제 해결을 최우선으로 두고 합리적인 의사 결정을 하고자 합니다.",
    "**작성한 코드에 책임감을 가지고 개발**합니다. 팀 내 단독 프론트엔드 개발자로도, 프론트엔드 팀의 일원으로도 일해보며 근거 있는 코드 작성과 협업을 위한 설계를 고민해왔습니다.",
    "**사내 스터디를 통해 팀 동료들과 새로운 기술과 문제 해결 방식에 대해 논의**했습니다. 발전에 도움되는 다양한 정보를 공유하는 것을 좋아합니다.",
    "**‘헤맨 만큼 내 땅이다’**라는 말처럼 **경험에서 오는 성장**을 즐깁니다. 실패를 두려워하지 않고 늘 도전하고자 합니다.",
  ],
  summary: [
    "**이커머스 플랫폼 모바일 앱 · 웹앱 및 PC 웹** 신규 개발과 유지보수 경험",
    "**B2B 솔루션 어드민** 설계 및 운영",
    "Vue · Angular 기반 서비스 → **Next.js · React 기반으로 마이그레이션**",
    "레거시 코드 개선 및 **추상화, 성능 최적화 경험**",
    "런던 현지 코딩 교육과정 수료, **영문 기술 커뮤니케이션 및 글로벌 프로젝트 역량** 보유",
    " **AI 기반 코드 생성 및 최적화 경험**, 개발 효율성과 생산성 향상",
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Vue.js",
        "Angular",
        "Next.js",
        "Nuxt",
        "React Native",
      ],
    },
    {
      category: "Libraries & Tools",
      skills: [
        "TanStack Query",
        "Zustand",
        "Vuex",
        "Redux Toolkit",
        "Tailwind CSS",
        "GraphQL",
        "Vite",
      ],
    },
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
    // ===============================
    // (주)에스엘디티
    // ===============================
    {
      name: "무신사 솔드아웃 APP 중고상품 거래 서비스 개발",
      company: "(주)에스엘디티",
      period: "2024.02 - 2024.03, 2023.08 - 2023.10",
      description: [
        "솔드아웃 중고상품 **판매 등록 및 완료 페이지 기능 개발 담당**",
        "**React Hook Form 도입으로 입력값 유효성 검증 로직을 표준화**, 폼 개발 생산성 향상",
        "**Zustand 스토어 리팩토링**으로 **상태 관리 구조 단순화**, 중복 데이터와 불필요한 훅 제거",
        "신규 기획 반영을 위해 **완료 페이지 컴포넌트 구조를 Props 중심으로 코드 리팩토링**",
        "**렌더링 및 데이터 호출 로직 최적화**로 코드 가독성과 성능 개선",
      ],
      tech: ["TypeScript", "Next.js(v13)", "Zustand", "TanStack Query"],
    },
    {
      name: "무신사 솔드아웃 판매 · 결제 페이지 개발 및 마이그레이션",
      company: "(주)에스엘디티",
      period: "2023.11 - 2024.01",
      description: [
        "기존 Nuxt · Vue2 기반의 판매 · 결제 페이지를 **Next.js로 마이그레이션**",
        "**TanStack Query(React Query) 적용**으로 서버 상태 관리 및 캐싱을 최적화",
        "**판매가 계산식 및 레거시 로직 정리로 결제 안정성 향상**, 코드 복잡도 감소",
        "CSS만으로 **판매제안가 그래프 영역을 구현**하여 외부 라이브러리 의존도 축소 및 코드 경량화",
        "사용자 트래킹을 위한 **Google Analytics(GA)** 태그 추가",
        "**WebView 내 네이티브 영역 UI 레이아웃 계산 이슈 개선**",
      ],
      tech: ["TypeScript", "Next.js(v13)", "Zustand", "TanStack Query"],
    },
    {
      name: "무신사 솔드아웃 APP 내 상품 상세 WebView 기능 추가 개발",
      company: "(주)에스엘디티",
      period: "2023.06 - 2023.07",
      description: [
        "솔드아웃 상품 상세 내 **스냅 영역(스냅 목록, 스냅 등록하기) 신규 개발**",
        "**Next.js Image 컴포넌트 및 WebP 포맷 적용**으로 **이미지 로딩 속도 개선**",
        "**Intersection Observer API를 활용**해 배너 노출 시점을 조정하여 불필요한 렌더링 최소화",
        "**WebView 영역과 APP 네이티브 영역 간의 연동** 구조 개선",
      ],
      tech: ["TypeScript", "Nuxt", "Vue.js"],
    },
    {
      name: "무신사 솔드아웃 서비스 및 내부 어드민 운영 유지보수",
      company: "(주)에스엘디티",
      period: "2023 - 2024",
      description: [
        "외부 제휴 이벤트(넥슨플레이, 슈프라이즈 등) 페이지 제작",
        "드롭, 블랙박스 등 기존 솔드아웃 서비스 기능 고도화 및 유지보수",
        "사내 어드민 운영 이슈 대응 및 신규 기능 추가 개발",
      ],
      tech: ["TypeScript", "Next.js", "Nuxt", "Vue.js", "Vuex"],
    },

    // ===============================
    // (주)루나소프트
    // ===============================
    {
      name: "글로벌 TF 프로젝트 프론트엔드 초기 개발",
      company: "(주)루나소프트",
      period: "2022.09 - 2023.01",
      description: [
        "글로벌 상담센터 TF의 초기 기획 버전 개발에 참여, **일본 시장 대응을 위한 다국어(i18n) 구조 설계**",
        "**권한 관리, 채널·브랜드 관리, 사업자 정보 관리 및 공통 레이아웃** 등 핵심 페이지 1차 개발",
        "**Vite 기반 개발 환경 구성**으로 초기 빌드 속도 개선 및 대규모 프로젝트의 개발 효율성 확보",
      ],
      tech: ["TypeScript", "React", "Redux Toolkit"],
    },
    {
      name: "루나소프트 광고 관리 어드민 신규 개발 및 마이그레이션",
      company: "(주)루나소프트",
      period: "2020.10 - 2022.09",
      description: [
        "팀 내 **단독 프론트엔드 개발자로** 신규 광고 어드민 **전체 영역을 설계·구현 및 유지보수**",
        "광고 채널 및 지면 관리, 관리자 권한 관리 등 **핵심 워크플로우 UI/로직 개발**",
        "**Google Charts API** 기반 **통계 대시보드 구축** (일별 현황, 그룹별 클릭/조회수, 채널별 통계)",
        "**Angular10 기반 초기 프로젝트를 React로 마이그레이션**하며 사내 기술 스택 통합에 기여",
      ],
      tech: ["TypeScript", "React", "Redux Toolkit", "Angular", "RxJS"],
    },
    {
      name: "리로드(Re:Load) - 이커머스 마케팅 솔루션 어드민 시스템 개편",
      company: "(주)루나소프트",
      period: "2022.04 - 2022.07",
      description: [
        "분산되어 있던 **리로드 서비스 관리 기능을 단일 어드민으로 통합**, 운영 효율성 향상",
        "서비스 관리 · 배치관리 · 운영관리 등 **페이지 신규 개발 및 UI 구조 설계**",
        "페이지 전 영역 **퍼블리싱 및 BEM 기반 SCSS 스타일링** 작업",
      ],
      tech: ["TypeScript", "React", "Redux Toolkit"],
    },
    {
      name: "인스타그램 챗봇 빌더(StarBuilder) 개발",
      company: "(주)루나소프트",
      period: "2021.10 - 2021.12",
      description: [
        "인스타그램 멘션 자동응답(Story Mention) 챗봇 페이지 기능 개발",
        "인스타그램 챗봇 등록 및 수정을 위한 단계별 시나리오 빌더 UI를 개발",
        "QA 건 처리 및 담당 페이지 외의 공통 컴포넌트 이슈 해결",
      ],
      tech: ["TypeScript", "React"],
    },
    {
      name: "스마트 배송조회 서비스 고도화",
      company: "(주)루나소프트",
      period: "2020.09 - 2020.12",
      description: [
        "스마트 배송조회 페이지 레이아웃 개편 작업",
        "광고 어드민 배너 관련 ChannelAPI 연동 작업",
        "카페24 알림톡 연동을 위한 API 별도 생성에 따른 프론트 기능 변경 작업",
      ],
      tech: ["Vue.js"],
    },
    {
      name: "카카오 비즈메시지 관련 프로젝트 유지 보수",
      company: "(주)루나소프트",
      period: "2020.09 - 2020.10",
      description: [
        "카카오 비즈메시지 템플릿 등록 및 발송 관련 QA 이슈 대응 및 개발 진행",
        "Vue.js 기반 페이지 레이아웃 및 디자인 변경 퍼블리싱 작업",
        "카카오 Biz Message 상담톡 API 국문 documentation을 영문으로 번역 작업 (2021.03)",
      ],
      tech: ["Vue.js"],
    },
  ],
  education: [
    {
      degree: "Software Engineering Course",
      school: "FlatIron School London",
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
      title: "사내(솔드아웃) FE 스터디",
      period: "2023.07 - 2024.02",
      location: "Seoul, South Korea",
      description: [
        "주 1회 퇴근 후 스터디 진행, 현재 맡은 업무 내 이슈 사항과 해결방안 공유",
        "새로 학습한 기술 스택이나 방법론에 대해 노션에 글을 쓰고 짧은 발표 형식으로 공유",
      ],
    },
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
