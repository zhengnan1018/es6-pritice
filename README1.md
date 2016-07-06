让nodeJS 支持ES6 语法----bable 的安装与使用

1.安装es-checker
  $ npm install -g es-checker

2.在工作目录下生成package.json, 并在工作目录下执行命令安装babel-cli
  $ npm init
  $ npm install babel-cli --save-dev

3.安装一个全局的 babel-cli
  $ npm install -g babel-cli

4.在工作目录下创建 .babelIrc 的文件

5.在工作目录下，安装babel-preset-es2015
  $ npm install babel-preset-es2015 --save-dev

6.测试命令
  $ babel-node index.js
