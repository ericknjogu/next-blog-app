"use client";

import { useEffect, useState } from "react";

import AddNewBlog from "../add-new-blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";

const initialBlogFormData = {
  title: "",
  description: "",
};

export default function BlogOverview({ blogList }) {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [currentEditedBlogId, setCurrentEditedBlogId] = useState(null);

  //refresh page after ading mew blog
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  async function handleSaveBlogData() {
    try {
      setLoading(true);
      const response =
        currentEditedBlogId !== null
          ? await fetch(`/api/update-blog?id=${currentEditedBlogId}`, {
              method: "PUT",
              body: JSON.stringify(blogFormData),
            })
          : await fetch("/api/add-blog", {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Specify content type
              },
              body: JSON.stringify(blogFormData),
            });
      const result = await response.json();

      if (result?.success) {
        setOpenBlogDialog(false);
        setBlogFormData(initialBlogFormData);
        setLoading(false);
        setCurrentEditedBlogId(null);
        router.refresh();
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }

  async function handleDeleteBlog(getCurrentId) {
    try {
      const apiResponse = await fetch(`/api/delete-blog?id=${getCurrentId}`, {
        method: "DELETE",
      });

      const result = await apiResponse.json();

      if (result?.success) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(getCurrentBlog) {
    setCurrentEditedBlogId(getCurrentBlog?._id);

    setBlogFormData({
      title: getCurrentBlog?.title,
      description: getCurrentBlog?.description,
    });

    setOpenBlogDialog(true);
  }

  return (
    <div className="min-h-screen flex flex-col items-center  bg-gradient-to-r from-purple-400 to-blue-500 pt-10 px-10">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
        currentEditedBlogId={currentEditedBlogId}
        setCurrentEditedBlogId={setCurrentEditedBlogId}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-5">
        {blogList && blogList.length > 0 ? (
          blogList.map((blogItem) => (
            <Card
              key={blogItem._id}
              className="w-full p-5"
            >
              <CardContent>
                <CardTitle className="mb-3 text-l font-bold capitalize">
                  {blogItem.title}
                </CardTitle>
                <CardDescription className="mb-4 text-lg normal-case">
                  {blogItem.description}
                </CardDescription>
                <div className="flex gap-3  items-center mt-5">
                  <Button onClick={() => handleEdit(blogItem)}>Edit</Button>
                  <Button onClick={() => handleDeleteBlog(blogItem._id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Label className="text-3xl font-extrabold text-center">
            No Blogs Found PLease add!
          </Label>
        )}
      </div>
    </div>
  );
}
