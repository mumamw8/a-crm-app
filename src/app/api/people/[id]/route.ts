/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/dot-notation */
import { db } from "@/server/db";
import { person } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request, { params }: { params: { id: string }}) {

  const { id } = params;
  if (!id) {
    throw new Error("No id provided");
  }
  try {

    const result = await db
      .select()
      .from(person)
      .where(eq(person.id, id))
      .limit(1);

    return Response.json({ data: result });
  } catch (error) {
    console.error(error);
  }
}

// PUT: update person
export async function PUT(request: Request, { params }: { params: { id: string }}) {
  const { id } = params;
  const body = await request.json();
  if (!body) {
    throw new Error("No data provided");
  }
  if (!id) {
    throw new Error("No id provided");
  }

  try {
    const result = await db
      .update(person)
      .set({ ...body })
      .where(eq(person.id, id))
      .returning({ updatedId: person.id });

    return Response.json({ data: result });
  } catch (error) {
    console.error(error);
  }
};