import connectToDB from "@/app/database";
import { NextResponse } from "next/server";

const EditBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function PUT(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const getCurrentBlogId = searchParams.get("id");

    if (!getCurrentBlogId) {
      return NextResponse.json({
        sucess: false,
        message: "Blog id is required",
      });
    }

    const { title, description } = await req.json();

    const { error } = EditBlog.validate({ title, description });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const updateBlog = await Blog.findOneAndUpdate(
      {
        _id: getCurrentBlogId,
      },
      { title, description },
      { new: true }
    );

    if (updateBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog updated successfully",
      });
    } else {
      return NextResponse.json({
        sucess: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      sucess: false,
      message: "Something went wrong",
    });
  }
}
