import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchQuery = url.searchParams.get('search');
  const authors = url.searchParams.getAll('authors');
  const affiliations = url.searchParams.getAll('affiliations');
  const years = url.searchParams.getAll('years').map(Number);

  try {
    await dbConnect();

    let conditions = [];
    if (searchQuery != '') {
      conditions.push({ $text: { $search: searchQuery } });
    }
    for (let i = 1; i <= 20; i++) {
      if (authors.length > 0) {
        conditions.push({ [`Authors.a${i}`]: { $in: authors } });
      }
      if (affiliations.length > 0) {
        conditions.push({ [`Affiliations.af${i}`]: { $in: affiliations } });
      }
    }
    if (years.length > 0) {
      conditions.push({ "Year": { $in: years } });
    }

    let data;
    if (conditions.length > 0) {
      data = await ResearchPaper.find({ $or: conditions });
    } else {
      data = await ResearchPaper.find();
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
