import { dbConnect, disconnect } from "../../utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  console.log("hit db connect", new Date().getSeconds());
  return new NextResponse("connected");
  //   return NextResponse.json({ messsage: "Hello World" });
}
