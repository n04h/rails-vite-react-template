# rails-vite-react-template

## Environments

- Ruby: 3.1.2
- Rails: 7.0.4
- MySQL: 8.0.31

## Setup

```console
cp .env.example .env
rm config/credentials.yml.enc

docker compose build
docker compose run app sh

# on app container
EDITOR=vi rails credentials:edit
exit

docker compose up
docker compose exec app sh

# on app container
rails db:setup
```

## Style guide

- Ruby: <https://github.com/cookpad/styleguide/blob/master/ruby.ja.md>
- Rspec: <https://github.com/willnet/rspec-style-guide>

## Commands

```console
# Test (Rspec)
bundle exec rspec

# Lint (Rubocop)
bundle exec rubocop
bundle exec rubocop -a # Auto fix

# Lint (ESLint + Prettier)
npm run lint
npm run fix-lint
```

## Frontend

See: <https://zenn.dev/t_keshi/articles/bulletproof-react-2022>

```tree
app/frontend/src
├── components        # アプリケーション全体で使用できる共通コンポーネント
├── config            # 環境変数などをエクスポートするところ
├── features          # 機能ベースモジュール
├── hooks             # アプリケーション全体で使用できる共通hooks
├── lib               # ライブラリをアプリケーション用に設定して再度エクスポートしたもの
├── providers         # アプリケーションのすべてのプロバイダー
├── stores            # グローバルステートストア
├── test              # テストユーティリティとモックサーバ
├── types             # アプリケーション全体で使用される基本的な型の定義
└── utils             # 共通のユーティリティ関数
```
