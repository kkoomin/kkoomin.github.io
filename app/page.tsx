import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <main className="text-center space-y-12 px-6">
        {/* Name and Role */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tight">
            Minha Koo
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light">
            Frontend Developer
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/resume"
            className="group relative px-8 py-4 w-48 bg-slate-900 text-white rounded-lg font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Resume</span>
            <div className="absolute inset-0 bg-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>

          <Link
            href="/portfolio"
            className="group relative px-8 py-4 w-48 bg-white text-slate-900 rounded-lg font-medium text-lg border-2 border-slate-900 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Portfolio
            </span>
            <div className="absolute inset-0 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
        </div>
      </main>
    </div>
  );
}
