import { NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";

export const GET = async (req) => {
  try {
    await dbConnect();

    // Define the dynamic $and conditions for exactly two authors
    const authorConditions = [
      { 'Authors.a1': { $exists: true } },  // First author must exist
      { 'Authors.a2': { $exists: true } },  // Second author must exist
      { 'Authors.a3': { $exists: false } }, // All other authors must not exist
      { 'Authors.a4': { $exists: false } },
      { 'Authors.a5': { $exists: false } },
      { 'Authors.a6': { $exists: false } },
      { 'Authors.a7': { $exists: false } },
      { 'Authors.a8': { $exists: false } },
      { 'Authors.a9': { $exists: false } },
      { 'Authors.a10': { $exists: false } },
    ];

    const twoAuthorPapers = await ResearchPaper.find({
      $and: authorConditions,
    });

    return new NextResponse(JSON.stringify({ result: twoAuthorPapers }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, {
      status: 500,
    });
  }
};
