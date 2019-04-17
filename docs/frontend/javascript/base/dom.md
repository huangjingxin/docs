# dom

DOM 也就是元素节点，主要介绍 DOM 的属性和简单操作。

## 属性

一个 dom 节点，一般会有以下属性：

| 属性       | 释义                                                         | 例子        |
| ---------- | ------------------------------------------------------------ | ----------- |
| nodeName   | 标签名                                                       | p、div      |
| nodeValue  | 节点的值                                                     |             |
| nodeType   | [节点类型](http://www.w3school.com.cn/htmldom/dom_properties.asp) | 普通元素为1 |
| style      | 节点样式                                                     |             |
| parentNode | 父节点                                                       |             |
| innerHTML  | 内部元素                                                     |             |
| innerText  | 内部文本                                                     |             |

## 假设

HTML 部分。

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

JavaScript 部分。

```js
let colorList = document.querySelector('ul');
let colors = document.querySelectorAll('li');
    
function add() {
    let orange = document.createElement('li');
    let text = document.createTextNode('orange')
    orange.appendChild(text);
    colorList.appendClild(orange);  //插入到末尾
    colorList.insertBefore(orange,colors[2]); //插入在指定位置
}
```

## 操作

```js
// 查询
documen

// 增加

// 修改

// 删除

// 


colorList.removeChild(orange)
```

