FROM ruby:2.6.5

## nodejsとyarnはwebpackをインストールする際に必要
# yarnパッケージ管理ツールをインストール

RUN curl http://deb.debian.org/debian/dists/buster/main/binary-amd64/by-hash/SHA256/935deda18d5bdc25fb1813d0ec99b6e0e32a084b203e518af0cf7dc79ee8ebda | head

RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
apt-get update && apt-get install -y yarn


RUN /bin/sh -c /bin/sh -c bundle update --bundler
RUN gem install bundler:2.1.4

RUN mkdir /coffee_passport
WORKDIR /coffee_passport
COPY Gemfile /coffee_passport/Gemfile
COPY Gemfile.lock /coffee_passport/Gemfile.lock
RUN bundle update rails
RUN bundle update
RUN bundle install
COPY . /coffee_passport

RUN yarn install --check-files
RUN bundle exec rails webpacker:compile

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]