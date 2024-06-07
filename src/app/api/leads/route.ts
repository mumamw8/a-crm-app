/* eslint-disable @typescript-eslint/dot-notation */
import { db } from "@/server/db";
import { lead } from "@/server/db/schema";
import { count } from "drizzle-orm";
// import { count } from "drizzle-orm";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const body = await request.json();
  const page = parseInt(searchParams.get('page') ?? "1")
  const pageSize = parseInt(searchParams.get('pageSize') ?? "20");

  const skip = (page - 1) * pageSize;

  try {
    const totalRecordsCount = await db
    .select({ count: count() })
    .from(lead);

    const result = await db
    .select()
    .from(lead)
    .orderBy(lead.lastName)
    .limit(pageSize)
    .offset(skip);

    return Response.json({ data: result, count: totalRecordsCount });
  } catch (error) {
    console.error(error);
  }
}