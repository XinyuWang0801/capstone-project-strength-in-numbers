// Setting up eslint: https://dev.to/gate3/setting-up-your-react-workflow-with-create-react-app-eslint-flow-jest--enzyme-2n2o
module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    jest: true
  },  
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "sort-imports-es6-autofix"
  ],
  rules: {
    // https://eslint.org/docs/rules/sort-imports
    // https://www.npmjs.com/package/eslint-plugin-sort-imports-es6-autofix
    "sort-imports-es6-autofix/sort-imports-es6": [2, {
      "ignoreCase": false,    
      "ignoreMemberSort": false,  
      "memberSyntaxSortOrder": ["single", "multiple", "all", "none"]
    }], 
    "import/order": "off",
    "indent": ["error", 2],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "quotes": [2, "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "linebreak-style": 0,
    "arrow-body-style": 0,
    "no-unused-vars": "error",
    "import/prefer-default-export": "off",
    "max-len": 0,
    "react/prop-types": 0,
    "quote-props": 0,
    "react/no-did-update-set-state": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
  },
};
