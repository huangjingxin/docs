# tailwind

一个实用工具集 CSS 框架，用于快速构建定制化用户界面。

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

## 布局

### flex布局

| 样式     | 写法           | 属性                    |
| -------- | -------------- | ----------------------- |
| 盒子     | flex           | display: flex           |
| 方向     | flex-row       | flex-direction: row     |
| 不换行   | flex-no-wrap   | flex-wrap: nowrap       |
| 水平居中 | justify-center | justify-content: center |
| 垂直居中 | items-center   | align-items: center     |
| 特例     | self-end       | align-self:flex-end     |
| 自适应   | flex-1         | flex: 1                 |

### 其它布局

| 样式     | 写法        | 属性               |
| -------- | ----------- | ------------------ |
| 行内元素水平居中 | text-center | text-align: center |
|     行内元素垂直居中     |      align-middle      | vertical-align: middle |
| 是否换行 | whitespace-normal | white-space: normal |


## 字体

| 样式     | 写法           | 属性 |
| -------- | -------------- | ---- |
| 大小     | text-lg        |   font-size: large   |
| 粗细     | font-bold      |  font-weight: bold    |
| 左右间距 | tracking-wide  |   letter-spacing: 2px   |
| 上下间距 | leading-normal |    line-height: normal  |

## 样式

| 样式     | 写法      | 属性                    |
| -------- | ---------- | ----------------------------- |
| 列表 | list-reset | list-style: none; padding: 0; |
|  A标签| no-underline | text-decoration: none |
| 下划线 | underline | text-decoration: underline |

## 杂项

| 样式     | 写法      | 属性                    |
| ---- | ---- | ---- |
| 鼠标手 | cursor-pointer | cursor: pointer |
| 阴影 | shadow | box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10) |
| 透明 | opacity-50 | opacity: .5 |
| 外框 | outline-none | outline: 0 |
| 超出省略 | truncate | overflow: hidden;<br />text-overflow: ellipsis;<br />white-space: nowrap |

## [颜色](https://www.tailwindcss.cn/docs/customizing-colors#black-white)

常用颜色的查询及使用