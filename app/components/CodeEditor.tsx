'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

interface CodeEditorProps {
  code: string
  language: string
  onChange: (value: string) => void
  onLanguageChange: (language: string) => void
}

export default function CodeEditor({ code, language, onChange, onLanguageChange }: CodeEditorProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const languages = [
    { value: 'typescript', label: 'TypeScript' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
  ]

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">言語を選択</label>
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        {mounted ? (
          <MonacoEditor
            height="400px"
            language={language}
            value={code}
            onChange={(value) => onChange(value || '')}
            theme="vs-light"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
            }}
          />
        ) : (
          <div className="h-[400px] flex items-center justify-center bg-gray-50">
            <span className="text-gray-500">エディタを読み込み中...</span>
          </div>
        )}
      </div>
    </div>
  )
}