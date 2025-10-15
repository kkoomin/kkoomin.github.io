import type { ProjectData } from "./types";
import { projectScreenshots } from "./projectScreenshots";

export const portfolioProjects: ProjectData[] = [
  {
    name: "무신사 솔드아웃 APP 중고 상품 거래 서비스 개발",
    period: "2024.02 - 2024.03, 2023.08 - 2023.10",
    company: "(주)에스엘디티",
    description: [
      "공통 컴포넌트 작업 시 React Hook Form을 도입하여 등록 관련 컴포넌트 재사용성 증가",
      "입력 상태값 관리 및 유효성 검사 로직을 통일하여 개발 생산성을 올리고 유지 보수가 용이하도록 개발",
      "판매하기 기능을 고도화하며 임시저장과 페이지 이탈 시나리오를 반영, 이탈 시 커스텀 컨펌 팝업을 추가",
      "Zustand 스토어 구조를 리팩토링하여 중복 및 미사용 데이터를 정리하고 불필요한 hook을 제거, 상태 관리 구조를 단순화",
    ],
    tech: ["TypeScript", "Next.js", "Zustand", "TanStack Query"],
    screenshots: projectScreenshots.secondhand,
    achievements: [
      "React Hook Form 도입으로 폼 개발 생산성 향상",
      "상태 관리 리팩토링",
      "임시저장 기능",
    ],
    takeaways: [
      "복잡한 폼 상태 관리에서 React Hook Form의 효율성 체감",
      "점진적 리팩토링의 중요성 인식",
    ],
    technicalDetails: [
      "React Hook Form을 활용한 타입 안전 폼 validation 구현",
      "임시저장 기능 구현",
      "Custom hook을 통한 폼 로직 재사용성 극대화",
    ],
  },
  {
    name: "무신사 솔드아웃 APP 판매 / 결제 페이지 개발 및 마이그레이션",
    period: "2023.11 - 2024.01",
    company: "(주)에스엘디티",
    description: [
      "기존 Nuxt · Vue2 기반의 판매 및 결제 페이지를 Next.js로 마이그레이션",
      "React Query 적용으로 서버 상태와 캐싱을 최적화, 불필요한 API 호출 감소 및 페이지 성능 개선",
      "판매 및 결제 관련 레거시 로직을 정리하고, 판매가 계산식을 최적화하여 안정성 강화",
      "판매제안가 그래프 영역을 CSS만으로 구현, 라이브러리 의존성을 줄여 코드 경량화 및 유지보수성 향상",
    ],
    tech: ["TypeScript", "Next.js", "Zustand", "TanStack Query"],
    screenshots: projectScreenshots.sell,
    achievements: [
      "Vue에서 React로 마이그레이션하여 코드 베이스 통일",
      "TanStack Query 도입으로 불필요한 API 호출 감소",
      "CSS 기반 그래프 구현으로 번들 사이즈 100KB 감소",
    ],
    takeaways: [
      "프레임워크 마이그레이션 전략 수립 경험",
      "성능 최적화의 실질적 효과 체감",
    ],
    technicalDetails: [
      "점진적 마이그레이션 전략으로 서비스 중단 없이 전환 완료",
      "TanStack Query의 staleTime, cacheTime 최적화",
      "CSS Grid와 Flexbox를 활용한 반응형 그래프 구현",
    ],
  },
  {
    name: "무신사 솔드아웃 APP 내 상품 상세 WebView 기능 추가 개발",
    period: "2023.06 - 2023.07",
    company: "(주)에스엘디티",
    description: [
      "상품 상세 페이지 스냅 이미지 노출 영역 구현, WebP 포맷과 Next.js 태그 활용으로 이미지 로딩 속도 최적화",
      "Intersection Observer API를 활용하여 팝업 노출 타이밍을 개선, 불필요한 렌더링을 줄임",
      "Framer API를 이용하여 쿠폰 리스트에 무한 스크롤 기능 추가",
      "WebView 영역과 APP 네이티브 영역 간의 연동을 진행, 앱과 웹페이지 간의 원활한 데이터 교환을 지원",
    ],
    tech: ["TypeScript", "Nuxt", "Vue.js"],
    screenshots: projectScreenshots.snap,
    achievements: [
      "WebP 포맷 도입으로 이미지 로딩 속도 향상",
      "Intersection Observer 활용으로 불필요한 렌더링 제거",
      "네이티브-웹 브릿지 구현으로 사용자 경험 향상",
    ],
    takeaways: [
      "WebView와 Native 간 통신 메커니즘 이해",
      "성능 최적화 기법 습득",
    ],
    technicalDetails: [
      "Next.js Image 컴포넌트와 WebP 포맷 활용한 이미지 최적화",
      "Intersection Observer API를 활용한 Lazy Loading 구현",
      "postMessage API를 활용한 WebView-Native 브릿지 구현",
    ],
  },
];
