class User < ApplicationRecord
  attr_accessor :remember_token, :activation_token
  before_save   :downcase_email
  before_create :create_activation_digest
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
  has_many :likes
  has_many :like_drinks, through: :likes, source: :drink
  #has_many :sns_credentials
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
#   validates :username, presence: true, unless: :uid? #他省略
# validates :email, presence: true, unless: :uid?
# has_secure_password validations: false
# validates :password, presence: true, unless: :uid?
  

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
  def authenticated?(attribute,token)
    digest = send("#{attribute}_digest")
    return false if digest.nil?
    # 二種類のブラウザを使用してログアウトした場合
    # cookiesのremember_tokenはあるけど、
    # サーバー側でremember_digestをnilにしてるから
    # nilに対して.is_password?とかやるとfor nil classエラーが起きちゃう
    # remember_digestがnilの場合はfalseを返して、処理を止める

    # 後置if文に当てはまる条件があれば処理を止めて！
    # って場合はreturnとかで明示的に書くとif ~ else ~ end 
    # とか書かなくて済む
    BCrypt::Password.new(digest).is_password?(token)
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

    # いいねしてるかどうか確かめるメソッド
    def liked_by?(drink_id)
      likes.where(drink_id: drink_id).exists?
    end

    # 外部APIからのユーザー情報を取得
    def self.find_or_create_from_auth(auth)
      # binding.pry
      provider = auth[:provider]
      uid = auth[:uid]
      nickname = auth[:info][:name]
      image = auth[:info][:image]
      #必要に応じて情報追加してください
    
      #ユーザはSNSで登録情報を変更するかもしれので、毎回データベースの情報も更新する
      self.find_or_create_by(provider: provider, uid: uid) do |user|
        user.nickname = name
        user.image_path = image
      end
    end

    def downcase_email
      self.email = email.downcase
    end

    # ユーザーにトークン情報と、ダイジェストを入れる
    def create_activation_digest
      self.activation_token  = User.new_token
      self.activation_digest = User.digest(activation_token)
    end

    def activate
      self.update_attribute(:activated,    true)
      self.update_attribute(:activated_at, Time.zone.now)
    end
  
    # 有効化用のメールを送信する
    def send_activation_email
      UserMailer.account_activation(self).deliver_now
    end
  
end
