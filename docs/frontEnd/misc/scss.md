# 使用scss

scss 基于 Ruby 开发，需要安装 Ruby 环境才能使用。

## 安装 Ruby

[官网下载 Ruby ](https://rubyinstaller.org/downloads/)并安装。安装时全部 √ ，确保能安装成功。完成前的 √ 不要选。

测试安装是否成功，cmd 中输入：

```bash
ruby -v

ruby 2.6.0p0 (2018-12-25 revision 66547) [x64-mingw32]
```

国内网络问题，需要换 gem 源

```bash
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/

# 查看是否改为 https://gems.ruby-china.com/
gem sources -l
https://gems.ruby-china.com/
```

## 安装sass

```bash
gem install sass
gem install compass

# 查看是否安装成功
sass -v
compass -v
```

sass常用命令

```bash
# 更新sass
gem update sass

# 查看sass版本
sass -v

# 查看sass帮助
sass -h
```

## 使用sass

命令行编译

```bash
# 单文件转换命令
sass input.scss output.css

# 单文件监听命令
sass --watch input.scss:output.css
```

::: warning 注意

上面的是 input.scss，不要写错了