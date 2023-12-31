書籍管理アプリのフロントエンド部分を実装したものです。

# 実行方法
## 方法①以下URLへアクセスする
こちらにデプロイしているので、すぐに動作を確認したい場合はこちらをお試しください。<br>
[https://book-management-app-rosy.vercel.app/](https://book-management-app-rosy.vercel.app/)

## 方法②開発サーバーを起動する
以下コマンドにてサーバーを起動し、ブラウザより[http://localhost:3000](http://localhost:3000) へアクセスします。
```bash
npm install
npm run dev
```
# 各ページについて
## ログインページ
パス：`/login` 
- 認証機能は実装していません。
- EmailアドレスはHTMLのinputタグによるフォームバリデーションが実装されています。
- Passwordにはバリデーションは何も実装していません。
- Passwordフィールドの目のマークをクリックすることで伏せ字状態をオン・オフすることができます。
- Emailアドレス, Passwordが入力された状態で「SIGN IN」ボタンをクリックすると書籍管理ページに遷移します。

![スクリーンショット 2023-09-20 18 15 52](https://github.com/pistachiyoda/book-management-app/assets/28682050/9c49f36d-288a-4edb-8197-b7db9bdc38db)

## 書籍一覧ページ
パス:`/books`
- コード内で静的に設定した５冊分の書籍情報が表示されます。
- テーブル右端の詳細ボタンをクリックすると、各書籍の詳細ページに遷移します。
<img width="1324" alt="スクリーンショット 2023-09-20 18 26 55" src="https://github.com/pistachiyoda/book-management-app/assets/28682050/1fe1a437-7a26-4d29-adb1-461db333dba9">

## アイテム詳細ページ
パス:`/books/[id]`
- そのidを持つ書籍詳細ページが表示されます。
- 「戻る」ボタンで書籍一覧ページへ遷移します。
- 「編集」ボタンでその書籍の編集ページへ遷移します。
<img width="1190" alt="スクリーンショット 2023-09-20 18 39 06" src="https://github.com/pistachiyoda/book-management-app/assets/28682050/183787dc-f671-4024-86be-2022202fd7c0">

## アイテム編集ページ
パス:`/books/[id]/edit`
- id以外の値を編集し、「更新」ボタンをクリックすることでその内容を書籍一覧ページに反映させることができます。
- 「更新」ボタンクリック後（アイテム編集完了時）は書籍一覧ページへ遷移します。
- 「キャンセル」ボタンでアイテム詳細ページへ遷移します。
- サムネイルに関しては、ファイルを選択することはできますが、アップロード機能を実装していないため画像を表示することはできません。

![スクリーンショット 2023-09-20 18 49 23](https://github.com/pistachiyoda/book-management-app/assets/28682050/2f45e6c2-17e6-4178-8d13-1b8cdeab415c)


