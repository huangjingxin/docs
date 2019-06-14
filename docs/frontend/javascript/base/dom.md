# dom

DOM 也就是元素节点，主要介绍 DOM 的属性和简单操作。

## 属性

| 属性             | 释义         | 例子               |
| ---------------- | ------------ | ------------------ |
| nodeName         | 标签名       | p、div             |
| style            | 节点样式     | color、borderColor |
| parentNode       | 父节点       |                    |
| innerHTML        | 内部元素     |                    |
| innerText        | 内部文本     |                    |
| querySelector    | 查询（单个） |                    |
| querySelectorAll | 查询（数组） |                    |
| createElement    | 创建元素节点 |                    |
| createTextNode   | 创建文本节点 |                    |
| insertBefore     | 插入         |                    |
| appendChild      | 增加         |                    |
| append           | 增加         |                    |
| remove           | 删除         |                    |

## 样例

```html
<ul>
   <li>red</li>
   <li>yellow</li>
   <li>blue</li>
   <li>green</li>
   <li>black</li>
   <li>white</li>
</ul>
```

## 操作

```js
// 查询
document.querySelector('ul>li:first-child')
document.querySelector('ul>li:nth-child(2)')
document.querySelector('ul>li:last-of-type')

// 增加
let ul = document.querySelector('ul');
let orange = document.createElement('li');
orange.innerText = 'orange';
ul.append(orange);

// 插入
let blue=document.querySelector('ul>li:nth-child(3)')
ul.insertBefore(orange,blue);

// 修改
let green = document.querySelector('li:nth-child(4)');
green.innerText = 'teal';

// 删除
let white = document.querySelector('li:nth-child(6)');
white.remove();
```

