# 轮播图

js实现轮播图

## 结构

五张图，五个点，两个按钮（上一张，下一张）

## 原理

index 作为图片和点的索引，0-4 共五个值。

两个按钮点击时，通过改变 dom[index] 的 class 来制作效果。

五个点绑定 onclick 事件，点击即重置所有样式，然后修改 index 为当前点的索引，改变 index 的 class。

