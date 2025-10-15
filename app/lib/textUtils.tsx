export function parseBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={idx} className="font-bold">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}
