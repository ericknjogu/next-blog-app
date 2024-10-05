import connectToDB from "@/app/database";
import Blog from "@/app/models/blogs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const extractAllBlogs = await Blog.find({});

    if (extractAllBlogs) {
      return NextResponse.json({
        success: true,
        data: extractAllBlogs,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "something went wrong! Please try again later.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong! Please try again later.",
    });
  }
}
