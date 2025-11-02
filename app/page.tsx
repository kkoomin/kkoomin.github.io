import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <main className="text-center space-y-12 px-6">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            <span className="typing-effect inline-block">Minha Koo</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light">
            Frontend Developer
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/resume"
            className="px-8 py-4 w-48 bg-[#ff707a] text-white rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="font-bold">RESUME</span>
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 w-48 bg-white text-slate-900 rounded-lg font-medium text-lg border-2 border-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="font-bold">PORTFOLIO</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
