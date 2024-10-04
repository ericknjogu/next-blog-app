"use client";

import { useState } from "react";

import AddNewBlog from "../add-new-blog";

const initialBlogFormData = {
  title: "",
  description: "",
};

export default function BlogOverview() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

  async function handleSaveBlogData() {
    try {
      setLoading(true);
      const response = await fetch("/api/add-blog", {
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
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
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
      />
    </div>
  );
}
