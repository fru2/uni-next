import DataTobePush from "@/models/dataForValidate";
import { dbConnect } from "@/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await dbConnect(); // Connect to the database

    const requestData = await req.json(); // Parse the request body as JSON

    // Check if the required fields are present in the request body
    if (!requestData || !requestData.data) {
      throw new Error("Data field is missing in the request body.");
    }

    const newData = new DataTobePush({
      data: requestData.data,
      isValidatedByDean: requestData.isValidatedByDean || null,
      isValidatedByVC: requestData.isValidatedByVC || null,
      isValidatedByLibrarian: requestData.isValidatedByLibrarian || null,
    });

    await newData.save();

    // Return a success response
    return new NextResponse("Data saved successfully", { status: 200 });
  } catch (error) {
    // Return an error response if there's any issue
    console.error("Error in POST request:", error);
    return new NextResponse("Error in fetching data: " + error.message, {
      status: 500,
    });
  }
};
