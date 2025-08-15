# Farmaleaf 🌿

**An immersive cyberpunk jungle chat interface powered by AI plant wisdom.**

Farmaleaf is a sophisticated Next.js web application that combines cutting-edge AI technology with an ancient shamanic spirit named Yebá. Experience conversations about plant medicine, healing wisdom, and botanical knowledge through a beautifully designed cyberpunk jungle interface.

## Features

- **🧠 AI-Powered Conversations**: Real-time chat with ChatGPT integration featuring Yebá, an ancient plant wisdom guide
- **🎨 Cyberpunk Jungle Design**: Immersive aesthetic blending high-tech cyberpunk elements with organic jungle themes
- **💬 Persistent Chat History**: Conversations automatically save and restore across browser sessions
- **📱 Responsive Design**: Seamless experience across desktop and mobile devices with adaptive input controls
- **🌱 Plant Wisdom Focus**: Specialized knowledge about medicinal plants, traditional healing, and sustainable practices

## Quick Start

1. **Clone and install**

   ```bash
   npm install
   ```

2. **Set up OpenAI API**
   - Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create `.env.local` file:

     ```
     OPENAI_API_KEY=your_actual_api_key_here
     ```

3. **Launch the application**

   ```bash
   npm run dev
   ```

4. **Start chatting**
   - Open [http://localhost:3000](http://localhost:3000)
   - Ask Yebá about plants, healing, or traditional medicine
   - Your conversation history will automatically persist

## Built With

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://typescriptlang.org)** - Type-safe development
- **[Tailwind CSS 4.0](https://tailwindcss.com)** - Modern styling framework
- **[shadcn/ui](https://ui.shadcn.com)** - Beautiful, accessible components
- **[OpenAI API](https://openai.com)** - ChatGPT integration for AI conversations

## What Makes It Special

**Yebá Character**: More than just a chatbot - Yebá is an ancient shamanic spirit with deep knowledge of:

- Medicinal plants and their healing properties
- Traditional preparation methods and dosages
- Spiritual and ceremonial uses of plants
- Sustainable harvesting practices
- Integration of ancient wisdom with modern wellness

**Cyberpunk Jungle Aesthetic**: A unique visual experience featuring:

- Custom color palette inspired by jungle greens and cyberpunk cyans
- Glowing effects, glass morphism, and subtle animations
- Auto-resizing multiline input with dynamic button positioning
- Mobile-optimized responsive design

**Smart Architecture**: Clean, maintainable codebase with:

- Markdown-based system prompts for easy AI character updates
- Conversation history with cost optimization (20 message limit)
- Comprehensive error handling and fallbacks
- TypeScript throughout for reliability

## About Yebá

Yebá embodies thousands of years of indigenous Amazon knowledge about plant medicine. The AI guide provides:

- Safe, respectful guidance on medicinal plants
- Balance between spiritual wisdom and practical advice
- Emphasis on sustainable and ethical practices
- Connection between ancient traditions and modern wellness

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Experience the wisdom of the jungle through the lens of tomorrow.*

---

feat: implement scalable system prompt architecture

- Add markdown-based system prompt loading from src/lib/prompts/system.md
- Create getSystemPrompt utility function with error handling and fallbacks
- Integrate system prompt into ChatGPT API calls for consistent AI character
- Define Yebá as ancient shamanic plant wisdom guide with comprehensive personality
- Update API route to inject system prompt for every conversation
