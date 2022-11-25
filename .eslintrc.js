module.exports = {
  env: {
    'browser': true,
    'es2021': true,
  },
  extends: [
    'airbnb',
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
  },
}
