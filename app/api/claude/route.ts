import { NextRequest, NextResponse } from 'next/server'
import { query } from '@anthropic-ai/claude-code'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, code, language, prompt } = body

    // APIキーの確認
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'ANTHROPIC_API_KEY が設定されていません' },
        { status: 500 }
      )
    }

    let result = ''
    let messages = []

    switch (action) {
      case 'analyze':
        // コード分析
        for await (const message of query({
          prompt: `以下の${language}コードを分析して、品質、パフォーマンス、潜在的な問題、改善点を日本語で詳しく説明してください:\n\n${code}`,
          options: { maxTurns: 1 }
        })) {
          messages.push(message)
        }
        result = messages.map(m => m.content || '').join('\n')
        return NextResponse.json({ result })

      case 'generate':
        // コード生成
        for await (const message of query({
          prompt: `${prompt}を実装する${language}コードを生成してください。コメントは日本語で書いてください。`,
          options: { maxTurns: 1 }
        })) {
          messages.push(message)
        }
        
        const generatedContent = messages.map(m => m.content || '').join('\n')
        // コードブロックを抽出
        const codeMatch = generatedContent.match(/```[\w]*\n([\s\S]*?)```/)
        const generatedCode = codeMatch ? codeMatch[1] : generatedContent
        
        return NextResponse.json({ 
          code: generatedCode,
          explanation: `生成されたコード:\n${prompt}\n\nClaude Code SDKを使用して、要求に基づいたコードを生成しました。`
        })

      case 'improve':
        // コード改善
        for await (const message of query({
          prompt: `以下の${language}コードを改善してください。パフォーマンス、可読性、ベストプラクティスの観点から最適化し、改善点を日本語で説明してください:\n\n${code}`,
          options: { maxTurns: 1 }
        })) {
          messages.push(message)
        }
        
        const improvedContent = messages.map(m => m.content || '').join('\n')
        const improvedCodeMatch = improvedContent.match(/```[\w]*\n([\s\S]*?)```/)
        const improvedCode = improvedCodeMatch ? improvedCodeMatch[1] : code
        
        // 改善点の説明を抽出
        const suggestions = improvedContent.replace(/```[\w]*\n[\s\S]*?```/g, '').trim()
        
        return NextResponse.json({ 
          improvedCode,
          suggestions: suggestions || '改善されたコードを生成しました。'
        })

      default:
        return NextResponse.json(
          { error: '無効なアクションです' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Claude Code SDK エラー:', error)
    return NextResponse.json(
      { error: 'エラーが発生しました: ' + (error as Error).message },
      { status: 500 }
    )
  }
}