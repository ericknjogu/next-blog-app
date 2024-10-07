import connectToDB from "@/app/database";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);

    const getCurrentBlogId = searchParams.get("id");

    if (!getCurrentBlogId) {
      return NextResponse.json({
        success: false,
        message: "id is required",
      });
    }

    const deleteCurrentBlog = await Blog.findByIdAndDelete(getCurrentBlogId);

    if (deleteCurrentBlog) {
      return NextResponse.json({
        success: true,
        message: "blog deleted successfully",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}
