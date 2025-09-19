"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handler } from "@/app/api/actions";

export default function Form() {
  const [email, setEmail] = useState("");
  const [da, setDa] = useState("Subscribe");

  const handleSubmit = async (e: React.FormEvent) => {
    setDa("Done!");
    e.preventDefault();
    handler(email);
  };

  return (
    <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        name="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        className="max-w-lg flex-1 bg-gray-100 border-gray-300 text-black placeholder:text-gray-500 focus:ring-black"
      />
      <Button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 ml-2 text-white"
      >
        {da}
      </Button>
    </form>
  );
}
