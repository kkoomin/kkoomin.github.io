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
  // currentPosition: "프론트엔드 개발자",
  summary: [
    "**이커머스 플랫폼 모바일 앱(WebView) 및 PC 웹** 신규 개발 및 고도화",
    "**B2B 솔루션 서비스 어드민 시스템** 설계 및 운영 중심 개발",
    "Vue · Angular 기반 서비스 → **Next.js · React 기반으로 레거시 마이그레이션 경험**",
    "**레거시 코드 리팩터링과 성능 최적화**를 통한 서비스 구조 개선 경험",
    "**AI 개발 툴을 활용한 개발 생산성 · 코드 품질 개선** 역량",
    "런던 현지 코딩 교육과정 수료, **글로벌 실무 환경 및 다국어 서비스(i18n) 대응 경험**",
    "디자이너 · 기획자 등 **타 직군과의 협업을 통한 요구사항 정리 및 기술 커뮤니케이션 능숙**",
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
        "React Hook Form",
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
      companyDescription:
        "무신사 솔드아웃(soldout) | 한정판 제품 리셀 및 중고 거래 플랫폼",
      location: "Seoul, South Korea",
      period: "2023.02 - 2024.05",
      achievements: [
        "상품 판매하기, 결제하기 페이지 전체 마이그레이션 진행 (Vue → Next.js)",
        "중고상품 거래 서비스 개발 및 리팩터링을 통한 코드 구조 개선",
        "솔드아웃 APP 내 WebView 영역 기능 개발 및 고도화",
        "솔드아웃 PC 웹, 백오피스 어드민 서비스의 기능 추가 개발 및 운영",
      ],
    },
    {
      title: "프론트엔드 개발자 • 솔루션개발팀",
      company: "(주)루나소프트",
      companyDescription: "B2B CRM/고객상담 메신저 AI 서비스 기업",
      location: "Seoul, South Korea",
      period: "2020.09 - 2023.01",
      achievements: [
        "글로벌 상담센터 CRM TF 참여, i18n 기반 파트너스센터 어드민 구조 설계",
        "광고 관리 어드민 시스템 프론트엔드 신규 구축 및 개발",
        "마케팅 솔루션 레거시 어드민 시스템을 React 기반으로 기능 통합 및 구조 리빌딩",
        "인스타그램 챗봇 빌더, 스마트 배송조회 서비스 등 커머스 연계 서비스 개발 및 고도화",
      ],
    },
    {
      title: "LQA Game Tester • Localization QA department",
      company: "Testronic",
      companyDescription:
        "게임, 영화, TV 컨텐츠의 Testing, Quality Assurance 솔루션을 제공하는 미국, 영국, 폴란드 기반의 QA 기업",
      location: "London, United Kingdom",
      period: "2018.07 - 2018.09",
      achievements: [
        "한국어로 번역된 게임 텍스트의 번역 오류, 맞춤법, 모호한 표현을 검수 및 교정",
        "게임 텍스트 UI 전반에 걸친 스타일을 검증하여 게임의 현지화 품질 향상에 기여",
        "PlayStation, Xbox, 모바일 등 다양한 플랫폼에서 현지화 QA 테스트 수행",
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
      summary:
        "중고상품 판매 등록하기, 판매 완료 관련 기능 개발 및 코드 최적화",
      description: [
        "React Hook Form을 사용하여 유효성 검증 로직 정리 및 폼 상태 관리 구조 개선",
        "UX 개선을 위한 유저 이탈 시나리오 반영, 임시저장 기능과 이탈 시 커스텀 컨펌 팝업 개발",
        "컴포넌트 렌더링 흐름과 Zustand 스토어 구조 최적화로 코드 가독성과 품질 개선",
        "판매완료 페이지 컴포넌트 구조를 Props 중심으로 코드 리팩터링",
        "결제 페이지 내 쿠폰 영역 무한스크롤 기능 구현",
      ],
      tech: ["Next.js(v13)", "Zustand", "TanStack Query", "React Hook Form"],
    },
    {
      name: "판매 · 결제 페이지 개발 및 레거시 코드 마이그레이션",
      company: "(주)에스엘디티",
      period: "2023.11 - 2024.01",
      summary: "Nuxt · Vue2 기반의 주문 관련 페이지를 Next.js로 마이그레이션",
      description: [
        "기존 Nuxt 소스 코드의 로직을 분석하고 Next.js App Router 구조에 맞게 재설계",
        "TanStack Query를 도입해 서버 상태를 클라이언트 상태와 분리하고 데이터 호출 구조 개선",
        "판매가 계산식 및 레거시 로직 정리로 코드 복잡도 감소",
        "외부 라이브러리 의존도를 줄이기 위해 CSS 기반 커스텀 그래프 컴포넌트 구현",
      ],
      tech: ["Next.js(v13)", "Zustand", "TanStack Query", "TypeScript"],
    },
    {
      name: "솔드아웃 APP 내 상품 상세 WebView 기능 고도화",
      company: "(주)에스엘디티",
      period: "2023.06 - 2023.07",
      summary:
        "상품 상세 WebView 페이지 내 스냅 컨텐츠 영역 신규 개발 및 기타 기능 개선",
      description: [
        "Intersection Observer 활용으로 스크롤 이벤트 기반 컴포넌트 로딩 구현",
        "상품 상세 이미지 최적화를 위해 WebP 포맷 적용 방안 검토",
        "WebView에서 네이티브 영역과 충돌하는 UI 레이아웃 이슈 개선",
        "WebView 영역과 APP 네이티브 영역 간의 데이터 연동 구조 정비",
      ],
      tech: ["Nuxt", "Vue.js", "TypeScript"],
    },
    {
      name: "기타 무신사 솔드아웃 서비스 개발 및 내부 어드민 유지보수",
      company: "(주)에스엘디티",
      period: "2023 - 2024",
      summary: "사내 어드민 운영 이슈 대응 및 기능 고도화, 이벤트 페이지 제작",
      description: [
        "백오피스 어드민 시스템 기능 고도화 및 유지보수 진행",
        "넥슨플레이, 슈프라이즈 등 외부 제휴 이벤트 페이지 제작",
        "드롭, 블랙박스 등 기존 솔드아웃 서비스 기능 고도화 및 유지보수",
      ],
      tech: ["Next.js", "Nuxt", "Vue.js", "Vuex", "TypeScript"],
    },

    // ===============================
    // (주)루나소프트
    // ===============================
    {
      name: "글로벌 CRM TF 내 파트너스센터 어드민 초기 개발",
      company: "(주)루나소프트",
      period: "2022.09 - 2023.01",
      summary:
        "신규 글로벌 상담센터 프로젝트 내 파트너스센터 어드민 프론트엔드 개발 담당",
      description: [
        "프로젝트 초기 기획 단계부터 참여, react-i18next 기반 다국어(i18n) 구조 설계",
        "권한 관리, 채널·브랜드 관리, 사업자 정보 관리 등 핵심 어드민 페이지 초기 버전 개발",
        "Vite 기반 개발 환경 구성으로 초기 빌드 속도 개선",
      ],
      tech: ["React", "Redux Toolkit", "TypeScript"],
    },
    {
      name: "광고 관리 어드민 신규 개발 및 마이그레이션",
      company: "(주)루나소프트",
      period: "2020.10 - 2022.09",
      summary:
        "루나소프트 내부 광고 관리 어드민 신규 구축 및 개발 → 운영 중 기술 스택 변경에 따른 리빌딩",
      description: [
        "팀 내 단독 프론트엔드 개발자로 신규 광고 어드민 전체 영역을 설계 · 구현 및 유지보수",
        "광고 채널 및 지면 관리, 관리자 권한 관리 등 핵심 워크플로우 UI, 로직 개발",
        "Google Charts API 기반 광고 통계 대시보드 구축 (일별 현황, 그룹별 클릭·조회수, 채널별 성과 지표)",
        "Angular10 기반 초기 프로젝트를 React로 리빌딩하며 사내 기술 스택 통합에 기여",
      ],
      tech: ["React", "Redux Toolkit", "Angular", "RxJS", "TypeScript"],
    },
    {
      name: "리로드(Re:Load) - 이커머스 마케팅 솔루션 어드민 시스템 개편",
      company: "(주)루나소프트",
      period: "2022.04 - 2022.07",
      summary:
        "기존 레거시 어드민에 산재된 마케팅 솔루션 관리 기능 통합 시스템 개발",
      description: [
        "분산되어 있던 관리 기능을 단일 어드민으로 통합해 내부 운영 관리 프로세스 개선",
        "서비스 관리 · 배치관리 · 운영관리 등 페이지 신규 개발 및 UI 구조 설계",
        "페이지 전 영역 퍼블리싱 및 일관된 스타일 가이드(BEM) 적용",
      ],
      tech: ["React", "Redux Toolkit", "TypeScript"],
    },
    {
      name: "기타 루나소프트 서비스 운영 개발 및 고도화",
      company: "(주)루나소프트",
      period: "2020.09 - 2020.12, 2021.10 - 2021.12",
      summary:
        "루나소프트 내 다양한 서비스의 프론트엔드 개발 지원 및 운영 유지보수",
      description: [
        "인스타그램 챗봇 빌더(StarBuilder) 프론트엔드 개발 지원",
        "스마트 배송조회 페이지 레이아웃 개편 및 ChannelAPI 연동 작업",
        "카카오 비즈메시지 템플릿 등록 및 발송 관련 QA 이슈 대응 및 개발 진행",
        "카카오 Biz Message 상담톡 API 국문 documentation을 영문으로 번역 작업",
      ],
      tech: ["React", "TypeScript", "Vue.js"],
    },
  ],
  education: [
    {
      degree: "시큐어 코딩 기반 블록체인 개발 과정",
      school: "삼성 멀티캠퍼스",
      graduated: "2020.07 수료",
      others: [
        "React, Node.js, Express, Vue.js, MongoDB, MySQL",
        "풀스택 개발 및 보안, 블록체인 기술을 활용한 서비스 개발 과정",
      ],
    },
    {
      degree: "Software Engineering Course",
      school: "FlatIron School London",
      graduated: "2019.04 수료",
      others: [
        "JavaScript, Ruby, React, Redux, Ruby on Rails, Sinatra, PostgreSQL",
        "React, Ruby on Rails를 중심으로 한 Full Stack Engineering 과정 수료",
        "Final Project - React Native, Expo 활용으로 연주자를 위한 악보 보기, 연습 일정 관리 앱 개발",
      ],
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
      title: "아일랜드 워킹 홀리데이",
      period: "2024.10 - 2025.01",
      location: "Dublin, Ireland, London, United Kingdom",
      description: ["ReactJS Girls 현지 Meetup 참여"],
    },
    {
      title: "사내(솔드아웃) FE 스터디",
      period: "2023.07 - 2024.02",
      location: "Seoul, South Korea",
      description: [
        "주 1회 퇴근 후 스터디 진행, 코드 리뷰 및 현재 담당 업무 내 이슈 사항과 해결방안 공유",
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
        "Flatiron School London에서 Software Engineering 과정 수료",
        "LEGO Flagship Store - London Leceister Square에서 Sales Associate로 근무",
      ],
    },
  ],
  introduction: [
    "무신사 솔드아웃에서 **B2C 웹 · 앱 서비스를 개발하고 운영하며 이용자 중심의 문제 해결 경험**을 쌓았고, B2B 솔루션 기업 루나소프트에서는 광고, 마케팅 **어드민 신규 개발과 고도화**를 주도했습니다.",
    // "**게임 도메인에 대한 관심을 바탕으로 런던에서 게임 로컬라이제이션 QA 테스터로 근무**하며, 다양한 게임 타이틀의 UI와 UX를 검수한 경험이 있습니다",
    "**새로운 기술과 도메인에 대한 학습 속도가 빠르고 환경 변화에도 잘 적응**합니다. React, Vue, Angular 등 다양한 프레임워크를 실무에서 활용했으며, 기술 간 마이그레이션 경험이 있습니다.",
    "**자기주도적이고 논리적인 업무 방식**을 지향합니다. 맡은 업무에 국한되지 않고 적극적으로 참여하며, 문제의 원인을 분석해 기술적인 해결 방안을 고민해왔습니다. 비지니스 문제 해결을 최우선으로 두고 합리적인 의사 결정을 하고자 합니다.",
    "**작성한 코드에 책임감을 가지고 개발**합니다. 팀 내 유일한 프론트엔드 개발자로도, 10명 이상의 프론트엔드 팀 일원으로도 일해보며 근거 있는 코드 작성과 협업을 위한 설계를 고민해왔습니다.",
    "사람들과 함께 일할 때 가장 큰 동기부여를 받으며, **다양한 직군과 원활하게 협업할 수 있는 커뮤니케이션 역량**을 지니고 있습니다.",
    "‘헤맨 만큼 내 땅이다’라는 말처럼 **경험을 통해 성장**하는 과정을 즐깁니다. 실패를 두려워하지 않고 늘 도전하고 발전하고자 합니다.",
  ],
};
