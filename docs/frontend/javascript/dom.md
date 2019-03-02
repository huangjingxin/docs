# dom

DOM 也就是元素节点，主要介绍 DOM 的属性和一些操作。

## 属性

假设有一个名字为 dom 的节点，下面列举一下它有那些属性。

`nodeName`  标签的名字
`nodeValue`  节点类型 一般返回1，即元素节点
`style`     每个元素都有一个style属性 他们也都是一个对象

控制台查看：`dom+名字`

`dom.parentNode` 获取父节点

`dom.innerHTML`  获取节点元素

`dom.innerText`  获取节点文本

## 操作

假定的 HTML 部分。

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
let colorList = document.getElementsByTagName('ul')[0];
let colors = document.getElementsByTagName('li');
    
function add() {
    let orange = document.createElement('li');
    let text = document.createTextNode('orange')
    orange.appendChild(text);
    colorList.appendClild(orange);  //插入到末尾
    colorList.insertBefore(orange,colors[2]); //插入在指定位置
}
```

删除 DOM。

```js
colorList.removeChild(orange)
```

