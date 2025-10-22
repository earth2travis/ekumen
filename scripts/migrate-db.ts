import { config } from "dotenv";
import { getSQL } from "../src/lib/db";

// Load environment variables from .env.local
config({ path: ".env.local" });

async function main() {
  console.log("Migrating database schema...");

  // Verify DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error("❌ Error: DATABASE_URL environment variable is not set.");
    console.error("Please add DATABASE_URL to your .env.local file.");
    process.exit(1);
  }

  try {
    const sql = getSQL();

    // Add the new columns if they don't exist
    console.log("Adding respondent_name column...");
    await sql`
      ALTER TABLE segment_feedback
      ADD COLUMN IF NOT EXISTS respondent_name TEXT
    `;

    console.log("Adding q6_feedback column...");
    await sql`
      ALTER TABLE segment_feedback
      ADD COLUMN IF NOT EXISTS q6_feedback TEXT
    `;

    console.log("✅ Database migration completed successfully!");
  } catch (error) {
    console.error("❌ Error migrating database:", error);
    process.exit(1);
  }
}

main();
