'use client'

import { Code2, Brain, Rocket, Shield } from 'lucide-react'

export default function FeatureShowcase() {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: 'コード分析',
      description: 'Claude Code SDKがコードの品質、パフォーマンス、潜在的な問題を詳細に分析します。'
    },
    {
      icon: <Brain className="w-8 h-8 text-secondary" />,
      title: 'AI駆動の改善提案',
      description: 'ベストプラクティスに基づいて、より良いコードへの書き換えを提案します。'
    },
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: '高速コード生成',
      description: '自然言語の説明から、動作するコードを瞬時に生成します。'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'セキュアな統合',
      description: 'APIキーを使用した安全な認証で、Claude Code SDKを活用できます。'
    }
  ]

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-8">Claude Code SDK の主な機能</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 card bg-gradient-to-r from-primary/10 to-secondary/10">
        <h3 className="text-xl font-semibold mb-3">Claude Code SDK とは？</h3>
        <p className="text-gray-700 mb-4">
          Claude Code SDKは、AnthropicのAI技術を活用して、開発者の生産性を飛躍的に向上させるツールキットです。
          TypeScriptやPythonから簡単に統合でき、コードレビュー、自動生成、リファクタリングなど、
          様々な開発タスクをAIがサポートします。
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>リアルタイム処理</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>多言語対応</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span>カスタマイズ可能</span>
          </div>
        </div>
      </div>
    </div>
  )
}