# 🚀 Vercel デプロイ手順

## GitHubリポジトリ
✅ 作成完了: https://github.com/mattkanoj2/claude-code-playground

## Vercelでのデプロイ手順

### 1. Vercelにアクセス
https://vercel.com にアクセスしてログイン

### 2. 新しいプロジェクトをインポート
- 「Import Project」をクリック
- GitHubアカウントを連携
- `mattkanoj2/claude-code-playground` リポジトリを選択

### 3. 環境変数の設定（重要！）
プロジェクト設定画面で以下の環境変数を追加:

| Key | Value | Environment |
|-----|-------|------------|
| `ANTHROPIC_API_KEY` | あなたのAPIキー | ✓ Production<br>✓ Preview<br>✓ Development |

**注意**: APIキーは `.env.local` ファイルからコピーしてください

### 4. デプロイ設定
- **Framework Preset**: Next.js (自動検出されるはず)
- **Root Directory**: そのまま（変更不要）
- **Build Command**: `npm run build`（デフォルト）
- **Output Directory**: `.next`（デフォルト）

### 5. デプロイ実行
「Deploy」ボタンをクリック

## デプロイ後の確認事項

### ✅ 動作確認
1. Vercelが提供するURLにアクセス
2. 各機能をテスト:
   - コード分析
   - コード生成
   - コード改善

### ⚠️ トラブルシューティング

#### エラー: "ANTHROPIC_API_KEY が設定されていません"
→ Vercelの環境変数設定を確認

#### エラー: "Invalid API Key"
→ APIキーが正しくコピーされているか確認

#### ビルドエラー
→ Vercelのビルドログを確認

## 🎉 デプロイ完了後

あなたのClaude Code Playgroundが世界中からアクセス可能になります！

URLは以下のような形式になります:
- `https://claude-code-playground.vercel.app`
- または `https://claude-code-playground-[ユーザー名].vercel.app`

## 📝 メモ

- 無料プランでも十分動作します
- カスタムドメインも設定可能
- 自動デプロイ: GitHubにプッシュすると自動的に更新されます