import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";

export const GET = async (req) => {
  // 'use server';
  
  const url = new URL(req.url);
  const searchString = url.searchParams.get('searchString');

  await dbConnect();
  try {
    const authorsContainingString = await ResearchPaper.aggregate([
      {
        $project: {
          authors: {
            $objectToArray: "$Authors"
          }
        }
      },
      {
        $unwind: "$authors"
      },
      {
        $group: {
          _id: null,
          authors: {
            $addToSet: "$authors.v"
          }
        }
      },
      {
        $project: {
          _id: 0,
          authors: 1
        }
      },
      {
        $unwind: "$authors"
      },
      {
        $match: {
          authors: { $regex: searchString, $options: 'i' }
        }
      }
    ]);

    if (authorsContainingString.length === 0) {
      return new NextResponse("No authors found containing the provided string", { status: 404 });
    }

    return new NextResponse(JSON.stringify(authorsContainingString[0].Authors), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching authors: " + error, { status: 500 });
  }
};
