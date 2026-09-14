import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const appState = sqliteTable("app_state", {
  userId: text("user_id").primaryKey(),
  data: text("data").notNull(),
  updatedAt: integer("updated_at").notNull(),
});

export const shareLedger = sqliteTable("share_ledger", {
  id: text("id").primaryKey(),
  revision: integer("revision").notNull().default(0),
  data: text("data").notNull(),
});

export const gameRooms = sqliteTable("game_rooms", {
  id: text("id").primaryKey(),
  game: text("game").notNull(),
  visibility: text("visibility").notNull().default("public"),
  codeHash: text("code_hash"),
  hostId: text("host_id").notNull(),
  guestId: text("guest_id"),
  state: text("state").notNull(),
  status: text("status").notNull().default("waiting"),
  updatedAt: integer("updated_at").notNull(),
}, (table) => [index("idx_game_rooms_visibility_status_updated").on(table.visibility, table.status, table.updatedAt)]);
