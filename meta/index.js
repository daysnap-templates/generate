const path = require('path')

module.exports = {

  // 配置 artTemplate 过滤器
  // configureHelper: {
  //   includes: function () {}
  // },

  // 配置 questions 相关 三种方式
  // configureInquirer: [{ name: 'q1', type: 'string', ... }],
  // configureInquirer: { q1: { type: 'string', ... } },
  // configureInquirer: async ({ inquirer, metalsmith, files }) => answers
  configureInquirer: async ({ inquirer, metalsmith, files }) => {
    const { author, name } = metalsmith.metadata()
    return inquirer.prompt([
      {
        type: 'string',
        name: 'name',
        message: '模板名称，需要与你 git repo 名称保持一致',
        validate: (v) => (!!v ? true : '请填写模板名称'),
        default: name,
      },
      {
        type: 'string',
        name: 'description',
        message: '模板项目描述',
        default: '一个简单的项目模板',
      },
      {
        type: 'string',
        name: 'author',
        message: "作者",
        default: author,
      },
      {
        type: 'string',
        name: 'license',
        message: 'License',
        default: 'MIT',
      },
    ])
  },

  // 配置过滤文件的方式 2种
  // configureFilter ({ minimatch, files, metalsmith }) {
  //   const fileNames = Object.keys(files)
  //   const { lintConfig } = metalsmith.metadata()
  //   fileNames.forEach((file) => {
  //     if (minimatch(file, '.eslintrc.js', { dot: true })) {
  //       if (!lintConfig.includes('eslint')) {
  //         delete files[file]
  //       }
  //     }
  //   })
  // }
  configureFilter: {
    '.eslintrc.js': 'lintConfig.includes("eslint")',
  },

  // 完成
  complete: (data, { logger, chalk }) => {
    const message = `
# ${chalk.green('项目初始化成功!')}
# 请在${data.inPlace ? './template' : path.join(data.destDirName, 'template')} 下开发你的模板\n

相关文档可以查看： https://github.com/daysnap-templates/generate
`
    console.log(message)
  }
}
