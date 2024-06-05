/* eslint-disable @typescript-eslint/dot-notation */
import { db } from "@/server/db";
import { person } from "@/server/db/schema";
import { count } from "drizzle-orm";
// import { count } from "drizzle-orm";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const body = await request.json();
  const skip = parseInt(searchParams.get('skip') ?? "0")
  const take = parseInt(searchParams.get('take') ?? "10");

  try {
    const totalRecordsCount = await db
    .select({ count: count() })
    .from(person);

    const result = await db
    .select()
    .from(person)
    .orderBy(person.lastName)
    .limit(take)
    .offset(skip);

    return Response.json({ data: result, count: totalRecordsCount });
  } catch (error) {
    console.error(error);
  }
}