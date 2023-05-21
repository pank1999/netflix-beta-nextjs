import dbConn from "@/utils/db-config";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    console.log({ body });
    await dbConn()
      .then(() => {
        console.log("db connection success");
      })
      .catch((error) => {
        console.log("error", error);
      });
    const res = await Contact.create(body);
    console.log({ res });
    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
