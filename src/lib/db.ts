import { neon } from "@neondatabase/serverless";

// Lazy initialization of sql connection
let _sql: ReturnType<typeof neon> | null = null;

export function getSQL() {
  if (!_sql) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    _sql = neon(process.env.DATABASE_URL);
  }
  return _sql;
}

// Export sql as a function that calls getSQL
export function sql(strings: TemplateStringsArray, ...values: unknown[]) {
  return getSQL()(strings, ...values);
}

// Initialize the database schema
export async function initDatabase() {
  const db = getSQL();
  await db`
    CREATE TABLE IF NOT EXISTS segment_feedback (
      id SERIAL PRIMARY KEY,
      submitted_at TIMESTAMP NOT NULL DEFAULT NOW(),
      respondent_name TEXT,

      -- Part 2: Discovery Questions
      q1_response TEXT,
      q2_response TEXT,
      q3_response TEXT,

      -- Context-Juggling Product Teams
      cjpt_keep TEXT,
      cjpt_changes TEXT,
      cjpt_scores TEXT,
      cjpt_other TEXT,

      -- Alignment-Pressed Leadership Teams
      aplt_keep TEXT,
      aplt_why TEXT,
      aplt_change TEXT,
      aplt_other TEXT,

      -- Client-Context Keepers
      cck_direction TEXT,
      cck_multi_thoughts TEXT,
      cck_agency_thoughts TEXT,
      cck_other TEXT,

      -- Knowledge Weavers
      kw_keep TEXT,
      kw_builders TEXT,
      kw_validate TEXT,
      kw_other TEXT,

      -- Pitch-Perfect Marketers
      ppm_keep TEXT,
      ppm_interview TEXT,
      ppm_other TEXT,

      -- AI-Native Small Team Operators
      ainsto_add TEXT,
      ainsto_description TEXT,
      ainsto_priority TEXT,
      ainsto_priority_reasoning TEXT,
      ainsto_concerns TEXT,

      -- Part 5: Additional Considerations
      q4_response TEXT,
      q5_response TEXT,
      confidence TEXT,
      q6_increase TEXT,
      q6_interviews TEXT,
      q6_next_steps TEXT,
      q6_feedback TEXT
    )
  `;
}
