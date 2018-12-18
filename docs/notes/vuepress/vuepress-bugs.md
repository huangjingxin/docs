# vuepress踩坑

## 文件名不能包含中文

虽然能编译成功，但是文档后面不会显示 『更新时间』，而且刷新该页会出现404.

```
# 错误
vuepress/vuepress建站.md

# 正确
vuepress/README.md
```