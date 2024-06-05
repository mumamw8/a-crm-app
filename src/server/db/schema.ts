// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `realty-agent-crm_${name}`);

export const user = createTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  providerId: text("provider_id").unique().notNull(),

  firstName: varchar("first_name", { length: 1024 }),
  lastName: varchar("last_name", { length: 1024 }),
  email: varchar("email", { length: 1024 }).unique(),
  avatarUrl: varchar("avatar_url"),

  // billing_address: jsonb("social_buttons"),
  // payment_method: jsonb("social_buttons"),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at"),

  roleId: integer("role_id").references(() => userRole.id, { onDelete: "set null"}),
});
// UserRole
export const userRole = createTable("user_role", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 1024 }),
});

// Organization
export const organization = createTable("organization", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 1024 }),
  email: varchar("email", { length: 1024 }),
  phone: varchar("phone", { length: 20 }),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at"),
});

// UserOrganization
export const userOrganization = createTable("user_organization", {
  id: serial("id").primaryKey(),
  ownerId: uuid("owner_id").references(() => user.id, { onDelete: "cascade"}),
  organizationId: uuid("organization_id").references(() => organization.id, { onDelete: "cascade"}),
});

// Workspace
export const workspace = createTable("workspace", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 1024 }),

  ownerId: uuid("owner_id").references(() => user.id, { onDelete: "set null"}),
  organizationId: uuid("organization_id").references(() => organization.id, { onDelete: "set null"}),
});

// Person
export const person = createTable("person", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstName: varchar("first_name", { length: 1024 }),
  lastName: varchar("last_name", { length: 1024 }),
  email: varchar("email", { length: 256 }),
  phone: varchar("phone", { length: 20 }),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at"),

  personTypeId: integer("person_type_id").references(() => personType.id, { onDelete: "set null"}),
  companyId: uuid("company_id").references(() => company.id, { onDelete: "set null"}),
  workspaceId: uuid("workspace_id").references(() => workspace.id, { onDelete: "set null"}),
  userId: uuid("user_id").references(() => user.id, { onDelete: "set null"}),
});
// PersonType
export const personType = createTable("person_type", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});

// Company
export const company = createTable("company", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 1024 }),
  email: varchar("email", { length: 1024 }),
  phone: varchar("phone", { length: 20 }),
  website: varchar("website", { length: 1024 }),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at"),
  
  userId: uuid("user_id").references(() => user.id, { onDelete: "set null"}),
  workspaceId: uuid("workspace_id").references(() => workspace.id, { onDelete: "set null"}),
});

// Lead
export const lead = createTable("lead", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstName: varchar("first_name", { length: 1024 }),
  lastName: varchar("last_name", { length: 1024 }),
  companyName: varchar("company_name", { length: 1024 }),
  email: varchar("email", { length: 1024 }),
  phone: varchar("phone", { length: 20 }),
  source: varchar("source", { length: 1024 }),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at"),

  leadStatusId: integer("lead_status_id").references(() => leadStatus.id, { onDelete: "set null"}),
  personId: uuid("person_id").references(() => person.id, { onDelete: "set null"}),
  companyId: uuid("company_id").references(() => company.id, { onDelete: "set null"}),
  userId: uuid("user_id").references(() => user.id, { onDelete: "set null"}),
  workspaceId: uuid("workspace_id").references(() => workspace.id, { onDelete: "set null"}),
});
// LeadStatus
export const leadStatus = createTable("lead_status", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});

// Deal
export const deal = createTable("deal", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 1024 }),
  description: text("description"),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at"),

  personId: uuid("person_id").references(() => person.id, { onDelete: "set null"}),
  companyId: uuid("company_id").references(() => company.id, { onDelete: "set null"}),
  userId: uuid("user_id").references(() => user.id, { onDelete: "set null"}),
  workspaceId: uuid("workspace_id").references(() => workspace.id, { onDelete: "set null"}),

  dealStatusId: integer("deal_status_id").references(() => dealStatus.id, { onDelete: "set null"}),
});
// DealStatus
export const dealStatus = createTable("deal_status", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});

// Note
export const note = createTable("note", {
  id: uuid("id").primaryKey().defaultRandom(),
  content: text("content"),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at"),

  personId: uuid("person_id").references(() => person.id, { onDelete: "set null"}),
  companyId: uuid("company_id").references(() => company.id, { onDelete: "set null"}),
  leadId: uuid("lead_id").references(() => lead.id, { onDelete: "set null"}),
  dealId: uuid("deal_id").references(() => deal.id, { onDelete: "set null"}),
  createdBy: uuid("created_by").references(() => user.id, { onDelete: "set null"}),
  workspaceId: uuid("workspace_id").references(() => workspace.id, { onDelete: "set null"}),
});

// File
export const file = createTable("file", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 1024 }),
  url: varchar("url", { length: 1024 }),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at"),

  fileTypeId: integer("file_type_id").references(() => fileType.id, { onDelete: "set null"}),
  personId: uuid("person_id").references(() => person.id, { onDelete: "set null"}),
  companyId: uuid("company_id").references(() => company.id, { onDelete: "set null"}),
  leadId: uuid("lead_id").references(() => lead.id, { onDelete: "set null"}),
  dealId: uuid("deal_id").references(() => deal.id, { onDelete: "set null"}),
  uploaded_by: uuid("uploaded_by").references(() => user.id, { onDelete: "set null"}),
  workspaceId: uuid("workspace_id").references(() => workspace.id, { onDelete: "set null"}),
});
// FileType
export const fileType = createTable("file_type", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});

// Task
export const task = createTable("task", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 1024 }),
  description: text("description"),
  dueDate: timestamp("due_date"),

  personId: uuid("person_id").references(() => person.id, { onDelete: "set null"}),
  companyId: uuid("company_id").references(() => company.id, { onDelete: "set null"}),
  leadId: uuid("lead_id").references(() => lead.id, { onDelete: "set null"}),
  dealId: uuid("deal_id").references(() => deal.id, { onDelete: "set null"}),
  assignedTo: uuid("assigned_to").references(() => user.id, { onDelete: "set null"}),
  workspaceId: uuid("workspace_id").references(() => workspace.id, { onDelete: "set null"}),
});
// Contract
// Invoice
// InvoiceStatus
// Transaction

// Property
// PropertyStatus
// PropertyType
// PropertyImage
// PropertyFile
