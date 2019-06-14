# 重学JavaScript

> 对比两个大佬的文章（阮一峰、廖雪峰），重新学习一遍 JavaScript。

## set/map

arr、set、map 三种都是 iterable，可以使用 for...of/forEach 遍历

## symbol

没有 new 关键字，解决属性名冲突问题。

- Symbol()

## proxy

代理，对象拦截层

```javascript
let huangjx = new Proxy({
    name: '黄敬鑫',
    age: 24
}, {
    get: function (target, key, property) {
        return target[key]
    },
    set: function (target, key, value, receiver) {
        return target[key] = value
    }
})
```

思考：能不能用 proxy 实现 API？

## 作用域

- var
- let
- const
- this

## 解构赋值

- 变量交换
- ...rest/arguments
- 数组
- 对象

## apply/call

- func.apply(element,arr)
- func.call(element,arguments)

## map/reduce

什么时候使用 map 合适，for/for...in/for...of/forEach/map 有什么区别？

 [这篇文章有更多介绍。](./function-loop.md)  

## 闭包

到现在都学的一头雾水。

- 私有变量
- 回调

## 箭头函数

解决对象 this 指向问题

## generator

- function* ()
- yield
- next()
- for...of
- 异步代码，同步写法。

## date

- Date.now()
- new Date()

## regexp

- test
- exec

## json

- json vs xml
- JSON.stringify()
- JSON.parse()
- 参数
- 格式化/筛选

## promise

以吃饭为例，买菜 - 做饭 - 吃饭。假设每一样都要花费半个钟。

下面三种方式都可以，第三种最优雅。共同点：前一步的结果作为下一步的参数，只能使用异步执行。

- 回调
- promise
- async/await

## 面向对象

```js
// 构造函数
function Student(name){
	this.name = name;
	this.say = function(){return this.name+' is a student'}
}

// 原型+方法
Student.prototype.job = function(){ return this.name +' has no job.'}

// new 实例
let xiaoming = new Student('小明')
let xiaohong = new Student('小红')

// 有趣现象
xiaoming.say === xiaohong.say // false
xiaoming.job === xiaohong.job // true
```

- \_\_proto\_\_
- Object.create()
- 原型链
- prototype
- constructor
- new
- 实例  ~~prototype~~

## class

```javascript
// es6
class Student {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`${this.name} is a student!`)
    }
}

// 继承
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }
    getGrade() {
        alert('I am at grade ' + this.grade);
    }
}
```

- class
- extends
- super

## 浏览器

多种浏览器，差异主要在 AJAX、File、ES6

- IE
- Chrome
- Safari
- Firefox

## 浏览器对象

- window
- navigator
- screen
- location
- document & document.cookie
- ~~history~~

## dom

[dom](../base/dom.md) 

## input

用 value 获得用户输入：

- text
- password
- hidden
- select  （特殊）

用 checked 获得选择结果：

- radio
- checkbox

HTML5 新增控件

- date
- datetime
- datetime-local
- color

type = file 文件控件

- value
  - endsWith
- files （HTML5）
  - multiple
  - name
  - size
  - type
  - new FileReader()

头像上传，320*320，预览：

```html
<input type="file" name="file">
<div class="outer">
    <div class="inner"></div>
</div>

<script>
    let input = document.querySelector('input[type="file"]');
    let inner = document.querySelector('.inner');

    input.addEventListener('change', () => {
        let file = input.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            let data = e.target.result;
            inner.style.backgroundImage = 'url(' + data + ')';
        };
        reader.readAsDataURL(file);
    })
</script>
<style>
    .outer {
        height: 320px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .inner {
        height: 320px;
        width: 320px;
    }
</style>
```

## ajax

ajax 是什么？ 异步网络请求（Asynchronous JavaScript and XML）

```javascript
let request = new XMLHttpRequest();

request.onreadystatechange = function () { 
    if (request.readyState === 4) {
        if (request.status === 200) {
            return success(request.responseText);
        } else {
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

request.open('GET', '/api/categories');
request.send();
```

**异步、跨域、模块化** 是前端的三座大山。下面开始进入迷茫模式 >_>

## 跨域

- 代理服务器
- JSONP
- CORS

## 异步

- ajax
- promise
- async / await

## 模块化

- import / export
- type="module" (:point_right: ~~IE~~ :point_up::dog:)
- module.export / require (node)

## canvas

坐标 画图 整合

## 思考

上面所有都是基础，很多人在框架中迷失了自己，包括我。

现在前端已经有了巨大的飞跃，这一切都是基于 JavaScript 本身，而 node.js 只是间接推动。浏览器新增 API ，但是再怎么变化，它的基础都还是三件套（HTML、CSS、JavaScript）。

随着网页越来越大，前端的代码量也越来越多，难以被开发者阅读，这时候模块化就出现了。 把数据和函数封装在单独的文件中，只对外暴露接口，核心文件只写业务逻辑。伴随着模块化的还有打包器，webpack 是其中最厉害的。这就是现代前端，真正意义上从网页进化成 webapp。

别高兴太早，为什么现在前端要叫“大前端”？模块化和打包器的出现，成就了满天飞的框架和组件，连一个轮播图都能搜索出来无数组件，极其夸张。它们把前端开发者从水深火热中拯救出来，然后丢到永无止境的包和框架中，近年来出现的“老子再也学不动了”、“扶我起来，我还能再学”等非常受追捧的词，绝逼不是空穴来风。

这也造就了一些没什么水平的开发者，称他们为开发者，感觉有辱这个词，暂且称他们为“只会使用框架的菜逼”，比如之前的我就是这样，什么东西都是 vue-cli 一把梭，遇到需求第一时间不是想自己怎么做，而是搜索有没有框架能做，框架报错就百度找答案。典型的：水平不够，框架来凑。

下面来说说为什么会出现模块化和打包器，而且你还不得不用。

- 模块化
  - 引用 node_module
  - 底层代码和业务逻辑分开
  - 模块复用
- 打包器
  - loader 装换，尤其是 babel
  - 正确处理 export 和 import 

 





