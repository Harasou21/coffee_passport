module DrinksHelper
end

def render_with_hashtags(caption)
  caption.gsub(/[#＃][\w\p{Han}ぁ-ヶｦ-ﾟー]+/) { |word| link_to word, "/drink/hashtag/#{word.delete('#')}" }.html_safe
  # リンク付きのハッシュタグが入ったキャプション(説明)が作成されます
 
  #add_emozi(@hashtag)

  # gsubメソッドは、文字列中で、パターンにマッチする
  # 部分を全て文字列で置き換えた文字列を生成して返します。

  # 先頭にハッシュタグがついてる文字列を
  # リンクに変えて、それ以外は何もしない

  #.html_safeメソッドは、HTML語の文字をそのまま出力してしまう
  # HTML語に変換してもらうためのメソッド
  # 例) .html_safeがなかったら<a>hogehoge<a>
  # と文字列がそのまま出力される
  # .html_safeを付けたら、意味を読み取ってくれて,リンク化してくれる
end

def add_emozi(hashtag)
 
  case hashtag
  when "#COCOA"
    hashtag = hashtag + "ha"
   # binding.pr
  end
end