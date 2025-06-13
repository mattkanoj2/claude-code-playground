# Vercel デプロイガイド

## 重要: 環境変数の設定

Vercelでデプロイする際は、以下の環境変数を設定する必要があります：

1. Vercelダッシュボードで「Settings」→「Environment Variables」に移動
2. 以下を追加:
   - **Key**: `ANTHROPIC_API_KEY`
   - **Value**: あなたのAPIキー（.env.localから）
   - **Environment**: Production, Preview, Development すべてにチェック

## デプロイ手順

1. GitHubリポジトリをVercelに接続
2. 環境変数を設定（上記参照）
3. デプロイ

## 注意事項

- APIキーは絶対にGitHubにプッシュしないでください
- Vercelの環境変数として安全に管理してください