# export&import

模块化编程必须要掌握的两个方法：输出和引入。

::: warning 注意

两种方法都属于 node 的知识，所以以下代码无法在浏览器的控制台执行，可以使用 babel-cli 内置的 babel-node 来执行。文后有链接到阮一峰的教程，里面有教。

:::

## import

首先从引入开始讲，因为从刚入门编程开始 我们无时无刻不在用它。

根据输出的不同，引入的方式分两种，一种是引入默认值，一种是引入固定值。

### 引入默认值

使用 `Vue` 时，这是我们最常用见到的引入模块方式

```js
import Vue from 'vue'
```

它的意思是从 `node_module` 的 `vue` 中引入文件 。

### 引入固定值

如果你使用过组件，这种方式应该不陌生

```js
import { Button } from 'vant';
```

那它跟上面的有什么区别呢？为什么有的要加大括号，有的又不用。这就要从输出讲起。

## export

输出，负责把变量暴露出去。这个变量可以是 String 、Array 、Object、function 等。

### 固定值输出

直接输出字符串，比如：

```js
# temp.js
export let a = 'huangjx'

# index.js
import {a} from './temp'

# 控制台打印
console.log(a)		//huangjx
```

export 可以暴露多次，也可以一次暴露多个变量，最终他们会被封装成一个对象输出。比如：

```js
# temp.js
let school = 'szy'
let name = 'huangjx'
let grade = 2
export {
    school
}
export {
    grade,
    name as student
}
```

接收三个变量，当然，你也可以只接收部分。

```js
# index.js
import {school,student,grade} from './temp'
```

打印出来

```js
# 控制台打印
console.log(school,student,grade)		//szy huangjx 2
```

看出来没有，引入的作用就相当于一个**解构赋值**，上面的赋值就相当于这样：

```js
let {school,student,grade} = {school:'szy',student: 'huangjx',grade: 2}
```

`temp.js`输出的内容自动组成一个对象，前面的元素对应对象的属性。

::: warning 注意

看起来后面的对象能被一个变量接收，可实际是不行的，只能用对象接收对象。

:::

### 默认值输出

`export default`，**一个文件只支持一个默认值**，不能与固定值混用。

默认值默认输出变量`default`，需要用一个变量接收，所以 `import` 时不加大括号。

1. 输出变量

```js
# temp.js
let name = 'huangjx'
export default name
```

```js
# index.js
import temp from './temp'
```

```
console.log(temp)	//"huangjx"
```

相当于

```js
let temp = default = "huangjx"
```

2. 输出对象

```js
# temp.js
let school = 'szy'
let student = 'huangjx'
let grade = 2
export default {
    school,
    student,
    grade
}
```

用变量接收

```js
# index.js
import data from './temp'
```

控制台打印

```js
console.log(data)		//{ school: 'szy', student: 'huangjx', grade: 2 }
```

默认值输出就相当于输出了一个 default 变量：

```js
default={ school: 'szy', student: 'huangjx', grade: 2 }
```

这时引入的作用就相当于，把一个 default  变量赋值给另一个变量

```js
let data = default
```

## 结束语

由于都是学习并且测试出来的，难免很多疏漏，希望有心深入学习的人去看阮一峰大神的书，附上地址。

《[ECMAScript 6 入门](http://es6.ruanyifeng.com)》 里面 Module 章节有讲，并且非常详细。









