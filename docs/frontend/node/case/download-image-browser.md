# 批量下载图片

> 最近抄袭别人的网址导航，需要大量图片，作为程序员，我们不可能一个一个地去点击。

## 思路

网页上的下载都是通过 a 标签的 download 属性。使用 js 获取图片的 src，通过 src 制作可供下载的 a 标签，然后用 click 事件触发。

## 代码

### 目标网站直接下载

```js
document.querySelectorAll('img').forEach((e, index) => {
    let a = document.createElement('a');
    a.href = e.src;
    a.download = index;
    document.body.append(a);
    setTimeout(()=>{a.click();},index*100)
})
```

### 使用图传或者外链

```js
// 将下面代码在源网站运行，然后放到外链网站粘贴运行

let arr = [];
document.querySelectorAll('img').forEach(e => {
    arr.push(e.src)
})
console.log('总共有图片 '+arr.length+ ' 张');
copy(JSON.stringify(arr) +`.forEach((e, index) => {
    let a = document.createElement('a');
    a.href = e;
    a.download = index+1;
    document.body.append(a);
    setTimeout(()=>{a.click();},index*100)
})`)
```

## 问题

要知道，无论做什么事情，都会遇到问题。在资源匮乏的时候，能解决问题的人，才是关键。

1. 为支持直接下载，请为浏览器设置好默认下载路径；
2. a 标签遵循同源策略，如果文件是外链，它会先跳转到目的链接；
3. Cent Browser 只能同时下载 10 个文件，所以上面用 setTimeout 来错开时间。