import { NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";

export const GET = async (req) => {
  try {
    await dbConnect();

    const queryParams = req.query;
    const year = queryParams && queryParams.year;
    console.log(year);
    if (!year) {
      return new NextResponse("Year parameter is required", {
        status: 400,
      });
    }

    // Filter research papers by the provided year
    const researchPapers = await ResearchPaper.find({ Year: year }).sort({
      Title: 1,
    });

    return new NextResponse(JSON.stringify(researchPapers), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, {
      status: 500,
    });
  }
};
