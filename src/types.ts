import { type lead, type company, type person, type user, type deal } from "./server/db/schema";

export type NewUser = typeof user.$inferInsert;
export type SelectedUser = typeof user.$inferSelect;
export type SelectedPerson = typeof person.$inferSelect;
export type SelectedCompany = typeof company.$inferSelect;
export type SelectedLead = typeof lead.$inferSelect;
export type SelectedDeal = typeof deal.$inferSelect;