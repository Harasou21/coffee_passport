Rails.application.configure do
  config.after_initialize do
    Bullet.enable        = true
    Bullet.alert         = true
    Bullet.bullet_logger = true
    Bullet.console       = true
  # Bullet.growl         = true
    Bullet.rails_logger  = true
    Bullet.add_footer    = true
  end

  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false
  # Do not eager load code on boot.
  config.eager_load = false

 # config.logger = Logger.new(STDOUT)
  # ログを標準出力に出すように設定します．

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  if Rails.root.join('tmp', 'caching-dev.txt').exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Store uploaded files on the local file system (see config/storage.yml for options).
  config.active_storage.service = :local

  # Don't care if the mailer can't send.
  
   # config.action_mailer.raise_delivery_errors = true
  # コメントアウトすることでdelelop環境からもメールを送信する設定に
  
  #host = 'b9c7c936bba34db686385a83af09e0a0.vfs.cloud9.ap-northeast-1.amazonaws.com' # ここをコピペすると失敗します。自分の環境のホストに変えてください。
  # クラウドIDEの場合は以下をお使いください
  #config.action_mailer.default_url_options = { host: host, protocol: 'https' }
  # localhostで開発している場合は以下をお使いください
 
  #host = 'localhost:3000'       
 # config.action_mailer.default_url_options = { host: host, protocol: 'http' }

  config.action_mailer.perform_caching = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Highlight code that triggered database queries in logs.
  config.active_record.verbose_query_logs = true

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true

  # Suppress logger output for asset requests.
  config.assets.quiet = true

  # Raises error for missing translations.
  # config.action_view.raise_on_missing_translations = true

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  config.file_watcher = ActiveSupport::FileUpdateChecker
  config.hosts.clear
  
  #config.action_mailer.asset_host = 'b9c7c936bba34db686385a83af09e0a0.vfs.cloud9.ap-northeast-1.amazonaws.com/'

  config.action_mailer.default_url_options = { host: 'localhost:3000', protocol: 'http' }
  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
  #  #enable: true,
    address: 'smtp.gmail.com',
    port: 587,
    domain: 'gmail.com',
    authentication: :login,
    user_name: ENV["GOOGLE_USER_NAME"],
    password: ENV["GOOGLE_PASSWORD"],
    enable_starttls_auto:  true,
     #openssl_verify_mode: 'peer',
    ssl:  false,
    tls: false

  }

  
end