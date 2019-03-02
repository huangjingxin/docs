# CSSOM视图模式api

对于元素，我们时常容易混淆的几个 api。基本都是兼容到 IE9。

## Window视图属性

浏览器窗口的属性

| 名称        | 作用                       | 名称        | 作用 |
| ----------- | -------------------------- | ----------- | ---- |
| innerWidth  | 窗体的内部宽度             | innerHeight |      |
| outerWidth  | 窗口的外部高度             | outerHeight |      |
| pageXOffset | 页面可滚动区域的高度       | pageYOffset |      |
| screenX     | 浏览器窗口在显示器中的位置 | screenY     |      |

控制台查看：`window.innerWidth`

## Screen视图属性

显示器的属性

| 名称       | 作用             | 名称        | 作用               |
| ---------- | ---------------- | ----------- | ------------------ |
| availWidth | 显示器可用宽度   | availHeight |                    |
| width      | 显示器宽度       | height      |                    |
| colorDepth | 显示器的颜色深度 | pixelDepth  | 与 colorDepth 相同 |

控制台查看：`screen.availWidth`

## 文档、元素视图

四个方法

| 名称                    | 作用                           |
| ----------------------- | ------------------------------ |
| elementFromPoint()      | 返回给定坐标处所在的元素       |
| getClientRects()        | 返回**内联元素**的数个矩形区域 |
| getBoundingClientRect() | 坐标偏移集合（对象）           |
| scrollIntoView()        | 让元素滚动到可视区域           |

控制台查看：`element.availWidth.getBoundingClientRect()`

## 元素视图属性

重中之重，本文重点。

| 名称         | 作用 | 名称         | 作用 |
| ------------ | ---- | ------------ | ---- |
| clientWidth  |      | clientHeight |      |
| clientTop    |      | clientLeft   |      |
| offsetWidth  |      | offsetHeight |      |
| offsetLeft   |      | offsetTop    |      |
| scrollWidth  |      | scrollHeight |      |
| scrollTop    |      | scrollLeft   |      |
| offsetParent |      |              |      |

控制台查看：`element.clientWidth`

## 鼠标位置

| 名称    | 作用 | 名称    | 作用 |
| ------- | ---- | ------- | ---- |
| clientX |      | clientY |      |
| offsetX |      | offsetY |      |
| pageX   |      | pageY   |      |
| screenX |      | screenY |      |
| x       |      | y       |      |

控制台查看：`event.clientX`



:::: warning 参考链接

[CSSOM视图模式(CSSOM View Module)相关整理--张鑫旭](https://www.zhangxinxu.com/wordpress/2011/09/cssom视图模式cssom-view-module相关整理与介绍/)

:::