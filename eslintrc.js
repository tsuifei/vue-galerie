module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:eslint:recommended",
    "@vue/standard",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //強制使用單引號
    quotes: ['error', 'single'],
    //強制不使用分號結尾
    semi: ['error', 'never'],
    // 關閉衝突規則
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'flow',
      },
    ],
  },
  },
  globals: {
    // 防止 Vue.js 報錯 error 'process' is not defined no-undef
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    process: true,
  },
};
