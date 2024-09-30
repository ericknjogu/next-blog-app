"use client";
import Link from "next/link";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

export default function BlogOverview() {
  const [formData, setFormData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 to-blue-500 pt-10">
      <div>
        <Link
          href={"/"}
          className=""
        >
          <button className="bg-white text-purple-400 text-lg font-bold rounded-lg py-2 px-4 mt-4">
            Go Home
          </button>
        </Link>
      </div>
      <div className="border-solid border-2 border-white rounded-lg p-4 w-1/2 mt-6">
        <form
          className="flex flex-col max-w-md justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full max-w-sm  gap-1.5">
            <Label htmlFor="email">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter blog title"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              type="text"
              id="description"
              placeholder="blog description"
            />
          </div>
          <Button
            className="mt-4"
            type="submit"
          >
            Add Blog
          </Button>
        </form>
      </div>
    </div>
  );
}
