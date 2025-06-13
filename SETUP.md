# Claude Code Playground セットアップガイド

## maxプランのAPIキーで動作させる方法

### 1. APIキーの設定

`.env.local`ファイルを編集して、あなたのmaxプランのAPIキーを設定します：

```bash
# .env.localファイルを開く
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
```

**重要**: `your_api_key_here`の部分を実際のAPIキーに置き換えてください。

### 2. 依存関係のインストール

```bash
cd claude-code-playground
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

### 4. ブラウザでアクセス

```
http://localhost:3000
```

## maxプランで使える機能

- ✅ **コード分析** - 入力したコードの詳細な分析
- ✅ **コード生成** - 自然言語からコード生成
- ✅ **コード改善** - より良いコードへの書き換え提案
- ✅ **マルチ言語対応** - TypeScript、JavaScript、Python等

## トラブルシューティング

### エラー: "ANTHROPIC_API_KEY が設定されていません"
→ `.env.local`ファイルにAPIキーが正しく設定されているか確認

### エラー: "Invalid API Key"
→ APIキーが正しいか、有効期限が切れていないか確認

### エラー: "Rate limit exceeded"
→ maxプランの利用制限に達している可能性があります

## 注意事項

- APIキーは絶対に公開しないでください
- `.env.local`ファイルはGitにコミットされません（.gitignoreに含まれています）
- 本番環境で使用する場合は、適切なセキュリティ対策を実施してください