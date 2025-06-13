#!/bin/bash
# Claude Code Playground 起動スクリプト

echo "🚀 Claude Code Playground を起動します..."
echo ""

# ポート4200で起動
PORT=4200 npm run dev &

# 少し待つ
sleep 5

# アクセス情報を表示
echo ""
echo "✅ サーバーが起動しました！"
echo ""
echo "以下のURLでアクセスしてください："
echo ""
echo "📍 方法1 (推奨): http://localhost:4200"
echo "📍 方法2: http://127.0.0.1:4200"
echo ""
echo "もしアクセスできない場合は、別のターミナルで以下を実行してください："
echo "cd /mnt/c/Users/matt_pc/Desktop/SDK実験/claude-code-playground && PORT=4200 npm run dev"
echo ""
echo "停止するには Ctrl+C を押してください"

# プロセスを待機
wait