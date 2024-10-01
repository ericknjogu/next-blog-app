"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function BlogOverview() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);

  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-r from-purple-400 to-blue-500 pt-10 px-10">
      <div>
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>
      <div>Bloglist section</div>

      <Dialog
        open={openBlogDialog}
        onOpenChange={setOpenBlogDialog}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add new BLog</DialogTitle>
            <DialogDescription>
              Add a new blog to your bloglist.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="title"
                className="text-right"
              >
                Title
              </Label>
              <Input
                id="title"
                defaultValue="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="description"
                className="text-right"
              >
                Description
              </Label>
              <Textarea
                id="description"
                defaultValue="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Blog</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
