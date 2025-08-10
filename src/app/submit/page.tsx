"use client";

import Lotti1 from "@/components/Lottie1";
import Lotti2 from "@/components/Lottie2";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useState } from "react";

export default function Submit() {
  const [files, setFiles] = useState<File[] | undefined>();
  const handleDrop = (files: File[]) => {
    setFiles(files);
  };

  return (
    <div className="w-full min-h-screen">
      <section className="w-full p-10 relative overflow-hidden h-screen">
        <h1 className="text-3xl font-semibold text-center ">
          Submit your paper
        </h1>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-6 mx-auto">
          <Label htmlFor="paper-title">Paper title</Label>
          <Input
            type="text"
            id="paper-title"
            placeholder="Enter your paper title"
          />
          <Dropzone
            accept={{ "image/*": [] }}
            maxFiles={10}
            maxSize={1024 * 1024 * 10}
            minSize={1024}
            onDrop={handleDrop}
            className="shadow-sm mt-2"
            onError={console.error}
            src={files}
          >
            <DropzoneEmptyState />
            <DropzoneContent />
          </Dropzone>
          <div className="flex gap-2 my-2">
            <Checkbox id="rules" />
            <Label htmlFor="rules">I have read the rules</Label>
          </div>

          <Button type="submit" className="mt-2 bg-blue-700 hover:bg-blue-800">
            Submit
          </Button>
        </div>
        <Lotti1 />
        <Lotti2 />
      </section>
    </div>
  );
}
