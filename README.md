# rails-template

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
```
