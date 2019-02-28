# Vuepress 建站

确保 `node.js`、 `yarn`或者`npm`环境

## 常用命令

```bash
# yarn 安装 vuepress
yarn global add vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 项目运行
vuepress dev docs

#生成静态文件
vuepress build docs
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

### 文件名不能包含中文

虽然能编译成功，但是文档后面不会显示 『更新时间』，而且刷新该页会出现404.

```sh
# 错误
vuepress/vuepress建站.md

# 正确
vuepress/README.md
```

### 路径以`./`开头，不要使用`\`

虽然相对路径不使用`./`开头有时候也能用，但请不要抱侥幸心理。

`\`是 windows 的文件路径，用在 http 上没有效果，引入时注意改回来。