module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-var": "error",
    "prefer-const": 2,
    "object-curly-spacing": ["error", "always"],
    "no-multi-spaces": "error",
    "prefer-destructuring": ["error", {
      "array": true,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }],
    "prefer-template": "error",
    "template-curly-spacing": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 1}]
  }
}