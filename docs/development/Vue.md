# 环境搭建

从零开始搭建 Vue 开发用的环境

## Vue全局开发环境搭建

### 安装新环境

1. node
2. yarn
3. vue-cli
4. hotel
5. json-server
6. mock

### 生成新项目

```bash
vue init webpack <name>
```

- vue-router(Y)
- EsLint (N)
- unit(N)
- Nightwatch(N)
- Yes,I choose yarn

### 项目试运行

```bash
# 添加服务器
hotel add "npm run dev"

# 删除服务器
hotel rm
```

## Vue 项目开发环境搭建

### tailwindcss

```bash
# yarn 安装 tailwindcss
yarn add tailwindcss --dev

# 配置文件
.\node_modules\.bin\tailwind init tailwind.js

# 加入 .postcssrc.js 
const tailwindcss = require('./tailwind');
'tailwindcss': tailwindcss,

# 加入 main.js
import 'tailwindcss/dist/tailwind.min.css'
```

### axios、vue-axios 、qs

```bash
# yarn 安装 axios
yarn add --save axios vue-axios qs

# 把配置文件 http/http.js 放在 src 中
# 从别人封装好的项目里拷贝省事

# 加入 main.js
import {get,post} from './http/http'
Vue.prototype.$get = get;
Vue.prototype.$post = post;
```

### vuex

```bash
# yarn 安装 vuex
yarn add vuex

# 加入 main.js
import Vuex from 'vuex'
Vue.use(Vuex)
```

### vue-awesome

```bash
# yarn 安装 vue-awesome
yarn add vue-awesome

# 加入 main.js
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon);
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

