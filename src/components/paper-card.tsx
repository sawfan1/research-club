import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { NeobrutalistButton } from "./neo";

interface PaperCardProps {
  title: string;
  author: string;
  description: string;
  datePublished: string;
  tags: string[];
  downloadLink: string;
  id: number;
}

export default function PaperCard({
  title,
  author,
  description,
  datePublished,
  tags,
  downloadLink,
  id,
}: PaperCardProps) {
  return (
    <Card className="w-full rounded-none border-1 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          {id}. {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          By {author}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="default"
              className="bg-blue-100 text-blue-800"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Published on {datePublished}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href={downloadLink} target="_blank" rel="noopener noreferrer">
          <NeobrutalistButton className="bg-blue-700 hover:bg-blue-800">
            <Download className="mr-2 h-4 w-4" />
            Download Paper
          </NeobrutalistButton>
        </Link>
      </CardFooter>
    </Card>
  );
}
