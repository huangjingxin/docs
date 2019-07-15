# 常用类

> Tailwind CSS 用起来太臃肿，它的思想倒是很好用。

我常用的 CSS 基础类，下面所有内容的总结。

## flex

flex 是最常用的布局手段，常用来居中元素，可单独提取出来。

```css
.flex {
    display: flex;
}

.flex-row {
    flex-direction: row;
}

.flex-col {
    flex-direction: column;
}

.flex-wrap {
    flex-wrap: wrap;
}

.flex-no-wrap {
    flex-wrap: nowrap;
}

.items-center {
    align-items: center;
}

.self-start {
    align-self: flex-start;
}

.self-end {
    align-self: flex-end;
}

.self-center {
    align-self: center;
}

.justify-center {
    justify-content: center;
}

.justify-between {
    justify-content: space-between;
}

.justify-around {
    justify-content: space-around;
}

.content-center {
    align-content: center;
}

.content-start {
    align-content: flex-start;
}

.content-end {
    align-content: flex-end;
}

.content-between {
    align-content: space-between;
}

.content-around {
    align-content: space-around;
}

.flex-1 {
    flex: 1 1 0%;
}

.flex-auto {
    flex: 1 1 auto;
}
```

## position

常用 position 也分离出来，代码能少一点是一点。

```css
.fixed {
    position: fixed;
}

.absolute {
    position: absolute;
}

.relative {
    position: relative;
}
```

## display

显示 / 隐藏

```css
.hidden {
	display: none;
}

.block {
	display: block;
}
```

## hover / focus

hover / focus 的用法也极其简单。

```css
.hover\:text-teal:hover {
    color: teal;
}

.focus\:text-teal:focus {
    color: teal;
}
```

## media query

对应的尺寸（分界线）：

- 移动端优先，默认即是手机尺寸
- sm - 未知设备（640px）
- md - iPad mini（768px）
- lg - iPad Pro（1024px）
- xl - 电脑（1200px）

```css
@media (min-width: 640px) {
    .sm\:text-red {
        color: red;
    }
}

@media (min-width: 768px) {
    .md\:text-green {
        color: green;
    }
}

@media (min-width: 1024px) {
    .lg\:text-teal {
        color: gold;
    }
}

@media (min-width: 1200px) {
    .xl\:text-yellow {
        color: blue;
    }
}
```

【个人观点】我觉得可以不考虑平板这种设备，主要是它涉及到 横屏 / 竖屏 的问题，很复杂。

只考虑两种尺寸，以一个尺寸为分界线，超过的都当作电脑处理：

```css
@media (min-width: 640px) {
    .pc\:flex-col {
        flex-direction: column;
    }
}
```

## border / round

```css
/* gray： #cbd5e0 》 #a0aec0 》 #718096 */
/* blue： #4299e1; */

.border {
    border: 1px solid #718096;
}

.border-t {
    border-top: 1px solid #a0aec0;
}

.rounded-none {
    border-radius: 0;
}

.rounded-sm {
    border-radius: 0.125rem;
}

.rounded {
    border-radius: 0.25rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.rounded-full {
    border-radius: 9999px;
}
```

## outline / shadow

```css
.shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.outline-none {
    outline: 0;
}
```

## color

我常用的颜色，可以直接使用

```
// 灰色
#CBD5E0 tailwind 400
#A0AEC0 tailwind 500

// 绿色
#85DA46 微信绿

// 红色
#ec191b 网易红

// 蓝色
#3182ce tailwind 600
```

## 注意事项

不建议使用 `.pc\:border` 用法，推荐使用 `.pc-border` 方式。

- 部分浏览器不支持，例如 Cent Browser
- 微信小程序不支持