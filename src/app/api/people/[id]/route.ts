/* eslint-disable @typescript-eslint/dot-notation */
import { db } from "@/server/db";
import { person } from "@/server/db/schema";
import { eq } from "drizzle-orm";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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