// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    {{#if_includes lintConfig 'prettier'}}
    prettier: 'babel-eslint'
    {{/if_includes}}
  },
}
