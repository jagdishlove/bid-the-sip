import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("bid_sip", {
  id: serial("id").primaryKey(),
});
