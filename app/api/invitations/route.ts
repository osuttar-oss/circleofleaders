import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export const runtime = "nodejs";

const allowedEvents = new Set([
  "london-2026",
  "london-2027-april",
  "frankfurt-2027",
  "london-2027-november",
  "partnership",
]);

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ message: "Thank you. Your interest has been received." });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const role = typeof body.role === "string" ? body.role.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const event = typeof body.event === "string" ? body.event : "";
  const consent = body.consent === "yes";

  if (
    !name || name.length > 100 || !role || role.length > 120 ||
    !company || company.length > 150 || !allowedEvents.has(event) || !consent ||
    email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ message: "Please check your details and try again." }, { status: 400 });
  }

  try {
    const client = await getMongoClient();
    await client.db("circleofleaders").collection("invitations").insertOne({
      name,
      email,
      role,
      company,
      event,
      consent,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Thank you. Your interest has been received." }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "We couldn't save your request right now. Please try again shortly." },
      { status: 503 },
    );
  }
}