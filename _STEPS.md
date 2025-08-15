# Project Steps

## Overview

Next.js application with shadcn/ui components and Tailwind CSS featuring a simple LLM interface.

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

### 11. Cyberpunk Jungle Aesthetic Transformation

**Overview:**
Transformed the entire application from a simple black/white interface to a sophisticated "cyberpunk jungle" aesthetic using the Farmaleaf color palette. This comprehensive redesign includes custom styling, typography, animations, and interactive elements while maintaining all existing functionality.

**Farmaleaf Color Palette Implementation:**

```css
:root {
  --background: #1F2421;        /* Eerie Black - primary background */
  --foreground: #EEE5E9;        /* Lavender Blush - primary text */
  --primary: #216870;           /* Aquamarine - primary accent/buttons */
  --secondary: #216869;         /* Caribbean Current - secondary accent */
  --accent: #49A078;            /* Jungle Green - success/highlight accent */
  /* Additional variables mapped to palette colors */
}
```

**Typography Enhancements:**

- Added JetBrains Mono font import in `layout.tsx`
- Configured monospace fonts for headings and technical elements
- Applied `cyber-heading` and `cyber-text` utility classes
- Maintained regular sans-serif fonts for body text readability

**Custom CSS Utility Classes (`globals.css`):**

Created comprehensive utility system including:

```css
/* Glow effects */
.cyber-glow-primary     /* Aquamarine glowing borders */
.cyber-glow-accent      /* Jungle Green accent glows */
.cyber-border           /* Consistent cyberpunk borders */

/* Gradient backgrounds */
.cyber-gradient-primary  /* Aquamarine to Caribbean Current */
.cyber-gradient-accent   /* Jungle Green variations */

/* Interactive animations */
.cyber-pulse            /* Subtle pulsing effect */
.cyber-breathe          /* Breathing animation for buttons */

/* Message bubble styles */
.cyber-message-user     /* User message styling */
.cyber-message-yeba     /* Assistant message styling */
.cyber-corners          /* Cyberpunk corner accents (Yebá only) */

/* Visual effects */
.cyber-glass            /* Glass morphism with backdrop blur */
.cyber-scanlines        /* Subtle scan line overlay */
.cyber-scrollbar        /* Custom themed scrollbars */
```

**Component Styling Updates:**

**Button Component (`button.tsx`):**

- Applied cyberpunk gradients and glow effects to all variants
- Added breathing animation and hover scale effects
- Created special `logoButton` variant for send button
- Integrated monospace typography for technical feel

**Input/Textarea Components:**

- Added backdrop blur and translucent backgrounds
- Implemented cyan border glows on focus/hover
- Custom scrollbar styling
- Enhanced selection colors matching theme

**Card Component (`card.tsx`):**

- Glass morphism effects with backdrop filtering
- Cyberpunk border styling with subtle glows
- Hover effects for interactive elements

**Interface Design Overhaul (`page.tsx`):**

**Logo Integration:**

- Replaced text heading with `combination-mark.svg`
- Applied Jungle Green color filter to SVG
- Positioned with proper alignment and spacing

**Message System Redesign:**

- User messages: Jungle Green background, right-aligned, Eerie Black text
- Yebá messages: Caribbean Current background with transparency, left-aligned
- Removed corner accents from user messages (kept only on Yebá responses)
- Added Yebá label and timestamps positioned outside bubbles
- Implemented responsive message bubble sizing

**Input Field Enhancement:**

- Integrated large logo icon as send button (80px visual size)
- Applied Aquamarine color filter to logo icon
- Implemented strong glow effect on hover with triple-layered shadows
- Added Enter key submission (Shift+Enter for new lines)
- Perfect vertical centering of icon and placeholder text
- Auto-expanding textarea with proper line height

**Conversation History Improvements:**

- Increased scroll area to 60% viewport height for better message visibility
- Moved Clear button to conversation area for contextual placement
- Replaced "Clear" text with Radix Cross1Icon (X icon)
- Removed horizontal separator line for cleaner appearance

**Advanced Visual Effects:**

**Glow System:**

