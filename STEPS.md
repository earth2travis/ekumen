# Project Setup Steps

## Overview

Next.js application with Tailwind CSS and shadcn/ui components featuring a simple black and white LLM interface.

## Technologies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and development experience
- **Tailwind CSS 4.0**: Utility-first styling framework
- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Underlying component primitives
- **ESLint**: Code quality and consistency

## Structure

```
farmaleaf/
 src/
    app/
       globals.css           # Tailwind + shadcn styles
       layout.tsx            # Root layout
       page.tsx              # LLM interface component
    components/ui/           # shadcn components
       button.tsx
       input.tsx
       textarea.tsx
    lib/
        utils.ts             # shadcn utilities
 components.json             # shadcn configuration
 package.json                # Dependencies
 tailwind.config.ts          # Tailwind configuration
 tsconfig.json               # TypeScript configuration
```

## Step-by-Step Implementation

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

- Created Next.js 15 project with TypeScript
- Enabled Tailwind CSS integration
- Configured ESLint for code quality
- Used App Router architecture
- Set up src directory structure

### 2. Configure Tailwind CSS

- Tailwind CSS 4.0 was automatically configured during project initialization
- Verified configuration in `postcss.config.mjs`
- Confirmed Tailwind import in `src/app/globals.css`

### 3. Setup shadcn/ui

```bash
npx shadcn@latest init
```

- Initialized shadcn/ui with default neutral color scheme
- Created `components.json` configuration file
- Updated global CSS with shadcn variables
- Generated utility functions in `src/lib/utils.ts`

### 4. Install Required Components

```bash
npx shadcn@latest add input button textarea
```

- Added shadcn Button component (`src/components/ui/button.tsx`)
- Added shadcn Textarea component (`src/components/ui/textarea.tsx`)
- Added shadcn Input component (`src/components/ui/input.tsx`)
- Installed necessary dependencies (@radix-ui/react-slot, class-variance-authority, etc.)

### 5. Create LLM Interface

**File: `src/app/page.tsx`**

- Implemented React component with useState hooks
- Created form with textarea input for user messages
- Added Send button with loading state management
- Added Clear button to reset form and response
- Implemented mock LLM response with 1-second delay
- Added proper TypeScript types for form handling

**Key Features:**

- Input validation (prevents empty submissions)
- Loading states during API calls
- Response display with proper formatting
- Form reset functionality

### 6. Apply Black and White Styling

**Updated `src/app/globals.css`:**

**Light Mode Variables:**

- Background: #ffffff (white)
- Foreground: #000000 (black)
- Primary: #000000 (black buttons)
- Border: #000000 (black borders)
- Secondary: #f5f5f5 (light gray accents)

**Dark Mode Variables:**

- Background: #000000 (black)
- Foreground: #ffffff (white)
- Primary: #ffffff (white buttons)
- Border: #ffffff (white borders)
- Secondary: #333333 (dark gray accents)

**Component Styling:**

- Forced white background with `bg-white`
- Black text with `text-black`
- Black borders with `border-black`
- Custom hover states maintaining black/white theme

### 7. Testing and Verification

```bash
npm run dev    # Development server
npm run build  # Production build
npm run lint   # Code quality check
```

### 8. UI Layout Improvements

**Moved Response Above Input:**

- Repositioned response display area above the input form
- Changed margin from `mt-8` to `mb-8` for proper spacing
- Creates more natural chat-like flow where responses appear before next input
- Users can see previous responses while composing new messages

### 9. ChatGPT API Integration

**Installed OpenAI SDK:**

```bash
npm install openai
```

- Added official OpenAI package for ChatGPT integration
- Enables direct API calls to OpenAI's language models

**Created API Route (`/src/app/api/chat/route.ts`):**

- Implemented POST endpoint for handling chat requests
- Uses ChatGPT-3.5-turbo model for responses
- Includes proper error handling and validation
- Checks for API key configuration
- Returns JSON responses with proper HTTP status codes

**Environment Variable Setup:**

