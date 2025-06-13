# Vercel 環境変数設定ガイド

## 📍 環境変数の設定場所

### ステップバイステップ手順

1. **Vercelにログイン**
   - https://vercel.com

2. **プロジェクトページへ移動**
   - ダッシュボードから `claude-code-playground` をクリック

3. **Settings（設定）タブ**
   - プロジェクトページ上部の「Settings」をクリック

4. **Environment Variables**
   - 左側のメニューから「Environment Variables」を選択

5. **新しい環境変数を追加**
   ```
   Key: ANTHROPIC_API_KEY
   Value: あなたのAPIキー
   ```

6. **Environmentの選択**
   - [ ] Production ← チェック
   - [ ] Preview ← チェック  
   - [ ] Development ← チェック
   
   **全部チェックしてください！**

7. **保存**
   - 「Save」ボタンをクリック

## 🔄 再デプロイ

環境変数を追加した後：

1. 「Deployments」タブに移動
2. 最新のデプロイの「...」メニューをクリック
3. 「Redeploy」を選択
4. 「Redeploy」ボタンをクリック

## ✅ 確認方法

デプロイ完了後、アプリケーションにアクセスして：
- コード分析機能を試す
- エラーが出ないことを確認

## ⚠️ 注意事項

- APIキーは公開されないよう、必ずVercelの環境変数として設定
- GitHubには絶対にプッシュしない
- 環境変数名は正確に `ANTHROPIC_API_KEY` と入力