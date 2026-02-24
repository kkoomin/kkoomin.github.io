import type { ProjectData } from "./types";
import { projectScreenshots } from "./projectScreenshots";

export const portfolioProjects: ProjectData[] = [
  // ===============================
  // (주)에스엘디티
  // ===============================
  {
    title: "무신사 솔드아웃 APP 중고상품 거래 서비스 개발",
    company: "(주)에스엘디티",
    period: "2023.08 - 2023.10, 2024.02 - 2024.03",
    description: [
      "중고상품 판매 등록하기, 판매 완료 페이지 관련 기능 개발 및 코드 최적화",
      "판매 등록하기 페이지 이탈 시나리오 반영 → 임시저장 기능, 이탈 시 커스텀 컨펌 팝업 개발",
      "판매 완료 페이지 컴포넌트 구조를 Props 중심으로 코드 리팩터링",
      "쿠폰, 포인트, 배송지 주소, 중고 거래 약관 동의 영역 등 주문 관련 공통 컴포넌트 작업",
      "중고상품 구매 결제 페이지 내 쿠폰 영역 추가 개발 → 무한 스크롤 목록 구현",
    ],
    issues: [
      "멀티 스텝 등록 플로우(STEP 1 → 2 → 등록) 중 이탈 시 입력 데이터 전체 유실 → 판매 등록 재시도 비용 증가 및 판매자 이탈로 이어질 수 있는 UX 리스크 존재",
      "브라우저 기본 confirm 팝업은 커스텀 디자인 적용 불가 → 디자인 및 기획 요건을 충족하는 UX 구현에 제약이 있음",
      "판매 완료 페이지의 UI 구성과 데이터 결합도가 높아 신규 기획 반영 시 구조 변경이 불가피한 상황",
      "등록 관련 스토어에 중복 · 미사용 등 데이터 혼재 → 상태 추적과 디버깅이 어려움",
      "배송지 입력 폼의 각 필드를 개별 useState로 관리하여 검증 로직이 필드마다 분산 → 필드 추가 시 검증 코드 중복이 누적되고 폼 전체 상태 파악이 어려운 구조",
    ],
    technicalDetails: [
      {
        title:
          "등록 필드별 초기값과 현재 입력값 비교로 변경 여부 판단, 팝업 노출 조건 로직 구현",
        points: [],
      },
      {
        title:
          "이탈 시, window.history.pushState + hashchange 이벤트 기반 커스텀 confirm 팝업 적용",
        points: [],
      },
      {
        title:
          "재사용이 어려운 기존 완료 페이지 코드를 리팩터링하여 추후 고도화 시 확장 가능한 구조로 개선",
        points: [],
      },
      {
        title: "Zustand 스토어를 분리하여 데이터 흐름을 명확하게 변경",
        points: [
          "스토어를 기능별로 세분화하고, useShallow 적용으로 상태 구독 시 불필요한 리렌더링 방지",
          "selector 중복 코드 제거 및 스토어 값 자동 완성을 위한 Auto Selectors 패턴 도입",
        ],
      },
      {
        title: "렌더링 및 함수 호출 패턴 개선을 통한 성능 최적화",
        points: [
          "리렌더링을 유발하는 useSearchParams 등 주요 훅의 위치를 상위 컴포넌트로 이동, 영향 범위 최소화",
          "내부 함수 간 중첩 호출로 인한 의존성 문제를 해소하고, 단일 책임 원칙 기반 함수 분리",
        ],
      },
      {
        title: "쿠폰 목록 무한 스크롤 구현",
        points: [
          "TanStack Query useInfiniteQuery 훅 + Intersection Observer API 활용",
        ],
      },
      {
        title: "React Hook Form 도입 제안 및 적용",
        points: [
          "필드별 분산된 useState + 검증 로직을 useForm 단일 인스턴스로 통합",
          "register / watch / formState 기반 선언적 폼 관리로 전환",
        ],
      },
    ],
    achievements: [
      "이탈 감지가 안정적으로 수행되어 판매 데이터 유실 방지 및 판매자의 상품 등록 시 UX 개선",
      "스토어 분리 및 상태 구조 단순화로 리렌더링 영향 범위 축소 및 디버깅 효율성 상승",
      "향후 기획 변경 및 고도화에 대응 가능한 확장성 있는 구조 확보",
      "폼 로직 단일화로 필드 추가 시 register 등록만으로 확장 가능 → 유효성 검증 코드 중복 제거",
    ],
    tech: [
      "Next.js",
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
      "솔드아웃 주문 페이지 리빌딩 프로젝트 내 '판매하기' 영역 Nuxt → Next.js 마이그레이션 담당",
      "상품 '즉시 판매', '판매 입찰' 분기에 따른 시나리오별 로직 및 공통 컴포넌트 개발",
      "특정 제품의 판매 입찰 시 판매제안가 노출 및 금액별 판매 확률 그래프 기능 구현",
      "사용자 트래킹을 위한 Google Analytics(GA) 태그 추가",
    ],
    issues: [
      "Vue2 공식 지원 종료(2023.12)로 장기 유지보수 리스크 존재",
      "TypeScript 미사용으로 타입 안정성 부재",
      "Options API 구조로 로직이 컴포넌트와 Vuex 모듈에 집중되어 관심사 분리 어려움",
      "수수료 계산식이 각 컴포넌트의 computed에 분산, 정책 변경 시 여러 컴포넌트를 수정해야 함",
      "판매 관련 결제 비즈니스 로직 대부분이 단일 컴포넌트 파일에 UI 로직과 혼재 → 책임 분리 필요",
    ],
    technicalDetails: [
      {
        title:
          "Nuxt 페이지 구조 분석 후 Next.js App Router 기반으로 라우팅 및 컴포넌트 구조 재설계",
        points: [
          "데이터 fetching 위치와 사용자 인터랙션 여부를 기준으로 서버/클라이언트 컴포넌트 역할 분리",
        ],
      },
      {
        title: "TanStack Query로 서버 상태 관리 도입",
        points: [
          "Query Key Factory 구조를 활용 → 도메인, 파라미터별 query key 관리",
          "staleTime / refetch 조건 설정 → API 호출 횟수 감소",
        ],
      },
      {
        title: "단일 Vuex 모듈 내 클라이언트 상태 로직을 Zustand 스토어로 분리",
        points: [],
      },
      {
        title:
          "판매 수수료 계산 로직을 커스텀 훅으로 캡슐화 → 판매가 계산식 및 레거시 로직 정리",
        points: [],
      },
      {
        title:
          "판매제안가 그래프를 CSS 기반 커스텀으로 구현해 코드 경량화 및 라이브러리 의존성 제거",
        points: [],
      },
    ],
    achievements: [
      "Next.js 마이그레이션 후, 비즈니스 로직 · 서버 상태 · UI의 관심사 분리로 코드 가독성 향상 → 코드 탐색 및 리뷰 효율 증가",
      "TanStack Query 도입으로 로딩, 에러 상태 등 선언적 서버 상태 관리 체계 구축",
      "외부 그래프 라이브러리 미사용으로 번들 의존성 감소 + 디자인 시스템과 일관된 커스텀 그래프 UI 구현",
    ],
    tech: ["Next.js", "Zustand", "TanStack Query", "TypeScript"],
    screenshots: projectScreenshots.sell,
  },
  {
    title: "무신사 솔드아웃 APP 내 WebView 영역 기능 고도화",
    company: "(주)에스엘디티",
    period: "2023.05 - 2023.07",
    description: [
      "솔드아웃 상품 상세 페이지 내 스냅 영역(스냅 목록, 스냅 등록하기) 신규 개발",
      "스냅 영역 무신사 데이터 연동 및 솔드아웃 이미지 WebP 포맷 적용",
      "상품 상세 하단의 판매하기 · 구매하기 버튼 상단 플로팅 배너 UI 개발",
      "드롭 2.0 상품 상세 페이지 개발 및 어드민 데이터 구조 변경 대응",
      "WebView ↔ 네이티브 간 Bridge 통신 구조 파악 후, 화면 전환 및 모달 상태 관리 이슈 대응",
    ],
    issues: [],
    technicalDetails: [
      {
        title:
          "Intersection Observer API로 플로팅 배너 노출 조건을 스크롤 위치 기반으로 제어 → 뷰포트 진입 전 불필요한 렌더링 방지",
        points: [],
      },
      {
        title:
          "기존 JPEG/PNG 대비 용량이 작은 WebP 포맷으로 전환 → 이미지 초기 렌더링 지연 완화",
        points: [
          "무신사 연동 이미지의 경우, 무신사 CDN(msscdn) 포함 URL → 자체 최적화 유지",
          "솔드아웃 이미지 CDN 활용 → 이미지 요청 시, resize, webp 등의 쿼리 파라미터를 포함하여 요청",
        ],
      },
      {
        title:
          "드롭 상품의 경우, 구매 조건 검사 필요 → Promise.all을 활용하여 조건 병렬 검사 후 구매 플로우 진행",
        points: [],
      },
      {
        title:
          "WebView ↔ 네이티브 통신을 위한 추상화 구조(postNativeFunction) 안에서 기능 수정 및 이슈 대응",
        points: [],
      },
    ],
    achievements: [
      "WebP 전환으로 고화질 이미지 초기 로딩 지연 안정화",
      "뷰포트 진입 시점 기반 렌더링으로 초기 불필요한 DOM 생성 및 메모리 사용 감소",
      "드롭 상품 구매 조건 검증 API 병렬 처리 → 순차 실행 대비 응답 대기 시간 단축",
    ],
    tech: ["Nuxt", "Vue.js", "TypeScript"],
    screenshots: projectScreenshots.snap,
  },

  // ===============================
  // (주)루나소프트
  // ===============================
  {
    title: "글로벌 상담센터 TF 프론트엔드 초기 개발",
    company: "(주)루나소프트",
    period: "2022.09 - 2023.01",
    description: [
      "권한 관리 / 채널 설정 / 브랜드 관리 / 사업자 정보 관리 / 공통 레이아웃(GNB·LNB) 등 핵심 페이지 초기 버전 개발",
      "챗봇 프론트엔드 팀과의 디자인 가이드 통일을 위해 퍼블리셔 · 디자이너와 협업하여 스타일 적용",
    ],
    technicalDetails: [
      {
        title: "react-i18next 기반 KO/EN/JP 3개국어 구조 설계",
        points: [
          "i18next-browser-languagedetector를 적용해 URL 경로(/:language) 우선 감지 → 브라우저 언어 순으로 폴백하는 방식으로 다국어 라우팅 구현",
          "Excel / Google Sheets 언어팩 → JSON 자동 변환 스크립트 프로토타입 설계 (기획 방향 미확정으로 검토 단계에서 마무리)",
        ],
      },
      {
        title:
          "Vite 기반 개발 환경 구성 - 기존 프로젝트에 사용된 CRA(Webpack) 대비 초기 빌드 속도 개선",
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
      "팀 내 유일한 프론트엔드 개발자로 광고 관리 어드민 전체 영역 설계 · 구현 및 유지보수 담당",
      "광고 채널 · 지면 관리, 관리자 권한 관리, 광고 검수 / 승인 / 반려 워크플로우 등 핵심 UI와 로직 개발",
      "광고 및 채널 통계 대시보드 구축 - 일별 현황·클릭/조회수·채널별 통계 등 주요 KPI 시각화",
      "백엔드 개발자와 협업하여 API 명세 및 응답 구조 협의",
    ],
    issues: [
      "Angular 10 기반 초기 구조에서 팀 내 Angular 경험 부족으로 장기 유지보수 리스크 존재",
      "RxJS Observable 중심 비동기 처리로 신규 기능 추가 시 러닝 커브 증가",
      "사내 다른 서비스들이 React로 전환됨에 따라 기술 스택 파편화 현상 발생",
    ],
    technicalDetails: [
      {
        title: "(Angular 10) HttpInterceptor 기반 JWT 자동 갱신 기능 구현",
        points: [
          "Access Token 만료 확인 → Refresh Token으로 선제 갱신 후 원본 요청 재전송",
        ],
      },
      {
        title: "(Angular 10) Route Guard 설계 및 구현",
        points: [
          "AuthGuard: JWT 디코딩 후 역할 코드 검증, 권한 계층별 라우트 분기",
          "LeavingFormGuard: 컴포넌트의 isFormDirty 상태를 확인 후 미저장 이탈 방지 확인창 노출",
          "StoreFilterGuard: 목록 → 상세 이동 시 검색 필터(키워드·날짜·페이지 등)를 저장하고 복귀 시 복원",
        ],
      },
      {
        title:
          "(React 17) 기존 서비스 로직을 분석하여 Redux Toolkit + React Query 상태 구조로 전환",
        points: [],
      },
      {
        title:
          "(React 17) 페이지 이탈 방지, 모달 등 재사용 가능한 공통 커스텀 훅 구현",
        points: [],
      },
      {
        title:
          "(React 17) React Hook Form을 활용하여 요일별 반복 스케줄 · 날짜 범위 등 복합 폼 구현",
        points: [],
      },
      {
        title:
          "Google Charts API 기반 통계 대시보드 구성 → 그룹별 · 채널별 클릭/노출수 막대 차트, HTML 커스텀 툴팁 적용",
        points: [],
      },
    ],
    achievements: [
      "프론트엔드 단독으로 Angular → React 리빌딩 완수하여 사내 FE 기술 스택 통합에 기여",
      "Angular에서 구현한 가드 설계 원칙을 React 커스텀 훅 패턴으로 동일하게 이식 → 리빌딩 후에도 기존 UX 정책 유지",
      "통계 대시보드 제공으로 운영팀의 광고 현황 모니터링 업무 효율 향상",
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
