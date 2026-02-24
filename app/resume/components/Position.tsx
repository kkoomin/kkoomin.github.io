import { resumeData } from "../../data/resumeData";

export function Position() {
  if (!resumeData.currentPosition) {
    return null;
  }

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-6 print:mb-1 print:shadow-none print:rounded-none print:p-6">
      <div className="text-center">
        <p className="text-lg underline underline-offset-4 font-semibold text-foreground">
          {resumeData.currentPosition}
        </p>
      </div>
    </section>
  );
}
