# 居中

很常见的 CSS 布局，分垂直居中、水平居中。

## 水平居中

```css
body { text-align:center; }
#test { display:inline-block;text-align:left; }
```

## 垂直居中

```css
#test{height:25px;line-height:25px;}
```

## 全部居中

### flex 实现流式居中

```css
/* 这种是最常用的，只需要在父元素上面设置一下即可，没有副作用 */
.element { 
    display:flex;
    justify-content: center;
    align-items: center
}
```

### translate 实现绝对定位居中

```css
.element {
    width: 600px; height: 400px;
    position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
}
```

### margin:auto 实现绝对定位居中

```css
.element {
    width: 600px; height: 400px;
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;    /* 有了这个就自动居中了 */
}
```

