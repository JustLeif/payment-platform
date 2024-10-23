import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable(
	'users',
	{
		id: text('id', { length: 36 })
			.primaryKey()
			.$defaultFn(() => crypto.randomUUID()),
		payoutAddress: text('payout_address'),
		createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
		email: text('email').notNull().unique(),
		emailNotifications: integer('email_notifications', { mode: 'boolean' }).default(true)
	},
	(table) => {
		return {
			emailIdx: index('users_email_idx').on(table.email),
			emailNotificationsIdx: index('users_email_notifications_idx').on(table.emailNotifications)
		};
	}
);

export const authOtps = sqliteTable('auth_otps', {
	id: text('id', { length: 36 })
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	email: text('email').notNull(),
	otp: text('otp').notNull(),
	createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
	/** expiration is always set 5 minutes after OTP creation. */
	expiration: integer('expiration', { mode: 'timestamp' }).default(sql`(unixepoch() + (5 * 60))`)
});

export const products = sqliteTable('products', {
	id: text('id', { length: 36 })
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name'),
	ownerId: text('owner_id').references(() => users.id),
	asset: text('asset', { enum: ['lovelace', 'ada'] }).notNull(),
	amount: integer('amount').notNull(),
	webhookUrl: text('webhook_url')
});
