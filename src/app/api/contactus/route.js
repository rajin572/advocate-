import dbConnect from "@/utils/dbConnect";
import ContactUsUser from "@/models/ContactUsUser";
import { NextResponse } from "next/server";

// Set CORS headers
const setCorsHeaders = () => ({
  "Access-Control-Allow-Origin": "*", // Adjust this to allow specific origins if needed
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
});

// Handle CORS pre-flight OPTIONS requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: setCorsHeaders() });
}

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { name, email, subject, message, role } = body;

    // Check if the user already exists
    const existingUser = await ContactUsUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: "You have already sent a message once using this email.",
        },
        { headers: setCorsHeaders(), status: 400 }
      );
    }

    const user = new ContactUsUser({
      name,
      email,
      subject,
      role,
      message,
    });

    await user.save();

    return NextResponse.json(
      { success: true, data: user },
      { headers: setCorsHeaders(), status: 201 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { headers: setCorsHeaders(), status: 400 }
    );
  }
}

// Handle GET requests
export async function GET() {
  await dbConnect();

  try {
    const users = await ContactUsUser.find({});
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
