import DataTobePush from "@/models/dataForValidate";
import { dbConnect } from "@/db";
import { NextResponse } from "next/server";

dbConnect();
export const GET = async (req) => {
  try {
    const result = await DataTobePush.find({ isValidatedByDean: null  });
    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching data: " + error, {
      status: 500,
    });
  }
};
