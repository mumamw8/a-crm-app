/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { type SelectedUser } from "@/types";

export async function getPerson(id:string) {
  const res = await fetch(`http://localhost:3000/api/people/${id}`); 

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const personData: SelectedUser[] = await res.json();

  return personData[0];
}