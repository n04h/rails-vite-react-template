FROM node:18.12-alpine as node

FROM ruby:3.1.2-alpine

# ネイティブ拡張のgemをソースビルドする
# @see https://qiita.com/takkeybook/items/5eae085d902957f0fe5b
ENV BUNDLE_FORCE_RUBY_PLATFORM true

WORKDIR /myapp
COPY Gemfile* /myapp

COPY --from=node /usr/local/include/ /usr/local/include/
COPY --from=node /usr/local/lib/ /usr/local/lib/
COPY --from=node /usr/local/bin/ /usr/local/bin/

RUN apk update && \
    apk upgrade && \
    apk add --no-cache linux-headers libxml2-dev make gcc libc-dev tzdata bash mysql-dev && \
    apk add --no-cache -t .build-packages --no-cache build-base curl-dev mysql-client && \
    bundle install -j4 && \
    apk del --purge .build-packages

EXPOSE 3000
