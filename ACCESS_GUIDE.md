# Claude Code Playground アクセスガイド

## 🚀 確実にアクセスする方法

### 方法1: 新しいターミナルで起動（推奨）
1. 新しいターミナル/コマンドプロンプトを開く
2. 以下のコマンドを実行:

```bash
cd /mnt/c/Users/matt_pc/Desktop/SDK実験/claude-code-playground
PORT=4200 npm run dev
```

3. 起動後、ブラウザで以下にアクセス:
   - http://localhost:4200

### 方法2: 別のポートを試す
ポート5555で起動:
```bash
cd /mnt/c/Users/matt_pc/Desktop/SDK実験/claude-code-playground
PORT=5555 npm run dev
```

アクセスURL: http://localhost:5555

### 方法3: 全てのNext.jsプロセスを終了してから再起動
```bash
# すべてのnode/nextプロセスを終了
pkill -f node
pkill -f next

# 再起動
cd /mnt/c/Users/matt_pc/Desktop/SDK実験/claude-code-playground
PORT=4200 npm run dev
```

## 🔍 トラブルシューティング

### Windows Defenderファイアウォールの確認
1. Windows Defenderファイアウォールの設定を開く
2. 「アプリまたは機能を許可」をクリック
3. Node.jsが許可されているか確認

### WSL2でのポートフォワーディング
WSL2は自動的にポートをWindowsにフォワードしますが、時々問題が発生します。

確実な方法:
```bash
# PowerShellを管理者として実行し、以下を実行
netsh interface portproxy add v4tov4 listenport=4200 listenaddress=0.0.0.0 connectport=4200 connectaddress=172.19.195.228
```

### それでもアクセスできない場合
1. `http://127.0.0.1:4200` を試す
2. `http://[::1]:4200` を試す（IPv6）
3. `http://172.19.195.228:4200` を試す（WSL2の直接IP）

## ✅ 動作確認

サーバーが正常に起動していれば、以下のメッセージが表示されます:
```
▲ Next.js 14.1.0
- Local:        http://localhost:4200
- Environments: .env.local

✓ Ready in X.Xs
```