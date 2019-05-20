# 旋转动画

> 用 CSS 制作简单的旋转效果，兼容性好。

## 效果

![spin](./image/spin.gif)

## 代码

### html

```html
<img src="./SVG/home.png" height="128" width="128" id="loading"/>
```

### css

```css
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

#loading {
  position: absolute;
  top: 30px;
  left: 20px;
  animation: rotation 1.5s linear infinite;
}
```

