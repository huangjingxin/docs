# jquery

虽然 jquery 快退出历史舞台了，但是很多老代码充斥着它。总之一句话，你可以不用，但是得会。

## 文档就绪事件

原生写法 Document.ready(function(){});

jquery 写法：$(document).ready(function(){});

jquery 简写：$(function(){});

## 选择器

jquery 的精髓就在于此。

```js
// 元素选择器
$("p")

// #id 选择器
$("#test")

// .class 选择器
$(".test")

// 选取带有 href 属性的元素
$("[href]")

// this 选择器
$(this)

// 其它选择器
$("span").parent();
$("span").parents();
$("span").parents("ul");
$("span").parentsUntil("div");

$("div").children();
$("div").children("p.1");
$("div").find("span");
$("div").find("*");

$("h2").siblings();
$("h2").siblings("p");
$("h2").next();
$("h2").nextAll();
$("h2").nextUntil("h6");
// jQuery prev(), prevAll() & prevUntil() 方法与上类似

$("div p").first();
$("div p").last();
$("p").eq(1);
$("p").filter(".url");
$("p").not(".url");
```

## 事件

```js
// 点击事件
$('#id').click(function(){})
```



