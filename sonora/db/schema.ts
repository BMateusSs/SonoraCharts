import {
  boolean,
  date,
  doublePrecision,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core"

export const chartStatus = pgEnum("chart_status", [
  "SETUP",
  "SYNCING",
  "ACTIVE",
  "ERROR",
])

export const chartType = pgEnum("chart_type", [
  "TRACK",
  "ALBUM",
  "ARTIST",
])

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),

  username: text("username").notNull().unique(),
  displayName: text("display_name"),
  slug: text("slug").notNull().unique(),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),

  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
})

export const chartProfiles = pgTable(
  "chart_profiles",
  {
    id: uuid("id").primaryKey().defaultRandom(),

    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),

    chartName: text("chart_name").notNull(),
    slug: text("slug").notNull(),

    startDate: date("start_date").notNull(),
    weekStartDay: integer("week_start_day").notNull(),

    status: chartStatus("status").notNull().default("SETUP"),

    isDefault: boolean("is_default").notNull().default(false),
    isPublic: boolean("is_public").notNull().default(true),

    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),

    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    unique("chart_profiles_user_id_slug_unique").on(table.userId, table.slug),
  ]
)

export const chartSettings = pgTable(
  "chart_settings",
  {
    id: uuid("id").primaryKey().defaultRandom(),

    chartId: uuid("chart_id")
      .notNull()
      .references(() => chartProfiles.id, { onDelete: "cascade" }),

    chartType: chartType("chart_type").notNull(),

    maxPositions: integer("max_positions").notNull(),

    maxPoints: integer("max_points").notNull().default(100),
    pointDecay: integer("point_decay").notNull().default(1),
    minPoints: integer("min_points").notNull().default(1),

    playsWeight: doublePrecision("plays_weight").notNull().default(1),
    pointsWeight: doublePrecision("points_weight").notNull().default(1),

    minPlaysToChart: integer("min_plays_to_chart").notNull().default(1),

    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),

    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    unique("chart_settings_chart_id_chart_type_unique").on(
      table.chartId,
      table.chartType
    ),
  ]
)

export const certificationRules = pgTable(
  "certification_rules",
  {
    id: uuid("id").primaryKey().defaultRandom(),

    chartId: uuid("chart_id")
      .notNull()
      .references(() => chartProfiles.id, { onDelete: "cascade" }),

    chartType: chartType("chart_type").notNull(),

    goldCertification: doublePrecision("gold_certification").notNull(),
    platinumCertification: doublePrecision("platinum_certification").notNull(),
    diamondCertification: doublePrecision("diamond_certification").notNull(),

    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),

    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    unique("certification_rules_chart_id_chart_type_unique").on(
      table.chartId,
      table.chartType
    ),
  ]
)