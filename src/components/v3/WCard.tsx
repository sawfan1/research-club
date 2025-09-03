import { cn } from "@/lib/utils";

interface WorkshopCardProps {
  name: string;
  topics: string[];
  duration: string;
  mode: "online" | "offline";
  className?: string;
}

export function WorkshopCard({
  name,
  topics,
  duration,
  mode,
  className,
}: WorkshopCardProps) {
  return (
    <div
      className={cn(
        "outline-black outline-1 w-[300px] min-h-[280px] flex flex-col items-center justify-between p-6 rounded-lg",
        className
      )}
    >
      <div className="flex flex-col items-center">
        <h2 className="font-readex-pro text-2xl font-semibold text-center mb-4">
          {name}
        </h2>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground text-center mb-2">
            Topics covered:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full border"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
          <span>Duration: {duration}</span>
          <span>Mode: {mode}</span>
        </div>
      </div>

      <div className="flex gap-3 w-full">
        <button className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors border">
          Share
        </button>
        <button className="flex-1 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
          Join
        </button>
      </div>
    </div>
  );
}
