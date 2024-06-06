/* eslint-disable @typescript-eslint/dot-notation */
import { db } from "@/server/db";
import { company } from "@/server/db/schema";
import { count } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const body = await request.json();
  const skip = parseInt(searchParams.get('skip') ?? "0")
  const take = parseInt(searchParams.get('take') ?? "10");

  try {
    const totalRecordsCount = await db
    .select({ count: count() })
    .from(company);

    const result = await db
    .select()
    .from(company)
    .orderBy(company.name)
    .limit(take)
    .offset(skip);

    return Response.json({ data: result, count: totalRecordsCount });
  } catch (error) {
    console.error(error);
  }
}