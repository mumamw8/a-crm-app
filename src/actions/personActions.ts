/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { db } from "@/server/db";
import { person } from "@/server/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getUser } from "./userActions";
import { updateData } from "@syncfusion/ej2-react-grids";

export async function getPerson(id: string) {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const dbUser = await getUser();

  if (!dbUser) {
    return null;
  }

  const personData = await db
    .select()
    .from(person)
    .where(eq(person.id, id));

  return personData[0];
}

export async function savePersonDetails(formData: FormData, personId: string) {
  const user = await currentUser();

  if (!user) {
    return false;
  }

  const dbUser = await getUser();

  if (!dbUser) {
    return false;
  }

  const personUpdateData = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    updatedAt: new Date()
  }
  
  try {
    await db
      .update(person)
      .set({...personUpdateData})
      .where(eq(person.id, personId))
      .returning({ updatedId: person.id });

      revalidatePath("/people/[slug]", "page");
      return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}