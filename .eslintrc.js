module.exports = {
  env: {
    'browser': true,
    'es2021': true,
  },
  settings: {
    // import の alias path に対応させる
    'import/resolver': {
      'typescript': [],
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Reactのimportが不要になったのでエラーを無効化
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // importの並び順
    'import/order': [
      'error',
      {
        // 「外部ライブラリ」や「親ディレクトリ」などのグループごとのインポート順を設定
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        // 独自のグループを設定
        pathGroups: [
          {
            pattern: '{react,react-dom/**}',
            group: 'builtin',
            position: 'before',
          },
        ],
        // pathGroups の pattern の判定が影響されないグループを設定
        // React は external でデフォルトに設定されているので変更しておく
        pathGroupsExcludedImportTypes: ['builtin'],
        // グループ内の順序をアルファベット昇順にする
        alphabetize: {
          order: 'asc',
        },
      }
    ],

    // exportしているモジュールが一つの場合にdefaultを強制するのを無効化
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: [
        './vite.config.ts',
        './app/frontend/test/**/*',
      ],
      rules: {
        // devDependenciesのライブラリを使用するときの警告を無効化
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
