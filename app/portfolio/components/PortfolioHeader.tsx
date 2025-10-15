import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function PortfolioHeader() {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          DW
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Sarah Johnson
          </h1>
          <p className="text-lg text-slate-600 mb-1">
            Senior Frontend Developer
          </p>
          <p className="text-sm text-slate-500">
            React Native • TypeScript • iOS • Android
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
          <div className="space-y-1 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>sarah.johnson@email.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 234-5678</span>
            </p>
            <p className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>github.com/sarahjohnson</span>
            </p>
            <p className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/sarahjohnson</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-2">Summary</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Passionate mobile developer with 5+ years of experience building
            high-performance React Native applications. Expert in creating
            scalable, user-friendly mobile solutions with a focus on performance
            optimization and modern development practices.
          </p>
        </div>
      </div>
    </header>
  );
}
