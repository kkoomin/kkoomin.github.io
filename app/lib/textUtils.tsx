// ** bold 처리 / 줄바꿈 처리
export function parseText(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*|<br\s*\/?>|\n)/g);

  return parts.map((part, idx) => {
    // **bold**
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={idx} className="font-bold">
          {part.slice(2, -2)}
        </span>
      );
    }

    // <br/> 또는 \n 처리
    if (part === "<br/>" || part === "<br>" || part === "\n") {
      return <br key={idx} />;
    }

    // 일반 텍스트
    return <span key={idx}>{part}</span>;
  });
}

// 경력 기간 계산
export function getTotalCareerPeriod(periods: string[]): string {
  let totalMonths = 0;
  const now = new Date();

  for (const period of periods) {
    const [startStr, endStr] = period.split(" - ").map((s) => s.trim());
    const [startYear, startMonth] = startStr.split(".").map(Number);

    let endYear: number, endMonth: number;

    if (endStr === "현재") {
      endYear = now.getFullYear();
      endMonth = now.getMonth() + 1; // 0-based
    } else {
      [endYear, endMonth] = endStr.split(".").map(Number);
    }

    const months = (endYear - startYear) * 12 + (endMonth - startMonth);
    totalMonths += months;
  }

  // const years = Math.floor(totalMonths / 12);
  // const months = totalMonths % 12;
  const totalYears = totalMonths / 12;
  const roundedYears = Math.ceil(totalYears);

  return `${roundedYears}년`;
}
