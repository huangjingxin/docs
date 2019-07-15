# Git 常用命令

## 全局参数配置

```bash
git config --global user.name "GitHub username"
git config --global user.email "email@example.com"
```

## 创建版本库

```bash
git init
```

## 添加和提交

（1）**添加**到暂存区

```bash
git add .
```

（2）**提交**到版本库

```bash
git commit -m "<message>"
```

## 查看

（1）查看当前状态（随时查看）

```bash
git status
```

（2）查看不同（添加前使用）

```bash
git diff
git diff HEAD -- <file> 	// 注意：-- 两边都有空格，然后后面填写文件名
```

（3）查看历史纪录

```bash
git log

# 查看精简信息
git log --pretty=oneline

# 查看历史操作记录
git reflog
```

## 版本回退

```bash
# 回退到上个版本
git reset --hard HEAD^^

# 回退到上 n 个版本
git reset --hard HEAD~n

# 跳转到指定 ID 的版本
git reset --hard <id>
```

## 撤销修改

分三种情况

（1）只修改了工作区

只需要用版本库把工作区还原就行了

```bash
git checkout -- file
```

（2）修改了工作区并提交到了暂存区

分两步：1.删除暂存区内容  2.用版本库把工作区还原

```bash
git reset HEAD <file>
git checkout -- file
```

（3）修改了工作区，并且最终提交到了版本库

参照**版本回退**

## 删除文件

文件已经提交到了版本库，如果再想删除提交的文件，分两步：

```bash
# 删除工作区文件
git rm <file>

# 再次提交
git commit -m "<message>"
```

## 远程仓库

### 本地提交到远程仓库

```bash
git push origin master
```

（1）明文免密提交

```bash
git config --global credential.helper store		// 全局配置“记住密码”
```

执行后 `.gitconfig` 会多出 `[credential] helper=store`，后续只需再输入一次就可以记住密码

（2）公钥免密提交

把用户主目录下的 `.ssh/id_rsa.pub` 文件粘贴到SSH公钥

### 拉取远程仓库到本地

```bash
# 克隆
git clone https://github.com/huangjingxin/www.git

# 更新
git pull

# 强制更新
git fetch --all && git reset --hard origin/master && git pull
```

## 分支管理

（1）创建与合并分支

```bash
# 查看分支
git branch

# 创建分支
git branch <name>

# 删除分支
git branch -d <name>

# 强制删除分支
git branch -D <name>

# 切换分支
git checkout <name>

# 创建并切换分支 【-b 是 branch 的缩写】
git checkout -b <name>

# 合并 name 分支到当前分支
git merge <name>
```

（2）解决冲突

两个分支的内容不一样时，产生冲突，此时就要先解决冲突。

解决冲突：把冲突处修改成自己想要的样子，再进行提交。

```bash
# 命令合并图，一行，名字缩写
git log --graph --pretty=oneline --abbrev-commit
```

（3）分支管理策略

尽量不要使用 `fast forward` 方式提交，这样会看不到分支信息。

```bash
git merge --no-ff -m "with no-ff" <name>
```

![工作图解](./git.png)

几个基本原则：

- master 用来发布
- dev 用来干活
- 每个人都有自己的分支

（4）工作现场

如果当前工作内容不能提交的情况下去修改其它分支上的 BUG，可以把暂时工作现场存储起来。

```bash
# 存储工作现场
git stash
```

恢复并删除存储的工作现场，有两种方式：

1. 先恢复，再删除

```bash
# 恢复
git stash apply <name>

# 删除
git stash drop <name>
```

2. 恢复并删除

```bash
git stash pop
```

工作现场存储列表

```bash
git stash list  // 展示列表
```

（5）多人协助

查看远程仓库信息

```bash
git remote
git remote -v // 更详细
```

创建跟远程一样的分支

```bash
git checkout -b <name> origin/<name>
```

推送分支

```bash
# 推送到 master 分支
git push origin master

# 推送到 name 分支
git push origin <name>
```

报错`no tracking information`，使用`git pull`，没有关联报错，先关联再pull

```bash
git branch --set-upstream-to=origin/<name> dev  // 关联<name>分支
```

产生冲突，解决冲突后再重新提交

（6）Rebase

当分支合并过多时，日志看起来很乱，使用命令可以把分支整理合并

```bash
git rebase
```

## 标签管理

发布版本时，给发布的那个版本打上标签，方便后面查找。

### 创建标签

```bash
# 给当前提交打上 name 标签
git tag <name>

# 给指定 commit 的 id 打上 name 标签
git tag <name> <commit id>

# 给标签加上 message 说明
git tag -a <name> -m "<message>" <commit id>
```

### 查看标签

```bash
# 查看标签
git tag

# 查看 name 标签详细信息
git show <name>
```

### 操作标签

```bash
# 删除本地 name 标签
git tag -d  <name>

# 提交 name 到远程仓库
git push origin <name>

# 提交所有本地标签
git push origin --tags
```

### 删除远程标签

```bash
# 删除本地 name 标签
git tag -d <name>

# 提交删除
git push origin :refs/tags/<name>
```

## 使用码云

[GitHub](https://github.com/) 国内访问速度慢、有时还无法连接，so，我使用 [码云](https://gitee.com/) 

SSH 公钥 、关联

既关联 GitHub，又关联码云

```bash
# 查看远程库信息
git remote --v

# 删除 origin 远程库
git remote rm origin

# 关联 GitHub
git remote add github https://github.com/huangjingxin/docs.git

# 关联码云
git remote add gitee https://gitee.com/wongjingxin/docs.git
```

## 自定义 Git

### 忽略特殊文件名

- 编译产生的中间件，比如 Java 的 .class
- 开发软件配置文件，比如 WebStorm 的 .idea
- 敏感信息保留文件，比如 账号密码文件

```bash
# 忽略文件目录 【给文件夹添上 ‘/’，便于区分】
.class
.idea
node_modules/
dist/

# 忽略文件
password.txt

# 忽略日志文件
*.log
```

### 命令简写

例如，将 `status` 简写成 `st` 

```bash
git config --global alias.st status
```

以后可以使用 `git st` 替换 `git status` 命令

```bash
git config --global alias.lg "log --graph --pretty=oneline --abbrev-commit"
```

使用 `git lg` 就可以看分支图

### 搭建 Git 服务器

推荐 Gitlab，请百度解决。

::: warning 注意
本文是学习 [廖雪峰 Git 教程](https://www.liaoxuefeng.com) 后的总结，为了不误导人，特意贴上源网址。
:::