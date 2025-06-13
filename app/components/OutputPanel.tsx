'use client'

import { Loader2 } from 'lucide-react'

interface OutputPanelProps {
  output: string
  loading: boolean
}

export default function OutputPanel({ output, loading }: OutputPanelProps) {
  return (
    <div className="h-[500px] overflow-y-auto">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <span className="ml-3 text-gray-600">Claude Code SDKで処理中...</span>
        </div>
      ) : output ? (
        <div className="prose prose-sm max-w-none">
          <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg text-sm">
            {output}
          </pre>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400">
          <p className="text-center">
            左側のボタンをクリックして、<br />
            Claude Code SDKの機能を試してみてください！
          </p>
        </div>
      )}
    </div>
  )
}