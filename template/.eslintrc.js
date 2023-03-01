// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ${{if lintConfig.includes('prettier')}}
    prettier: 'babel-eslint'
    ${{/if}}
  },
}