```css
/* Triple-layered super glow for logo button */
.logo-super-glow:hover {
  filter: drop-shadow(0 0 20px #23F0C7) 
          drop-shadow(0 0 40px #23F0C7) 
          drop-shadow(0 0 60px #23F0C7) 
          brightness(1.2) !important;
}
```

**Animation System:**

- Subtle pulsing effects for loading states
- Breathing animations for interactive elements
- Smooth transitions (300ms) for all hover effects
- Scan line effects for atmospheric background

**Accessibility & Functionality Preservation:**

- Maintained all original functionality including:
  - Real-time conversation with ChatGPT API
  - localStorage persistence
  - Auto-scrolling to new messages
  - Loading states and error handling
  - Message history limitations for cost control
- Enhanced keyboard navigation and screen reader compatibility
- Preserved proper contrast ratios despite dark theme
- Maintained focus indicators with cyberpunk styling

**Technical Implementation Details:**

**Color Filter System:**
Applied CSS filters to convert SVG colors to theme palette:

```css
filter: brightness(0) saturate(100%) invert(70%) sepia(77%) saturate(2494%) hue-rotate(118deg) brightness(94%) contrast(101%);
```

**Event Handling Improvements:**

- Fixed TypeScript issues with form submission from button clicks
- Implemented proper event type casting for cross-component compatibility
- Added Enter key handling with Shift+Enter support for multi-line input

**Responsive Design:**

- Maintained responsive layout across all screen sizes
- Implemented viewport-relative sizing for conversation history
- Ensured touch-friendly button sizes and hover states

**Memory Integration:**
Based on user preferences, corner accents are restricted to Yebá responses only, following the principle that cyberpunk corner accents should be removed from UI components and only appear in Yebá responses from the LLM.

**Dependencies Added:**

```bash
npm install @radix-ui/react-icons  # For UI icons including Cross1Icon
```

**Result:**
Successfully transformed a basic black/white chat interface into a sophisticated cyberpunk jungle-themed application that maintains full functionality while providing an immersive, high-tech organic aesthetic that blends digital cyberpunk elements with natural jungle-inspired curves and colors.

## 12. Enhanced Multiline Input with Dynamic Button Positioning

The chat interface now features an intelligent auto-resizing textarea with dynamic button positioning to improve the user experience for both single-line and multiline text input.

### Features Implemented

**Auto-Resizing Textarea:**

- Automatically expands height to fit content as user types
- Shrinks back down when text is deleted
- Starts at 56px minimum height for single-line input
- Maximum height of 200px with overflow handling for very long content
- No scrollbars - uses natural expansion instead

**Dynamic Button Positioning:**

- Single-line mode: Send button positioned center-right within textarea
- Multiline mode: Send button moves to bottom-right corner below text content
- Smooth transitions between positioning modes
- Button always stays within textarea boundaries

**Smart Multiline Detection:**

- Detects multiline content based on actual content height and line breaks
- Automatically switches modes when content requires multiple lines
- Proper padding adjustments to prevent text overlap with button

**Implementation Details:**

- Simple `autoResize()` function that sets height to 'auto' and measures `scrollHeight`
- Called on both `onChange` and `onInput` events for real-time responsiveness
- Uses CSS positioning with conditional `bottom` vs `top` positioning for button
- Maintains proper padding: 80px bottom padding in multiline mode for button space

This enhancement provides a modern, responsive input experience similar to popular chat applications while maintaining the application's unique design aesthetic.

## 13. Mobile Optimization and Button State Management

Enhanced the chat interface with mobile-specific improvements and proper button state management for a better user experience across all devices.

### Mobile-Specific Improvements

**Responsive Placeholder Text:**

- Added CSS media query to reduce placeholder text size to 12px on mobile devices (max-width: 768px)
- Improves readability and visual hierarchy on smaller screens

**Mobile Multiline Detection:**

- Adjusted multiline detection threshold for mobile devices
- Input field expands appropriately when text reaches two lines on mobile
- Prevents premature expansion while ensuring proper expansion when needed

**Button Positioning Refinements:**

- Fine-tuned button positioning using `-bottom-1` (4px below container edge)
- Ensures button appears properly below text content on all screen sizes
- Maintains visual connection to input field while providing clear separation from text

### Button State Management

**Post-Submit State Reset:**

