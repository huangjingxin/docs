# Vuepress 建站

确保 `node.js`、 `yarn`或者`npm`环境

## 常用命令

```bash
# npm 安装 vuepress
npm install -g vuepress

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

### 技巧-注意-小心

```text
::: tip 技巧
This is a tip
:::

::: warning 注意
This is a warning
:::

::: danger 小心
This is a dangerous warning
:::
```

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
        age:24,
    }
})
```

### 导入代码段

```md
# 支持 html css js 等，也支持代码高亮 
<<< @/filePath{2}
```

<<< @/docs/notes/server/vuepress/test.html{2}


## YAML front matter

```yaml
---
navbar: false
sidebar: false
sidebarDepth: 2
editLink: false
prev: ./some-other-page
next: false
---
```

## 注意事项

### 文件名不能包含中文

虽然能编译成功，但是文档后面不会显示 『更新时间』，而且刷新该页会出现404.

```sh
# 错误
vuepress/vuepress建站.md

# 正确
vuepress/README.md
```

### 路径以`./`开头，不要使用`\`

`\`是 windows 的文件路径，用在 http 上没有效果，引入需要注意。

```bash
# 错误
D:\vuepress\image\logo.jpg

# 正确
./vuepress/image/logo.jpg
```

### 文内不要有裸露的标签

md文件最终解析为html，裸露的标签会影响解析。








