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

常用于判断：number、string、boolean、function 和 undefined。

- 判断某个全局变量是否存在用`typeof window.myVar === 'undefined'`；
- 判断某个局部变量是否存在用`typeof myVar === 'undefined'`。

```js
typeof num
```

### Object.prototype.toString.call

可以判断所有类型，jQuery 的 $.type 就是使用此方法。

```js
Object.prototype.toString.call(num)
```

### [廖雪峰的几条守则](https://www.liaoxuefeng.com/wiki/1022910821149312/1023021722631296)

- 不要使用`new Number()`、`new Boolean()`、`new String()`创建包装对象；
- 用`parseInt()`或`parseFloat()`来转换任意类型到`number`；
- 用`String()`来转换任意类型到`string`，或者直接调用某个对象的`toString()`方法；
- 通常不必把任意类型转换为`boolean`再判断，因为可以直接写`if (myVar) {...}`；
- 判断`Array`要使用`Array.isArray(arr)`；
- 判断`null`请使用`myVar === null`；

## 字符的二次判断

判断是否是中文，里面是否有特殊字符。

待研究。。。



## 数组的二次判断

是否为空数组（[]），内部是否存在空值（['a','',2,,3]）。

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



