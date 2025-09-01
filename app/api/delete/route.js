import { NextResponse } from "next/server";
import clientPromise from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export async function POST(request) {
  try {
    const data = await request.json();
    const client = await clientPromise;
    const db = client.db("urlshortner");
    const collection = db.collection("urls");

    const id = data._id;

    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    console.log(result);

    return NextResponse.json({
      success: true,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
