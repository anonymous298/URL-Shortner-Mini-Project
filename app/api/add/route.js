import clientPromise from "@/lib/connectDB";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db("urlshortner")
        const collection = db.collection("urls")

        const data = await collection.find({}).toArray();
        
        return NextResponse.json({ data });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    const data = await request.json()

    const client = await clientPromise;
    const db = client.db("urlshortner")
    const collection = db.collection("urls")

    await collection.insertOne(data)

    return NextResponse.json({succes : 'true', data : data})

}

