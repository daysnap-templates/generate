module.exports = {
  // 配置 questions 相关
  // configureInquirer: [],
  // configureInquirer: {},
  // configureInquirer: async ({ inquirer, metalsmith, files }) => answers
  configureInquirer: async ({ inquirer, metalsmith, files }) => {
    const { author, name } = metalsmith.metadata()
    return inquirer.prompt([
      {
        type: 'string',
        name: 'name',
        message: '项目名称',
        default: name
      },
      {
        type: 'string',
        name: 'description',
        message: '项目描述',
        default: '一个简单的项目模板',
      },
      {
        type: 'string',
        name: 'author',
        message: "作者",
        default: author,
      },
    ])
  },
}
