'use client'

import { useState } from 'react'
import { Code, Sparkles, Zap } from 'lucide-react'

interface ControlPanelProps {
  onAnalyze: () => void
  onGenerate: (prompt: string) => void
  onImprove: () => void
  loading: boolean
}

export default function ControlPanel({ onAnalyze, onGenerate, onImprove, loading }: ControlPanelProps) {
  const [prompt, setPrompt] = useState('')
  const [showPromptInput, setShowPromptInput] = useState(false)

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt)
      setPrompt('')
      setShowPromptInput(false)
    }
  }

  const samplePrompts = [
    "Reactでカウンターコンポーネントを作成",
    "配列をソートする関数を実装",
    "非同期API呼び出しの例を作成",
    "フォームバリデーション関数を実装"
  ]

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Claude Code SDK 機能デモ</h3>
      
      <div className="space-y-3">
        <button
          onClick={onAnalyze}
          disabled={loading}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Code className="w-5 h-5" />
          コードを分析
        </button>

        <button
          onClick={onImprove}
          disabled={loading}
          className="w-full btn-secondary flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Sparkles className="w-5 h-5" />
          コードを改善
        </button>

        <button
          onClick={() => setShowPromptInput(!showPromptInput)}
          disabled={loading}
          className="w-full bg-accent hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Zap className="w-5 h-5" />
          AIでコード生成
        </button>

        {showPromptInput && (
          <div className="space-y-3 pt-3 border-t">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="生成したいコードを説明してください..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            
            <div className="flex gap-2">
              <button
                onClick={handleGenerate}
                disabled={loading || !prompt.trim()}
                className="flex-1 bg-accent hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                生成
              </button>
              <button
                onClick={() => {
                  setShowPromptInput(false)
                  setPrompt('')
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">サンプルプロンプト:</p>
              <div className="flex flex-wrap gap-2">
                {samplePrompts.map((sample, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(sample)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}