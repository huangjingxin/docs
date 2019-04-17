# 数据验证

> 多用于对函数参数的判断，参数是否存在和数据类型是否正确。

## 参数是否存在

```js
function isNum(str){
    if(str) return;
    console.log(str)
}
```

## 数据类型判断

首先，常用的数据类型如下：

```js
var num  = 123;

var str  = 'abcdef';

var bool = true;

var arr  = [1, 2, 3, 4];

var json = {name:'wenzi', age:25};

var func = function(){ console.log('this is function'); }

var und  = undefined;

var nul  = null;

var date = new Date();

var reg  = /^[a-zA-Z]{5,20}$/;

var error= new Error();
```

常见的判断方法：

### typeof

常用于判断：number, string, boolean

### Object.prototype.toString.call

可以判断所有类型，jQuery 的 $.type 就是使用此方法。

## 字符的二次判断

判断是否是中文，里面是否有特殊字符。

待研究。。。



## 数组的二次判断

是否为空数组，内部是否存在空值。

数组一般用 `Array.isArray([])` 和 `Object.prototype.toString.call([])` 做初次判断。

**是否为空数组**

```js
arr.length === 0
```

**内部是否存在空值** --去空值

```js
arr.filter(x=>x)
```

与空值相对应的还有空字符串，比如 `['',' ']`。

::: warning 参考

https://www.cnblogs.com/zhangruiqi/p/8027338.html

:::



