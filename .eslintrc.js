module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@next/next/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",

        "@typescript-eslint/explicit-module-boundary-types": "off",

        "no-unused-vars": "warn",
        "no-console": "warn",
        "eqeqeq": ["error", "always"],
        "curly": "error",
        "semi": ["error", "always"]
    }
}