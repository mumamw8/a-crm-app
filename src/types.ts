import { type person, type user } from "./server/db/schema";

export type NewUser = typeof user.$inferInsert;
export type SelectedUser = typeof user.$inferSelect;
export type SelectedPerson = typeof person.$inferSelect;