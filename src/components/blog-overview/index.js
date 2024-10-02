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

  return (
    <div className="min-h-screen flex flex-col items-center  bg-gradient-to-r from-purple-400 to-blue-500 pt-10 px-10">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
      />
    </div>
  );
}
