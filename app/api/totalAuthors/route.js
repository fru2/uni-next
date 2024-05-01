// pages/api/distinctAuthors.js

import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect(); // Assuming dbConnect is a function that establishes the Mongoose connection
    const distinctAuthorsCount = await ResearchPaper.aggregate([
      {
        $unwind: "$Authors",
      },
      {
        $group: {
          _id: "$Authors",
          count: { $sum: 1 },
        },
      },
      {
        $count: "count",
      },
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
