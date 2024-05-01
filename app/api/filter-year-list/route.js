import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";

export const GET = async (req) => {

  await dbConnect();

  try {
    const yearContainingString = await ResearchPaper.aggregate([
      {
        $group: {
          _id: "$Year"
        }
      },
      {
        $sort: {
          _id: -1
        }
      },
      {
        $group: {
          _id: null,
          Years: { $push: "$_id" }
        }
      },
      {
        $project: {
          _id: 0,
          Years: 1
        }
      }
    ]);

    if (yearContainingString.length === 0) {
      return new NextResponse("No year found containing the provided string", { status: 404 });
    }

    return new NextResponse(JSON.stringify(yearContainingString[0].Years), { status: 200 });
  } catch (error) {
    console.error("Error in fetching year:", error);
    return new NextResponse("Error in fetching authors: " + error, { status: 500 });
  }
};
