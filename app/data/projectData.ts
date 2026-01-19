import type { ProjectData } from "./types";
import { projectScreenshots } from "./projectScreenshots";

export const portfolioProjects: ProjectData[] = [
  // ===============================
  // (주)에스엘디티
  // ===============================
  {
    title: "무신사 솔드아웃 APP 중고상품 거래 서비스 개발",
    company: "(주)에스엘디티",
    period: "2024.02 - 2024.03, 2023.08 - 2023.10",
    description: [
      "솔드아웃 ‘중고상품 판매등록하기’ 페이지 개발",
      "판매등록하기 페이지의 이탈 시나리오 반영, 임시저장 기능과 이탈 시 커스텀 컨펌 팝업 개발",
      "기존 중고상품 관련 스토어 구조 및 로직 리팩토링",
      "중고상품 판매 등록 완료 페이지 개발 및 기존 페이지와의 연동을 위한 코드 리팩터링",
      "중고상품 구매 결제 페이지 내 쿠폰 영역 추가",
    ],
    issues: [
      "기존 폼 로직은 유효성 검증과 렌더링 처리가 필드 단위로 분산되어 중복 코드가 많고 유지보수가 어려움",
      "WebView 환경에서 이탈 이벤트가 예상대로 동작하지 않아 유저 이탈 감지 어려움 → 사용자 입력 데이터 손실 가능성",
      "스토어에 중복 · 미사용 데이터가 많아 상태 흐름과 로직이 불명확",
      "기존 데이터 구조가 확장성이 떨어져 신규 기획 반영 시 구조 변경 필요 → 기존 페이지 재사용성 부족",
    ],
    technicalDetails: [
      {
        title:
          "React Hook Form을 도입해 폼 상태 · 유효성 검증 로직 및 렌더링 성능 개선",
        points: [
          "필드별 상태 관리 방식에서 폼 레벨 상태 관리로 전환해 검증 로직과 렌더링 흐름 단순화",
        ],
      },
      {
        title:
          "기획 상의 커스텀 팝업 구현을 위해 유저 시나리오 기반 이탈 감지 기능 개발",
        points: [
          "WebView 환경을 고려한 페이지 이탈 이벤트 감지 및 팝업 노출 로직 세팅",
        ],
      },
      {
        title:
          "Zustand 스토어를 도메인 단위로 재설계하여 데이터 추적 흐름 명확하게 변경",
        points: [
          "스토어 단위를 기능별로 세분화하고, selector 기반 상태 구독으로 불필요한 렌더링 감소",
        ],
      },
      {
        title: "렌더링 및 함수 호출 패턴 개선을 통한 성능 최적화",
        points: [
          "내부 함수 간 중첩 호출로 인한 의존성 문제를 해소하고, 단일 책임 함수 기반 구성",
          "useEffect 의존성 관리 구조를 재정비하여 상태 변화에 따른 불필요한 리렌더링을 줄이고 디버깅 효율 개선",
        ],
      },
      {
        title:
          "재사용이 어려운 기존 페이지 코드를 리팩터링하여 추가 기획 반영 가능한 확장성있는 구조로 개선",
        points: [],
      },
      {
        title: "Framer Motion 기반 무한 스크롤 컴포넌트 구현",
        points: [],
      },
    ],
    achievements: [
      "폼 구조 일원화로 신규 필드 추가 시 검증 로직 재사용 및 유지보수 비용 감소",
      "WebView 환경에서도 이탈 감지가 안정적으로 수행되어 사용자 입력 데이터 보호 강화",
      "상태 구조 단순화로 렌더링 빈도 감소 및 디버깅 효율성 상승",
      "향후 기획 변경 및 고도화에 대응 가능한 확장성 있는 구조 확보",
    ],
    tech: [
      "Next.js(v13)",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "TypeScript",
    ],
    screenshots: projectScreenshots.secondhand,
  },
  {
    title: "판매 · 결제 페이지 개발 및 레거시 코드 마이그레이션",
    company: "(주)에스엘디티",
    period: "2023.11 - 2024.01",
    description: [
      "솔드아웃 주문 페이지 Nuxt → Next.js 마이그레이션 프로젝트 내 ‘판매하기’ 영역 담당",
      "제품 판매 시 즉시 판매 · 판매 입찰 분기에 따른 시나리오별 기능 개발",
      "특정 제품의 판매 입찰 시 판매제안가 노출 및 금액별 판매 확률 그래프 기능 구현",
      "신규 ‘판매제안가’ 기능과 연동되는 어드민 관리 영역 개발",
      "판매 · 구매 결제 페이지 공통 컴포넌트 개발 및 구조 개선",
      "사용자 트래킹을 위한 Google Analytics(GA) 태그 추가",
    ],
    issues: [
      "Vue2 + Composition API로 구성된 레거시 구조 개선 필요",
      "서버 상태와 클라이언트 상태가 명확히 분리되지 않아 일관적인 서버 상태 관리가 어려움",
    ],
    technicalDetails: [
      {
        title: "Next.js App Router 기반 코드 구조 개발",
        points: [],
      },
      {
        title: "TanStack Query로 서버 상태 관리 도입",
        points: [
          "쿼리 키 구조 정의 → Query Key Factory 활용",
          "staleTime / refetch 조건 설정 → API 호출 낭비 제거 & 응답 속도 개선",
        ],
      },
      {
        title: "Vuex 기반 로직을 Zustand로 재정의",
        points: [],
      },
      {
        title:
          "판매제안가 그래프를 CSS 기반 커스텀으로 구현해 코드 경량화 및 라이브러리 의존성 제거",
        points: [],
      },
    ],
    achievements: [
      "마이그레이션 이후 페이지 구조 단순화로 신규 기능 추가 및 유지보수 비용 감소",
      "렌더링 흐름과 상태 변경 예측 가능성 향상으로 디버깅 효율성 개선",
      "API 중복 호출 제거 → 네트워크 트래픽 절감 및 페이지 응답 속도 개선",
      "외부 라이브러리 최소화 → 번들 크기 감소 및 유지보수성 향상",
    ],
    tech: ["Next.js(v13)", "Zustand", "TanStack Query", "TypeScript"],
    screenshots: projectScreenshots.sell,
  },
  {
    title: "솔드아웃 APP 내 상품 상세 WebView 기능 고도화",
    company: "(주)에스엘디티",
    period: "2023.06 - 2023.07",
    description: [
      "솔드아웃 상품 상세 내 스냅 영역 신규 개발",
      "스냅 데이터 관련 어드민 페이지 개발 및 운영 기능 추가",
      "상품 상세 내 판매하기 · 구매하기 버튼 상단 플로팅 배너 UI 개발",
      "WebView 영역과 APP 네이티브 영역 간의 연동 진행",
    ],
    issues: [],
    technicalDetails: [
      {
        title:
          "Intersection Observer API 활용 → 배너 노출 타이밍을 개선하고 불필요한 렌더링 최소화",
        points: [],
      },
      {
        title:
          "Modal 컴포넌트 ↔ WebView 화면 전환 시 상태 잔류 문제 해결 → 네이티브 영역과의 파라미터 구조 재정비",
        points: [],
      },
      {
        title:
          "WebView - 네이티브 UI 간 높이·전환 이슈 해결을 위해 동적 레이아웃 보정 로직 추가",
        points: [],
      },
    ],
    achievements: [
      "특정 구간 진입 시점에서 컴포넌트가 렌더링되도록 하여 초기 렌더링 부담 감소",
      "WebView 전환 시 UI 오류 빈도 감소 → 앱 사용자 체감 품질 개선",
      "WebView와 네이티브 간의 데이터 및 연동 동작 구조 정리",
    ],
    tech: ["Nuxt", "Vue.js", "TypeScript"],
    screenshots: projectScreenshots.snap,
  },

  // ===============================
  // (주)루나소프트
  // ===============================
  {
    title: "글로벌 CRM TF 내 파트너스센터 어드민 초기 개발",
    company: "(주)루나소프트",
    period: "2022.09 - 2023.01",
    description: [
      "글로벌 상담센터 TF의 프론트엔드 초기 기획 단계부터 참여, 일본 시장 대응을 위한 다국어(i18n) 구조 설계",
      "권한 관리, 채널·브랜드 관리, 사업자 정보 관리 및 공통 레이아웃 등 핵심 페이지 1차 개발 담당",
      "챗봇 프론트엔드 팀과의 디자인 가이드 통일을 위해 퍼블리셔, 디자이너와 협업하여 스타일 적용",
    ],
    technicalDetails: [
      {
        title: "react-i18next 기반 다국어 구조 설계",
        points: [
          "어드민 도메인별 namespace 분리로 다국어 리소스 관리 및 확장성 확보",
        ],
      },
      {
        title:
          "기획팀 제공 Excel 언어팩을 JSON으로 변환하는 자동화 프로토타입 구상",
        points: [],
      },
      {
        title: "Redux Toolkit 기반 상태 구조 설계",
        points: [],
      },
      {
        title: "Vite 기반 개발 환경 세팅으로 초기 빌드 속도 개선",
        points: [],
      },
    ],
    achievements: [
      "일본 시장 대응을 위한 안정적 i18n 기반 확보",
      "초기 개발 속도 및 유지보수 편의성 향상",
      "대규모 프로젝트 개발환경 표준화에 기여",
    ],
    tech: ["React", "Redux Toolkit", "i18next", "TypeScript", "Vite"],
  },
  {
    title: "광고 관리 어드민 신규 개발 및 마이그레이션",
    company: "(주)루나소프트",
    period: "2020.10 - 2022.09",
    description: [
      "팀 내 유일한 프론트엔드 개발자로 광고 관리 어드민 신규 개발 및 설계 담당 → 초기 개발 스택 Angular10",
      "광고 채널 및 지면 관리, 관리자 권한 관리 등 핵심 워크플로우 UI, 로직 개발",
      "광고 및 채널 통계 대시보드 구축, 일별 현황·클릭/조회수·채널별 통계 등 주요 KPI 시각화",
      "백엔드 개발자와 협업하여 API 명세 및 응답 구조 설계",
    ],
    issues: [
      "Angular10 기반 초기 구조는 유지보수 난이도 높고 기능 확장에 제약",
      "통계 대시보드 시각화가 미흡해 운영 지표 파악 어려움",
      "Observable 구조의 비동기 흐름(RxJS) 활용 범위가 넓어 프론트 로직 복잡성 증가",
    ],
    technicalDetails: [
      {
        title: "React + Redux Toolkit 구조로 도메인 단위 설계",
        points: [],
      },
      {
        title:
          "Google Charts API 기반 통계 대시보드 구성 → 주요 KPI(일별 클릭/조회수 등) 시각화",
        points: [],
      },
      {
        title: "기존 비즈니스 로직 분석 후 재사용 가능한 형태로 모듈 분리",
        points: [],
      },
    ],
    achievements: [
      "마이그레이션 성공으로 사내 FE 기술 스택 통합 및 신규 개발 속도 개선",
      "관리자 사용성을 고려한 대시보드 구축으로 운영 효율 상승",
      "복잡한 비즈니스 로직을 React 구조로 안정적으로 재구성하여 유지보수성 개선",
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "TanStack Query",
      "Angular",
      "RxJS",
      "Google Charts API",
      "TypeScript",
    ],
  },
];
