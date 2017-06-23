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
  - root 默认搜索路径，绝对路径，可以是字符串或数组, 比如用brower 配置root 以后，就不用每次带brower的路径了。方便使用。
- devtool
  -cheap-source-map

# 支持环境变量
```
process.env // 在windows环境里有兼容问题
yargs
```
```
npm install yargs --save-dev
webpack --progress --colors --env=PRO
var args = require('yargs').argv

args.evn == PRO
```

# 将用于生产环境的代码压缩
```
webpack.optimize.UglifyJsPlugin
```

# 使用eslint进行代码风格检查
```
npm install eslint eslint-loader --save-dev
```
eslint init
1. 单纯的用eslint做检查。直接调用就可以。
2. 在webpack.config.js里面做loader配置。

# 支持单元测试
```
npm install mocha chai --save-dev
mkdir test && touch ./test/index.spec.js
配置 npm scripts test
1. mocha --compilers js:babel-core/register -w  ./test/*.spec.js
2. mocha --require babel-register -w  ./test/*.spec.js
npm install babel-register --save-dev
```
PS:执行当前目录下的npm包而不是全局的npm包
http://blog.csdn.net/danzhang1010/article/details/50528598
查看有道笔记

# 发布到npm和github
