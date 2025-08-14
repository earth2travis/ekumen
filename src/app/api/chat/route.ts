import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 })
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 })
    }

    // Convert our message format to OpenAI format (remove timestamp)
    const openaiMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    const completion = await openai.chat.completions.create({
      messages: openaiMessages,
      model: 'gpt-3.5-turbo',
    })

    const response = completion.choices[0]?.message?.content || 'No response generated'

    return NextResponse.json({ response })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 })
  }
}