# ES6语法转ES5

## 插件

需要用到 Babel 和 babel-preset-es2015

```bash
# 查看是否安装 
npm ls -g babel-cli

# 全局安装 babel-cli
npm install -g babel-cli

# 项目中两个 devDependencies babel-preset-es2015 babel-cli
npm install --save-dev babel-preset-es2015 babel-cli
```

## 文件

在根目录下新建 **.babelrc** 文件，写入代码

```json
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```

## 使用

在 package.json 文件中加入

```json
"scripts": {
   "build": "babel src/index.js -o dist/index.js"
}

// 转换整个目录
babel src --out-dir dist
babel src -d dist
```

## 运行

```bash
# 运行代码，即可在 dist 目录中看到转换后的 index.js
npm run build
```
