# 如何开发一个自己的前端类库
- 基于webpack进行资源构建
- 使用ES6语法进行开发
- 将包输出为umd规范的文件
- 使用mocha和chai进行测试
- 使用eslint来进行代码检查
- 基于npm scripts来集成开发命令

# 基本开发环境
- 全局环境：node & npm
- 命令行：terminal & shell
- 版本管理 git
- 编辑器：atom/webstorm/st3/vs
- 浏览器：chrome
- 注册npm账号
- 注册git账号

创建项目基本的结构
 ```
 src 开发源码
 lib 编译后的资源
 test 测试用例
 .gitignore
 LICENSE
 README.md
 package.json
 webpack.config.js
 .babelrc
 .eslint.js
```

# 结合webpack跑通es6语法编译过程
- webpack.config.js
```
npm install webpack@1.0.0 webpack-dev-server --save-dev
```

babel -> presets, plugin, loader
```
npm install babel-loader babel-core babel-preset-es2015 babel-plugin-add-module-exports --save-dev
```

#支持umd模块
```
library: LibraryName,
libraryTarget: 'umd',
umdNamedDefine: true
```
# webpack 小配置，方便开发
- resolve
  - extension 扩展民，简写
  - root 默认搜索路径，绝对路径，可以是字符串或数组
- devtool
  -cheap-source-map 
