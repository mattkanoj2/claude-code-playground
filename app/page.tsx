'use client'

import { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import OutputPanel from './components/OutputPanel'
import ControlPanel from './components/ControlPanel'
import FeatureShowcase from './components/FeatureShowcase'

export default function Home() {
  const [code, setCode] = useState('// コードを入力するか、下のボタンでAIに生成させてください\n\nfunction greet(name: string) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet("Claude");')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [language, setLanguage] = useState('typescript')

  const handleAnalyzeCode = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'analyze',
          code,
          language
        })
      })
      const data = await response.json()
      setOutput(data.result)
    } catch (error) {
      setOutput('エラーが発生しました: ' + error)
    }
    setLoading(false)
  }

  const handleGenerateCode = async (prompt: string) => {
    setLoading(true)
    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate',
          prompt,
          language
        })
      })
      const data = await response.json()
      setCode(data.code)
      setOutput(data.explanation)
    } catch (error) {
      setOutput('エラーが発生しました: ' + error)
    }
    setLoading(false)
  }

  const handleImproveCode = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'improve',
          code,
          language
        })
      })
      const data = await response.json()
      setCode(data.improvedCode)
      setOutput(data.suggestions)
    } catch (error) {
      setOutput('エラーが発生しました: ' + error)
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Claude Code Playground
          </h1>
          <p className="text-lg text-gray-600">
            Claude Code SDKの力を体験しよう！AIがあなたのコーディングをサポートします
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">コードエディタ</h2>
              <CodeEditor
                code={code}
                language={language}
                onChange={setCode}
                onLanguageChange={setLanguage}
              />
            </div>
            
            <ControlPanel
              onAnalyze={handleAnalyzeCode}
              onGenerate={handleGenerateCode}
              onImprove={handleImproveCode}
              loading={loading}
            />
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">AI アシスタントの応答</h2>
            <OutputPanel output={output} loading={loading} />
          </div>
        </div>

        <FeatureShowcase />
      </div>
    </main>
  )
}