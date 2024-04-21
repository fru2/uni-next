import { NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";

export const GET = async (req) => {
  try {
    await dbConnect();

    // Define the dynamic $and conditions for a single author
    const authorConditions = Array.from({ length: 10 }, (_, i) => {
      if (i === 0) {
        // First author must exist
        return { [`Authors.a${i + 1}`]: { $exists: true } };
      } else {
        // Other authors must not exist
        return { [`Authors.a${i + 1}`]: { $exists: false } };
      }
    });

    const singleAuthorPapers = await ResearchPaper.find({
      $and: authorConditions,
    });

    return new NextResponse(JSON.stringify({ result: singleAuthorPapers }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, {
      status: 500,
    });
  }
};
