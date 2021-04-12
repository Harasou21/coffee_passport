

# Coffee Passport

# アプリケーション概要

<img src="https://user-images.githubusercontent.com/67535886/114352475-dd068300-9ba6-11eb-918e-813aaa56a682.gif" width="500">

<img width="500" alt="スクリーンショット 2021-04-12 4 54 44" src="https://user-images.githubusercontent.com/67535886/114319189-4fe21080-9b4b-11eb-8f8c-cc2f48c94305.png">

「コーヒーの旅へ出かけよう！」
コーヒー好きに向けたアプリで、日々コーヒーの感想を記録し、投稿できたり、検索したり、コーヒーを実際に購入できたりするアプリです。

*アプリURL：
ゲストログインをクリックすることで、メールアドレスとパスワードを入力することなくログインできます。

*アプリGitHub：https://github.com/Harasou21/coffee_passport

# ☕️制作背景

### Coffee was what I need.

私はコーヒーが大好きで、毎日欠かさず二杯は飲んでいます。
勉強に集中するために、よくコーヒーを飲んでいますが、
一年前、新宿本店の但馬屋珈琲さんの700円のコーヒーを飲んだ時に、
「同じコーヒーでもこんなに美味しさが違うのか」と衝撃が走りました。
そこから「美味しいコーヒーにもっと出逢いたい」と思うようになりました。


### Coffee is what I love.

コーヒーにどっぷりハマって、
ハンドドリップ器具をかったり、豆を買って豆から挽いたり、
豆の挽き具合、フィルターの違いで味が味が変わるのを楽しんだり、
それと同時期に、某大手コーヒーチェーン店で**Coffee Passport**という、
日々飲んだコーヒーを記録する手帳を貰いました。

コーヒーの感想をいくつか記録していくうちに、
「みんなのコーヒーの感想を知りたい」
と思うようになり、アプリを作ったら、みんなで感想を共有でき、
オンライン上でテイスティングができると思いました。


# 実装内容

- ユーザー、投稿のCRUD

- ログイン、ログアウト機能
- フォロー機能
- 非同期でいいね機能
- タグ付け機能
- 検索機能
- ページネーション
- フレンドリーフォワーディング
- 動的なタイトル変更
- ユーザー登録の際のメール認証
- 非同期でのコメント削除、投稿機能
- 常設の商品の購入機能
- 次から購入する時の住所の自動入力
- ゲストログイン機能
- 続きを見る機能
- お問合せ機能
- 投稿のランダム表示機能
- 購入履歴の表示(不完全)
- 画像のプレビュー表示
- Vue.jsを用いた、お問い合せページ、アプリ概要ページの表示



# 使用技術一覧

- フロントエンド
  - HTML/CSS
  - JavaScript
  - Vue.js
  
- バックエンド
  - Ruby 2.6.5
  - Rails 6.1.3.1

- インフラ
  - AWS（EC2/S3/ALB/Route53）
  - Nginx/Unicorn

- テスト
  - RSpec

- CI/CD
  - Capistrano

- バージョン管理
  - Git/GitHub
- ソースコードエディタ
  - VScode
  
- その他
  - Formspree
  - 検索（ransack）、カテゴリー（Active Hash）
  - ページネーション (will_paginate)
  
  
- 開発環境
  - Docker/Docker Compose

# ER図
<img width="686" alt="スクリーンショット 2021-04-12 4 46 44" src="https://user-images.githubusercontent.com/67535886/114318954-35f3fe00-9b4a-11eb-869c-7d2ce49cf98f.png">



# 今後実装したい内容

- CircleCI/CD
- もっとVue.jsを活用して見た目をイケてる感じにしたい
- 購入履歴の表示がまだ、不十分な機能なのを直したい。
- テストの充実
- 住所自動入力機能のコードが冗長なので、そのリファクタリング
- Docker上でのコンパイルが遅いので、それの解決
- 初心者用コーヒーの説明書き,代表的なコーヒーの簡単な説明
- 注文確認メールの送信
- 購入取り消し機能
- 削除アラートをもっとカッコよく
- https化
