class User < ApplicationRecord
  attr_accessor :remember_token
  # remember_tokenというメソッドを作成
  # password,password_comfirmationみたいな
  # 変数のように扱える
  # u.remember_token的なことができる
  has_many :drinks, dependent: :delete_all
  has_many :trades
  has_many :comments
  # followerがフォローする
  # followedがフォローされるって大原則
  has_many :active_relationships,class_name: "Relationship",
                                 foreign_key: "follower_id",
                                 dependent: :destroy
  # active_relationshipってクラスも、外部キーもないので
  # 明示的に書く必要がある
  
  # フォローしてるユーザーをfollower_idという外部キーを
  # 使って特定しなくてはなりません

  # relationshipモデルのfollower_idにuser_idを格納する宣言
                                 
  has_many :passive_relationships,class_name: "Relationship",
                                  foreign_key: "followed_id",
                                  dependent: :destroy
  
                              
  has_many :following,through: :active_relationships,
                                source: :followed
  # followedsとかだと英語として不適切
  # souurce: で「following配列の元はfollowed id の集合」
  # ってことを明示的にrailsに伝えます
  # 「自分が」フォローしてる人
  has_many :followers,through: :passive_relationships,
                                  source: :follower
  # sourceは省略してもいい、
  # rails が自動的に単数系にして、外部キーfollower_id
  # を探してくれるから
  # 「自分を」フォローしてる人
  has_one_attached :image

  before_save  { self.email = email.downcase }
  has_secure_password
  validates :nickname,  presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 },allow_nil: true
  # ユーザー更新時に空のパスワードでも大丈夫
  # has_secure_passwordの方でpasswordの存在性を検証するから大丈夫
  
  

  # 渡された文字列のハッシュ値を返す
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  # ランダムなトークンを返す
  def User.new_token
    SecureRandom.urlsafe_base64
  end

  # 永続的にログインするためにトークンをDBに保存
  def remember
    self.remember_token = User.new_token
    # 何のトークンか分かりやすいから
    # remember_tokenって名前を作った
    update_attribute(:remember_digest,User.digest(remember_token))
    # ハッシュ化したトークンをremember_digestに保存
  end

  # 渡されたトークンがダイジェストと一致したらtrue
  # を返す
  def authenticated?(remember_token)
    return false if remember_digest.nil?
    # 二種類のブラウザを使用してログアウトした場合
    # cookiesのremember_tokenはあるけど、
    # サーバー側でremember_digestをnilにしてるから
    # nilに対して.is_password?とかやるとfor nil classエラーが起きちゃう
    # remember_digestがnilの場合はfalseを返して、処理を止める

    # 後置if文に当てはまる条件があれば処理を止めて！
    # って場合はreturnとかで明示的に書くとif ~ else ~ end 
    # とか書かなくて済む
    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end

  # ユーザーのログイン情報を破棄する
  def forget
    update_attribute(:remember_digest,nil)
  end

    # selfを省略してる
    # ユーザーをフォローする
    def follow(other_user)
      following << other_user
    end
  
    # ユーザーをフォロー解除する
    def unfollow(other_user)
      active_relationships.find_by(followed_id: other_user.id).destroy
    end
  
    # 現在のユーザーがフォローしてたらtrueを返す
    def following?(other_user)
      following.include?(other_user)
    end
end
