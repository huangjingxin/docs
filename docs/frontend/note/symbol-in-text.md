# 文本中的符号

> 换行符、回车符、\n、\r、\n\r 

## HTML

我们都知道  `<br>` 表示行级标签的换行。

## Text

多数的符号都是用在文本中，下面一一了解。

```bash
# tab 制表符
\t

# return 回车
\r

# newline 换行
\n

# 换行+回车
\n\r
```

### Windows

'\r' 回车，回到当前行的行首，而不会换到下一行，如果接着输出的话，本行以前的内容会被逐一覆盖；

'\n' 换行，换到当前位置的下一行，而不会回到行首；  

'\r\n'下一行，跳转到下一行的行首。

### Mac

Mac系统里，每行结尾是“<回车>”，即"\r"

### Linux

Unix系统里，每行结尾只有“<换行>”，即"\n"

## 理解

```js
// \t 
console.log('hua\tngjingxin');
console.log('huang\tjing\txin');
console.log('huangjing\txin');

// \n 
console.log('huang\njingxin');
```

上面代码可以在浏览器控制台运行，先看到效果容易理解：

1. `\n` 只表示换行，没其他作用；
2. `\t` 表示 Tab 键效果，
   - 字符串（  = 4  ），后面加 4 空格；
   - 字符串（！=4），后面添加空格，使字符串长度为 4 的倍数。

