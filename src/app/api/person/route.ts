/* eslint-disable @typescript-eslint/dot-notation */
import { db } from "@/server/db";
import { person } from "@/server/db/schema";
// import { count } from "drizzle-orm";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const body = await request.json();
  const page = parseInt(searchParams.get('pageNumber') ?? "1")
  const pageSize = parseInt(searchParams.get('pageSize') ?? "10");

  const skip = (page - 1) * pageSize;

  // const totalCount = await db
  //   .select({ count: count() })
  //   .from(company)
  //   .orderBy(company.name);
  const result = await db
    .select()
    .from(person)
    .orderBy(person.lastName)
    .limit(pageSize)
    .offset(skip);

  return Response.json({ data: result });
}