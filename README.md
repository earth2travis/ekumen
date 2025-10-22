# Ekumen 🌍

**An AI-powered customer development interface inspired by Ursula K. Le Guin's vision of deep cultural understanding.**

Ekumen is a sophisticated Next.js web application that combines cutting-edge AI technology with the philosophy of patient, respectful inquiry. Experience conversations about customer discovery, insight extraction, and anthropological understanding through an interface guided by Genly, your AI envoy to the world of your customers.

## Features

- **🧠 AI-Powered Conversations**: Real-time chat with ChatGPT integration featuring Genly, your guide for customer understanding
- **🎨 Thoughtful Design**: Clean, focused aesthetic that keeps customer insights at the center
- **💬 Persistent Chat History**: Conversations automatically save and restore across browser sessions
- **📱 Responsive Design**: Seamless experience across desktop and mobile devices with adaptive input controls
- **🔍 Customer Discovery Focus**: Specialized guidance for interviews, insight extraction, and pattern recognition
- **📋 Segment Feedback Form**: Multi-step form for gathering team input on customer segment refinement with database persistence

## Quick Start

1. **Clone and install**

   ```bash
   npm install
   ```

2. **Set up OpenAI API**
   - Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create `.env.local` file:

     ```bash
     OPENAI_API_KEY=your_actual_api_key_here
     ```

3. **Set up Database (Optional - only needed for feedback form)**

   If you want to use the segment feedback form at `/refine`:

   - Create a free database at [Neon Console](https://console.neon.tech)
   - Add your database URL to `.env.local`:

     ```bash
     DATABASE_URL=postgresql://user:password@endpoint.neon.tech:5432/dbname?sslmode=require
     ```

   - Initialize the database:

     ```bash
     npm run db:init
     ```

4. **Launch the application**

   ```bash
   npm run dev
   ```

5. **Start discovering**
   - Open [http://localhost:3000](http://localhost:3000)
   - Ask Genly about interview strategies, insight patterns, or customer understanding
   - Your conversation history will automatically persist
   - Access the segment feedback form at [http://localhost:3000/refine](http://localhost:3000/refine) (requires database setup)

## Built With

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://typescriptlang.org)** - Type-safe development
- **[Tailwind CSS 4.0](https://tailwindcss.com)** - Modern styling framework
- **[shadcn/ui](https://ui.shadcn.com)** - Beautiful, accessible components
- **[Radix UI](https://radix-ui.com)** - Unstyled, accessible component primitives
- **[OpenAI API](https://openai.com)** - ChatGPT integration for AI conversations
- **[Neon](https://neon.com)** - Serverless Postgres for data persistence

## What Makes It Special

**Genly Character**: More than just a chatbot - Genly is your Mobile envoy to customer understanding, with deep knowledge of:

- Customer interview methodologies and questioning techniques
- Pattern recognition across customer conversations
- Translating between customer language and product implications
- Identifying assumptions and testing hypotheses
- Balancing empathy with analytical rigor

**Philosophy of Understanding**: A unique approach inspired by Le Guin's Ekumen:

- Patient, non-judgmental inquiry
- Cultural humility in approaching customer worldviews
- Deep listening before drawing conclusions
- Respect for customers as complex, whole people
- Building understanding through systematic observation

**Smart Architecture**: Clean, maintainable codebase with:

- Markdown-based system prompts for easy AI character updates
- Conversation history with cost optimization (20 message limit)
- Comprehensive error handling and fallbacks
- TypeScript throughout for reliability
- Database-backed forms for structured data collection

## Additional Features

### Segment Feedback Form

The application includes a comprehensive feedback form at `/refine` for gathering team input on customer segment refinement:

- **Multi-step Interface**: 9 views covering discovery questions, segment evaluations, and next steps
- **Structured Data Collection**: Radio buttons, text areas, and number inputs for various question types
- **Progress Tracking**: Visual progress indicator showing current step and completion percentage
- **Database Persistence**: All responses stored in Neon Postgres for later analysis
- **Design Consistency**: Follows the same cyberpunk aesthetic as the main application

To use the feedback form:
1. Set up the database (see step 3 in Quick Start)
2. Navigate to `/refine` in your browser
3. Complete the multi-step form
4. Submit to save responses to the database

For detailed documentation, see [FEEDBACK_FORM_SETUP.md](FEEDBACK_FORM_SETUP.md)

## About Genly

Genly embodies the patient, respectful inquiry of Le Guin's Ekumen envoys. The AI guide provides:

- Structured approaches to customer discovery
- Help identifying patterns and extracting insights
- Balance between empathy and analytical thinking
- Guidance on avoiding common interview pitfalls
- Connection between individual conversations and broader understanding

Named after Genly Ai, the protagonist of *The Left Hand of Darkness*, who spent years learning to truly understand an alien culture through patient observation and humble inquiry.

## Project Structure

```
ekumen/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts          # ChatGPT API endpoint
│   │   │   └── feedback/route.ts      # Feedback form submission
│   │   ├── about/page.tsx              # About page
│   │   ├── refine/page.tsx             # Feedback form page
│   │   └── page.tsx                    # Main chat interface
│   ├── components/
│   │   ├── ui/                         # shadcn/ui components
│   │   ├── Header.tsx                  # Navigation header
│   │   └── SegmentFeedbackForm.tsx     # Multi-step feedback form
│   └── lib/
│       ├── db.ts                       # Database connection & schema
│       └── prompts/
│           └── system.md               # Genly AI character definition
├── scripts/
│   └── init-db.ts                      # Database initialization script
└── public/
    └── images/                         # Logo and assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:init` - Initialize database schema

## Environment Variables

Create a `.env.local` file with:

```bash
# Required for chat functionality
OPENAI_API_KEY=your_openai_api_key_here

# Optional - only needed for feedback form
DATABASE_URL=postgresql://user:password@endpoint.neon.tech:5432/dbname?sslmode=require
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Understanding customers as they truly are, not as we assume them to be.*
