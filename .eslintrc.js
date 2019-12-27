module.exports = {
  extends: "react-app",
  rules: {
    quotes: ["error", "single"],
    semi: ["error", "never"],
    indent: ["error", 2, {
      SwitchCase: 1
    }],
    "no-multiple-empty-lines": ["error"],
    "jsx-a11y/anchor-is-valid": 0
  }
}
