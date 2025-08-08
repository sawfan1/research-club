import {
  Settings,
  Hourglass,
  User,
  Book,
  RefreshCw,
  Grid3X3,
  Network,
  Mountain,
} from "lucide-react";
import { BlurFade } from "./magicui/blur-fade";

export default function Vento() {
  const sectors = [
    {
      icon: Book,
      title: "Publication",
      description:
        "The club features student publications that showcase the research and academic achievements of its members.",
    },
    {
      icon: Settings,
      title: "Academic Moderation",
      description:
        "Overlooks the integrity and quality of academic work, ensuring that all submissions meet the club's standards.",
    },
    {
      icon: Hourglass,
      title: "Events",
      description:
        "The administrators oversee and conduct several events throughout the year, including workshops, seminars, and guest lectures.",
    },
    {
      icon: User,
      title: "Social Relations",
      description:
        "Manages the club's social media presence and public relations, promoting the club's activities and achievements.",
    },
  ];

  return (
    <BlurFade className="bg-gray-50 p-6 pb-10">
      <div className="max-w-7xl mx-auto mt-12">
        <div className="mb-8 text-center">
          <p className="text-blue-600 text-md font-medium mb-2">
            Club Operations
          </p>
          <h1 className="text-5xl font-bold text-gray-900">
            Sectors & Processes
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <div className="mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </BlurFade>
  );
}
