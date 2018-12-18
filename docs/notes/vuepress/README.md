# Vuepress 建站

确保 `node.js`、 `yarn`或者`npm`环境

## 常用命令

```bash
# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 项目运行
yarn docs:dev # 或者：npm run docs:dev

#生成静态文件
yarn docs:build # 或者：npm run docs:build
```

## 目录结构

```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

## Markdown拓展

### 自定义容器

```text
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

效果：

::: tip 技巧
标签后面可自定义自己的文字
:::

### 目录

```text
[[toc]]
```

### 直接使用vue语法

```vue
<span v-for="i in 3">{{ i }} </span>
```

### 代码高亮

```js{4}
<p>{{name}}</p>
new Vue({
    data:{
        name:'huangjingxin',
        age:23,
    }
})
```

## 建站问题

[使用 vuepress 建站遇到的一些问题](./vuepress-bugs.md)