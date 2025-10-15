import { resumeData } from "../../data/resumeData";

export function Footer() {
  return (
    <footer className="mt-8 text-xs text-muted-foreground flex items-center justify-between print:fixed print:bottom-1 print:left-0 print:right-0 print:px-8 print:py-2 print:bg-white page-footer">
      <div className="inline-block">
        <span>{resumeData.role}</span>
        <span className="font-bold ml-1">{resumeData.name}</span>
      </div>
      <div className="page-number inline-block" aria-hidden="true"></div>
    </footer>
  );
}
