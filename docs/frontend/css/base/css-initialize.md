# css常用设置

有些设置总是忘记，我觉得有必要记录下来。

## 重置样式

```css
body, html, ul, li, h1, h2, h3, table, tr, th, td {
  font-family: "Microsoft YaHei"
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

button {
  font-family: "Microsoft YaHei";
  background-color: transparent;
  color: inherit;
  outline: none;
  border: none;
}

input {
  outline: none;
}
```

## 超出文本省略

```css
text {
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}
```

## input缩进与光标颜色

```css

input {
  text-indent: 12px;
  caret-color: #43BE87;
}
```

## border-box

```css
div {
    box-sizing: border-box;
}
```

## 平滑滚动

```css
html, body { scroll-behavior:smooth; }
```

