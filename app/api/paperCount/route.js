import { NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";

export const GET = async (req) => {
  try {
    await dbConnect();
    const data = await ResearchPaper.countDocuments({});
    console.log(data);
    return new NextResponse(JSON.stringify({ count: data }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, {
      status: 500,
    });
  }
};
