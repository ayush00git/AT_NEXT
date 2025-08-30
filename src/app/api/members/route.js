import { NextResponse } from "next/server";
import Member from "@/models/member";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();
    const members = await Member.find({});
    return NextResponse.json(members);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 });
  }
}