- Created `.env.local` for local API key storage
- Created `.env.example` as template for other developers
- API key properly secured and not committed to version control
- Environment variables automatically loaded by Next.js

**Updated Frontend Integration:**

- Replaced mock `setTimeout` with real API call to `/api/chat`
- Added proper error handling with try/catch blocks
- Implemented HTTP status code checking
- Added user-friendly error messages for API failures
- Maintained loading states during API requests

**Key Security Features:**

- API key stored in environment variables only
- `.env.local` ignored by git (already in `.gitignore`)
- Server-side API calls prevent client-side key exposure
- Proper error handling without exposing sensitive information

### 10. Conversational Interface Implementation

**Updated State Management:**

- Changed from single `response` string to `messages` array
- Added TypeScript interface for Message structure: `{role: 'user' | 'assistant', content: string, timestamp: Date}`
- Added `useEffect` and `useRef` imports for conversation management

**localStorage Integration:**

- Automatic conversation persistence across browser sessions
- Load conversation history on component mount with proper error handling
- Save conversation after each message exchange
- Clear localStorage when conversation is reset
- Handles timestamp conversion between string and Date objects

**API Route Updates:**

- Modified `/api/chat/route.ts` to accept `messages` array instead of single `message`
- Converts message format to OpenAI API format (removes timestamps)
- Maintains full conversation context for ChatGPT responses
- Enhanced error handling for malformed requests

**Enhanced UI Design:**

```typescript
// User messages: Black background, right-aligned
message.role === 'user' ? 'bg-black text-white ml-8' : 'bg-gray-100 text-black mr-8'
```

- Conversation history display with scrollable area (max-height: 24rem)
- Differentiated styling for user vs assistant messages
- Timestamp display for each message
- Auto-scroll to latest message using `useRef`
- "Thinking..." indicator during API calls
- Disabled Clear button when no messages exist

**Message Flow Implementation:**

1. User submits message → immediately added to conversation state
2. Input field cleared instantly for better UX
3. Full conversation history sent to ChatGPT API
4. Assistant response added to conversation state
5. Updated conversation automatically saved to localStorage
6. UI auto-scrolls to show latest message

**Cost Optimization Features:**

- Conversation length limited to 20 messages (10 exchanges)
- `limitMessages` function prevents unlimited API cost growth
- Sliding window approach removes oldest messages when limit exceeded

**Error Handling Improvements:**

- Graceful localStorage error handling
- API errors converted to assistant messages
- Network failures handled with user-friendly error messages
- TypeScript type safety for message parsing

## Usage Instructions

1. Install dependencies: `npm install`
2. Get OpenAI API key from <https://platform.openai.com/api-keys>
3. Add API key to `.env.local`: `OPENAI_API_KEY=your_actual_api_key_here`
4. Start development server: `npm run dev`
5. Open browser to <http://localhost:3001> (or assigned port)
6. Start a conversation by entering a message and clicking "Send"
7. View full conversation history with context-aware ChatGPT responses
8. Conversation automatically saves and persists across browser sessions
9. Use "Clear" to reset the entire conversation history
10. Ask follow-up questions - ChatGPT remembers the full conversation context

## Customization Options

**Change AI Model:**
To use a different OpenAI model, update the API route:

```typescript
// In src/app/api/chat/route.ts, change the model:
const completion = await openai.chat.completions.create({
  messages: [{ role: 'user', content: message }],
  model: 'gpt-4', // or 'gpt-4-turbo', etc.
})
```

**Add System Prompts:**
To customize the AI's behavior, add a system message:

```typescript
const completion = await openai.chat.completions.create({
  messages: [
    { role: 'system', content: 'You are a helpful assistant specialized in agriculture.' },
    { role: 'user', content: message }
  ],
  model: 'gpt-3.5-turbo',
})
```

**Error Handling:**

The application includes comprehensive error handling for:

- Missing API keys
- Network failures
- OpenAI API errors
- Invalid requests
- Rate limiting
