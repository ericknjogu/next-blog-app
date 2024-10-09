"use client";

import React from "react";

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

export default function AddNewBlog({
  setOpenBlogDialog,
  openBlogDialog,
  loading,

  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
  currentEditedBlogId,
  setCurrentEditedBlogId,
}) {
  return (
    <div>
      <div className="mb-10">
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>

      <Dialog
        open={openBlogDialog}
        onOpenChange={() => {
          setOpenBlogDialog(false);
          setBlogFormData({
            title: "",
            description: "",
          });
          setCurrentEditedBlogId(null);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
            </DialogTitle>
            <DialogDescription>
              {currentEditedBlogId
                ? "Edit your Blog"
                : "Add a new blog to your account"}
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
                name="title"
                placeholder="Enter Title"
                value={blogFormData.title}
                onChange={(e) =>
                  setBlogFormData({ ...blogFormData, title: e.target.value })
                }
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
                name="description"
                value={blogFormData.description}
                onChange={(e) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: e.target.value,
                  })
                }
                placeholder="Enter Description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              onClick={handleSaveBlogData}
            >
              {loading ? "saving Changes..." : "Save Blog"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
