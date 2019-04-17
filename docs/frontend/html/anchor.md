## 页面添加锚点

三种方式实现，前两种用 a 标签，第三种用 JavaScript。

## a标签的name实现

```html
<a href="#here">你在哪里</a>

<a name="here">在这里</a>
```

## 其它标签的id实现

```html
<a href="#here">你在哪里</a>

<div id="here">在这里</div>
```

## javascript实现

```html
<div onclick="javascript:document.getElementById('here').scrollIntoView()">你在哪里</a>

<div id="here">我在这里</div>
```

