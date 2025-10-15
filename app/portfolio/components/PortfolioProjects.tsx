import Image from "next/image";
import { Badge } from "@/app/ui/Badge";

export function PortfolioProjects() {
  const projects = [
    {
      name: "FitTrack Pro",
      role: "Lead Mobile Developer",
      period: "2022 - Present",
      description:
        "Comprehensive fitness tracking application with workout planning, nutrition tracking, and social features.",
      screenshots: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&q=80",
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&q=80",
      ],
      tech: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "HealthKit",
        "Reanimated 2",
      ],
      achievements: [
        "Built from MVP to 500K+ active users in 18 months",
        "Achieved 4.7 rating on App Store and 4.5 on Google Play",
        "Implemented GPS tracking with 99.5% accuracy for outdoor activities",
        "Created custom workout builder supporting 800+ exercises with animations",
        "Integrated machine learning for personalized workout recommendations",
        "Developed social features enabling users to share progress and compete",
      ],
      technicalDetails: [
        "Implemented custom native modules in Swift and Kotlin for sensor data processing",
        "Built offline-first architecture supporting full functionality without internet",
        "Optimized battery usage reducing drain by 45% during GPS tracking sessions",
        "Created modular architecture with 95% code sharing between iOS and Android",
      ],
    },
    {
      name: "TaskFlow",
      role: "Mobile Developer",
      period: "2020 - 2021",
      description:
        "Real-time collaborative task management and project planning application for distributed teams.",
      screenshots: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&q=80",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&q=80",
      ],
      tech: [
        "React Native",
        "TypeScript",
        "WebSocket",
        "GraphQL",
        "Gesture Handler",
        "SQLite",
      ],
      achievements: [
        "Developed app from concept to launch with 50K+ downloads",
        "Implemented drag-and-drop Kanban boards with smooth animations",
        "Built real-time collaboration with WebSocket supporting 50+ concurrent users",
        "Created offline queue system syncing changes when connection restored",
        "Integrated file uploads supporting images, documents, and videos",
        "Developed calendar view with intuitive date picker and reminders",
      ],
      technicalDetails: [
        "Built complex gesture system using Gesture Handler for drag-and-drop",
        "Implemented optimistic UI updates for instant feedback",
        "Created custom conflict resolution for simultaneous edits",
        "Optimized list rendering supporting 10,000+ tasks without lag",
      ],
    },
    {
      name: "ShopEasy",
      role: "Mobile Developer",
      period: "2021",
      description:
        "E-commerce platform with AR product preview, personalized recommendations, and seamless checkout.",
      screenshots: [
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&q=80",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&q=80",
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=300&q=80",
      ],
      tech: [
        "React Native",
        "TypeScript",
        "REST API",
        "ARKit",
        "Stripe",
        "Redux",
      ],
      achievements: [
        "Integrated AR features using ARKit for iOS product visualization",
        "Implemented one-click checkout with Stripe reducing cart abandonment by 35%",
        "Built recommendation engine suggesting products based on browsing history",
        "Created QR code scanner for instant product lookup in stores",
        "Developed wishlist and comparison features improving user engagement",
        "Integrated multiple payment methods including Apple Pay and Google Pay",
      ],
      technicalDetails: [
        "Built custom image caching system reducing load times by 60%",
        "Implemented product search with fuzzy matching and filters",
        "Created secure payment flow with PCI compliance",
        "Optimized image loading with progressive enhancement",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="mb-4 pb-2 font-bold text-lg border-b border-slate-300">
        프로젝트
      </h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="pb-8 border-b border-slate-200 last:border-0"
          >
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3>{project.name}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {project.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {project.role}
              </p>
              <p className="text-sm text-foreground/90 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Mobile Screenshots */}
            <div className="grid grid-cols-3 gap-4 mb-6 bg-slate-50 p-4 rounded-lg">
              {project.screenshots.map((screenshot, i) => (
                <div key={i} className="relative">
                  <div className="aspect-[9/16] bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
                    <Image
                      src={screenshot}
                      alt={`${project.name} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Screen {i + 1}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="mb-4">
              <h4 className="text-sm mb-2">Key Achievements:</h4>
              <ul className="space-y-1">
                {project.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="text-slate-900 mt-0.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Details */}
            <div>
              <h4 className="text-sm mb-2">Technical Implementation:</h4>
              <ul className="space-y-1">
                {project.technicalDetails.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="text-slate-900 mt-0.5">▸</span>
                    <span>{detail}</span>
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
