# Segment Feedback Form Setup

This document explains how to set up and use the segment feedback form at `/refine`.

## Overview

The feedback form is a multi-step form designed to gather information from the team about refining target customer segments. It consists of 9 views covering:

1. Segment Refinement Overview
2. Discovery Questions
3. Five existing segments (Context-Juggling Product Teams, Alignment-Pressed Leadership Teams, Client-Context Keepers, Knowledge Weavers, Pitch-Perfect Marketers)
4. New Segment Evaluation (AI-Native Small Team Operators)
5. Additional Considerations

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4.0** for styling
- **shadcn/ui** components (Card, Button, Input, Textarea, Label, RadioGroup, Separator)
- **Neon Serverless Postgres** for data storage

## Database Setup

### 1. Create a Neon Database

1. Go to [https://console.neon.tech](https://console.neon.tech)
2. Create a new project
3. Copy your connection string

### 2. Configure Environment Variables

Add your Neon database URL to `.env.local`:

```bash
DATABASE_URL=postgresql://<user>:<password>@<endpoint_hostname>.neon.tech:<port>/<dbname>?sslmode=require
```

### 3. Initialize the Database

Run the database initialization script to create the `segment_feedback` table:

```bash
npm run db:init
```

This will create a table with all the necessary columns to store form responses.

## Database Schema

The `segment_feedback` table includes:

- `id` - Auto-incrementing primary key
- `submitted_at` - Timestamp of submission
- All form fields (q1_response, q2_response, etc.)

## Usage

### Accessing the Form

Navigate to `/refine` in your browser. The form will:

1. Display a progress indicator showing which step you're on
2. Allow navigation between steps using Previous/Next buttons
3. Save all responses to state as you type
4. Submit all data to the database when you click "Submit Feedback" on the final step

### Form Submission

When submitted, the form:

1. POSTs data to `/api/feedback`
2. Stores the response in the Neon database
3. Shows a success/error message
4. The data persists in Postgres for later analysis

## Design System

The form follows the existing Ekumen design system:

- **Colors**: Uses the cyberpunk color scheme (primary: `#216870`, accent: `#49A078`, background: `#1F2421`)
- **Typography**: `cyber-heading` class for headings, `cyber-text` for body text
- **Components**: `cyber-glass` effect for cards, `cyber-border` for borders
- **Styling**: Matches the `/about` route aesthetic

## Customization

### Adding New Questions

1. Add new state fields in `SegmentFeedbackForm.tsx`
2. Add form fields in the appropriate view
3. Update the database schema in `src/lib/db.ts`
4. Update the API route in `src/app/api/feedback/route.ts`
5. Run `npm run db:init` to update the database

### Styling Changes

All styling uses Tailwind CSS classes and the existing design system utilities defined in `globals.css`. The form automatically inherits the cyberpunk aesthetic.

## Notes

- The form is client-side (`"use client"`) to handle state and navigation
- All shadcn components are already installed
- The database connection uses Neon's serverless driver for optimal performance
- Form validation can be added as needed using libraries like Zod or React Hook Form
