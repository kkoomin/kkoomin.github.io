import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Certification } from "./components/Certification";
import { BackButton } from "../ui/BackButton";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 print:bg-white">
      <BackButton />
      <div className="max-w-4xl mx-auto px-6 py-12 print:p-0 print:m-0">
        <Header />
        <Introduction />
        <Summary />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certification />
      </div>
    </div>
  );
}
