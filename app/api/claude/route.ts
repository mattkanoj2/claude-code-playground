import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(request: NextRequest) {
  console.log('API route called')
  
  try {
    const body = await request.json()
    const { action, code, language, prompt } = body
    console.log('Request body:', { action, language, promptLength: prompt?.length })

    // APIキーの確認
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY is not set')
      return NextResponse.json(
        { error: 'ANTHROPIC_API_KEY が設定されていません' },
        { status: 500 }
      )
    }

    console.log('API Key exists:', apiKey.substring(0, 10) + '...')

    // Anthropic クライアントの初期化
    const anthropic = new Anthropic({
      apiKey: apiKey,
    })

    let result = ''

    switch (action) {
      case 'analyze':
        console.log('Analyzing code...')
        // コード分析
        const analyzeResponse = await anthropic.messages.create({
          model: 'claude-3-opus-20240229',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `以下の${language}コードを分析して、品質、パフォーマンス、潜在的な問題、改善点を日本語で詳しく説明してください:\n\n${code}`
          }]
        })
        result = analyzeResponse.content[0].type === 'text' ? analyzeResponse.content[0].text : ''
        console.log('Analysis complete')
        return NextResponse.json({ result })

      case 'generate':
        console.log('Generating code...')
        // コード生成
        const generateResponse = await anthropic.messages.create({
          model: 'claude-3-opus-20240229',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `${prompt}を実装する${language}コードを生成してください。コメントは日本語で書いてください。`
          }]
        })
        
        const generatedContent = generateResponse.content[0].type === 'text' ? generateResponse.content[0].text : ''
        // コードブロックを抽出
        const codeMatch = generatedContent.match(/```[\w]*\n([\s\S]*?)```/)
        const generatedCode = codeMatch ? codeMatch[1] : generatedContent
        
        console.log('Code generated')
        return NextResponse.json({ 
          code: generatedCode,
          explanation: `生成されたコード:\n${prompt}\n\nClaude APIを使用して、要求に基づいたコードを生成しました。`
        })

      case 'improve':
        console.log('Improving code...')
        // コード改善
        const improveResponse = await anthropic.messages.create({
          model: 'claude-3-opus-20240229',
          max_tokens: 1500,
          messages: [{
            role: 'user',
            content: `以下の${language}コードを改善してください。パフォーマンス、可読性、ベストプラクティスの観点から最適化し、改善点を日本語で説明してください:\n\n${code}`
          }]
        })
        
        const improvedContent = improveResponse.content[0].type === 'text' ? improveResponse.content[0].text : ''
        const improvedCodeMatch = improvedContent.match(/```[\w]*\n([\s\S]*?)```/)
        const improvedCode = improvedCodeMatch ? improvedCodeMatch[1] : code
        
        // 改善点の説明を抽出
        const suggestions = improvedContent.replace(/```[\w]*\n[\s\S]*?```/g, '').trim()
        
        console.log('Code improved')
        return NextResponse.json({ 
          improvedCode,
          suggestions: suggestions || '改善されたコードを生成しました。'
        })

      default:
        console.error('Invalid action:', action)
        return NextResponse.json(
          { error: '無効なアクションです' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('API Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { 
        error: 'エラーが発生しました', 
        details: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined
      },
      { status: 500 }
    )
  }
}