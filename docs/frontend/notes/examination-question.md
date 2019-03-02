# 面试必做题目

面试必问的题目，必须掌握。

## es6

1. let 和 const
2. 解构赋值
3. 箭头函数
4. 数组拓展运算符 [...arr]
5. promise
6. async / await
7. iterator 和 for...of 
8. Set 和 Map
9. 模块 import 和 export

## js的原型、原型链？





## html标签

```text
（1）行内元素有：a b span img input select strong（强调的语气）
（2）块级元素有：div p h1 h2 h3 h4 ul ol li dl dt dd…

（3）常见的空元素：<br> <hr> <img> <input> <link> <meta>
    鲜为人知的是：<area> 
```

## 浏览器内核

Trident(IE内核)

Webkit(Safari内核,Chrome内核原型,开源)

Gecko(Firefox内核)

Chrome

Blink

## cookies，sessionStorage 和 localStorage

```text
cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

存储大小：
    cookie数据大小不能超过4k。
    sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

有期时间：
    localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
    sessionStorage  数据在当前浏览器窗口关闭后自动删除。
    cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
```

## CSS优先级算法

```text
同权重: 内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。
!important > id > class > tag
important 比 内联优先级高
```

## 事件捕获与事件冒泡

除 IE6,7,8 不支持事件捕获外，基本所有浏览器都支持同时支持两个事件。

三个阶段(1~5)捕获过程、(5~6)目标过程、(6~10)冒泡过程

**原生 onclick 事件**：

1. 如果点击的是目标元素，则事件发生在了捕获阶段。
2. 如果点击的是目标元素的子元素，则事件发生在了冒泡阶段。

### 事件绑定

1. 直接在元素里面使用事件属性

   ```html
   // 只能绑定一个事件
   <button onclick="test()">test</button>
   ```

2. 直接获取元素绑定：

   ```js
   // 只能绑定一个事件
   // 注意：如果同时有1、2两种存在，则2会覆盖1
   element.onclick = function(e){
           // ...
       };
   ```

3. W3C方法：

   ```js
   // 不支持 IE 浏览器
   element.addEventListener('click', function(e){
           // ...
       }, false);
   
   // IE 使用 attachEvent ，解除使用 detachEvent ，this 指向 window 对象
   element.attachEvent('onclick', function(){
           // ...
   });
   ```

### 阻止事件传播

```js
element.addEventListener('click',function(e){
    e.stopPropagation()
})
```

### 阻止事件的默认行为

```js
element.addEventListener('click',function(e){
    e.preventDefault()
})
```

## 事件委托

```html
<ul id="color-list">
    <li>red</li>
    <li>yellow</li>
    <li>blue</li>
    <li>green</li>
    <li>black</li>
    <li>white</li>
</ul>
```

点击 li 打印出颜色，正常写法如下：

```js
function bind() {
    for (let i = 0; i < colors.length; i++) {
        colors[i].onclick = () => {
        console.log(colors[i].innerText)
        }
    }
}
bind();
```

使用事件委托写法：

```js
colorList.addEventListener('click',e=>{
   if(e.target.nodeName.toLowerCase()==='li'){
       console.log(e.target.innerText)
   }
})
```

事件委托的优点：对于**新增**的 DOM 也能生效。



