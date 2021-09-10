



# Coffee Passport

# 開発環境の立ち上げ方

```
git clone https://github.com/Harasou21/coffee_passport.git
```


```
cd coffee_passport
```

```
docker-compose up --build
```

※gitやdockerのインストールは適宜お願いいたします。


※現在ドメインを変更したことにより、SendGridがうまく動いていない状況です！
ドメイン変更前はうまく動いていました。
今はSendGrid様に申請を出している状況です。

# アプリケーション概要

<img src="https://user-images.githubusercontent.com/67535886/114352475-dd068300-9ba6-11eb-918e-813aaa56a682.gif" width="500">

<img width="500" alt="スクリーンショット 2021-04-12 4 54 44" src="https://user-images.githubusercontent.com/67535886/114319189-4fe21080-9b4b-11eb-8f8c-cc2f48c94305.png">

「コーヒーの旅へ出かけよう！」
コーヒー好きに向けたアプリで、日々コーヒーの感想を記録し、投稿できたり、検索したり、コーヒーを擬似的に購入できたりする部分SPAアプリケーションです。

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
また、記録しやすいように、産地、コク、酸味をカテゴリ検索できるようにしたりしています。



# 実装内容

- ユーザー、投稿のCRUD(UPDATEはユーザーのみ、投稿はUPDATEできない仕様になっております。)

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
- Vue.jsを用いた、お問い合せページ、アプリ概要ページの高速表示
- エラーメッセージの日本語化


# 使用技術一覧

- フロントエンド
  - HTML/CSS
  - JavaScript
  - Vue.js
    - axios
    - vue-js-modal
    - VueRouter
  
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

<img width="568" alt="スクリーンショット 2021-09-06 14 35 25" src="https://user-images.githubusercontent.com/67535886/132165798-b907a152-1134-4138-9e73-e4d1ea764331.png">


# インフラ構成図
<img width="565" alt="スクリーンショット 2021-07-11 19 25 04" src="https://user-images.githubusercontent.com/67535886/125191509-c80cbf00-e27d-11eb-9d4c-28657e9a7666.png">
*develoverではなく、developer

# 工夫した場所


![モーダルウィンドウ](https://user-images.githubusercontent.com/67535886/131092611-f148cc5a-0b95-4a73-95ff-5e98ce07f8a3.gif)

↑投稿一覧をvueで記述し、投稿詳細ページを表紙させる際に画面遷移させずに、vueで記述してをvue-js-modalによってモーダルウィンドウで表示。
部分SPA化させることができました。
[その時に書いた記事](https://qiita.com/divclass123/items/71465f7a6c313a533eeb)



![users#show](https://user-images.githubusercontent.com/67535886/132538290-9003830a-3399-46b3-8bd2-dd4a38f78e17.gif)

↑投稿一覧ページにおいて、投稿部分のユーザーの名前を押すと、そのユーザーの全投稿を表示できます。
VueRouterを用いて、動的なページを高速で画面遷移させ、部分SPA化を実現しました。






![contact-vue](https://user-images.githubusercontent.com/67535886/118401403-86f29700-b6a0-11eb-9f9f-10941a9a0da1.gif)

↑Vue.jsとVueRouterを用いてコンタクトページを部分SPA化

![hashtag](https://user-images.githubusercontent.com/67535886/118401406-8a861e00-b6a0-11eb-938b-e460a7ecf1eb.gif)

↑ハッシュタグをリンクにして、モダンなハッシュタグ機能の実装


- 次から購入する時の住所の自動入力は、一度購入をしたら、次から自動的に住所が入力されてる仕組みになっています。
何も参考にせず自分で一からコードを書いていきました。
それゆえに汚いコードですが、思い入れが非常にあります。
https://qiita.com/divclass123/items/81fe6ff7be7c698d3df2
↑この時に思考したことを記事にまとめました。


- 開発環境にgem 'bullet'を導入し、効率的にN+1問題の解決をしました。


![search](https://user-images.githubusercontent.com/67535886/118401995-dfc32f00-b6a2-11eb-8af2-387c561629cd.gif)

↑これはransackとActive Hashという異なるgemを組み合わせてカテゴリー検索できるようにしました。
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
- いいね機能の軽微なバグ修正


#　自己評価

RailsとVue.jsを組み合わせて、部分的にだがSPA化したことにより、ユーザーのストレスをかなり軽減できたと思う。
N+1問題もgemを導入して効率よく解決し、ストレスフリーなアプリケーションになったと思う。
また開発環境にdockerを取り入れることにより、簡単に開発環境が整うので、オリジナルアプリの作成に注力できた。
だが、特にvue.jsの知識がまだまだ不足しているので、画面が遷移したときに、いいね機能のいいねが反映されない問題もあった。
今のところインスタライクなアプリケーションで、コーヒーフリークに最適化したアプリケーションになっていないので、
もっとアプリケーションの独自性が必要だと思う。
