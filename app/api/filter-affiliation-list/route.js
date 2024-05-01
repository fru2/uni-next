import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchString = url.searchParams.get('searchString');

  await dbConnect();

  try {
    const affiliationContainingString = await ResearchPaper.aggregate([
      {
        $project: {
          affiliations: {
            $objectToArray: "$Affiliations"
          }
        }
      },
      {
        $unwind: "$affiliations"
      },
      {
        $match: {
          "affiliations.v": { $regex: searchString, $options: 'i' }
        }
      },
      {
        $limit: 10
      },
      {
        $group: {
          _id: null,
          affiliations: {
            $addToSet: "$affiliations.v"
          }
        }
      },
      {
        $project: {
          _id: 0,
          affiliations: 1
        }
      },
    ]);

    if (affiliationContainingString.length === 0) {
      return new NextResponse("No affiliations found containing the provided string", { status: 404 });
    }

    return new NextResponse(JSON.stringify(affiliationContainingString[0].affiliations), { status: 200 });
  } catch (error) {
    console.error("Error in fetching affiliations:", error);
    return new NextResponse("Error in fetching authors: " + error, { status: 500 });
  }
};
