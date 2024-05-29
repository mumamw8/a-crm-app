import { type user } from "./server/db/schema";

export type NewUser = typeof user.$inferInsert;
export type SelectedUser = typeof user.$inferSelect;