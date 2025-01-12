// Import necessary functions from the 'drizzle-orm/pg-core' module
import {
	pgEnum,
	pgTable,
	text,
	timestamp,
	uuid,
	boolean,
} from "drizzle-orm/pg-core";

// Define an enumeration for membership types with two possible values: 'free' and 'pro'
export const membershipEnum = pgEnum("membership", ["free", "pro"]);

// Define a table named 'profiles' with its columns and constraints
export const profilesTable = pgTable("profiles", {
	// 'userId' is a primary key column of type text, it cannot be null
	userId: text("user_id").primaryKey().notNull(),

	// 'membership' is a column that uses the 'membershipEnum' type, defaults to 'free', and cannot be null
	membership: membershipEnum("membership").default("free").notNull(),

	// 'stripeCustomerId' is a column of type text, it cannot be null
	stripeCustomerId: text("stripe_customer_id").notNull(),

	// 'stripeSubscriptionId' is a column of type text, it can be null
	stripeSubscriptionId: text("stripe_subscription_id"),

	// 'createdAt' is a timestamp column that defaults to the current time and cannot be null
	createdAt: timestamp("created_at").defaultNow().notNull(),

	// 'updatedAt' is a timestamp column that defaults to the current time, cannot be null, and updates to the current time on row update
	updatedAt: timestamp("updated_at")
		.defaultNow()
		.notNull()
		.$onUpdate(() => new Date()),
});

export type InsertProfile = typeof profilesTable.$inferInsert;
export type SelectProfile = typeof profilesTable.$inferSelect;

export const todosTable = pgTable("todos", {
	id: uuid("id").defaultRandom().primaryKey(),
	userId: text("user_id").notNull(),
	content: text("content").notNull(),
	completed: boolean("completed").default(false).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at")
		.defaultNow()
		.notNull()
		.$onUpdate(() => new Date()),
});

export type InsertTodo = typeof todosTable.$inferInsert;
export type SelectTodo = typeof todosTable.$inferSelect;
