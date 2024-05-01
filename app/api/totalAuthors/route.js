// pages/api/distinctAuthors.js

import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect(); // Assuming dbConnect is a function that establishes the Mongoose connection
    const distinctAuthorsCount = await ResearchPaper.aggregate([
      {
        $project: {
          authors: {
            $filter: {
              input: ["$Authors.a1", "$Authors.a2", "$Authors.a3", "$Authors.a4", "$Authors.a5", "$Authors.a6", "$Authors.a7", "$Authors.a8", "$Authors.a9", "$Authors.a10", "$Authors.a11", "$Authors.a12", "$Authors.a13", "$Authors.a14", "$Authors.a15", "$Authors.a16", "$Authors.a17", "$Authors.a18", "$Authors.a19", "$Authors.a20"],
              as: "author",
              cond: { $ne: ["$$author", null] }
            }
          }
        }
      },
      {
        $unwind: "$authors"
      },
      {
        $group: {
          _id: "$authors"
        }
      },
      {
        $group: {
          _id: null,
          count: { $sum: 1 }
        }
      }
    ]);

    return NextResponse.json(
      { count: distinctAuthorsCount[0].count },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