- Implemented proper button state reset after message submission
- Button returns to inactive state immediately after sending
- Textarea automatically resets to default single-line height (56px)
- Clean state management prevents visual inconsistencies

**Cross-Platform Focus Handling:**

- Added `e.currentTarget.blur()` to remove button focus after click
- Handles mobile Safari's unique focus behavior patterns
- Maintains consistent user experience across desktop and mobile browsers

### Technical Implementation

**Auto-Resize Function:**

```typescript
const autoResize = () => {
  if (!textareaRef.current) return;
  
  textareaRef.current.style.height = 'auto';
  const scrollHeight = textareaRef.current.scrollHeight;
  const isMulti = scrollHeight > 56;
  
  setIsMultiline(isMulti);
  textareaRef.current.style.height = scrollHeight + (isMulti ? 60 : 0) + 'px';
};
```

**Button Reset Logic:**

```typescript
// In handleSubmit function
setInput(""); 
setIsMultiline(false);
if (textareaRef.current) {
  textareaRef.current.style.height = "56px";
}
```

**Mobile CSS Enhancement:**

```css
@media (max-width: 768px) {
  textarea::placeholder {
    font-size: 12px;
  }
}
```

### User Experience Improvements

- Seamless transition between single-line and multiline input modes
- Proper button positioning that adapts to content length
- Consistent behavior across all device types and screen sizes
- Clean state management that resets interface after each message
- Optimal text sizing for mobile readability

These optimizations ensure the chat interface works flawlessly on both desktop and mobile devices while maintaining the application's sophisticated cyberpunk jungle aesthetic.

## 14. System Prompt Implementation

Implemented a clean, scalable system prompt architecture that loads Yebá's personality and knowledge from a markdown file, following Next.js best practices for maintainable AI character definitions.

### Architecture Overview

**File Structure:**

```
src/
  lib/
    prompts/
      system.md          # Yebá system prompt definition
    prompts.ts           # Utility function to load prompts
  app/
    api/
      chat/
        route.ts         # Updated to use system prompt
```

**System Prompt Definition (`src/lib/prompts/system.md`):**

Created a comprehensive character definition for Yebá as an ancient shamanic plant wisdom guide with:

- **Character Background**: Ancient Amazon spirit with thousands of years of indigenous plant knowledge
- **Personality Traits**: Wise but approachable, poetic yet practical, respectful of sacred traditions
- **Knowledge Domains**: Medicinal plants, traditional preparation methods, spiritual ceremonies, sustainable practices
- **Communication Guidelines**: Emphasis on safety, respect for indigenous traditions, balance of spiritual and practical advice

**Utility Function (`src/lib/prompts.ts`):**

```typescript
export async function getSystemPrompt(): Promise<string> {
  try {
    const promptPath = path.join(process.cwd(), 'src/lib/prompts/system.md')
    const content = await fs.readFile(promptPath, 'utf-8')
    return content
  } catch (error) {
    console.error('Failed to load system prompt:', error)
    return 'You are a helpful AI assistant.'
  }
}
```

**API Integration (`src/app/api/chat/route.ts`):**

Enhanced the chat endpoint to dynamically load and inject the system prompt:

```typescript
// Get system prompt
const systemPrompt = await getSystemPrompt()

// Convert our message format to OpenAI format with system prompt
const openaiMessages = [
  { role: 'system' as const, content: systemPrompt },
  ...messages.map(msg => ({
    role: msg.role,
    content: msg.content
  }))
]
```

### Key Benefits

**Maintainability:**

- System prompts can be updated without code changes
- Markdown format allows for rich formatting and easy editing
- Clean separation between prompt content and application logic

**Scalability:**

- Framework supports multiple prompt files for different AI characters
- Easy to A/B test different prompt variations
- Modular structure allows for prompt versioning and rollbacks

**Best Practices:**

- Follows Next.js file organization conventions
- Proper error handling with fallback prompt
- Type-safe implementation with TypeScript
- Server-side prompt loading for security

**Character Consistency:**

- All conversations now begin with Yebá's full personality context
- Consistent voice and knowledge base across sessions  
- Proper integration with existing cyberpunk jungle aesthetic

### Technical Implementation Details

