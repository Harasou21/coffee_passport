class SendEmail
  require 'sendgrid-ruby'
  include SendGrid

  def self.test_email
    from = Email.new(email: ENV['SENDGRID_USER_NAME']) # SendGridの管理画面でSenderに登録したアドレス
    to = Email.new(email: ENV['GOOGLE_USER_NAME']) # 送信したいアドレス
    subject = "会員登録の確認"
    content = Content.new(type: 'text.erb/plain', value: '
      ようこそ！ <%= @user.nickname %>様

      以下のURLをクリックして、あらゆるコーヒーの世界を覗いてみましょう！
      
      Here,Only your Coffee Passport!  Bon Voyage!!
      <%= edit_account_activation_url(@user.activation_token, email: @user.email) %>
      ')
    mail = Mail.new(from, subject, to, content)

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_PASSWORD'])
    response = sg.client.mail._('send').post(request_body: mail.to_json)
  end
end