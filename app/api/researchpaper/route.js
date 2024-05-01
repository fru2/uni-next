import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../db";
import ResearchPaper from "@/models/ResearchPaper";


export const GET = async (req) => {

  const url = new URL(req.url);
  const authors = url.searchParams.getAll('authors');
  const affiliations = url.searchParams.getAll('affiliations');
  const years = url.searchParams.getAll('years').map(Number);
  // authors.forEach(value => {
  //   console.log(value);
  // })

  console.log(years);

  try {
    await dbConnect();

    let conditions = [];
    for (let i = 1; i <= 20; i++) {
      conditions.push({ [`Authors.a${i}`]: { $in: authors } });
      conditions.push({ [`Affiliations.af${i}`]: { $in: affiliations } });
    }
    conditions.push({ "Year": { $in: years } });

    let data = await ResearchPaper.find({ $or: conditions });

    if (authors.length ===  0 && affiliations.length === 0 && years.length === 0) {
      data = await ResearchPaper.find();
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, { status: 500 });
  }
};
