module SessionsHelper

  # 渡されたユーザーでログインする
  def log_in(user)
    session[:user_id] = user.id
      # このコードを実行すると、ユーザーのブラウザ内
      # の一時cokkiesに暗号化済みのユーザーidが自動で
      # 作成されます
      # この後のページでsession[:user_id]を使って
      # 元通りにIDを取り出すことができる
  end
  
  def log_out
    session.delete(:user_id)
     @current_user = nil
  end

  # ユーザーのセッションを永続的にする
  def remember(user)
    user.remember
    # rememberメソッド呼び出し
    # つまりハッシュ化したトークンをDBに保存
    cookies.permanent.signed[:user_id] = user.id
    # 永続的に保存できるクッキーの保存期限示すため
    # permanentを書く(本当は20年)
    # 生のuser_idができるとだめなので
    # signedで暗号化
    cookies.permanent[:remember_token] = user.remember_token
    # 期限はOK
    # ランダムな文字列のトークンをクッキーに保存
  end

    # 永続セッションを破棄する
    def forget(user)
      user.forget
      #DBのremember_digestからデータ破棄
      cookies.delete(:user_id)
      cookies.delete(:remember_token)
      # クッキーからもユーザーの情報削除
    end

  # 現在ログインしているユーザーの情報を取得
  def current_user
    # DBの問い合わせの数を可能な限り小さくしたい
    # logged_in?メソッドでも使われてるし、、、
    if user_id = session[:user_id]
      # セッションがある場合
      # すなわちログインしてる時のみ

      # sessionにアクセスした結果を変数に
      # 入れておいてあとで使いまわした方が
      # 早くなる
      @current_user ||= User.find_by(id: user_id)
      # find_byでデータベースにクエリを投げる
      # ブラウザのセッションにあるuser_idをもとにUser定義

      # find_byの実行結果をインスタンス変数に保存する
      # ことで、1リクエスト内におけるデータベースへの
      # 問い合わせは最初の一回だけになり、 
      # 以後の呼び出しではインスタンス変数の結果を
      # 再利用する

      # すでに@current_userが存在する場合って何？
      # 一回current_userを実行したら、
      # @current_userがあるのでそれを使ってね
      
      # sessionのuser＿idがあるということは
      # 既にログインしてるといてDBにユーザーの情報があるはず。
      # だからsessionのuser_idをDBでfind_byかければいい
    elsif  (user_id = cookies.signed[:user_id])
      # sessionが張られてなかったらcookiesにあるかも
      user = User.find_by(id: user_id)
      if user && user.authenticated?(cookies[:remember_token])
        # nilガード
        # クッキーのuser_idとremember_tokenが一致してる
        log_in user
        @current_user = user
      end
    end
  end

  def current_user?(user)
    user && user == current_user
    # nilガード
  end

  # ユーザーがログインしていればtrueを返す、
  # その他ならfalse
  def logged_in?
    !current_user.nil?
    # nilじゃなかったら
    # すなわちログインしてたらfalseが
    # 返ってくるけど、それだとif文とか
    # 使う時にややこしいので、!
    # で返り値の真偽値を逆にして
    # trueを返すようにしてる
  end

  # 現在のユーザーをログアウトする
  def log_out 
    forget(current_user)
    # カレントユーザーのremember_digestを破棄
    # トークン、user_idを破棄
    session.delete(:user_id)
    # セッションも破棄
    @current_user = nil
    # インスタンス変数の値を更新
  end

  # フレンドリーフォワーディングの処理

  # 記憶したURL(もしくはデフォルト値にリダイレクト)
  def redirect_back_or(dafault)
    # これはいい命名！！
    redirect_to(session[:forwarding_url] || default)
    # store_locationでsession[:forwarding_url]を定義
    session.delete(:forwarding_url)
    # redirectできたらforwarding_urlって情報はいらないので
    # 破棄しましょう
    # セッション情報を保持したままにしておくと、次のログインの
    # 時もこれを読み込んでおかしくなる
  end

  # アクセスしようとしたURLを覚えとく
  def store_location 
    session[:forwarding_url] = request.original_url if request.get?
    # request.original_url はリクエストされたurl
    # それをセッションに保存

    # if request.getでなぜGETリクエストだけ対応してるかと
    # いうと、before_actionのlogged_in_userで
    # updateに制限かかってるけど,PATCH users/:idを
    # 保存する意味はない
    # なぜならユーザーが元々いきたいのはeditとかだから
  end
end
