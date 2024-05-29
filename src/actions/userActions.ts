/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { db } from "@/server/db";
import { type NewUser } from "@/types";
import { currentUser } from "@clerk/nextjs/server"
import { user } from "@/server/db/schema";


export async function createUser(formData: FormData) {
  const loggedInUser = await currentUser();
  let username = null;
  if (formData.get('username')) {
    username = formData.get('username') as string;
  }

  if (!loggedInUser) {
    return false;
  }

  const newUser: NewUser = {
    providerId: loggedInUser.id,
    email: loggedInUser.primaryEmailAddress?.emailAddress,
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
  };

  try {
    await db.insert(user).values(newUser);
    console.log("User created successfully");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}