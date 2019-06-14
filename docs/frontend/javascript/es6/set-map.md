# set和map数据结构

> Set、WeakSet、Map、WeakMap，兼容性很好（IE11+）

## set

类似数组，内部元素不重复。（元素的 key 等同于 value）

```js
let set = new Set([1,2,3])
```

属性

- size

方法

- add
- delete
- has
- clear

遍历

- for...of
- forEach

为什么用？

1. 内部元素不重复，无顺序
2. 使用 has 而不是 indexOf，查询速度快

## WeakSet

跟 Set 差不多，但是只能存数组或者对象，特别适合存 DOM。垃圾回收机制不一样，删除不会引发内存泄露。没有 size 属性，也不能遍历。

## map

```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);
```

属性

- size

方法

- set(key,value)
- has
- get
- delete
- clear

遍历

- for...of
- forEach

为什么使用？

1. 没有复杂的继承关系，查询速度快

## WeakMap 

类似上面的 WeakSet，这种知识太高深，现阶段不掌握也行。





