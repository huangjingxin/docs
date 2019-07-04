# Shell

> Shell 既是一种脚本编程语言，也是一个连接内核和用户的软件。Bash Shell 是 Linux 的默认 Shell。

## 查看shell

```bash
# 所有 shell
cat /etc/shells

# 查看默认 shell
echo $SHELL
```

## 第一个脚本

```bash
# 语言的灵魂
echo "hello, world"
```

## 执行文件

```bash
# test.sh
#!/bin/bash
echo "What is your name?"
read PERSON
echo "Hello, $PERSON"

# 执行 test.sh
chmod +x ./test.sh
./test.sh
```

## 变量

```bash
# 变量
str=123
str='huangjx'
str="huangjingxin"

# 局部变量
local str="huangjingxin"

# 特殊变量
$n ${n} $#、$*、$@、$?、$$
```

## 字符串

```bash
# 字符串长度
${#string_name}

# 拼接字符串
str="${str1}:${str2}"

# 

```

未完待续。。。