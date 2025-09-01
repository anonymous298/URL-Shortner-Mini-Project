import clientPromise from "@/lib/connectDB";

export const fetchCurrentData = async (paramshorturl) => {
    // let paramshorturl = await paramshorturl
    const client = await clientPromise;
    const db = client.db("urlshortner")
    const collection = db.collection("urls")

    let currentData = await collection.findOne({shorturl : paramshorturl})
    // console.log(paramshorturl)
    return currentData
} 