// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    {{#includes lintConfig 'prettier'}}
    prettier: 'babel-eslint'
    {{/includes}}
  },
}
