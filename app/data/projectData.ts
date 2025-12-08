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
      "중고상품 판매 등록 완료 페이지 개발 및 기존 페이지와의 연동을 위한 코드 리팩토링",
      "중고상품 구매 결제 페이지 내 쿠폰 영역 추가",
    ],
    achievements: [
      "**React Hook Form 도입으로 입력값 유효성 검증 로직을 표준화**하여 폼 개발 생산성을 올리고 유지 보수가 용이하도록 개발",
      "**Zustand 스토어 구조를 리팩토링**하여 중복 · 미사용 데이터를 정리하고 불필요한 훅을 제거하여 상태 관리 구조를 단순화",
      "신규 중고상품 기획 반영을 위해 기존 완료 페이지와 연관된 **컴포넌트 전반을 리팩토링하고 데이터 전달 Props를 중심으로 구조 정비**",
      "**렌더링 및 데이터 호출 로직을 점검하고 함수 호출 패턴을 개선**해 코드 가독성과 성능을 최적화",
    ],
    technicalDetails: [
      {
        title: "페이지 이탈 감지 및 커스텀 컨펌 팝업 구현",
        points: [
          "브라우저 기본 `window.onbeforeunload` 이벤트만으로는 WebView 환경에서 물리적 이탈 제어가 어려웠음",
          "커스텀 훅 기반의 페이지 이탈 감지 로직을 직접 구현하여 **커스텀 블로킹 팝업으로 UX 개선**",
        ],
      },
      {
        title: "Framer Motion API를 활용한 쿠폰 목록 무한 스크롤 구현",
        points: [
          "공통 스크롤 훅을 제작해 스크롤 이벤트 관리 구조를 통일",
          "**Framer Motion API**를 활용하여 자연스러운 스크롤 및 모션 처리 구현",
        ],
      },
      {
        title: "React Hook Form 도입으로 폼 구조 및 유효성 검증 로직 표준화",
        points: [
          "기존 onChange 기반의 개별 검증 로직 중복 문제를 해결",
          "**React Hook Form**으로 검증 로직을 모듈화하고 필드 단위 에러 처리 일원화",
          "복잡한 폼 구조의 유지보수성 향상 및 유효성 검증 일관성 확보",
        ],
      },
      {
        title: "Zustand 기반 스토어 구조 개선 및 상태 관리 최적화",
        points: [
          "스토어 단위를 기능별로 세분화하고 selector 기반 상태 구독으로 **불필요한 렌더링 최소화**",
          "상태 관리 흐름을 단순화해 **데이터 추적 및 디버깅 효율성 향상**",
        ],
      },
      {
        title: "렌더링 및 함수 호출 패턴 개선을 통한 성능 최적화",
        points: [
          "내부 함수 간 중첩 호출로 인한 의존성 문제를 해소하고 **단일 책임 함수로 분리**",
          "`useEffect` 의존성 관리 구조를 재정비하여 불필요한 리렌더링 감소 및 디버깅 효율 개선",
        ],
      },
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
    ],
    screenshots: projectScreenshots.secondhand,
  },
  {
    title: "무신사 솔드아웃 판매 · 결제 페이지 개발 및 마이그레이션",
    company: "(주)에스엘디티",
    period: "2023.11 - 2024.01",
    description: [
      "솔드아웃 주문 페이지 리빌딩 프로젝트 내 ‘판매하기’ 영역 Nuxt → Next.js 마이그레이션 담당",
      "제품 판매 시 즉시 판매 / 판매 입찰 분기에 따른 시나리오별 개발",
      "특정 제품의 판매 입찰 시 판매제안가 노출 및 금액별 판매 확률 그래프 기능 구현",
      "신규 ‘판매제안가’ 기능과 연동되는 어드민 관리 영역 개발",
      "판매 · 구매 결제 페이지 공통 컴포넌트 개발 및 구조 개선",
      "사용자 트래킹을 위한 Google Analytics(GA) 태그 추가",
    ],
    achievements: [
      "기존 Nuxt · Vue2 기반의 판매 · 결제 페이지를 **Next.js로 마이그레이션**",
      "**TanStack Query(React Query) 적용**으로 서버 상태 관리 및 캐싱 최적화, 불필요한 API 호출 감소",
      "**판매가 계산식 및 레거시 로직을 정리 · 최적화**하여 결제 처리 안정성과 유지보수성 향상",
      "CSS만으로 **판매제안가 그래프 영역을 구현**해 외부 라이브러리 의존도 축소 및 코드 경량화",
    ],
    technicalDetails: [
      {
        title: "Nuxt → Next.js 마이그레이션",
        points: [
          "Nuxt(Vue2) 구조를 **Next.js(v13) App Router 기반**으로 전환",
          "Vuex 기반 상태 로직을 Zustand로 마이그레이션하여 구조 단순화",
        ],
      },
      {
        title: "렌더링 및 상태 관리 구조 개선",
        points: [
          "중복된 useEffect 호출 및 의존성 문제를 해소",
          "이벤트 핸들러 호출 시점을 명확히 하여 **예측 가능한 렌더링 흐름 확보**",
        ],
      },
      {
        title: "WebView 내 네이티브 영역 UI 레이아웃 계산 이슈 개선",
        points: [
          "네이티브 바 활성화 시점에서 발생하는 노치 영역 문제를 분석하고 **동적 스타일 처리**로 대응",
          "웹·네이티브 영역 간 레이아웃 충돌을 최소화하여 **WebView 렌더링 안정성 확보**",
        ],
      },
    ],
    tech: ["TypeScript", "Next.js", "Zustand", "TanStack Query"],
    screenshots: projectScreenshots.sell,
  },
  {
    title: "무신사 솔드아웃 APP 내 상품 상세 WebView 기능 추가 개발",
    company: "(주)에스엘디티",
    period: "2023.06 - 2023.07",
    description: [
      "솔드아웃 상품 상세 내 스냅 영역(스냅 목록, 스냅 등록하기) 신규 개발",
      "스냅 관련 어드민 페이지 개발 및 운영 기능 추가",
      "상품 상세 내 판매하기 · 구매하기 버튼 상단 플로팅 배너 UI 개발",
      "WebView 영역과 APP 네이티브 영역 간의 연동 진행",
    ],
    achievements: [
      "Next.js Image 컴포넌트 및 WebP 포맷 적용으로 **이미지 로딩 속도 최적화**",
      "**Intersection Observer API를 활용**해 배너 노출 타이밍 개선 및 불필요한 렌더링 최소화",
      "**WebView 영역과 APP 네이티브 영역 간의 연동 구조 개선**으로 전환 안정성 확보",
    ],
    technicalDetails: [
      {
        title: "이미지 로딩 및 렌더링 최적화",
        points: [
          "WebP 포맷 도입 및 **Next.js Image 컴포넌트 활용**으로 초기 지연 문제 해결",
          "특정 구간 진입 시점 렌더링 트리거로 불필요한 메모리 사용 감소",
        ],
      },
      {
        title: "Intersection Observer API를 활용한 UI 제어",
        points: [
          "배너 노출 시점을 Intersection Observer로 감지해 **렌더링 성능 향상**",
          "기존 스크롤 기반 처리 대비 코드 단순화 달성",
        ],
      },
      {
        title: "WebView ↔ 네이티브 연동 구조 개선",
        points: [
          "WebView 전환 시 내부 모달 상태가 유지되는 문제를 해결하기 위해 **네이티브 파라미터 구조 수정**",
          "화면 상태 동기화 로직 개선으로 **모달 초기화 정상화**",
        ],
      },
    ],
    tech: ["TypeScript", "Nuxt", "Vue.js"],
    screenshots: projectScreenshots.snap,
  },

  // ===============================
  // (주)루나소프트
  // ===============================
  {
    title: "글로벌 TF 프로젝트 프론트엔드 초기 개발",
    company: "(주)루나소프트",
    period: "2022.09 - 2023.01",
    description: [
      "글로벌 상담센터 TF 초기 기획 버전 개발에 참여, 일본 시장 대응을 위한 다국어(i18n) 구조 설계",
      "권한 관리, 채널·브랜드 관리, 사업자 정보 관리 및 공통 레이아웃 등 핵심 페이지 1차 개발 담당",
      "디자인 가이드 통일을 위해 퍼블리셔, 디자이너와 협업하여 스타일 가이드 정립",
    ],
    achievements: [
      "**React 기반의 다국어(i18n) 구조를 구축**하여 일본어·영어 대응 환경 구현",
      "**Redux Toolkit** 기반 상태 관리로 데이터 흐름 단순화 및 유지보수성 향상",
      "**Vite 기반 개발 환경 구성**으로 초기 빌드 속도 개선 및 개발 효율성 향상",
    ],
    technicalDetails: [
      {
        title: "react-i18next를 활용한 다국어(i18n) 구조 설계",
        points: [
          "페이지/도메인 단위 namespace 분리로 **유연한 언어팩 구조 설계**",
          "기획팀 전달 Excel 언어팩 → JSON 변환 자동화 프로토타입 구현",
        ],
      },
      {
        title: "Redux Toolkit 기반 상태 관리 구조 설계",
        points: [
          "Slice 단위 상태 관리로 **모듈 간 의존성 최소화 및 코드 가독성 개선**",
        ],
      },
      {
        title: "Vite 기반 개발 환경 구성",
        points: [
          "CRA 대비 빌드 속도 개선, HMR 성능 향상",
          "대규모 프로젝트 확장성을 고려한 ESLint/TSConfig 최적화",
        ],
      },
    ],
    tech: ["TypeScript", "React", "Redux Toolkit", "Vite", "i18next"],
  },
  {
    title: "루나소프트 광고 관리 어드민 신규 개발 및 마이그레이션",
    company: "(주)루나소프트",
    period: "2020.10 - 2022.09",
    description: [
      "광고 관리 어드민 신규 개발 및 설계 담당 (초기 Angular10 → React 마이그레이션)",
      "광고 채널 및 지면 관리, 관리자 권한 관리 등 핵심 워크플로우 UI/로직 개발",
      "광고 및 채널 통계 대시보드 구축, 일별 현황 · 클릭/조회수 · 채널별 통계 등 주요 KPI 시각화",
      "백엔드 개발자와 협업하여 API 명세 및 응답 구조 설계",
    ],
    achievements: [
      "팀 내 **단독 프론트엔드 개발자로 전체 영역을 설계·구현 및 유지보수**",
      "**Angular10 기반 프로젝트를 React 환경으로 마이그레이션**하며 사내 기술 스택 통합",
      "**Google Charts API 기반 대시보드 시각화 구성**으로 관리자 사용성 개선",
    ],
    technicalDetails: [
      {
        title: "Angular → React 마이그레이션",
        points: [
          "기존 비즈니스 로직 및 컴포넌트 구조를 점검 및 리팩토링해 코드 품질 개선",
        ],
      },
      {
        title: "Google Charts API 기반 대시보드 구축",
        points: [
          "Timeline, Line, Bar Chart 등 다양한 통계 시각화 컴포넌트 구현",
          "일별 클릭/조회수, 채널별 성과 시각화를 통해 관리 효율 향상",
        ],
      },
      {
        title: "(Angular)RxJS 기반 비동기 데이터 처리",
        points: [
          "HttpClient + Observable 구조로 API 통신 및 예외 처리 구현",
          "HttpInterceptor를 통한 공통 인증 헤더 및 에러 처리 일원화",
        ],
      },
      {
        title: "회원 주소 관리 기능 개발",
        points: [
          "Daum(Kakao) PostCode API 연동으로 주소 검색 및 자동완성 구현",
          "입력 오류율 감소 및 관리 효율성 향상",
        ],
      },
    ],
    tech: [
      "TypeScript",
      "React",
      "Redux Toolkit",
      "TanStack Query",
      "Angular",
      "RxJS",
      "Google Charts API",
    ],
  },
];
