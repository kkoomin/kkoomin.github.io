import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href="/"
      className="fixed bottom-8 left-8 z-50 flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 hover:scale-110 transition-all duration-200 print:hidden"
      aria-label="Back to home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </Link>
  );
}
