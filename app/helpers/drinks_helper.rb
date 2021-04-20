module DrinksHelper
end

def render_with_hashtags(caption)
  caption.gsub(/[#＃][\w\p{Han}ぁ-ヶｦ-ﾟー]+/) { |word| link_to word, "/drink/hashtag/#{word.delete('#')}" }.html_safe
  # リンク付きのハッシュタグが入ったキャプション(説明)が作成されます

  # gsubメソッドは、文字列中で、パターンにマッチする
  # 部分を全て文字列で置き換えた文字列を生成して返します。

  # 先頭にハッシュタグがついてる文字列を
  # リンクに変えて、それ以外は何もしない
end
