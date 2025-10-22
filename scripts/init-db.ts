import { config } from "dotenv";
import { initDatabase } from "../src/lib/db";

// Load environment variables from .env.local
config({ path: ".env.local" });

async function main() {
  console.log("Initializing database...");

  // Verify DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error("❌ Error: DATABASE_URL environment variable is not set.");
    console.error("Please add DATABASE_URL to your .env.local file.");
    console.error("\nExample:");
    console.error("DATABASE_URL=postgresql://user:password@endpoint.neon.tech:5432/dbname?sslmode=require");
    process.exit(1);
  }

  try {
    await initDatabase();
    console.log("✅ Database initialized successfully!");
  } catch (error) {
    console.error("❌ Error initializing database:", error);
    process.exit(1);
  }
}

main();