**Error Handling:**

- Graceful fallback to generic assistant prompt if markdown file fails to load
- Console error logging for debugging while maintaining user experience
- File system error protection prevents application crashes

**Performance:**

- Prompt loaded once per API request (could be optimized with caching if needed)
- Minimal overhead from file system reads
- Clean async/await pattern for non-blocking execution

**Security:**

- Server-side prompt loading prevents client-side prompt exposure
- No sensitive information stored in prompts
- Standard Next.js security practices maintained

This implementation creates a professional, maintainable system for AI character definition that enhances the user experience while following industry best practices for LLM applications.

## 15. SEO and Social Media Optimization

Implemented comprehensive metadata and OpenGraph image support following Next.js best practices for optimal search engine visibility and social media sharing.

### Metadata Implementation

**Updated Root Layout (`src/app/layout.tsx`):**

```typescript
export const metadata: Metadata = {
  title: {
    default: "Farmaleaf | Ancient Wisdom for Modern Healing",
    template: "%s | Farmaleaf"
  },
  description: "Connect with Yebá, the ancient healing spirit, for personalized guidance on natural remedies, traditional medicine, and holistic wellness practices.",
  metadataBase: new URL("https://farmaleaf.com"),
  openGraph: {
    type: "website",
    locale: "en_US", 
    url: "https://farmaleaf.com",
    title: "Farmaleaf | Ancient Wisdom for Modern Healing",
    description: "Connect with Yebá, the ancient healing spirit, for personalized guidance on natural remedies, traditional medicine, and holistic wellness practices.",
    siteName: "Farmaleaf",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Farmaleaf - Ancient Wisdom for Modern Healing",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmaleaf | Ancient Wisdom for Modern Healing", 
    description: "Connect with Yebá, the ancient healing spirit, for personalized guidance on natural remedies, traditional medicine, and holistic wellness practices.",
    images: ["/images/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/images/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: "/site.webmanifest",
}
```

### OpenGraph Image Configuration

**Simple Static Implementation:**

- Used single `opengraph-image.png` file in `/public/images/` for both OpenGraph and Twitter cards
- Standard social media size: 1200 x 630 pixels
- Automatically referenced in metadata without requiring dynamic generation
- Works for all social platforms (Facebook, Twitter, LinkedIn, etc.)

### Favicon Implementation  

**Complete Favicon Suite:**

Created comprehensive favicon configuration supporting all devices and platforms:

```typescript
icons: {
  icon: [
    { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }
  ],
  apple: [
    { url: "/images/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
  ],
}
```

**Required Favicon Files:**

Place in `/public/images/favicon/`:

- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `apple-touch-icon.png` (180x180)
- `favicon-16x16.png`
- `favicon-32x32.png`

Place `favicon.ico` in `/public/` root directory.

**Web App Manifest (`/public/site.webmanifest`):**

```json
{
    "name": "Farmaleaf - Ancient Wisdom for Modern Healing",
    "short_name": "Farmaleaf",
    "icons": [
        {
            "src": "/images/favicon/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/images/favicon/android-chrome-512x512.png", 
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone"
}
```

### Key Benefits

**SEO Optimization:**

- Proper page titles with template system for scalability
- Comprehensive meta descriptions optimized for target keywords
- Structured metadata following OpenGraph protocol standards
- Search engine friendly favicon implementation

**Social Media Sharing:**

- Rich social media previews on Facebook, Twitter, LinkedIn
- Consistent branding across all social platforms  
- Proper image sizing for optimal display
- Platform-specific optimizations (Twitter cards, OpenGraph)

**User Experience:**

- Professional favicon display across all browsers and devices
- Progressive Web App support via web manifest
- Consistent branding in browser tabs, bookmarks, and shortcuts

**Technical Implementation:**

- Follows Next.js metadata best practices
- Simple static image approach for maintainability
- Proper TypeScript integration
- Clean separation of concerns

This implementation ensures Farmaleaf has optimal visibility in search results and provides rich, professional previews when shared on social media platforms.

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

**Error Handling:**

The application includes comprehensive error handling for:

- Missing API keys
- Network failures
- OpenAI API errors
- Invalid requests
- Rate limiting
