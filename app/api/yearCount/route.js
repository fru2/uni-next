import { NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";



  export const GET = async (req) => {
    try {
      await dbConnect();
      const yearsCount = await ResearchPaper.aggregate([
        { $group: { _id: '$Year', count: { $sum: 1 } } },
        { $sort: { _id: 1 } } // Optional: Sort by year in ascending order
      ]);
      
      return new NextResponse(JSON.stringify({ result: yearsCount }), { status: 200 });
    } catch (error) {
      return new NextResponse("Error in fetching data: " + error, {
        status: 500,
      });
    }
  };
  