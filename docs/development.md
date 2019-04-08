# 环境搭建

从零开始搭建 Vue 开发用的环境

## Vue全局开发环境搭建

### 安装环境

1. node
2. git
3. vue-cli
4. webpack
5. json-server
6. mock

### 生成新项目

```bash
vue init webpack <name>
```

### 项目试运行

```bash
npm run dev
```

## Vue 项目开发环境搭建

## vuex

```bash
# 安装 vuex
npm install vuex --save
yarn add vuex

# 加入 main.js
import Vuex from 'vuex'
Vue.use(Vuex)

# 兼容 IE
npm install es6-promise --save
yarn add es6-promise
```

### tailwindcss

```bash
# 安装 tailwindcss
npm install tailwindcss --save-dev
yarn add tailwindcss --dev

# 配置文件
.\node_modules\.bin\tailwind init tailwind.js
.\node_modules\.bin\tailwind init tailwind.js --no-comments # 无注释

# 加入 .postcssrc.js 
const tailwindcss = require('./tailwind');
'tailwindcss': tailwindcss,

# 加入 main.js
import 'tailwindcss/dist/tailwind.min.css'
```

### axios

```bash
# 安装 axios
npm install axios

# 在原型上添加方法，使得全局共享
Vue.prototype.$get = get;
Vue.prototype.$post = post;
```

### scss/sass

```bash
# 安装 sass （sass-loader依赖于node-sass）
npm install sass-loader node-sass --save-dev

# build 文件夹下的 webpack.base.conf.js的 rules
{
    test: /\.scss$/,
    loaders: ["style", "css", "sass"]
},

# 识别标识
<style lang="scss" scoped>

# 安装 sass-resources-loader （让指定 scss 变成全局）
npm install sass-resources-loader --save-dev

# 修改 build 中的 utils.js
scss: generateLoaders('sass')

修改成:

scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
      resources: path.resolve(__dirname, '../src/assets/global.scss')
    }
  }
)
```

## JSON 数据环境

### 有数据

```bash
json-server --watch <name> --port 3000
```

### 无数据

mockjs 环境

编写一个 js 的 name 文件

```bash
# 运行 js 文件
json-server <name>

# 加入 hotel
hotel add "json-server <name>"
```

