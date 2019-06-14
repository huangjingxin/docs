# 自定义滚动条

> 原生 css3 的特性，简单 实用 好看。

## 新特性

```
1、::-webkit-scrollbar   滚动条整体样式；
2、::-webkit-scrollbar-thumb  滑块部分；
3、::-webkit-scrollbar-track  轨道部分；
```

## 代码

```html
<div class="outer">
    <div class="inner"></div>
</div>

<style>
.inner::-webkit-scrollbar {
    width: 6px;
    height: 1px;
}

.inner::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #63B3ED;
}

.inner::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
    border-radius: 10px;
    background: #e3e3e3;
}
    
.outer{
    padding: .25rem .1rem .25rem 0;
    border: 1px solid #f2f2f2
    background-color: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>
```

**说明：** `inner` 不做边框和阴影，交给 `outer` 来做，这样效果更加美观。

## 优势

自定义滚动条，不触发全局滚动（聚焦时）。