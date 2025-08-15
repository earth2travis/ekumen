import { promises as fs } from 'fs'
import path from 'path'

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