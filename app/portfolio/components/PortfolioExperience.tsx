export function PortfolioExperience() {
  const experiences = [
    {
      title: "Senior Mobile Developer",
      company: "TechHealth Inc.",
      logo: "https://images.unsplash.com/photo-1760037028553-3c5c801f18c1?w=200&q=80",
      period: "Jan 2022 - Present",
      location: "San Francisco, CA",
      summary:
        "Leading mobile development for health and fitness applications with 500K+ active users.",
      tasks: [
        "Architected and developed flagship fitness tracking app using React Native and TypeScript",
        "Implemented real-time GPS tracking with 99.5% accuracy using native iOS and Android modules",
        "Built custom animation system with Reanimated 2, reducing UI jank by 70%",
        "Integrated HealthKit and Google Fit APIs for seamless data synchronization",
        "Reduced app crash rate from 2.1% to 0.3% through comprehensive error handling",
        "Led code reviews and mentored 3 junior developers on React Native best practices",
        "Implemented CI/CD pipeline with Fastlane, reducing deployment time from 2 hours to 15 minutes",
      ],
    },
    {
      title: "Mobile Developer",
      company: "ProductivityLabs",
      logo: "https://images.unsplash.com/photo-1636297461709-0812290a9dcc?w=200&q=80",
      period: "Mar 2020 - Dec 2021",
      location: "Remote",
      summary:
        "Developed task management and productivity applications for iOS and Android platforms.",
      tasks: [
        "Built task management app from scratch serving 50K+ users with 4.6 star rating",
        "Implemented drag-and-drop functionality using React Native Gesture Handler",
        "Integrated WebSocket for real-time collaboration between team members",
        "Developed offline-first architecture using Redux Persist and SQLite",
        "Created reusable component library reducing development time by 40%",
        "Implemented push notifications using Firebase Cloud Messaging",
        "Optimized app bundle size by 35% through code splitting and lazy loading",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="mb-4 pb-2 border-b border-slate-300">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 object-contain rounded border border-slate-200"
              />
            </div>

            {/* Experience Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-foreground/90 mb-3 italic">
                {exp.summary}
              </p>

              <ul className="space-y-1.5">
                {exp.tasks.map((task, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="text-slate-900 mt-1">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
