# shell

> Shell 既是一种脚本编程语言，也是一个连接内核和用户的软件。bash shell 是 Linux 的默认 shell。

## 查看shell

```bash
# 
cat /etc/shells

# 
echo $SHELL
```

## 第一个脚本

```bash
# 
echo "hello, world"
```

## 执行文件

```bash
# test.sh
#!/bin/bash
echo "What is your name?"
read PERSON
echo "Hello, $PERSON"

# 
chmod +x ./test.sh
./test.sh
```

## 变量

```bash
# 
str=123
str='huangjx'
str="huangjingxin"

# 
local str="huangjingxin"

# 
$n ${n} $#、$*、$@、$?、$$
```

## 字符串

```bash
# 
${#string_name}

# 
str="${str1}:${str2}"

# 

```

未完待续。。。