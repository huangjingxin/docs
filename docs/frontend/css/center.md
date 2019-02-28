# 居中

很常见的CSS布局，分垂直居中、水平居中。

## translate实现绝对定位居中

```css
.element {
    width: 600px; height: 400px;
    position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
}
```

## margin:auto实现绝对定位居中

```css
.element {
    width: 600px; height: 400px;
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;    /* 有了这个就自动居中了 */
}
```

## flex实现流式居中

```css
.element { 
    display:flex;
    justify-content: center;
    align-items: center
}
```

