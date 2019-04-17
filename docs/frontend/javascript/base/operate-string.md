# 字符串

把你的心我的心串一串，串一株幸运草串一个同心圆。    --小虎队《爱》

```js
// 定义两个 字符串
let str1 = 'huang';
let str2 = 'jingxin'
```

## 合并

```js
// 拼接法
let name = 'I\'m ' + str1 + str2

// es6 模版语法
let name= `'I\'m '${str1}${str2}`
```

## 大小写

```js
// 全部转大写
str1.toUpperCase();

// 全部转小写
str1.toLowerCase();
```

## 截取

```js
// 截取前三位
str1.substring(0, 3) //hua
```

## 数组

```js
// 拆分字符串
'huang'.split('') //["h", "u", "a", "n", "g"]
'logo.jpg'.split('.')  //["logo", "jpg"]

// split的其它参数
let time = "2019-2-27";

time.split('-') //["2019", "2", "27"]
time.split('-',2) //["2019", "2"]

// 配合数组的 join 方法可以实现字符串的拆分重组
```

## 去空

```js
// 带空格的字符串
let str=' 6 6 '

// 左空格
str.replace(/^\s*/,"");//'6 6 '
str.trimLeft();

// 右空格
str.replace(/(\s*$)/g,"");//' 6 6'
str.trimRight();

// 两边空格
str.replace(/^\s*|\s*$/g,"");//'6 6'
str.trim()；

// 所有空格
str.replace(/\s*/g,"");//'66'
```



:::warning 参考资料

https://www.cnblogs.com/a-cat/p/8872498.html

:::







