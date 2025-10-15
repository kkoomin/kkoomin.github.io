export function PortfolioSkills() {
  const skillCategories = [
    {
      category: "Mobile Development",
      skills: [
        "React Native",
        "TypeScript",
        "JavaScript",
        "Expo",
        "iOS Development",
        "Android Development",
      ],
    },
    {
      category: "State Management & Data",
      skills: [
        "Redux Toolkit",
        "React Query",
        "GraphQL",
        "REST API",
        "WebSocket",
        "SQLite",
        "Realm",
      ],
    },
    {
      category: "UI & Animation",
      skills: [
        "React Native Reanimated",
        "Gesture Handler",
        "Lottie",
        "Native Base",
        "Styled Components",
      ],
    },
    {
      category: "Native Integration",
      skills: [
        "Swift",
        "Kotlin",
        "Native Modules",
        "HealthKit",
        "ARKit",
        "Push Notifications",
        "Biometric Auth",
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        "Git",
        "Fastlane",
        "CodePush",
        "Firebase",
        "Sentry",
        "Jest",
        "Detox",
        "App Store Connect",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="mb-4 pb-2 border-b border-slate-300">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h4 className="text-sm mb-2 text-muted-foreground">
              {category.category}
            </h4>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {category.skills.join(" • ")}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200">
        <h4 className="text-sm mb-2">Education</h4>
        <p className="text-sm">
          <span>Bachelor of Science in Computer Science</span>
          <span className="text-muted-foreground">
            {" "}
            • University of California, Berkeley • 2019
          </span>
        </p>
      </div>
    </section>
  );
}
