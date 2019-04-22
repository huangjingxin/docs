# 函数体遍历循环

旋转跳跃、我闭着眼。--周杰伦《英雄》

## for

老古董，不解释。

## for...in

**优点**：可以循环**对象**的属性，也可用于遍历数组的索引。

**缺点**：会把继承来的属性也遍历出来。

```js
var obj = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key); 
    }
}
// 'name', 'age', 'city'
```

`for ... in`对`Array`的循环得到的是`String`而不是`Number`。

## for...of

**优点**：直接遍历**数组**的值，支持 **字符串**，arguments, DOM,Set,Map,generators的迭代。

**缺点**：兼容性差

```js
let str='huangjx'

for (let i of str) {
    console.log(i); 
}
// 'h','u','a','n','g','j','x'
```

## forEach

**优点**：可以把数组的**索引和值**同时遍历出来，同时也支持 Set,Map,generators 的迭代

**缺点**：不能用 `break` 或 `return false` 中断。

```js
var arr = [3, 5, 7, 9];

arr.forEach(i=>{
    console.log(i);
    if(i===7) break
})

// Uncaught SyntaxError: Illegal break statement

arr.forEach(i=>{
    if(i===7) return 'break'
    console.log(i);
})
// 3,5,9
```

## while

`for`循环在已知循环的初始和结束条件时非常有用。

当只有一个条件时，使用 while 循环能然逻辑更加清楚。

```js
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500
```

## do...while

至少执行一次。

## map

可以被打断，只能对数组生效。

```js
var arr = [3, 5, 7, 9];

arr.map(e=>{console.log(e)})
```

## some

满足条件就退出，实用方法与 map 一致。

## every

不满足条件就退出，实用方法与 map 一致。



:::warning 参考链接

https://www.liaoxuefeng.com/

https://www.zhangxinxu.com/wordpress/2018/08/for-in-es6-for-of/

https://blog.csdn.net/zhangjing0320/article/details/80677129

:::