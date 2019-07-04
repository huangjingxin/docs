# 函数体遍历循环

> 编程用最多的就是遍历，我喜欢把它们分为两类：循环和函数。

## 循环

循环就是对内容进行遍历，不一定要用 return 输出，**可以使用 break 打断**。

### for

老古董，兼容性贼好，代码量最多。

```javascript
let arr=[1,3,5,7];

for(let i=0;i<arr.length;i++){
    console.log(i)
}
```

### for...in

**优点**：可以循环**对象**的属性，也可用于遍历数组的索引。

**缺点**：会把继承来的属性也遍历出来。

```js
let obj = {
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

### for...of

**优点**：直接遍历**数组**的值，支持 **字符串**、arguments、DOM、Set、Map、generators 的迭代。

**缺点**：兼容性差（IE 不支持）

```js
let str='huangjx'

for (let i of str) {
    console.log(i); 
}
// 'h','u','a','n','g','j','x'
```

### while

`for`循环在已知循环的初始和结束条件时非常有用。

当只有一个条件时，使用 while 循环能然逻辑更加清楚。

```js
let x = 0;
let n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500
```

### do...while

至少执行一次。

## 函数

高阶函数，除了 forEach 外，都**只能作用于数组**，**使用 break 无效**。

### forEach

**优点**：可以把数组的**索引和值**同时遍历出来，同时也支持 Set、Map、generators 的迭代

```js
let arr = [3, 5, 7, 9];

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

### map

```js
let arr = [3, 5, 7, 9];

arr.map((e,index,arr)=>{console.log(e,index,arr)})
```

### some

return true 退出，使用方法与 map 一致。

### every

return false  退出，使用方法与 map 一致。

**注意**：没有 return 即认为 return false

### find

查找符合的元素，找到即返回该元素。举个栗子，模糊查找，代码如下：

```js
let arr = ['Apple', 'Pear', 'Orange'];

arr.find(x => x.toLowerCase().includes('oran'));
```

### findIndex

查找符合的元素，找到即返回该元素的索引。



:::warning 参考链接

https://www.liaoxuefeng.com/

https://www.zhangxinxu.com/wordpress/2018/08/for-in-es6-for-of/

https://blog.csdn.net/zhangjing0320/article/details/80677129

https://blog.csdn.net/weixin_36934930/article/details/81061063

:::