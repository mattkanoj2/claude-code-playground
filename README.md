# Claude Code Playground

Claude Code SDKの機能を体験できるインタラクティブなWebアプリケーションです。

![Claude Code Playground](https://via.placeholder.com/800x400?text=Claude+Code+Playground)

## 機能

### 🔍 コード分析
入力されたコードの品質、パフォーマンス、潜在的な問題を詳細に分析します。

### ✨ コード改善
ベストプラクティスに基づいて、より良いコードへの書き換えを提案します。

### 🚀 AIコード生成
自然言語の説明から、動作するコードを瞬時に生成します。

### 🎨 マルチ言語対応
TypeScript、JavaScript、Python、HTML、CSSに対応しています。

## セットアップ

### 1. 依存関係のインストール

```bash
cd claude-code-playground
npm install
```

### 2. 環境変数の設定

`.env.local`ファイルを編集し、Anthropic APIキーを設定してください：

```
ANTHROPIC_API_KEY=your_actual_api_key_here
```

APIキーは[Anthropic Console](https://console.anthropic.com/)から取得できます。

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

## 使い方

1. **コードエディタ**に分析・改善したいコードを入力
2. **言語を選択**（TypeScript、JavaScript、Python等）
3. 以下のいずれかのボタンをクリック：
   - **コードを分析**: 入力したコードの詳細な分析結果を表示
   - **コードを改善**: AIがより良いコードに書き換えて提案
   - **AIでコード生成**: 自然言語でリクエストを入力してコードを生成

## Claude Code SDKについて

Claude Code SDKは、Anthropicが提供する開発者向けツールキットです：

- **簡単な統合**: TypeScriptとPythonから簡単に使用可能
- **強力なAI機能**: コード分析、生成、改善などの高度な機能
- **カスタマイズ可能**: プロジェクトのニーズに合わせて調整可能
- **セキュア**: APIキーベースの安全な認証

## 技術スタック

- **フロントエンド**: Next.js 14, React 18, TypeScript
- **UIライブラリ**: Tailwind CSS, Lucide Icons
- **コードエディタ**: Monaco Editor (VS Codeのエディタ)
- **AI統合**: Claude Code SDK

## プロジェクト構造

```
claude-code-playground/
├── app/
│   ├── api/
│   │   └── claude/
│   │       └── route.ts      # Claude Code SDK API エンドポイント
│   ├── components/
│   │   ├── CodeEditor.tsx    # コードエディタコンポーネント
│   │   ├── ControlPanel.tsx  # 操作パネル
│   │   ├── OutputPanel.tsx   # 出力表示パネル
│   │   └── FeatureShowcase.tsx # 機能紹介
│   ├── globals.css           # グローバルスタイル
│   ├── layout.tsx            # ルートレイアウト
│   └── page.tsx              # メインページ
├── .env.local                # 環境変数（要設定）
├── package.json              # プロジェクト設定
└── README.md                 # このファイル
```

## ライセンス

このプロジェクトはデモンストレーション目的で作成されています。