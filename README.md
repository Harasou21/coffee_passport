

# Coffee Passport

※現在ドメインを変更したことにより、SendGridがうまく動いていない状況です！
ドメイン変更前はうまく動いていました。
今はSendGrid様に申請を出している状況です。

# アプリケーション概要

<img src="https://user-images.githubusercontent.com/67535886/114352475-dd068300-9ba6-11eb-918e-813aaa56a682.gif" width="500">

<img width="500" alt="スクリーンショット 2021-04-12 4 54 44" src="https://user-images.githubusercontent.com/67535886/114319189-4fe21080-9b4b-11eb-8f8c-cc2f48c94305.png">

「コーヒーの旅へ出かけよう！」
コーヒー好きに向けたアプリで、日々コーヒーの感想を記録し、投稿できたり、検索したり、コーヒーを実際に購入できたりするアプリです。

*アプリURL：http://coffee-passport.net/

*アプリGitHub：https://github.com/Harasou21/coffee_passport

*購入機能の
カード情報は、4242424242424242
有効期間は 12月24日
セキュリティコードは、123
です。

<img width="808" alt="スクリーンショット 2021-05-18 20 48 36" src="https://user-images.githubusercontent.com/67535886/118645897-7c5c0d00-b81a-11eb-89a2-830be16a5534.png">


# ☕️制作背景

### Coffee was what I need.

私はコーヒーが大好きで、毎日欠かさず二杯は飲んでいます。
勉強に集中するために、よくコーヒーを飲んでいますが、
一年前,700円のコーヒーを飲んだ時に、
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
- エラーメッセージの日本語化


# 使用技術一覧

- フロントエンド
  - HTML/CSS
  - JavaScript
  - Vue.js
  
- バックエンド
  - Ruby 2.6.5
  - Rails 6.1.3.1

- インフラ
  - AWS（VPC/EC2/S3/ALB/Route53）
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
  - ページネーション (pagy)
  - メイラー(SendGrid)
  - RuboCop
  
- 開発環境
  - Docker/Docker Compose

# ER図
<img width="686" alt="スクリーンショット 2021-04-12 4 46 44" src="https://user-images.githubusercontent.com/67535886/114318954-35f3fe00-9b4a-11eb-869c-7d2ce49cf98f.png">

# インフラ構成図
<img width="565" alt="スクリーンショット 2021-07-11 19 25 04" src="https://user-images.githubusercontent.com/67535886/125191509-c80cbf00-e27d-11eb-9d4c-28657e9a7666.png">
*develoverではなく、developer

# 工夫した場所

![contact-vue](https://user-images.githubusercontent.com/67535886/118401403-86f29700-b6a0-11eb-9f9f-10941a9a0da1.gif)

Vue.jsを用いてコンタクトページを部分SPA化

![hashtag](https://user-images.githubusercontent.com/67535886/118401406-8a861e00-b6a0-11eb-938b-e460a7ecf1eb.gif)

ハッシュタグをリンクにして、モダンなハッシュタグ機能の実装


次から購入する時の住所の自動入力は、一度購入をしたら、次から自動的に住所が入力されてる仕組みになっています。
何も参考にせず自分で一からコードを書いていきました。
それゆえに汚いコードですが、思い入れが非常にあります。

![search](https://user-images.githubusercontent.com/67535886/118401995-dfc32f00-b6a2-11eb-8af2-387c561629cd.gif)

これはransackとActive Hashという異なるgemを組み合わせてカテゴリー検索できるようにしました。
ransackは検索ができるgemでActive Hashはカテゴリーを簡単に作れるgemなので組み合わせて
カテゴリー検索できないだろうか。と試行錯誤して機能を実装しました。
https://qiita.com/divclass123/items/479d1f3ac79a579039dd
これは1300近く閲覧されてる自分が書いた記事で、gemを組み合わせてカテゴリー検索をしようとした際に他に情報が全くなかったので、この二つのgemを組み合わせてカテゴリー検索したのは自分が初めてのような気がします。


最近(5/17)will_paginateからpagyにパフォーマンス向上のためにgemを取り替えました。




# 今後実装したい内容

- CircleCI/CD
- もっとVue.jsを活用して見た目をイケてる感じにしたい
- 購入履歴の表示がまだ、不十分な機能なのを直したい。
- テストの充実
- 住所自動入力機能のコードが冗長なので、そのリファクタリング
- Docker上でのコンパイルが遅いので、それの解決
- 初心者用にコーヒーの説明書き,代表的なコーヒーの簡単な説明
- 注文確認メールの送信
- 購入取り消し機能
- 削除アラートをもっとカッコよく
- https化
