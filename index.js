module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "plugins": [
    "import",
    "node",
    "promise",
    "standard",
    "react",
    "react-hooks"
  ],
  "globals": {
    // Enzyme
    "shallow": false,
    "mount": false,
    "render": false
  },
  "extends": [
    "standard"
  ],
  "rules": {
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-no-duplicate-props": 2,
    "prefer-const": 2,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": ["error", "always"],
    "newline-before-return": ["error"],
    "no-else-return": ["error", {"allowElseIf": false}],
    "object-curly-spacing": 0
  }
}