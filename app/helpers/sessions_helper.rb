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

  # 現在ログインしているユーザーの情報を取得
  def current_user
    # DBの問い合わせの数を可能な限り小さくしたい
    # logged_in?メソッドでも使われてるし、、、
    if session[:user_id]
      # セッションがある場合
      # すなわちログインしてる時のみ
      @current_user ||= User.find_by(id: session[:user_id])
      # find_byでデータベースにクエリを投げる
      # ブラウザのセッションにあるuser_idをもとにUser定義

      # find_byの実行結果をインスタンス変数に保存する
      # ことで、1リクエスト内におけるデータベースへの
      # 問い合わせは最初の一回だけになり、 
      # 以後の呼び出しではインスタンス変数の結果を
      # 再利用する

      # すでに@current_userが存在する場合って何？



    end
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
end
